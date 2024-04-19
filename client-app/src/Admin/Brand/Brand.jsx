import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddBrand from "./AddBrand";
import EditBrand from "./EditBrand";
import axios from "axios";
const Brand = () => {
    // SHOW THÊM DÒNG ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỪA DÒNG ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    // useEffect(() => {
    //     if (loadData) {
    //         const table = $('#DataTables_Brand_0').DataTable({
    //             responsive: true,
    //             autoWidth: true,
    //             paging: [{
    //                 className: 'p-0',
    //             }]
    //         });
    //         return () => {
    //             // Destroy the DataTable instance when component unmounts
    //             table.destroy();
    //         };
    //     }

    // }, [loadData]);

    // LIÊN KẾT API
    const [brands, setBrands] = useState([]);
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        if (loadData) {
            $('#DataTables_Brand_0').DataTable({
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

    // LẤY NGÀY HIỆN TẠI
    var day = new Date();
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands`)
            .then(res => {
                setBrands(res.data);
                setLoadData(true);
            });
    }, [brands]);
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
                                    <h5 className="card-title">Hãng điện thoại</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Brand_0" className="table table-striped responsive modphone-table">

                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">#</th>
                                                <th className="col-2 tb-item">Images</th>
                                                <th className="col-2 tb-item">Name</th>
                                                <th className="col-2 tb-item">PostDay</th>
                                                <th className="col-1 tb-item">Feature</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                brands.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="tb-item">{item.id}</td>
                                                        <td className="img-modphone">
                                                            <Image src={'https://localhost:7258/images/brands/' + item.logo} />
                                                        </td>
                                                        <td className="tb-item">{item.name}</td>
                                                        <td className="tb-item">{day.getDate()} / {day.getMonth() + 1} / {day.getFullYear()}</td>
                                                        <td className="tb-item">
                                                            <Row>
                                                                <Col className="col-6"> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                                <Col className="col-6" onClick={handleShowEdit}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
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
            </main>
            {/* THÊM DÒNG ĐIỆN THOẠI */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm hãng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBrand />
                </Modal.Body>

            </Modal>

            {/* CẬP NHẬT ĐIỆN THOẠI */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật hãng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditBrand />
                </Modal.Body>

            </Modal>
            <Footer />
        </>
    );
}

export default Brand;