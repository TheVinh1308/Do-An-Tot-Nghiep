import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddImage from "./AddImage";
import EditImage from "./EditImage";

const Images = () => {
    // SHOW THÊM ẢNH ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỬA ẢNH ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    useEffect(() => {
        const table = $('#DataTables_Table_Image_0').DataTable({
            responsive: true,
            autoWidth: true,
            paging: [{
                className: 'p-0',
            }]
        });

        return () => {
            // Destroy the DataTable instance when component unmounts
            table.destroy();
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
                                    <h5 className="card-title">Danh sách hình ảnh</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Table_Image_0" className="table table-striped responsive modphone-table">
                                        {/*  */}
                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-8 tb-item">Image</th>
                                                <th className="col-2 tb-item">Phone</th>
                                                <th className="col-1 tb-item">Feature</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className=" tb-item">1</td>
                                                <td className="img-phone">
                                                    <Row>
                                                        <Col className="col-2">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} />
                                                        </Col>
                                                        <Col className="col-2">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-2.png'} />
                                                        </Col>
                                                        <Col className="col-2">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-3.png'} />
                                                        </Col>
                                                        <Col className="col-2">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-4.png'} />
                                                        </Col>
                                                        <Col className="col-2">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-5.png'} />
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className=" tb-item">IPhone 15 Pro max</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
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
            </main>
            {/* THÊM ẢNH ĐIỆN THOẠI */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddImage />
                </Modal.Body>

            </Modal>

            {/* CẬP NHẬT ẢNH ĐIỆN THOẠI */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditImage />
                </Modal.Body>

            </Modal>
            <Footer />
        </>
    );
}

export default Images;