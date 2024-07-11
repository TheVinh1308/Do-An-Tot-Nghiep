import { useEffect, useState, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Select } from "@mui/material";
import "./CartItems.css";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext"; // Ensure the path is correct
import { jwtDecode } from "jwt-decode";

const CartItems = () => {
    const [userId, setUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [carts, setCarts] = useState([]);
    const [totalAllItem, setTotalAllItem] = useState(0);
    const [checkAll, setCheckAll] = useState(false);

    const navigate = useNavigate();
    const { cartItems, setCartItems, totalItemPrice, setTotalItemPrice } = useContext(ShopContext); // Use useContext
    console.log(`caetItem`, cartItems);
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

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
                .then((res) => {
                    setCarts(res.data);
                })
                .catch((error) => console.error('Error fetching carts:', error));
        }
    }, [userId]);

    useEffect(() => {
        const newTotal = carts.reduce((acc, item) => acc + (item.quantity * (item.phone.price - (item.phone.price * item.phone.modPhone.promotion.discountPercent / 100))), 0);
        setTotalAllItem(newTotal);
    }, [carts]);

    useEffect(() => {
        const selectedPhones = carts.filter(item => cartItems.includes(item.id));
        const newTotal = selectedPhones.reduce((acc, item) => acc + (item.quantity * (item.phone.price - (item.phone.price * item.phone.modPhone.promotion.discountPercent / 100))), 0);
        setTotalItemPrice(newTotal);
    }, [carts, cartItems, setTotalItemPrice]);

    const handleQuantityChange = async (cartId, change) => {
        try {
            const cartItem = carts.find(item => item.id === cartId);
            const phoneResponse = await axios.get(`https://localhost:7258/api/Phones/${cartItem.phoneId}`);
            const phoneData = phoneResponse.data;
            const newQuantity = cartItem.quantity + change;

            if (newQuantity < 1) {
                notifyError("Số lượng không thể ít hơn 1!");
                return;
            }

            if (newQuantity > phoneData.stock) {
                // notifyError("Số lượng vượt quá số lượng trong kho!");
                const updatedItem = { ...cartItem, quantity: phoneData.stock };
                await axios.put(`https://localhost:7258/api/Carts/${cartItem.id}`, updatedItem, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // notifySuccess("Số lượng sản phẩm đã được cập nhật!");
                const historyData = new FormData();
                historyData.append("action", "Cập nhật số lượng sản phẩm trong giỏ hàng");
                historyData.append("userId", userId);
                historyData.append("time", new Date().toISOString());
                historyData.append("productId", cartItem.phoneId);
                historyData.append("productName", cartItem.phone.name);
                historyData.append("operation", "Cập nhật");
                historyData.append("amount", phoneData.stock - cartItem.quantity);

                await axios.post(`https://localhost:7258/api/History`, historyData);
                setCarts(prevCarts => prevCarts.map(item => item.id === cartId ? { ...item, quantity: phoneData.stock } : item));
            } else {
                const updatedItem = { ...cartItem, quantity: newQuantity };
                await axios.put(`https://localhost:7258/api/Carts/${cartItem.id}`, updatedItem, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                notifySuccess("Số lượng sản phẩm đã được cập nhật!");
                const historyData = new FormData();
                historyData.append("action", "Cập nhật số lượng sản phẩm trong giỏ hàng");
                historyData.append("userId", userId);
                historyData.append("time", new Date().toISOString());
                historyData.append("productId", cartItem.phoneId);
                historyData.append("productName", cartItem.phone.name);
                historyData.append("operation", "Cập nhật");
                historyData.append("amount", change);

                await axios.post(`https://localhost:7258/api/History`, historyData);
                setCarts(prevCarts => prevCarts.map(item => item.id === cartId ? { ...item, quantity: newQuantity } : item));
            }
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };


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

    const handleCheckAll = () => {
        if (checkAll) {
            setCartItems([]);
        } else {
            setCartItems(carts.map(item => item.id));
        }
        setCheckAll(!checkAll);
    };

    const handleCheckboxChange = (cartId) => {
        setCartItems(prevSelectedItems => {
            if (prevSelectedItems.includes(cartId)) {
                return prevSelectedItems.filter(id => id !== cartId);
            } else {
                return [...prevSelectedItems, cartId];
            }
        });
    };

    const handleToPay = () => {
        if (totalItemPrice === 0) {
            notifyError("Vui lòng chọn ít nhất một sản phẩm");
        } else {
            navigate("/pay");
        }
    };

    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images`).then((res) => setImages(res.data))
            .catch((err) => console.log("Loi lay du lieu: ", err))
    }, [])

    return (
        <>
            {
                carts.length == 0 ? "" : <> <div className="cart-total">
                    <h1>Tổng giá trị giỏ hàng của bạn là {totalAllItem.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h1>
                    <p>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
                    <Button onClick={handleCheckAll}>
                        {checkAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                    </Button>
                </div>
                    <hr /></>
            }

            <ToastContainer />
            <div className="content">
                {
                    carts.length == 0 ? <div className="cart-empty">Giỏ hàng trống</div> :
                        <>

                            <div className="cart-items">

                                {
                                    carts.map((item, index) => (
                                        <div className="cart-item" key={index}>
                                            <Row>
                                                <Col md={1} className="cart-item-check">
                                                    {
                                                        item.phone.stock == 0 || item.quantity > item.phone.stock ? (
                                                            <>
                                                                <p>Sản phẩm hết hàng</p>
                                                            </>
                                                        ) : (
                                                            <input
                                                                type="checkbox"
                                                                onChange={() => handleCheckboxChange(item.id)}
                                                                checked={cartItems.includes(item.id)}
                                                            />
                                                        )
                                                    }
                                                </Col>
                                                <Col md={3} className="cart-item-img">
                                                    {
                                                        images.map((itemImage, imageIndex) => (
                                                            item.phoneId === itemImage.phoneId && (
                                                                <img src={`https://localhost:7258/images/products/${JSON.parse(itemImage.path)[0]}`} alt="" />
                                                            )
                                                        ))
                                                    }
                                                </Col>
                                                <Col md={6}>
                                                    <Row>
                                                        <Col md={8}>
                                                            <h3>{item.phone.name}</h3>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="change-quantity">
                                                                <button className="btn-minus" onClick={() => handleQuantityChange(item.id, -1)}>
                                                                    <i className="bi bi-dash"></i>
                                                                </button>
                                                                <input className="btn-value" min="1" name="quantity" value={item.quantity} type="text" readOnly />
                                                                <button className="btn-plus" onClick={() => handleQuantityChange(item.id, 1)}>
                                                                    <i className="bi bi-plus"></i>
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <hr />
                                                    <span className="" style={{ marginRight: 30 }}>Màu sắc: {item.phone.color}</span>
                                                    <span className="">Dung lượng: {item.phone.rom}GB</span>
                                                    <Button className="btn-trash bg-danger" onClick={() => handleDelete(item.id)}><i className="bi bi-trash2"></i></Button>
                                                </Col>
                                                <Col md={2}>
                                                    <h3>{(item.phone.price - (item.phone.price * item.phone.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h3>
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
                                        {/* <Row>
                                <Col>
                                    <h3>Tổng phụ</h3>
                                </Col>
                                <Col className="col-right">
                                    <h3>{totalItemPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h3>
                                </Col>
                            </Row> */}
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
                                                <h2>{(totalItemPrice).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h2>
                                            </Col>
                                        </Row>

                                        <Button className="btn-pay" onClick={handleToPay}>Thanh toán</Button>
                                    </Col>
                                </Row>
                            </div>
                        </>
                }


            </div>
        </>
    );
};

export default CartItems;
