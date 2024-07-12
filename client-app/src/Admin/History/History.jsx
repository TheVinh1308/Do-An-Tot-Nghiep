import { Breadcrumb, Dropdown, Modal } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Header from "../Header";
import "datatables.net-bs5";
import { useEffect, useState } from "react";
import $ from "jquery";
import Footer from "../Footer/Footer";
import InforHistory from "./InforHistory";
import "./History.css"
import axios from "axios";
import { format, addHours } from 'date-fns';

const History = () => {
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        if (loadData) {
            $('#DataTables_Table_History').DataTable({
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

    const [showApp, setShowApp] = useState(false);
    const handleCloseApp = () => setShowApp(false);
    const handleShowApp = () => setShowApp(true);

    const [title, setTitle] = useState("Phân loại");

    const handleFill = (title) => {
        setTitle(title);
    }

    const [history, setHistory] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/History`)
            .then(res => {
                setHistory(res.data);
                setLoadData(true);
            });
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
                                    <div className="head-body">
                                        <h5 className="card-title">Lịch sử thao tác</h5>


                                    </div>

                                    <table id="DataTables_Table_History" className="table table-striped responsive modphone-table">
                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-2 tb-item">User</th>
                                                <th className="col-2 tb-item">Hành động</th>
                                                <th className="col-2 tb-item">Ngày giờ</th>
                                                <th className="col-2 tb-item">Sản phẩm</th>
                                                <th className="col-1 tb-item">Thao tác</th>
                                                <th className="col-1 tb-item">Số lượng</th>
                                                <th className="col-2 tb-item">Chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                history.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.user?.fullname}</td>
                                                        <td>{item.action}</td>
                                                        <td>{format(addHours(new Date(item.time), 7), 'H:mm:ss - dd/MM/yyyy')}</td>
                                                        <td>{item.action.includes("hình ảnh") ? item.phone.name : item.productName}</td>
                                                        <td>{item.operation}</td>
                                                        <td>{(item.amount) == 0 ? "-" : item.amount}</td>
                                                        <td onClick={handleShowApp}><i className="bi bi-info-circle-fill btn btn-success"></i></td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main >
            <Modal size="xl" show={showApp} onHide={handleCloseApp}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Áp dụng khuyến mãi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InforHistory />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default History;
