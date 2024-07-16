import axios from "axios";
import { format } from "date-fns";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState, useRef } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { Bounce, toast, ToastContainer } from "react-toastify";

const InvoiceDetail = () => {
    const { id } = useParams();
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();
    const [phoneUser, setPhoneUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setPhoneUser(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/HomePhone"]);
            setIsAuthenticated(true);
        }
    }, []);

    const [invoiceDetail, setInvoiceDetail] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${id}`)
            .then((res) => {
                setInvoiceDetail(res.data);
            })
    }, [id]);

    const [invoice, setInvoice] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${id}`)
            .then((res) => {
                setInvoice(res.data);
            })
    }, [invoice, id]);
    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ color: 'black' }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:
                return <Badge bg="success">Hoàn thành</Badge>;
            case 5:
                    return <Badge bg="success">Đã thanh toán</Badge>;
            default:
                return <Badge bg="danger">Đã huỷ</Badge>;
        }
    };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handleInvoice = async () => {
        const updatedInvoice = { ...invoice, status: 2 };

        try {
            await axios.put(`https://localhost:7258/api/Invoices/${id}`, updatedInvoice);

            // Generate PDF
            const component = document.querySelector('.invoiceDetail-pdf');
            if (!component) {
                console.error('Error: .invoiceDetail-pdf element not found');
                alert('Failed to find invoice detail element for PDF generation');
                return;
            }

            // Generate PDF
            const canvas = await html2canvas(component, {
                scale: 2, // Increase scale for higher resolution
                useCORS: true, // Ensure cross-origin images are handled
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            const pdfBlob = pdf.output('blob');

            // Send PDF to backend
            const formData = new FormData();
            formData.append("userId", invoice.user.id); // Assuming you have a user ID
            formData.append("pdf", pdfBlob, "invoice.pdf");


            try {
                await axios.post(`https://localhost:7258/api/Invoices/SendMailWithPdf`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } catch (emailError) {
                console.error('Error sending email with PDF:', emailError);
                alert('Failed to send email with PDF');
                return;
            }

            const formNotificationAdmin = new FormData();
            formNotificationAdmin.append("invoiceId", id);
            formNotificationAdmin.append("content", `Đơn hàng của ${invoice?.user?.fullname} đã được duyệt`);
            formNotificationAdmin.append("time", new Date().toISOString());
            formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${id}`);
            formNotificationAdmin.append("status", true);

            try {
                await axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin);
            } catch (notificationError) {
                console.error('Error sending notification to admin:', notificationError);
                alert('Failed to send notification to admin');
                return;
            }

            notifySuccess('Đã xác nhận đơn hàng và gửi hoá đơn');
        } catch (error) {
            console.error('Error confirming invoice:', error);
            alert('Failed to confirm invoice');
        }
    };

    const check = 1;
    const handleInvoiceCancel = () => {
        const updatedInvoice = { ...invoice, status: 4 };
        axios.put(`https://localhost:7258/api/Invoices/${id}`, updatedInvoice)
            .then(() => {

                const formNotificationAdmin = new FormData();
                formNotificationAdmin.append("invoiceId", id);
                formNotificationAdmin.append("content", `Đơn hàng của ${userName} đã bị huỷ`);
                formNotificationAdmin.append("time", new Date().toISOString());
                formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${id}`);
                formNotificationAdmin.append("status", true);

                axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin)
                    .then((res) => {
                        alert("Thâm thông báo");
                    })

                alert("Đã xác nhận đơn hàng")
            })
            .catch((error) => console.error('Error cancelling invoice:', error));
    }
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
    const handleCompelete = () => {
        const updatedInvoice = { ...invoice, status: 3 };
        axios.put(`https://localhost:7258/api/Invoices/${id}`, updatedInvoice)
            .then(() => {

                const formNotificationAdmin = new FormData();
                formNotificationAdmin.append("invoiceId", id);
                formNotificationAdmin.append("content", `Đơn hàng của ${userName} đã hoàn thành`);
                formNotificationAdmin.append("time", new Date().toISOString());
                formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${id}`);
                formNotificationAdmin.append("status", true);

            })
            .catch((error) => console.error('Error cancelling invoice:', error));
    }
    return (
        <>
            <ToastContainer />

            <div className="card invoiceDetail" ref={componentRef}>
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <div className="row d-flex align-items-baseline">
                            <div className="col-xl-9">
                                <p style={{ color: '#7e8d9f', fontSize: 20 }}>Invoice &gt;&gt; <strong>ID: #{invoice.code}</strong></p>
                            </div>
                            <div className="col-xl-3 float-end">
                                <button className="btn btn-danger text-capitalize border-0" onClick={handlePrint}>
                                    <i class="bi bi-filetype-pdf"></i> Print
                                </button>
                                <button className="btn btn-light text-capitalize">
                                    <i className="far fa-file-pdf text-danger" /> Export
                                </button>
                            </div>
                            <hr />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="bi bi-person-circle"></i>Tên người dùng: <span style={{ color: '#5d9fc5' }}>{invoice?.user?.fullname}</span></li>
                                        <li className="text-muted"><i className="bi bi-geo-alt-fill"></i>Địa chỉ: {invoice.shippingAddress}</li>
                                        <li className="text-muted"><i className="bi bi-telephone"></i>Số điện thoại: {invoice.shippingPhone}</li>
                                    </ul>
                                </div>
                                <div className="col-xl-4">
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="bi bi-person-vcard"></i><span className="fw-bold">ID:</span>#{invoice.code}</li>
                                        <li className="text-muted"><i className="bi bi-calendar"></i> <span className="fw-bold">Creation Date: </span>{format(new Date(invoice?.issuedDate || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}</li>
                                        <li className="text-muted"><i className="bi bi-check-square"></i><span className="me-1 fw-bold">Trạng thái: </span>
                                            <span>
                                                {getStatusBadge(invoice.status)}
                                            </span>
                                            {
                                                invoice.status == 1 || invoice.status == 5? <span>
                                                    <button className="btn-h" style={{ backgroundColor: 'red', fontSize: "14px", margin: "5px", padding: '1px 10px', borderRadius: '5px', border: 'none', color: 'white' }} onClick={handleInvoiceCancel}> Huỷ</button>
                                                    <button className="btn-xn" style={{ backgroundColor: 'green', fontSize: "14px", margin: "5px", padding: '1px 10px', borderRadius: '5px', border: 'none', color: 'white' }} onClick={handleInvoice}>Xác nhận</button>
                                                </span> : invoice.status == 2 ?
                                                    <button className="btn-xn" style={{ backgroundColor: 'green', fontSize: "14px", margin: "5px", padding: '1px 10px', borderRadius: '5px', border: 'none', color: 'white' }} onClick={handleCompelete}>Hoàn thành</button>
                                                    : ""
                                            }

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row my-2 mx-1 justify-content-center">
                                <table className="table table-striped table-borderless">
                                    <thead style={{ backgroundColor: '#84B0CA' }} className="text-white">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Hình ảnh</th>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceDetail.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <img src={`https://localhost:7258/images/products/${item.phone.modPhone.image}`} alt="" width={100} style={{ mixBlendMode: "darken" }} />
                                                </td>
                                                <td>{item.phone.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{(item.quantity * item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                    <p className="ms-3">Add additional notes and payment information</p>
                                </div>
                                <div className="col-xl-3">
                                    <ul className="list-unstyled">
                                        <li className="text-muted ms-3">
                                            <span className="text-black me-4">Tổng tiền</span>
                                            {invoice?.total !== undefined
                                                ? (invoice.total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                                : 'N/A' // or any other placeholder text or value
                                            }
                                        </li>
                                        <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Vận chuyển</span>{(0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</li>
                                    </ul>
                                    <p className="text-black float-start"><span className="text-black me-3">Thành tiền</span><span style={{ fontSize: 25 }}>{(invoice.total + 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-xl-10 mb-3">
                                    <p>Cảm ơn vì đã lựa chọn chúng tôi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="card invoiceDetail-pdf" >
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <h1>2VPHONE - KÍNH CHÀO QUÝ KHÁCH</h1>
                        <h2 className="text-center">Phiếu hoá đơn</h2>
                        <div className="row d-flex align-items-baseline">
                            <div className="col-xl-9">
                                <p style={{ color: '#7e8d9f', fontSize: 20 }}>Invoice &gt;&gt; <strong>ID: #{invoice.code}</strong></p>
                            </div>

                            <hr />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="bi bi-person-circle"></i>Tên người dùng: <span style={{ color: '#5d9fc5' }}>{invoice?.user?.fullname}</span></li>
                                        <li className="text-muted"><i className="bi bi-geo-alt-fill"></i>Địa chỉ: {invoice.shippingAddress}</li>
                                        <li className="text-muted"><i className="bi bi-telephone"></i>Số điện thoại: {invoice.shippingPhone}</li>
                                    </ul>
                                </div>
                                <div className="col-xl-4">
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="bi bi-person-vcard"></i><span className="fw-bold">ID:</span>#{invoice.code}</li>
                                        <li className="text-muted"><i className="bi bi-calendar"></i> <span className="fw-bold">Creation Date: </span>{format(new Date(invoice?.issuedDate || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}</li>
                                        <li className="text-muted"><i className="bi bi-check-square"></i><span className="me-1 fw-bold">Trạng thái: </span>
                                            <span>
                                                <Badge bg="info">Đang giao</Badge>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row my-2 mx-1 justify-content-center">
                                <table className="table table-striped table-borderless">
                                    <thead style={{ backgroundColor: '#84B0CA' }} className="text-white text-center">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Tổng tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceDetail.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>

                                                <td>{item.phone.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{(item.quantity * item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                </div>
                                <div className="col-xl-3">
                                    <ul className="list-unstyled">
                                        <li className="text-muted ms-3">
                                            <span className="text-black me-4">Tổng tiền</span>
                                            {invoice?.total !== undefined
                                                ? (invoice.total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                                : 'N/A' // or any other placeholder text or value
                                            }
                                        </li>
                                        <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Vận chuyển</span>{(0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</li>
                                    </ul>
                                    <p className="text-black float-start"><span className="text-black me-3">Thành tiền</span><span style={{ fontSize: 25 }}>{(invoice.total + 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-xl-10">
                                    <p>Cảm ơn vì đã lựa chọn chúng tôi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    );
}

export default InvoiceDetail;
