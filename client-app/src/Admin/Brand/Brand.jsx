import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddBrand from "./AddBrand";
import EditBrand from "./EditBrand";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { jwtDecode } from "jwt-decode";
const Brand = () => {
    // SHOW THÊM DÒNG ĐIỆN THOẠI
    const [show, setShow] = useState(false);
    const [brandSelect, setBrandSelect] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SHOW SỪA DÒNG ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (brandId) => {
        setShowEdit(true);
        setBrandSelect(brandId);
    }



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

    // LẤY NGÀY HIỆN TẠI
    var day = new Date();
    const [dataTableData, setDataTableData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands`)
            .then(res => {
                setBrands(res.data);
                setDataTableData(res.data); // Cập nhật dữ liệu DataTable
                setLoadData(true);
            });
    }, [brands]);

    // XOÁ BRAND
    const handleDelete = (brandId) => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn xoá brand này?");
        if (shouldDelete) {
            axios.delete(`https://localhost:7258/api/Brands/${brandId}`)
                .then(() => {
                    // Xoá thành công, cập nhật dữ liệu DataTable
                    const updatedData = dataTableData.filter(brand => brand.id !== brandId);
                    setDataTableData(updatedData);
                    const formDataHistory = new FormData();
                    formDataHistory.append("action", "Xoá nhãn hiệu");
                    formDataHistory.append("userId", userId);
                    formDataHistory.append("time", new Date().toISOString());
                    formDataHistory.append("productId", 1);
                    formDataHistory.append("operation", "Xoá");
                    formDataHistory.append("amount", 1);
                    axios.post(`https://localhost:7258/api/History`, formDataHistory)
                        .then(ress => {

                        })
                })
                .catch(error => {
                    console.error("Xoá brand không thành công: ", error);
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
                                                    <>
                                                        <tr key={index}>
                                                            <td className="tb-item">{item.id}</td>
                                                            <td className="img-modphone">
                                                                <Image src={'https://localhost:7258/images/brands/' + item.logo} />
                                                            </td>
                                                            <td className="tb-item">{item.name}</td>
                                                            <td className="tb-item">{new Date(item.postDay).toLocaleDateString()}</td>

                                                            <td className="tb-item">
                                                                <Row>
                                                                    <Col className="col-6" onClick={() => handleDelete(item.id)}> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                                    <Col className="col-6" onClick={() => handleShowEdit(item.id)}>
                                                                        <i class="bi bi-pencil-square btn btn-warning"></i>
                                                                    </Col>
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
                <Footer />
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
                    <EditBrand brandId={brandSelect} />
                </Modal.Body>

            </Modal>

        </>
    );
}

export default Brand;