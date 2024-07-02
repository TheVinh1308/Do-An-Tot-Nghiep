import axios from "axios";
import { format } from "date-fns";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState, useRef } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';

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

    console.log(`phoneUser`, phoneUser);
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
    }, [id]);
    console.log(`invoice`, invoice);
    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ color: 'black' }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:
                return <Badge bg="success">Hoàn thành</Badge>;
            default:
                return <Badge bg="danger">Đã huỷ</Badge>;
        }
    };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <div className="card" ref={componentRef}>
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
                                        <li className="text-muted"><i className="bi bi-person-circle"></i>Tên người dùng: <span style={{ color: '#5d9fc5' }}>{userName}</span></li>
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
                                <div className="col-xl-10">
                                    <p>Cảm ơn vì đã lựa chọn chúng tôi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvoiceDetail;
