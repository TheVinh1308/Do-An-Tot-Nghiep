import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/CSS/Pay.css";
import { ShopContext } from "../Context/ShopContext";
import { jwtDecode } from "jwt-decode";

const libraries = ["places"];

const Pay = () => {
    const navigate = useNavigate();
    const { cartItems, totalItemPrice, phone } = useContext(ShopContext);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
    const [userDetails, setUserDetails] = useState({ userId: null, userName: "", isAuthenticated: false });
    const [invoice, setInvoice] = useState({});
    const [selectedPosition, setSelectedPosition] = useState(null);
    const searchBoxRef = useRef(null);
    const [phoneSelect, setPhoneSelect] = useState(null);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const responses = await Promise.all(
                    cartItems.map(element => axios.get(`https://localhost:7258/api/Carts/${element}`))
                );
                setCart(responses.map(res => res.data));
            } catch (error) {
                console.error('Error fetching carts:', error);
                setError(error);
            }
        };
        fetchCarts();
    }, [cartItems]);

    useEffect(() => {
        const fetchPhone = async () => {
            try {
                const response = await axios.get(`https://localhost:7258/api/Phones/${phone}`);
                setPhoneSelect(response.data);
            } catch (error) {
                console.error('Error fetching phone:', error);
            }
        };
        fetchPhone();
    }, [phone]);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserDetails({
                userId: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                userName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"],
                isAuthenticated: true
            });
        }
    }, []);

    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prev => ({ ...prev, [name]: value }));
    };

    const AfterPay = (cartID) => {
        navigate(`/afterPay/${cartID}`);
    };

    const handlePay = async (e) => {
        e.preventDefault();
        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));
        formInvoice.append('userId', userDetails.userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 1);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 1);

        try {
            const res = await axios.post(`https://localhost:7258/api/Invoices`, formInvoice);
            const invoiceId = res.data.id;

            const formNotificationAdmin = new FormData();
            formNotificationAdmin.append("invoiceId", invoiceId);
            formNotificationAdmin.append("content", `${userDetails.userName} đã đặt một đơn hàng`);
            formNotificationAdmin.append("time", new Date().toISOString());
            formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${invoiceId}`);
            formNotificationAdmin.append("status", true);

            axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin)
                .then((res) => {
                    alert("Thâm thông báo");
                })

            if (cart.length > 0) {
                await Promise.all(cart.map(async (item) => {
                    const formInvoiceDetail = new FormData();
                    formInvoiceDetail.append("invoiceId", invoiceId);
                    formInvoiceDetail.append("phoneId", item.phone.id);
                    formInvoiceDetail.append("quantity", item.quantity);
                    formInvoiceDetail.append("price", item.phone.price);
                    await axios.post(`https://localhost:7258/api/InvoiceDetails`, formInvoiceDetail);




                    const productResponse = await axios.get(`https://localhost:7258/api/Phones/${item.phone.id}`);
                    const product = productResponse.data;
                    const updatedStock = product.stock - item.quantity;
                    const formUp = {
                        ...product,
                        stock: updatedStock,
                    };
                    await axios.put(`https://localhost:7258/api/Phones/${item.phone.id}`, formUp, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    });
                }));
            } else if (phoneSelect) {
                const formBuyNow = new FormData();
                formBuyNow.append("invoiceId", invoiceId);
                formBuyNow.append("phoneId", phoneSelect.id);
                formBuyNow.append("quantity", 1);
                formBuyNow.append("price", phoneSelect.price);
                await axios.post(`https://localhost:7258/api/InvoiceDetails`, formBuyNow);
            }

            await Promise.all(cartItems.map(element => axios.delete(`https://localhost:7258/api/Carts/${element}`)));

            alert("Payment successful!");
            setCart([]);
            AfterPay(invoiceId);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <>
            <Navbar />
            <main role="main">
                <div className="container">
                    <form className="needs-validation" onSubmit={handlePay}>
                        <div className="pb-5 text-center">
                            <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
                            <h2>Thanh toán</h2>
                            <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
                        </div>
                        <div className="row pay-content">
                            <div className="col-md-5 order-md-2 mb-4">
                                <h4 className="">Giỏ hàng</h4>
                                <ul className="list-group mb-3">
                                    {cart.length > 0 ? (
                                        cart.map((item, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                                <div>
                                                    <h6 className="my-0">{item.phone.name}</h6>
                                                    <small className="text-muted">{item.phone.price} x {item.quantity}</small>
                                                </div>
                                                <span className="text-muted">{item.phone.price}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{phoneSelect?.name}</h6>
                                                <small className="text-muted">{phoneSelect?.price} x {1}</small>
                                            </div>
                                            <span className="text-muted">{phoneSelect?.price}</span>
                                        </li>
                                    )}
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
                                        <input type="text" className="form-control" name="kh_ten" id="kh_ten" value={userDetails.userName} readOnly />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_gioitinh">Giới tính</label>
                                        <input type="text" className="form-control" name="kh_gioitinh" id="kh_gioitinh" defaultValue="Nam" />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_diachi">Địa chỉ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="shippingAddress"
                                            id="kh_diachi"
                                            required
                                            placeholder="Nhập địa chỉ"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_dienthoai">Điện thoại</label>
                                        <input type="text" onChange={handleChange} className="form-control" name="shippingPhone" id="kh_dienthoai" required placeholder="Nhập số điện thoại" />
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
