import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddPromotion from "./AddPromotion";
import AppPromotion from "./AppPromotion";
import EditPromotion from "./EditPromotion";
import Footer from "../Footer/Footer";
import 'datatables.net-buttons/js/buttons.html5.mjs';

const Promotion = () => {

    // THÊM KHUYẾN MÃI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ÁP DỤNG KHUYẾN MÃI
    const [showApp, setShowApp] = useState(false);
    const handleCloseApp = () => setShowApp(false);
    const handleShowApp = () => setShowApp(true);

    // SỬA KHUYẾN MÃI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_Promotion_0').DataTable({
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
                                    <h5 className="card-title">Danh sách khuyến mãi</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Table_Promotion_0" className="table table-striped responsive modphone-table">
                                        {/*  */}
                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-2 tb-item">Tên khuyến mãi</th>
                                                <th className="col-1 tb-item">Tỉ lệ</th>
                                                <th className="col-4 tb-item">Nội dung</th>
                                                <th className="col-1 tb-item">Ngày bắt đầu</th>
                                                <th className="col-1 tb-item">Ngày kết thúc</th>
                                                <th className="col-2 tb-item">Feature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className=" tb-item">1</td>
                                                <td className=" tb-item">Giảm theo phần trăm</td>
                                                <td className=" tb-item">15%</td>
                                                <td className=" tb-item">Các sản phẩm được áp dụng giảm giá 15% trong thời gian khuyến mãi</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-4"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-4" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                        <Col className="col-4" onClick={handleShowApp}> <i class="bi bi-app btn btn-success"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" tb-item">2</td>
                                                <td className=" tb-item">Giảm theo giá tiền</td>
                                                <td className=" tb-item">  {(1000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td className=" tb-item">Các sản phẩm được áp dụng giảm giá {(1000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} trong thời gian khuyến mãi</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-4"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-4"> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                        <Col className="col-4"> <i class="bi bi-app btn btn-success"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    {/* End Table with stripped rows */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
            {/* THÊM KHUYẾN MÃI */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm Khuyến mãi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPromotion />
                </Modal.Body>

            </Modal>

            {/* ÁP DỤNG KHUYẾN MÃI */}
            <Modal size="lg" show={showApp} onHide={handleCloseApp}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Áp dụng khuyến mãi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AppPromotion />
                </Modal.Body>


            </Modal>

            {/* SỬA KHUYẾN MÃI */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật khuyến mãi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPromotion />
                </Modal.Body>


            </Modal>


        </>
    );
}

export default Promotion;