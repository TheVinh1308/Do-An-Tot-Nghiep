import Navbar from "../Components/Navbar/Navbar";
import "../Pages/CSS/Pay.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";
import { jwtDecode } from "jwt-decode";

const Pay = () => {
    const { cartItems, totalItemPrice } = useContext(ShopContext); // Use useContext
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null); // State for error handling
    const [userId, setUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const responses = await Promise.all(
                    cartItems.map(element => axios.get(`https://localhost:7258/api/Carts/${element}`))
                );
                const allPhones = responses.map(res => res.data);
                setCart(allPhones);
            } catch (error) {
                console.error('Error fetching carts:', error);
                setError(error);
            }
        };
        fetchCarts();
    }, [cartItems]);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setIsAuthenticated(true);
        }
    }, []);

    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prev => ({ ...prev, [name]: value }));
    };

    const handlePay = async (e) => {
        e.preventDefault();
        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));

        formInvoice.append('userId', userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 1);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 1);

        try {
            axios.post(`https://localhost:7258/api/Invoices`, formInvoice).then((res) => {
                const invoiceId = res.data.id;
                console.log(`invoiceId`, invoiceId);
                Promise.all(cart.map(item => {
                    const formInvoiceDetail = new FormData();
                    formInvoiceDetail.append("invoiceId", invoiceId);
                    formInvoiceDetail.append("phoneId", item.phone.id);
                    formInvoiceDetail.append("quantity", item.quantity);
                    formInvoiceDetail.append("price", item.phone.price);
                    return axios.post(`https://localhost:7258/api/InvoiceDetails`, formInvoiceDetail);
                }));
            })

            alert("Payment successful!");
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <>
            <Navbar />
            <main role="main">
                <div className="container">
                    <form className="needs-validation" name="frmthanhtoan" method="post" action="#" onSubmit={handlePay}>
                        <div className="pb-5 text-center">
                            <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
                            <h2>Thanh toán</h2>
                            <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
                        </div>
                        <div className="row pay-content">
                            <div className="col-md-5 order-md-2 mb-4">
                                <h4 className="">Giỏ hàng</h4>
                                <ul className="list-group mb-3">
                                    {cart.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{item.phone.name}</h6>
                                                <small className="text-muted">{item.phone.price} x {item.quantity}</small>
                                            </div>
                                            <span className="text-muted">{item.phone.price}</span>
                                        </li>
                                    ))}
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Tổng thành tiền</span>
                                        <strong>{totalItemPrice}</strong>
                                    </li>
                                </ul>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Mã khuyến mãi" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-secondary">Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <h4 className="mb-3">Thông tin khách hàng</h4>
                                <div className="row">
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_ten">Họ tên</label>
                                        <input type="text" className="form-control" name="kh_ten" id="kh_ten" value={userName} readOnly />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_gioitinh">Giới tính</label>
                                        <input type="text" className="form-control" name="kh_gioitinh" id="kh_gioitinh" defaultValue="Nam" />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_diachi">Địa chỉ</label>
                                        <input onChange={handleChange} type="text" className="form-control" name="shippingAddress" id="kh_diachi" required />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_dienthoai">Điện thoại</label>
                                        <input type="text" onChange={handleChange} className="form-control" name="shippingPhone" id="kh_dienthoai" required />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_email">Email</label>
                                        <input type="text" className="form-control" name="kh_email" id="kh_email" readOnly />
                                    </div>
                                </div>
                                <hr />
                                <h4 className="mb-3">Hình thức thanh toán</h4>
                                <div className="my-3 pttt">
                                    <div className="custom-control custom-radio">
                                        <input id="httt-1" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={1} />
                                        <label className="custom-control-label" htmlFor="httt-1">Tiền mặt</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="httt-2" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={2} />
                                        <label className="custom-control-label" htmlFor="httt-2">Chuyển khoản</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="httt-3" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={3} />
                                        <label className="custom-control-label" htmlFor="httt-3">Ship COD</label>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit" name="btnDatHang">Đặt hàng</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Pay;
