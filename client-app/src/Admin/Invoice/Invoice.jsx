import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table, Badge } from "react-bootstrap";
import "datatables.net-bs5";
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import EditInvoice from './EditInvoice';
import DetailInvoice from '../DetailInvoice/InvoiceDetail';
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Invoice = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [selectID, setSelectID] = useState();
    const [statusInvoice, setStatusInvoice] = useState(0);
    const handleShow = (invoiceID, status) => {
        setShow(true);
        setSelectID(invoiceID);
        setStatusInvoice(status);
    }

    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () => setShowDetail(true);

    const [showSetting, setShowSetting] = useState(false);
    const handleShowSetting = () => setShowSetting(true);
    const handleCloseSetting = () => setShowSetting(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

    const [loadData, setLoadData] = useState(false);
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
                        filename: function () {
                            return 'data_' + Date.now();
                        },
                    },
                    {
                        extend: 'pdf',
                        className: 'btn bg-danger text-white',
                        filename: function () {
                            return 'data_' + Date.now();
                        },
                    },
                ],
            });
        }
    }, [loadData]);


    // user
    const [userDetails, setUserDetails] = useState({ userId: null, userName: "", isAuthenticated: false });
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
    const [invoices, setInvoices] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices`)
            .then((res) => {
                setInvoices(res.data);
                setLoadData(true);
            })
    }, []);
    console.log(`invoices`, invoices);
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
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Breadcrumb />
                <section className="section">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Danh sách hoá đơn</h5>
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
                                                invoices && invoices.map((item, index) => (

                                                    <tr id='show-menu' key={index}>
                                                        <td className="tb-item">{item.user.fullname}</td>
                                                        <td className="tb-item">{item.issuedDate}</td>
                                                        <td className="tb-item">{item.shippingAddress}</td>
                                                        <td className="tb-item">{item.shippingPhone}</td>
                                                        <td className="tb-item">
                                                            {getStatusBadge(item.status)}
                                                        </td>
                                                        <td className="tb-item">
                                                            {getPaymentMethod(item.paymentMethodId)}
                                                        </td>
                                                        <td className="tb-item">{(item.total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>

                                                        <td className="tb-item">
                                                            <Row>
                                                                <Col className="col-4" onClick={() => handleShow(item.id, item.status)}><i className="bi bi-pencil-square btn btn-warning"></i></Col>

                                                                <Col className="col-4" onClick={handleShowDetail}> <Link to={`InvoiceDetail/${item.id}`}><i className="bi bi-info-circle-fill btn btn-success"></i>  </Link></Col>

                                                            </Row>
                                                        </td>
                                                    </tr>

                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
            {/* ADD MODPHONE */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật hoá đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditInvoice selectID={selectID} statusInvoice={statusInvoice} />
                </Modal.Body>
            </Modal>

            <div id="menu" size="lg" show={showSetting} onHide={handleCloseSetting} backdrop='false' style={{ left: contextMenuPosition.x, top: contextMenuPosition.y - 15, display: showSetting ? 'block' : 'none' }}>
                <ul>
                    <li onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} /> Chỉnh sửa</li>
                    <hr />
                    <li><FontAwesomeIcon icon={faFileSignature} /> Cập nhật trạng thái</li>
                    <hr />
                    <Link to="/admin/OderTracking">
                        <li ><FontAwesomeIcon icon={faEye} /> Theo dõi đơn hàng</li>
                    </Link>
                    <hr />
                    <li onClick={handleShowDetail}><FontAwesomeIcon icon={faCircleInfo} /> Xem thông tin đơn hàng</li>
                </ul>
            </div>
        </>
    );
};

export default Invoice;
