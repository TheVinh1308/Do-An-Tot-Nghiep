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

const Invoice = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () => setShowDetail(true);

    const [showSetting, setShowSetting] = useState(false);
    const handleShowSetting = () => setShowSetting(true);
    const handleCloseSetting = () => setShowSetting(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const table = $('#DataTables_Table_Invoice_0').DataTable({
            responsive: true,
            autoWidth: true,
        });

        const handleContextMenu = (event) => {
            event.preventDefault();
            handleShowSetting();
            setContextMenuPosition({ x: event.clientX, y: event.clientY });
        };

        const menu = document.getElementById('show-menu');
        const section = document.getElementById('menu');

        if (menu) {
            menu.addEventListener('contextmenu', handleContextMenu);
        }

        const handleClickOutside = (event) => {
            if (section && !section.contains(event.target)) {
                handleCloseSetting();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            table.destroy();
            if (menu) {
                menu.removeEventListener('contextmenu', handleContextMenu);
            }
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
                                            <tr id='show-menu'>
                                                <td className="tb-item">Phạm Hoan Vinh</td>
                                                <td className="tb-item">04/06/2024</td>
                                                <td className="tb-item">16 Tân Thuận Tây, Q7, TP HCM</td>
                                                <td className="tb-item">0364067704</td>
                                                <td className="tb-item">
                                                    <Badge bg="danger">Đã huỷ</Badge>
                                                </td>
                                                <td className="tb-item">Tiền mặt</td>
                                                <td className="tb-item">
                                                    {(25000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                                </td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-4"><i className="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-4" onClick={handleShow}><i className="bi bi-pencil-square btn btn-warning"></i></Col>
                                                        <Col className="col-4" onClick={handleShowDetail}><i className="bi bi-info-circle-fill btn btn-success"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            {/* Repeat similar rows as needed */}
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
                    <EditInvoice />
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={showDetail} fullscreen={true} onHide={handleCloseDetail}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Chi tiết hoá đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailInvoice />
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
