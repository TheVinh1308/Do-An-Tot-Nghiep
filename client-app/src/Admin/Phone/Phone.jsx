import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddPhone from "./AddPhone";
import EditPhone from "./EditPhone";

const Phone = () => {
    // SHOW THÊM ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỬA ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // KHỞI TẠO DATATABLE
    useEffect(() => {
        const table = $('#DataTables_Table_Phone_0').DataTable({
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
                                    <h5 className="card-title">Danh sách điện thoại</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Table_Phone_0" className="table table-striped responsive modphone-table">
                                        {/* <td className="img-phone">
                                                    <Row>
                                                        <Col className="col-4">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} />
                                                        </Col>
                                                        <Col className="col-4">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-2.png'} />
                                                        </Col>
                                                        <Col className="col-4">
                                                            <Image src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-3.png'} />
                                                        </Col>
                                                    </Row>
                                                </td> */}
                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-1 tb-item">SKU</th>
                                                {/* <th className="col-3 tb-item">Image</th> */}
                                                <th className="col-3 tb-item">Name</th>
                                                <th className="col-2 tb-item">Price</th>
                                                <th className="col-1 tb-item">Rom</th>
                                                <th className="col-1 tb-item">Color</th>
                                                <th className="col-1 tb-item">Stock</th>
                                                <th className="col-1 tb-item">ModPhone</th>
                                                <th className="col-1 tb-item">Feature</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">IP15PM1024</td>
                                                <td className="tb-item">Iphone 15 Pro Max 1TB</td>
                                                <td className="tb-item">43990000 vnđ</td>
                                                <td className="tb-item">1TB</td>
                                                <td className="tb-item">Blue</td>
                                                <td className="tb-item">23</td>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">IP15PM1024</td>
                                                <td className="tb-item">Iphone 15 Pro Max 1TB</td>
                                                <td className="tb-item">43990000 vnđ</td>
                                                <td className="tb-item">1TB</td>
                                                <td className="tb-item">Blue</td>
                                                <td className="tb-item">23</td>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">IP15PM1024</td>
                                                <td className="tb-item">Iphone 15 Pro Max 1TB</td>
                                                <td className="tb-item">43990000 vnđ</td>
                                                <td className="tb-item">1TB</td>
                                                <td className="tb-item">Blue</td>
                                                <td className="tb-item">23</td>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">
                                                    <Row>
                                                        <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                        <Col className="col-6"> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tb-item">1</td>
                                                <td className="tb-item">IP15PM1024</td>
                                                <td className="tb-item">Iphone 15 Pro Max 1TB</td>
                                                <td className="tb-item">43990000 vnđ</td>
                                                <td className="tb-item">1TB</td>
                                                <td className="tb-item">Blue</td>
                                                <td className="tb-item">23</td>
                                                <td className="tb-item">1</td>
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
            {/* ADD MODPHONE */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPhone />
                </Modal.Body>

            </Modal>

            {/* EDIT PHONE */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPhone />
                </Modal.Body>

            </Modal>
            <Footer />
        </>
    );
}

export default Phone;