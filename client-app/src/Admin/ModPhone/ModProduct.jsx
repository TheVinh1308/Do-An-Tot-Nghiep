import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddModProduct from "./AddModProduct";
import "datatables.net-bs5";
import $ from "jquery"
const ModProduct = () => {
    // SHOW THÊM DÒNG ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỪA DÒNG ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    useEffect(() => {
        const table = $('#DataTables_Table_0').DataTable({
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
                                    <h5 className="card-title">Dòng điện thoại</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Table_0" className="table table-striped responsive modphone-table">

                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">#</th>
                                                <th className="col-2 tb-item">Image</th>
                                                <th className="col-2 tb-item">Name</th>
                                                <th className="col-1 tb-item">Screen</th>
                                                <th className="col-1 tb-item">Ram</th>
                                                <th className="col-1 tb-item">OS</th>
                                                <th className="col-2 tb-item">CPU</th>
                                                <th className="col-1 tb-item">Battery</th>
                                                <th className="col-1 tb-item">Feature</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="img-modphone">
                                                    <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip15promax.png'} />
                                                </td>
                                                <td className="tb-item">Iphone 15 Promax</td>
                                                <td className="tb-item">6.7 in</td>
                                                <td className="tb-item">8GB</td>
                                                <td className="tb-item">iOS 17</td>
                                                <td className="tb-item">Apple A17 Pro 6 nhân</td>
                                                <td className="tb-item">4422 mAh</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>

                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="img-modphone">
                                                    <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} />
                                                </td>
                                                <td className="tb-item">Iphone 15 Promax</td>
                                                <td className="tb-item">6.7 in</td>
                                                <td className="tb-item">8GB</td>
                                                <td className="tb-item">iOS 17</td>
                                                <td className="tb-item">Apple A17 Pro 6 nhân</td>
                                                <td className="tb-item">4422 mAh</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>

                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="img-modphone">
                                                    <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip13promax.png'} />
                                                </td>
                                                <td className="tb-item">Iphone 15 Promax</td>
                                                <td className="tb-item">6.7 in</td>
                                                <td className="tb-item">8GB</td>
                                                <td className="tb-item">iOS 17</td>
                                                <td className="tb-item">Apple A17 Pro 6 nhân</td>
                                                <td className="tb-item">4422 mAh</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>

                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="img-modphone">
                                                    <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip15promax.png'} />
                                                </td>
                                                <td className="tb-item">Iphone 15 Promax</td>
                                                <td className="tb-item">6.7 in</td>
                                                <td className="tb-item">8GB</td>
                                                <td className="tb-item">iOS 17</td>
                                                <td className="tb-item">Apple A17 Pro 6 nhân</td>
                                                <td className="tb-item">4422 mAh</td>
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
            {/* THÊM DÒNG ĐIỆN THOẠI */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm dòng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddModProduct />
                </Modal.Body>

            </Modal>

            {/* CẬP NHẬT ĐIỆN THOẠI */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật dòng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddModProduct />
                </Modal.Body>

            </Modal>
            <Footer />
        </>
    );
}

export default ModProduct;