import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { Col, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "datatables.net-bs5";
import $ from "jquery"
import AddPromotion from "./AddPromotion";
import AppPromotion from "./AppPromotion";
import EditPromotion from "./EditPromotion";
import Footer from "../Footer/Footer";
import axios from "axios";
import { format } from "date-fns";
import 'datatables.net-buttons/js/buttons.html5.mjs';
import { jwtDecode } from "jwt-decode";
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
    const [promotionId, setPromotionId] = useState(null);
    const handleShowEdit = (promotionID) => {
        setShowEdit(true);
        setPromotionId(promotionID);
    };

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
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        if (loadData) {
            const table = $('#DataTables_Table_Promotion_0').DataTable({
                dom: 'Bfrtip',
                responsive: true,
                autoWidth: true,
                buttons: [
                    { extend: 'copy', className: 'btn bg-primary text-white' },
                    { extend: 'csv', className: 'btn bg-secondary text-white' },
                    { extend: 'excel', className: 'btn bg-success text-white', filename: `data_${Date.now()}` },
                    { extend: 'pdf', className: 'btn bg-danger text-white', filename: `data_${Date.now()}` },
                ],
            });

            return () => {
                table.destroy(true);
            };
        }
    }, [loadData]);
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Promotion`)
            .then(res => {
                setPromotions(res.data);
                setLoadData(true);
            });
    }, []);

    const handleDelete = (promotionId) => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn xoá khuyến mãi này không này?");
        if (shouldDelete) {
            axios.delete(`https://localhost:7258/api/Promotion/${promotionId}`)
                .then(() => {
                    // Xoá thành công, cập nhật dữ liệu DataTable
                    const deletePromotion = promotions.filter(p => p.id !== promotionId);
                    setPromotions(deletePromotion);
                    const sePromotion = promotions.find(item => item.id == promotionId);
                    const formDataHistory = new FormData();
                    formDataHistory.append("action", "Xoá khuyến mãi");
                    formDataHistory.append("userId", userId);
                    formDataHistory.append("time", new Date().toISOString());
                    formDataHistory.append("productId", 1);
                    formDataHistory.append("productName", sePromotion.name);
                    formDataHistory.append("operation", "Xoá");
                    formDataHistory.append("amount", 1);
                    axios.post(`https://localhost:7258/api/History`, formDataHistory)
                        .then(ress => {

                        })
                })
                .catch(error => {
                    console.error("Xoá khuyến mãi không thành công: ", error);
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
                                            {
                                                promotions.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td className=" tb-item">{item.id}</td>
                                                        <td className="tb-item">{item.name}</td>
                                                        <td className=" tb-item">{item.discountPercent}%</td>
                                                        <td className=" tb-item">{item.content}</td>
                                                        <td>{format(new Date(item.startDay), 'dd/MM/yyyy')}</td>
                                                        <td>{format(new Date(item.endDay), 'dd/MM/yyyy')}</td>
                                                        <td className="tb-item">
                                                            <Row>
                                                                <Col className="col-4" onClick={() => handleDelete(item.id)}> <i class="bi bi-trash btn btn-danger"></i></Col>
                                                                <Col className="col-4" onClick={() => handleShowEdit(item.id)}> <i class="bi bi-pencil-square btn btn-warning"></i></Col>
                                                                <Col className="col-4" onClick={handleShowApp}> <i class="bi bi-app btn btn-success"></i></Col>
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
                    <EditPromotion promotionID={promotionId} />
                </Modal.Body>


            </Modal>


        </>
    );
}

export default Promotion;