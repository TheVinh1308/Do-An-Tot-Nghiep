import Breadcrumb from "../Breadcrumb";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery";
import AddImage from "./AddImage";
import EditImage from "./EditImage";
import axios from "axios";
import Footer from "../Footer/Footer";
import 'datatables.net-buttons/js/buttons.html5.mjs';

const Images = () => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [imageSelect, setImageSelect] = useState(null);
    const [images, setImages] = useState([]);
    const [loadData, setLoadData] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowEdit = (id) => {
        setShowEdit(true);
        setImageSelect(id);
    };
    const handleCloseEdit = () => setShowEdit(false);

    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_Image_0').DataTable({
                dom: 'Bfrtip',
                responsive: true,
                autoWidth: true,
                buttons: [
                    { extend: 'copy', className: 'btn bg-primary text-white' },
                    { extend: 'csv', className: 'btn bg-secondary text-white' },
                    { extend: 'excel', className: 'btn bg-success text-white', filename: () => 'data_' + Date.now() },
                    { extend: 'pdf', className: 'btn bg-danger text-white', filename: () => 'data_' + Date.now() },
                ],
            });
        }
    }, [loadData]);

    useEffect(() => {
        axios.get('https://localhost:7258/api/Images')
            .then(res => {
                setImages(res.data);
                setLoadData(true);
            });
    }, [show, showEdit]);



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
                                    <Button className="btn btn-success" onClick={handleShow}>Thêm</Button>
                                    <Table id="DataTables_Table_Image_0" className="table table-striped responsive">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Image</th>
                                                <th>Phone</th>
                                                <th>Feature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {images.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td className="img-phone">
                                                        <Row>
                                                            {JSON.parse(item.path).map((imagePath, imgIndex) => (
                                                                <Col key={imgIndex} className="col-3">
                                                                    <Image src={`https://localhost:7258/images/products/${imagePath}`} />
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </td>
                                                    <td className="col-6">{item.phone.name}</td>
                                                    <td>
                                                        <Row>

                                                            <Col className="col-6" onClick={() => handleShowEdit(item.id)}>
                                                                <i className="bi bi-pencil-square btn btn-warning"></i>
                                                            </Col>
                                                        </Row>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

            {/* Modal for Adding Image */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddImage />
                </Modal.Body>
            </Modal>

            {/* Modal for Editing Image */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditImage imageId={imageSelect} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Images;
