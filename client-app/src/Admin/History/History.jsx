import { Breadcrumb, Dropdown, Modal } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useEffect, useState } from "react";
import $ from "jquery";
import Footer from "../Footer/Footer";
import InforHistory from "./InforHistory";
import "./History.css"

const History = () => {
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        if (loadData) {
            const table = $('#DataTables_Table_History').DataTable({
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
                                        <div>
                                            <Dropdown>
                                                <Dropdown.Toggle>
                                                    Lọc theo <i class="bi bi-caret-right-fill" ></i> {title}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => handleFill("Hành động")}>
                                                        Hành động <i class="bi bi-caret-right-fill" style={{ float: 'right', marginTop: '2px', fontSize: '15px' }}></i>
                                                        <div className="submenu">
                                                            <div className="submenu-item">Mua hàng</div>
                                                            <div className="submenu-item">Quản lí </div>
                                                        </div>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item onClick={() => handleFill("Thao tác")}>
                                                        Thao tác <i class="bi bi-caret-right-fill" style={{ float: 'right', marginTop: '2px', fontSize: '15px' }}></i>
                                                        <div className="submenu">
                                                            <div className="submenu-item">Thêm</div>
                                                            <div className="submenu-item">Xoá</div>
                                                            <div className="submenu-item">Sửa</div>
                                                        </div>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item onClick={() => handleFill("Thời gian")}>
                                                        Thời gian

                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        {title === "Thời gian" ? (
                                            <div className="time-fill">
                                                <label htmlFor="">Từ ngày: </label>
                                                <input type="date" name="" id="" />
                                                <label htmlFor="">Đến ngày: </label>
                                                <input type="date" name="" id="" />
                                                <button><i class="bi bi-funnel"></i></button>
                                            </div>
                                        ) : ""}

                                    </div>

                                    <table id="DataTables_Table_History" className="table table-striped responsive modphone-table">
                                        <thead>
                                            <tr>
                                                <th className="col-1 tb-item">ID</th>
                                                <th className="col-2 tb-item">User</th>
                                                <th className="col-1 tb-item">Hành động</th>
                                                <th className="col-2 tb-item">Ngày giờ</th>
                                                <th className="col-2 tb-item">Sản phẩm</th>
                                                <th className="col-2 tb-item">Thao tác</th>
                                                <th className="col-1 tb-item">Số lượng</th>
                                                <th className="col-2 tb-item">Chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {
                                                    history.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.id}</td>
                                                            {/* <td>{item.user.}</td> */}
                                                        </tr>
                                                    ))
                                                }
                                                <td>001</td>
                                                <td>Phạm Hoan Vinh</td>
                                                <td>Mua hàng</td>
                                                <td>25/05/2024</td>
                                                <td>Samsung Galaxy S24</td>
                                                <td>Thêm</td>
                                                <td>01</td>
                                                <td onClick={handleShowApp}><i className="bi bi-info-circle-fill btn btn-success"></i></td>
                                            </tr>
                                            {/* Các hàng khác */}
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
