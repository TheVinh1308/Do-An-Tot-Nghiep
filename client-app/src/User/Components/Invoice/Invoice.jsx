import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "datatables.net-bs5";
import $ from "jquery";
import { Badge, Col, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Invoice.css";
import { jwtDecode } from "jwt-decode";
import InvoiceDetail from "./InvoiceDetail";

const Invoice = () => {
    const [invoices, setInvoices] = useState([]);
    const [loadData, setLoadData] = useState(false);
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();
    const [show, setShow] = useState(false);
    const [invoiceId, getInvoiceId] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        getInvoiceId(id);
    }
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setIsAuthenticated(true);
        }
    }, []);

    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
        if (userId) {
            axios.get(`https://localhost:7258/GetInvoiceByUserId/${userId}`)
                .then((res) => {
                    setInvoice(res.data);
                })
                .catch((error) => console.error('Error fetching invoice:', error));
        }
    }, [userId]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await axios.get(`https://localhost:7258/api/Brands`);
                setInvoices(res.data);
                setLoadData(true);
            } catch (error) {
                console.error("Error fetching invoices", error);
            }
        };
        fetchInvoices();
    }, []);

    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_Invoice_0').DataTable({
                dom: 'Bfrtip',
                responsive: true,
                autoWidth: true,
                paging: [{
                    className: 'p-0',
                }],
                buttons: [
                    {
                        extend: 'copy',
                        className: 'btn bg-primary text-white',
                    },
                    {
                        extend: 'csv',
                        className: 'btn bg-secondary text-white',
                    },
                    {
                        extend: 'excel',
                        className: 'btn bg-success text-white',
                        filename: () => 'data_' + Date.now(),
                    },
                    {
                        extend: 'pdf',
                        className: 'btn bg-danger text-white',
                        filename: () => 'data_' + Date.now(),
                    },
                ],
            });
        }
    }, [loadData]);
    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ border: "solid 1px black", color: "black" }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:
                return <Badge bg="success">Hoàn thành</Badge>;
            default:
                return <Badge bg="danger">Đã huỷ</Badge>;
        }
    };

    const getPaymentMethod = (paymentMethod) => {
        switch (paymentMethod) {
            case 1:
                return "Tiền mặt";
            case 2:
                return "MOMO";
            default:
                return "VNPay";
        }
    };


    return (
        <>
            <Navbar />
            <hr />
            <div className="invoice-content">
                <table id="DataTables_Table_Invoice_0" className="table table-striped responsive modphone-table">
                    <thead>
                        <tr>
                            <th className="col-2 tb-item">User</th>
                            <th className="col-1 tb-item">Date</th>
                            <th className="col-2 tb-item">Address</th>
                            <th className="col-2 tb-item">Phone</th>
                            <th className="col-1 tb-item">Status</th>
                            <th className="col-1 tb-item">Payment</th>
                            <th className="col-1 tb-item">Total</th>
                            <th className="col-2 tb-item">Feature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoice.map((item, index) => (
                                <>
                                    <tr id='show-menu' key={index}>
                                        <td className="tb-item">{userName}</td>
                                        <td className="tb-item">{item.issuedDate}</td>
                                        <td className="tb-item">{item.shippingAddress}</td>
                                        <td className="tb-item">{item.shippingPhone}</td>
                                        <td className="tb-item">
                                            {getStatusBadge(item.status)}
                                        </td>
                                        <td className="tb-item">
                                            {getPaymentMethod(item.paymentMethodId)}
                                        </td>
                                        <td className="tb-item">
                                            {(item.total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </td>
                                        <td className="tb-item">
                                            <Row>
                                                <Col className="col-4"><i className="bi bi-trash btn btn-danger"></i></Col>
                                                <Col className="col-4"><i className="bi bi-pencil-square btn btn-warning"></i></Col>
                                                <Col className="col-4" onClick={() => handleShow(item.id)}><i className="bi bi-info-circle-fill btn btn-success"></i></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }

                        {/* Repeat similar rows as needed */}
                    </tbody>
                </table>
            </div>

            <Modal fullscreen show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Chi tiết hoá đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceDetail invoiceId={invoiceId} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Invoice;
