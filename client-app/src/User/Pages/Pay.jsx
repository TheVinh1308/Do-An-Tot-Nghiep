import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/CSS/Pay.css";
import { ShopContext } from "../Context/ShopContext";
import { jwtDecode } from "jwt-decode";
import { set } from "date-fns";

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
    const [loadCart, setloadCart] = useState(false);
    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const responses = await Promise.all(
                    cartItems.map(element => axios.get(`https://localhost:7258/api/Carts/${element}`))
                );
                setCart(responses.map(res => res.data));
                setloadCart(true)
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
    console.log(`phoneSelect`, phoneSelect);
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

    const [formData, setFormData] = useState({
        shippingAddress: '',
        shippingPhone: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prev => ({ ...prev, [name]: value }));
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                formBuyNow.append("price", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));
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

    const handleVnPay = async (e) => {
        e.preventDefault();
        const dataVnPay = {
            "userId": userDetails.userId,
            "orderType": "phone",
            "amount": (totalItemPrice / 10),
            "orderDescription": userDetails.userId + "thanh toán hóa đơn 2VPHONE",
            "name": userDetails.userName
        };

        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));
        formInvoice.append('userId', userDetails.userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 2);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 5);

        try {
            localStorage.setItem("shippingAddress", formData.shippingAddress,)
            localStorage.setItem("shippingPhone", formData.shippingPhone,)
            // Gửi yêu cầu tạo thanh toán và nhận URL từ phản hồi
            const resVnPay = await axios.post(`https://localhost:7258/api/VnPay`, dataVnPay);
            const paymentUrl = resVnPay.data;

            // tạo hóa đơn
            const res = await axios.post(`https://localhost:7258/api/Invoices`, formInvoice);
            const invoiceId = res.data.id;
            localStorage.setItem("invoiceId", invoiceId)
            localStorage.setItem("userId", userDetails.userId)

            const formNotificationAdmin = new FormData();
            formNotificationAdmin.append("invoiceId", invoiceId);
            formNotificationAdmin.append("content", `${userDetails.userName} đã đặt một đơn hàng`);
            formNotificationAdmin.append("time", new Date().toISOString());
            formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${invoiceId}`);
            formNotificationAdmin.append("status", true);

            axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin)
                .then((res) => {
                    console.log("đã thêm thông báo");
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

            // Chuyển hướng đến trang thanh toán
            window.location.href = paymentUrl;
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    // Sử dụng useEffect để xử lý khi callback về từ thanh toán thành công

    const [query, setQuery] = useState('');

    useEffect(() => {
        const queryString = window.location.search;
        setQuery(queryString);
        const urlParams = new URLSearchParams(queryString);
        const transactionStatus = urlParams.get('vnp_TransactionStatus');
        const invoice_Id = localStorage.getItem("invoiceId")
        let issuedDate = new Date();
issuedDate.setHours(issuedDate.getHours() + 7);
issuedDate = issuedDate.toISOString();
        if (transactionStatus === '00') {
            try {

                const invoiceEdit = {
                    id: invoice_Id,
                    shippingAddress: localStorage.getItem("shippingAddress"),
                    shippingPhone: localStorage.getItem("shippingPhone"),
                    code: urlParams.get('vnp_TxnRef'),
                    userId: localStorage.getItem("userId"),
                    issuedDate: issuedDate,
                    paymentMethodId: 2,
                    total: urlParams.get('vnp_Amount'),
                    status: 1
                }

                axios.put(`https://localhost:7258/api/Invoices/${invoice_Id}`, invoiceEdit)
                    .then(() => {
                        localStorage.removeItem("shippingAddress")
                        localStorage.removeItem("shippingPhone")
                        localStorage.removeItem("invoiceId")
                        localStorage.removeItem("userId")

                       
                        setCart([]);
                        AfterPay(invoice_Id);

                    })
                    .catch((err) => {
                        console.log("Lỗi edit invoice: ", err);
                    })
            }
            catch {
                console.log("Lỗi");
            }
        }

    }, [query]);

    // MOMO Payment
    const handleMomo = async (e) => {
        e.preventDefault();
        const dataMomo = new FormData();
        dataMomo.append("fullName", userDetails.userName);
        dataMomo.append("amount", Math.floor(totalItemPrice / 10000));

        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));
        formInvoice.append('userId', userDetails.userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 3);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 5);

        try {
            localStorage.setItem("shippingAddress", formData.shippingAddress,)
            localStorage.setItem("shippingPhone", formData.shippingPhone,)
            const resMomo = await axios.post(`https://localhost:7258/api/PaymentMethod/MoMo`, dataMomo);

            console.log('Momo API response:', resMomo);

            if (!resMomo.data.url) {
                throw new Error('Payment URL is null');
            }

            const paymentUrl = resMomo.data.url;
            console.log(`paymentUrl`, paymentUrl);

            // Create invoice
            const res = await axios.post(`https://localhost:7258/api/Invoices`, formInvoice);
            const invoiceId = res.data.id;
            localStorage.setItem("invoiceId", invoiceId);
            localStorage.setItem("userId", userDetails.userId);

            const formNotificationAdmin = new FormData();
            formNotificationAdmin.append("invoiceId", invoiceId);
            formNotificationAdmin.append("content", `${userDetails.userName} đã đặt một đơn hàng`);
            formNotificationAdmin.append("time", new Date().toISOString());
            formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${invoiceId}`);
            formNotificationAdmin.append("status", true);

            await axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin);
            console.log("đã thêm thông báo");

            // Handle cart items
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
                    await axios.put(`https://localhost:7258/api/Phones/${item.phone.id}`, formUp);
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

            // Redirect to payment page
            window.location.href = paymentUrl;
        } catch (error) {
            console.error('Error processing payment:', error.response ? error.response.data : error.message);
        }
    };

    const [queryMomo, setQueryMomo] = useState('');

    useEffect(() => {
        const queryString = window.location.search;
        setQueryMomo(queryString);

        const urlParams = new URLSearchParams(queryString);
        const errorCode = urlParams.get('errorCode');
        const partnerCode = urlParams.get('partnerCode');
        const orderId = urlParams.get('orderId');
        const amount = urlParams.get('amount');
        const date = urlParams.get('date');
        console.log(`errorCode`, errorCode);
        console.log(`orderId`, orderId);
        console.log(`amount`, amount);
        if (errorCode === '0') { // Successful payment
            const invoiceId = localStorage.getItem('invoiceId');

            if (invoiceId) {
                const invoiceEdit = {
                    id: invoiceId,
                    shippingAddress: localStorage.getItem('shippingAddress'),
                    shippingPhone: localStorage.getItem('shippingPhone'),
                    code: orderId,
                    userId: localStorage.getItem('userId'),
                    issuedDate: new Date().toISOString(),
                    paymentMethodId: 3, // Assuming Momo payment method ID
                    total: amount * 10000,
                    status: 1 // Paid status
                };

                axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, invoiceEdit)
                    .then(() => {
                        localStorage.removeItem('shippingAddress');
                        localStorage.removeItem('shippingPhone');
                        localStorage.removeItem('invoiceId');
                        localStorage.removeItem('userId');

                        alert('Payment successful!');
                        // Additional function call or state update after payment success
                        AfterPay(invoiceId);

                    })
                    .catch((error) => {
                        console.error('Error editing invoice:', error);
                    });
            } else {
                console.error('Missing invoiceId from localStorage.');
            }
        } else {
            console.error('Payment failed or canceled.');
            // Handle payment failure or cancellation
        }
    }, [queryMomo]);
    // lựa chon phương thức thanh toán
    const [pttt, setPttt] = useState(1);

    const handlePttt = (e) => {
        setPttt(e.target.value);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        switch (pttt) {
            case '1':
                handlePay(e);
                break;
            case '2':
                handleVnPay(e);
                break;
            default:
                handleMomo(e);
        }
    };
    return (
        <>
            <Navbar />
            <main role="main">
                <div className="container">
                    <form className="needs-validation" >
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
                                            value={formData.shippingAddress || localStorage.getItem('shippingAddress')}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_dienthoai">Điện thoại</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="shippingPhone"
                                            id="kh_dienthoai"
                                            required
                                            placeholder="Nhập số điện thoại"
                                            value={formData.shippingPhone || localStorage.getItem('shippingPhone')}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <div className="col-md-12 in-cus">
                                        <label htmlFor="kh_email">Email</label>
                                        <input type="text" className="form-control" name="kh_email" id="kh_email" readOnly />
                                    </div> */}
                                </div>
                                <hr />
                                <h4 className="mb-3">Hình thức thanh toán</h4>
                                <div className="my-3 pttt">
                                    <div className="custom-control custom-radio">
                                        <input id="httt-1" name="httt_ma" type="radio" className="custom-control-input" required value={1} onChange={handlePttt} />
                                        <label className="custom-control-label" htmlFor="httt-1">COD</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="httt-2" name="httt_ma" type="radio" className="custom-control-input" required value={2} onChange={handlePttt} />
                                        <label className="custom-control-label" htmlFor="httt-2">VNPay</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="httt-3" name="httt_ma" type="radio" className="custom-control-input" required value={3} onChange={handlePttt} />
                                        <label className="custom-control-label" htmlFor="httt-3">MOMO</label>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleCheckout}>Đặt hàng</button>

                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Pay;
