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
    const [invoiceId, getInvoiceId] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        getInvoiceId(id);
    }
    // cancle
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [showReason, setShowReason] = useState(false);
    const handleCloseReason = () => setShowReason(false);
    const handleShowReason = (invoice) => {
        setShowReason(true);
        setSelectedInvoice(invoice);
        setCancelReasons({}); // Reset cancel reasons when opening modal
    };
    const [cancelReasons, setCancelReasons] = useState({});

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
                    setLoadData(true);
                })
                .catch((error) => console.error('Error fetching invoice:', error));
        }
    }, [userId,showReason]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await axios.get(`https://localhost:7258/api/Brands`);
                setInvoices(res.data);
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

    const handleCancelReasonChange = (reason) => {
        setCancelReasons(prevReasons => ({
            ...prevReasons,
            [reason]: !prevReasons[reason]
        }));
    };
    const isAnyReasonSelected = Object.values(cancelReasons).some(value => value);
  
    console.log("sl",selectedInvoice);
    const handleCancelInvoice = () => {
        if (selectedInvoice) {
            const updatedInvoice = { ...selectedInvoice, status: 4 };

            axios.put(`https://localhost:7258/api/Invoices/${selectedInvoice.id}`, updatedInvoice)
                .then(() => {
                    handleCloseReason()
                    alert("Đã hủy đơn hàng")
                })
                .catch((error) => console.error('Error cancelling invoice:', error));
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
                                                <Col className="col-6" onClick={() => handleShowReason(item)}>
                                                    <i className="btn btn-danger">Hủy đơn hàng</i>
                                                </Col>
                                                <Col className="col-4" onClick={() => handleShow(item.id)}>
                                                    <i className="bi bi-info-circle-fill btn btn-success"></i>
                                                </Col>
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

            <Modal size="lg" show={showReason} onHide={handleCloseReason}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Lý do hủy đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="checkbox"  className="chk" onChange={() => handleCancelReasonChange('Cập nhật số lượng')} />
                        <span className="text">Cập nhật số lượng</span> <br />
                        <input type="checkbox"   className="chk" onChange={() => handleCancelReasonChange('Thay đổi số điện thoại')} />
                         <span className="text">Thay đổi số điện thoại</span> <br />
                        <input type="checkbox"  className="chk" onChange={() => handleCancelReasonChange('Thay đổi địa chỉ nhận hàng')} /> 
                        <span className="text">Thay đổi địa chỉ nhận hàng</span> <br />
                        <input type="checkbox"   className="chk" onChange={() => handleCancelReasonChange('Chọn nhầm sản phẩm')} /> 
                        <span className="text">Chọn nhầm sản phẩm</span>  <br />
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Khác')} /> 
                        <span className="text"  >Khác</span>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-success" onClick={handleCancelInvoice} disabled={!isAnyReasonSelected}>Xác nhận hủy</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Invoice;
