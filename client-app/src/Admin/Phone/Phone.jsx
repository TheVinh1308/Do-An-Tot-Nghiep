import { Form } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddPhone from "./AddPhone";
import EditPhone from "./EditPhone";
import axios from "axios";
import Footer from "../Footer/Footer";
import { jwtDecode } from "jwt-decode";
import 'datatables.net-buttons/js/buttons.html5.mjs';
const Phone = () => {
    // SHOW THÊM ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỬA ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const [phoneSelect, setPhoneSelect] = useState(null);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (phoneId) => {
        setShowEdit(true);
        setPhoneSelect(phoneId);
    }

    // KHỞI TẠO DATATABLE

    const [phones, setPhones] = useState([]);
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_Phone_0').DataTable({
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

    const [dataTableData, setDataTableData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
            .then(res => {
                setPhones(res.data);
                setDataTableData(res.data); // Cập nhật dữ liệu DataTable
                setLoadData(true);
            });
    }, [phones])

    // User
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setIsAuthenticated(true);
        }
    }, []);
    // end user


    // XOÁ PHONE
    const handleDelete = (phoneId) => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn xoá brand này?");
        if (shouldDelete) {
            axios.delete(`https://localhost:7258/api/Phones/${phoneId}`)
                .then(() => {
                    const deletePhone = phones.find(p => p.id === phoneId);
                    const formDataHistory = new FormData();
                    formDataHistory.append("action", "Xoá điện thoại");
                    formDataHistory.append("userId", userId);
                    formDataHistory.append("time", new Date().toISOString());
                    formDataHistory.append("productId", deletePhone.id);
                    formDataHistory.append("productName", deletePhone.name);
                    formDataHistory.append("operation", "Xoá");
                    formDataHistory.append("amount", deletePhone.stock);
                    axios.post(`https://localhost:7258/api/History`, formDataHistory)
                        .then(ress => {
                            // Handle response if necessary
                        });

                    // Update state
                    setPhones(prevPhones => prevPhones.filter(phone => phone.id !== phoneId));
                    setDataTableData(prevData => prevData.filter(phone => phone.id !== phoneId));
                })
                .catch(error => {
                    console.error("Xoá phone không thành công: ", error);
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
                                    <h5 className="card-title">Danh sách điện thoại</h5>
                                    <div className="btn btn-success btn-addmodphone" onClick={handleShow}>Thêm</div>
                                    <table id="DataTables_Table_Phone_0" className="table table-striped responsive modphone-table">

                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-1 tb-item">SKU</th>
                                                <th className="col-3 tb-item">Name</th>
                                                <th className="col-2 tb-item">Price</th>
                                                <th className="col-1 tb-item">Rom</th>
                                                <th className="col-2 tb-item">Color</th>
                                                <th className="col-1 tb-item">Stock</th>
                                                <th className="col-1 tb-item">Feature</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                dataTableData.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td className="tb-item">{item.id}</td>
                                                        <td className="tb-item">{item.sku}</td>
                                                        <td className="tb-item">{item.name}</td>
                                                        <td className="tb-item">{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                        <td className="tb-item">{item.rom}</td>
                                                        <td className="tb-item">{item.color}</td>
                                                        <td className="tb-item">{item.stock}</td>
                                                        <td className="tb-item">
                                                            <Row>
                                                                <Col className="col-6" onClick={() => handleDelete(item.id)}> <i class="bi bi-trash btn btn-danger"></i></Col>
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
                    <EditPhone PhoneId={phoneSelect} />
                </Modal.Body>

            </Modal>

        </>
    );
}

export default Phone;