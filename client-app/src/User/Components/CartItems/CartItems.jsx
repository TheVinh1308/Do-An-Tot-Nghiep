import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Select } from "@mui/material";
import "./CartItems.css";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const CartItems = () => {
    // User information
    const [userId, setUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [carts, setCarts] = useState([]);
    const [amountPhone, setAmountPhone] = useState({});
    const [totalAllItem, setTotalAllItem] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalForSelectedItems, setTotalForSelectedItems] = useState(0);
    const [checkAll, setCheckAll] = useState(false);

    // Toast notifications
    const notifySuccess = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        transition: Bounce,
    });

    // Decode token and set user information
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setIsAuthenticated(true);
        }
    }, []);

    // Fetch cart items based on userId
    useEffect(() => {
        if (userId) {
            axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
                .then((res) => setCarts(res.data))
                .catch((error) => console.error('Error fetching carts:', error));
        }
    }, [userId]);

    // Calculate total price for all items in the cart
    useEffect(() => {
        const newTotal = carts.reduce((acc, item) => acc + (item.quantity * item.phone.price), 0);
        setTotalAllItem(newTotal);
    }, [carts]);

    // Calculate total price for selected items
    useEffect(() => {
        const selectedPhones = carts.filter(item => selectedItems.includes(item.phoneId));
        const newTotal = selectedPhones.reduce((acc, item) => acc + (item.quantity * item.phone.price), 0);
        setTotalForSelectedItems(newTotal);
    }, [carts, selectedItems]);

    // Handle adding item quantity
    const handleQuantityChange = async (phoneId, change) => {
        try {
            const phoneResponse = await axios.get(`https://localhost:7258/api/Phones/${phoneId}`);
            const phoneData = phoneResponse.data;
            const cartItem = carts.find(item => item.phoneId === phoneId);
            const newQuantity = cartItem.quantity + change;

            if (newQuantity < 1 || newQuantity > phoneData.stock) {
                notifyError("Số lượng trong kho không đủ!");
                return;
            }

            const updatedItem = { ...cartItem, quantity: newQuantity };
            await axios.put(`https://localhost:7258/api/Carts/${cartItem.id}`, updatedItem, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            notifySuccess("Thành công!");
            const historyData = new FormData();
            historyData.append("action", "Cập nhật số lượng sản phẩm trong giỏ hàng");
            historyData.append("userId", userId);
            historyData.append("time", new Date().toISOString());
            historyData.append("productId", cartItem.phoneId);
            historyData.append("productName", cartItem.phone.name);
            historyData.append("operation", "Cập nhật");
            historyData.append("amount", change);

            await axios.post(`https://localhost:7258/api/History`, historyData);
            setCarts(prevCarts => prevCarts.map(item => item.phoneId === phoneId ? { ...item, quantity: newQuantity } : item));
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };

    // Handle deleting an item from the cart
    const handleDelete = async (cartId) => {
        try {
            await axios.delete(`https://localhost:7258/api/Carts/${cartId}`);
            setCarts(prevCarts => prevCarts.filter(item => item.id !== cartId));
            notifySuccess("Xóa sản phẩm thành công!");

            const cartItem = carts.find(item => item.id === cartId);
            const historyData = new FormData();
            historyData.append("action", "Xoá sản phẩm trong giỏ hàng");
            historyData.append("userId", userId);
            historyData.append("time", new Date().toISOString());
            historyData.append("productId", cartItem.phoneId);
            historyData.append("productName", cartItem.phone.name);
            historyData.append("operation", "Xoá");
            historyData.append("amount", cartItem.quantity);

            await axios.post(`https://localhost:7258/api/History`, historyData);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    // Handle select all items
    const handleCheckAll = () => {
        if (checkAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(carts.map(item => item.phoneId));
        }
        setCheckAll(!checkAll);
    };

    // Handle checkbox change for individual items
    const handleCheckboxChange = (phoneId) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(phoneId)) {
                return prevSelectedItems.filter(id => id !== phoneId);
            } else {
                return [...prevSelectedItems, phoneId];
            }
        });
    };

    return (
        <>
            <div className="cart-total">
                <h1>Tổng giá trị giỏ hàng của bạn là {totalAllItem.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h1>
                <p>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
                <Button onClick={handleCheckAll}>
                    {checkAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                </Button>
            </div>
            <hr />
            <ToastContainer />
            <div className="content">
                <div className="cart-items">
                    {carts.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <Row>
                                <Col md={1} className="cart-item-check">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(item.phoneId)}
                                        checked={selectedItems.includes(item.phoneId)}
                                    />
                                </Col>
                                <Col md={3} className="cart-item-img">
                                    <img src={`https://localhost:7258/images/products/${item.phone.modPhone.image}`} alt="" />
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={8}>
                                            <h3>{item.phone.name}</h3>
                                        </Col>
                                        <Col md={4}>
                                            <div className="change-quantity">
                                                <button className="btn-minus" onClick={() => handleQuantityChange(item.phoneId, -1)}>
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <input className="btn-value" min="1" name="quantity" value={item.quantity} type="text" readOnly />
                                                <button className="btn-plus" onClick={() => handleQuantityChange(item.phoneId, 1)}>
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p>Thanh toán phí dịch vụ 1.67% trong 24 tháng sau khi thanh toán lần đầu 20% là 4.600.000đ.</p>
                                    <hr />
                                    <Button className="btn-color">Màu sắc: {item.phone.color}</Button>
                                    <Button className="btn-rom">Dung lượng: {item.phone.rom}GB</Button>
                                    <Button className="btn-trash" onClick={() => handleDelete(item.id)}><i className="bi bi-trash2"></i></Button>
                                </Col>
                                <Col md={2}>
                                    <h3>{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h3>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    ))}
                </div>
                <div id="pay" className="cart-pay">
                    <hr />
                    <Row>
                        <Col md={3}></Col>
                        <Col md={9}>
                            <Row>
                                <Col>
                                    <h3>Tổng phụ</h3>
                                </Col>
                                <Col className="col-right">
                                    <h3>{totalForSelectedItems.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Vận chuyển</h5>
                                </Col>
                                <Col className="col-right">
                                    <h5>miễn phí</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <h2>Tổng đơn hàng</h2>
                                </Col>
                                <Col className="col-right">
                                    <h2>{totalForSelectedItems.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Phương thức thanh toán</Col>
                                <Col className="col-right">
                                    <Select className="select" defaultValue="Tiền mặt">
                                        <option value="Tiền mặt">Tiền mặt</option>
                                        <option value="MoMO">MoMO</option>
                                        <option value="VNPay">VNPay</option>
                                    </Select>
                                </Col>
                            </Row>
                            <Button className="btn-pay">Thanh toán</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default CartItems;
