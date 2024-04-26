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
import EditModPhone from "./EditModProduct";
import axios from "axios";
const ModProduct = () => {
    // SHOW THÊM DÒNG ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỪA DÒNG ĐIỆN THOẠI
    const [modPhoneSelect, setModPhoneSelect] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (modPhoneId) => {
        setShowEdit(true);
        setModPhoneSelect(modPhoneId);
    }


    const [modPhone, setModPhone] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        if (loadData) {
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
        }

    }, [loadData]);

    const [dataTableData, setDataTableData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then(res => {
                setModPhone(res.data);
                setDataTableData(res.data); // Cập nhật dữ liệu DataTable
                setLoadData(true);
            });
    }, []);


    // XOÁ BRAND
    const handleDelete = (modPhoneId) => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn xoá dòng sản phẩm này?");
        if (shouldDelete) {
            axios.delete(`https://localhost:7258/api/ModPhones/${modPhoneId}`)
                .then(() => {
                    // Xoá thành công, cập nhật dữ liệu DataTable
                    const updatedData = dataTableData.filter(modPhone => modPhone.id !== modPhoneId);
                    setDataTableData(updatedData);
                })
                .catch(error => {
                    console.error("Xoá dòng sản phẩm không thành công: ", error);
                });
        }
    }
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
                                            {
                                                modPhone.map((item, index) => (
                                                    <>
                                                        <tr key={index}>
                                                            <td className="tb-item">{item.id}</td>
                                                            <td className="img-modphone">
                                                                <Image src={'https://localhost:7258/images/modPhones/' + item.image} />
                                                            </td>
                                                            <td className="tb-item">{item.name}</td>
                                                            <td className="tb-item">{item.screenSize}</td>
                                                            <td className="tb-item">{item.ram}</td>
                                                            <td className="tb-item">{item.os}</td>
                                                            <td className="tb-item">{item.cpu}</td>
                                                            <td className="tb-item">{item.battery}</td>
                                                            <td className="tb-item">
                                                                <Row>
                                                                    <Col className="col-6" onClick={() => handleDelete(item.id)}> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                                    <Col className="col-6" onClick={() => handleShowEdit(item.id)}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                                </Row>

                                                            </td>

                                                        </tr>
                                                    </>
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
                    <EditModPhone modPhoneId={modPhoneSelect} />
                </Modal.Body>

            </Modal>
            <Footer />
        </>
    );
}

export default ModProduct;