import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddImage from "./AddImage";
import EditImage from "./EditImage";
import axios from "axios";
import Footer from "../Footer/Footer";

const Images = () => {
    // SHOW THÊM ẢNH ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỬA ẢNH ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const [ImageSelect, setImageSelect] = useState(null);
    const handleShowEdit = (id) => {
        setShowEdit(true);
        setImageSelect(id)

    }

    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_Image_0').DataTable({
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

    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images`)
            .then(res => {
                setImages(res.data);
                // setDataTableData(res.data); // Cập nhật dữ liệu DataTable
                setLoadData(true);
            });
    }, [show,showEdit]);
    console.log(images);


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
                                            {
                                                images.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className=" tb-item">{item.id}</td>
                                                        <td className="img-phone">
                                                            <Row>
                                                                {JSON.parse(item.path).map((imagePath, imgIndex) => (
                                                                    <Col key={imgIndex} className="col-2">
                                                                        <Image src={'https://localhost:7258/images/products/' + imagePath} />
                                                                    </Col>
                                                                ))}
                                                            </Row>
                                                        </td>
                                                        <td className=" tb-item">{item.phone.name}</td>
                                                        <td className="tb-item">
                                                            <Row>
                                                                <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                                <Col className="col-6" onClick={() => handleShowEdit(item.id)}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                            </Row>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

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
                    <EditImage imageId={ImageSelect} />
                </Modal.Body>

            </Modal>

        </>
    );
}

export default Images;