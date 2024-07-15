import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/CSS/Pay.css";
import { ShopContext } from "../Context/ShopContext";
import { jwtDecode } from "jwt-decode";
import { set } from "date-fns";
import { get } from "jquery";


const Pay = () => {
    // dùng để chuyển hướng
    const navigate = useNavigate();
    // lấy thông tin từ shopcontext
    const { cartItems, totalItemPrice, phone, setErrorMessage } = useContext(ShopContext);
    // danh sách sản phẩm được chọn trong cart
    const [cart, setCart] = useState([]);
    // danh sách lỗi
    const [error, setError] = useState(null);
    // chứa thông tin uesr
    const [userDetails, setUserDetails] = useState({ userId: null, userName: "", isAuthenticated: false });
    // đơn hàng vừa mới tạo
    const [invoice, setInvoice] = useState({});
    // thông tin điện thoại mua ngay
    const [phoneSelect, setPhoneSelect] = useState(null);
    const [loadCart, setloadCart] = useState(false);
    // lấy thông tin các cart được chọn đễ thanh toán
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
    // lấy thông tin của điện thoại được cho để thanh toán
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
    }, []);
    // lấy thông tin tài khoản đang đăng nhập
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
    // Hàm tạo mã hoá đơn ngẫu nhiêu
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    };
    // lấy dữ liệu tỉnh huyện xã
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState('');
    const [selectedDistrictId, setSelectedDistrictId] = useState('');
    const [selectedWardId, setSelectedWardId] = useState('');
    // lấy danh sách các tỉnh thành
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Province`).then((res) => {
            setProvince(res.data)
        })
    }, []);
    // lấy danh sách các quận huyện theo tỉnh thành đã chọn
    useEffect(() => {
        if (selectedProvinceId) {
            axios.get(`https://localhost:7258/api/District/GetAllDistrictByProvince/${selectedProvinceId}`)
                .then((res) => {
                    setDistrict(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching districts:', error);
                });
        }
    }, [selectedProvinceId]);
    // lấy danh sách phường xã theo quận huyện đã chọn
    useEffect(() => {
        if (selectedDistrictId) {
            axios.get(`https://localhost:7258/api/Ward/GetAllWardsByDistrictId/${selectedDistrictId}`)
                .then((res) => {
                    setWard(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching wards:', error);
                });
        }
    }, [selectedDistrictId]);

    // lấy giá trị sau khi người dùng chọn tỉnh
    const handleProvinceChange = (e) => {
        setSelectedProvinceId(e.target.value);
    };
    // lấy giá trị sau khi người dủng chọn quạn huyện
    const handleDistrictChange = (e) => {
        setSelectedDistrictId(e.target.value);
    };

    // lấy giá trị sau khi nguòi dùng chọn phường xã
    const handleWardChange = (e) => {
        setSelectedWardId(e.target.value);
    };

    const [Province, getProvince] = useState('');
    const [District, getDistrict] = useState('');
    const [Ward, getWard] = useState('');
    // lấy thông tin tỉnh đã chọn
    useEffect(() => {
        if (selectedProvinceId) {
            axios.get(`https://localhost:7258/api/Province/${selectedProvinceId}`).then((res) => {
                getProvince(res.data.name)
            })
        }
    }, [selectedProvinceId]);
    // lấy thông tin quận huyện đã chọn
    useEffect(() => {
        if (selectedDistrictId) {
            axios.get(`https://localhost:7258/api/District/${selectedDistrictId}`)
                .then((res) => {
                    getDistrict(res.data.name);
                })
                .catch((error) => {
                    console.error('Error fetching districts:', error);
                });
        }
    }, [selectedDistrictId]);
    // lấy thông tin phường xã đã chọn
    useEffect(() => {
        if (selectedWardId) {
            axios.get(`https://localhost:7258/api/Ward/${selectedWardId}`)
                .then((res) => {
                    getWard(res.data.name);
                })
                .catch((error) => {
                    console.error('Error fetching wards:', error);
                });
        }
    }, [selectedWardId]);
    const [formData, setFormData] = useState({
        shippingPhone: ''
    });
    const getAddressString = `${formData.shippingAddress} - ${Ward} - ${District} - ${Province}`;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prev => ({ ...prev, [name]: value }));
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setInvoice(prev => ({ ...prev, shippingAddress: getAddressString }))
    };
    // sau khi thanh toán hoàn tất sẽ chuyển sang trang sau khi thanh toán
    const AfterPay = (cartID) => {
        navigate(`/afterPay/${cartID}`);
    };

    // hàm xử lý thanh toán COD
    const handlePay = async (e) => {
        e.preventDefault();


        // form chứa thông tin hoá đơn
        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));
        formInvoice.append('userId', userDetails.userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 1);
        formInvoice.append("shippingAddress", getAddressString);
        formInvoice.append("shippingPhone", formData.shippingPhone);
        formInvoice.append("total", (totalItemPrice));
        formInvoice.append("status", 1);
        try {
            // thêm hoá đơn
            const res = await axios.post(`https://localhost:7258/api/Invoices`, formInvoice);
            const invoiceId = res.data.id;
            // form chứa thông tin thông báo đến admin
            const formNotificationAdmin = new FormData();
            formNotificationAdmin.append("invoiceId", invoiceId);
            formNotificationAdmin.append("content", `${userDetails.userName} đã đặt một đơn hàng`);
            formNotificationAdmin.append("time", new Date().toISOString());
            formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${invoiceId}`);
            formNotificationAdmin.append("status", true);
            // thêm thông báo admin
            axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin)
                .then((res) => {
                    console.log("Đã tạo hóa đơn");
                })
                .catch((err) => console.log("Lỗi tạo hóa đơn"))
            // trong trường hợp mua tử giỏ hàng
            if (cart.length > 0) {
                await Promise.all(cart.map(async (item) => {
                    // form chứa thông tin của từng chi tiết hoá đơn
                    const formInvoiceDetail = new FormData();
                    formInvoiceDetail.append("invoiceId", invoiceId);
                    formInvoiceDetail.append("phoneId", item.phone.id);
                    formInvoiceDetail.append("quantity", item.quantity);
                    formInvoiceDetail.append("unitPrice", item.phone.price - (item.phone.price * item.phone.modPhone.promotion.discountPercent / 100));
                    // thêm chi tiết hoá đơn
                    await axios.post(`https://localhost:7258/api/InvoiceDetails`, formInvoiceDetail);
                    // lấy thông tin của điện thoại cũa chi tiết hoá đơn hiện tại
                    const productResponse = await axios.get(`https://localhost:7258/api/Phones/${item.phone.id}`);
                    const product = productResponse.data;
                    // lấy số lượng tồn khoá
                    const updatedStock = product.stock - item.quantity;
                    const formUp = {
                        ...product,
                        stock: updatedStock,
                    };
                    // cập nhật lại số lượng tồn kho
                    await axios.put(`https://localhost:7258/api/Phones/${item.phone.id}`, formUp, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    });
                }));
                // trong trường hợp mua ngay
            } else if (phoneSelect) {
                // form chứa thông tin của sản phẩm được chọn
                const formBuyNow = new FormData();
                formBuyNow.append("invoiceId", invoiceId);
                formBuyNow.append("phoneId", phoneSelect.id);
                formBuyNow.append("quantity", 1);
                formBuyNow.append("unitPrice", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));
                // thêm chi tiết hoá đơn
                await axios.post(`https://localhost:7258/api/InvoiceDetails`, formBuyNow);
                // lấy số lượng tồn khoá
                const updatedStock = phoneSelect.stock - 1;
                const formUp = {
                    ...phoneSelect,
                    stock: updatedStock,
                };
                // cập nhật lại số lượng tồn kho
                await axios.put(`https://localhost:7258/api/Phones/${phoneSelect.id}`, formUp, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
            }

            await Promise.all(cartItems.map(element => axios.delete(`https://localhost:7258/api/Carts/${element}`)));

            alert("Đã đặt hàng thành công!");
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
        formInvoice.append("shippingAddress", getAddressString);
        formInvoice.append("shippingPhone", formData.shippingPhone);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 6);

        try {
            localStorage.setItem("shippingAddress", getAddressString)
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
                    formInvoiceDetail.append("unitPrice", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));

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
                formBuyNow.append("unitPrice", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));
                await axios.post(`https://localhost:7258/api/InvoiceDetails`, formBuyNow);
                const updatedStock = phoneSelect.stock - 1;
                const formUp = {
                    ...phoneSelect,
                    stock: updatedStock,
                };
                // cập nhật lại số lượng tồn kho
                await axios.put(`https://localhost:7258/api/Phones/${phoneSelect.id}`, formUp, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
            }

            await Promise.all(cartItems.map(element => axios.delete(`https://localhost:7258/api/Carts/${element}`)));

            // Chuyển hướng đến trang thanh toán
            window.location.href = paymentUrl;
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    // Sử dụng useEffect để xử lý khi callback về từ thanh toán thành công

    const ListError = [
        { code: "00", message: "Giao dịch thành công" },
        { code: "07", message: "Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường)." },
        { code: "09", message: "Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng." },
        { code: "10", message: "Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần" },
        { code: "11", message: "Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch." },
        { code: "12", message: "Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa." },
        { code: "13", message: "Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch." },
        { code: "24", message: "Giao dịch không thành công do: Khách hàng hủy giao dịch" },
        { code: "51", message: "Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch." },
        { code: "65", message: "Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày." },
        { code: "75", message: "Ngân hàng thanh toán đang bảo trì." },
        { code: "79", message: "Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch" },
        { code: "99", message: "Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)" }
    ]
    const [query, setQuery] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const queryString = window.location.search;
            setQuery(queryString);
            const urlParams = new URLSearchParams(queryString);
            const transactionStatus = urlParams.get('vnp_TransactionStatus') || undefined;
            const invoice_Id = localStorage.getItem("invoiceId");
            let issuedDate = new Date();
            issuedDate.setHours(issuedDate.getHours() + 7);
            issuedDate = issuedDate.toISOString();
            const statusObj = ListError.find(item => item.code == transactionStatus);
            if (statusObj) {
                localStorage.setItem("statusCode", statusObj.message);
            }
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
                        status: 5
                    };
                    
                    await axios.put(`https://localhost:7258/api/Invoices/${invoice_Id}`, invoiceEdit);
                    localStorage.removeItem("shippingAddress");
                    localStorage.removeItem("shippingPhone");
                    localStorage.removeItem("invoiceId");
                    localStorage.removeItem("userId");
                    await Promise.all(cartItems.map(element => axios.delete(`https://localhost:7258/api/Carts/${element}`)));
                  
                    AfterPay(invoice_Id);
                } catch (err) {
                    console.log("Error editing invoice: ", err);
                }
            } else if(transactionStatus !== undefined){
                try {
                    const formNotificationAdmin = new FormData();
                    formNotificationAdmin.append("invoiceId", invoice_Id);
                    formNotificationAdmin.append("content", `${localStorage.getItem("userId")} đã huỷ một đơn hàng`);
                    formNotificationAdmin.append("time", new Date().toISOString());
                    formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${invoice_Id}`);
                    formNotificationAdmin.append("status", true);
        
                    const res = await axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${invoice_Id}`);
                    if (res.data.length > 0) {
                        await Promise.all(res.data.map(async (item) => {
                            const productResponse = await axios.get(`https://localhost:7258/api/Phones/${item.phone.id}`);
                            const product = productResponse.data;
        
                            const updatedStock = product.stock + item.quantity;
                            const formUp = {
                                ...product,
                                stock: updatedStock,
                            };
        
                            await axios.put(`https://localhost:7258/api/Phones/${item.phone.id}`, formUp, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                }
                            })
                           
                        }));
                    }
                   window.location.href = "/cart"

                } catch (err) {
                    console.log("Error cancelling order: ", err);
                }
            }
        };
    
        fetchData();
    }, [query]);
    
    // MOMO Payment
    const handleMomo = async (e) => {
        e.preventDefault();
        const dataMomo = new FormData();
        dataMomo.append("fullName", userDetails.userName);
        dataMomo.append("amount", Math.floor(totalItemPrice / 100));
        const formInvoice = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formInvoice.append(key, value);
        });
        formInvoice.append("code", generateRandomString(10));
        formInvoice.append('userId', userDetails.userId);
        formInvoice.append("issuedDate", new Date().toISOString());
        formInvoice.append("paymentMethodId", 3);
        formInvoice.append("shippingAddress", getAddressString);
        formInvoice.append("shippingPhone", formData.shippingPhone);
        formInvoice.append("total", totalItemPrice);
        formInvoice.append("status", 5);
        try {
            localStorage.setItem("shippingAddress", getAddressString,)
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
                    formInvoiceDetail.append("unitPrice", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));
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
                formBuyNow.append("unitPrice", phoneSelect.price - (phoneSelect.price * phoneSelect.modPhone.promotion.discountPercent / 100));
                await axios.post(`https://localhost:7258/api/InvoiceDetails`, formBuyNow);
                const updatedStock = phoneSelect.stock - 1;
                const formUp = {
                    ...phoneSelect,
                    stock: updatedStock,
                };
                // cập nhật lại số lượng tồn kho
                await axios.put(`https://localhost:7258/api/Phones/${phoneSelect.id}`, formUp, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
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
        const message = urlParams.get('message');
        setErrorMessage(message);
        const invoiceId = localStorage.getItem('invoiceId');
        if (errorCode && errorCode === '0') { // Successful payment
            try {
        if (errorCode === '0') {
            try{
                const invoiceEdit = {
                    id: invoiceId,
                    shippingAddress: localStorage.getItem("shippingAddress"),
                    shippingPhone: localStorage.getItem('shippingPhone'),
                    code: orderId,
                    userId: localStorage.getItem('userId'),
                    issuedDate: new Date().toISOString(),
                    paymentMethodId: 3, // Assuming Momo payment method ID
                    total: amount * 100,
                    status: 1 // Paid status
                };

                axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, invoiceEdit)
                    .then(() => {
                        localStorage.removeItem('shippingAddress');
                        localStorage.removeItem('shippingPhone');
                        localStorage.removeItem('invoiceId');
                        localStorage.removeItem('userId');

                        alert('Thanh toán thành công!');
                        // Additional function call or state update after payment success
                        AfterPay(invoiceId);


                    })
                    .catch((error) => {
                        console.error('Error editing invoice:', error);
                    });
            }
            catch {
                console.log("Lỗi lấy dữ liệu trả về", error);
            }

        }
        else {
            try {
                const invoiceEdit = {
                    id: invoiceId,
                    shippingAddress: localStorage.getItem("shippingAddress"),
                    shippingPhone: localStorage.getItem('shippingPhone'),
                    code: orderId,
                    userId: localStorage.getItem('userId'),
                    issuedDate: new Date().toISOString(),
                    paymentMethodId: 3, // Assuming Momo payment method ID
                    total: amount * 100,
                    status: 6 //  status
                };

                axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, invoiceEdit)
                    .then(() => {
                        localStorage.removeItem('shippingAddress');
                        localStorage.removeItem('shippingPhone');
                        localStorage.removeItem('invoiceId');
                        localStorage.removeItem('userId');

                        // Additional function call or state update after payment success
                        window.location.href = '/'

                    })
                    .catch((error) => {
                        console.error('Error editing invoice:', error);
                    });
            }
            catch {
                console.log("Lỗi lấy dữ liệu trả về", error);
            }
        }
    }, [queryMomo]);
    // lựa chon phương thức thanh toán
    const [pttt, setPttt] = useState(1);
    // bắt giá trị ô radiobox
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
                                                    <small className="text-muted">{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {item.quantity}</small>
                                                </div>
                                                <span className="text-muted">{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{phoneSelect?.name}</h6>
                                                <small className="text-muted">{(phoneSelect?.price)} x {1}</small>
                                            </div>
                                            <span className="text-muted">{(phoneSelect?.price)}</span>
                                        </li>
                                    )}
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Tổng thành tiền</span>
                                        <strong>{(totalItemPrice)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
                                    </li>
                                </ul>


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
                                    <div className="col-md-12 in-cus address">

                                        <div className="location">
                                            <label htmlFor="kh_diachi">Địa chỉ</label>
                                            <div className="location-address">
                                                <select value={selectedProvinceId} onChange={handleProvinceChange} required>
                                                    <option value="">Chọn Tỉnh/Thành phố</option>
                                                    {province.map((item) => (
                                                        <option key={item.id} value={item.id} >{item.name}</option>
                                                    ))}
                                                </select> <br />
                                                <select value={selectedDistrictId} onChange={handleDistrictChange} required>
                                                    <option value="">Chọn Quận/Huyện</option>
                                                    {district.map((item) => (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    ))}
                                                </select> <br />
                                                <select value={selectedWardId} onChange={handleWardChange} required>
                                                    <option value="">Chọn Phường/Xã</option>
                                                    {ward.map((item) => (
                                                        <option key={item.id} value={item.id} >{item.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                        </div>
                                        <br />


                                    </div>
                                    <div className="col-md-12  ">
                                        <input
                                            style={{ float: 'right', width: '55vmin' }}
                                            type="text"
                                            className="form-control d-block"
                                            name="shippingAddress"
                                            id="kh_diachi"
                                            required
                                            placeholder="Nhập địa chỉ"
                                            // value={`${formData.shippingAddress || ""} ${Ward}  ${District}  ${Province}`}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 in-cus ">
                                        <label htmlFor="kh_dienthoai">Điện thoại</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="shippingPhone"
                                            id="kh_dienthoai"
                                            required
                                            placeholder="Nhập số điện thoại"
                                            // value={formData.shippingPhone}
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
