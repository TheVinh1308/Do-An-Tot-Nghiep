
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/admin">
                            <i class="bi bi-columns-gap"></i>
                            <span>Trang chủ</span>
                        </Link>
                    </li>{/* End Dashboard Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                            <i className="bi bi-menu-button-wide" /><span>Sản phẩm</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/admin/ModProduct" >
                                    <i className="bi bi-circle" /><span>Dòng điện thoại</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/Phone" >
                                    <i className="bi bi-circle" /><span>Điện thoại</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/Image" >
                                    <i className="bi bi-circle" /><span>Hình ảnh</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Components Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                            <i className="bi bi-journal-text" /><span>Hoá đơn</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/admin/Invoice" >
                                    <i className="bi bi-circle" /><span>Quản lí hoá đơn</span>
                                </Link>
                            </li>

                        </ul>
                    </li>{/* End Forms Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                            <i className="bi bi-layout-text-window-reverse" /><span>Khuyến mãi</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <Link to="/admin/Promotion" >
                                <i className="bi bi-circle" /><span>Quản lí khuyến mãi</span>
                            </Link>

                        </ul>
                    </li>{/* End Tables Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart" /><span>Phản hồi</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/admin/Review" >
                                    <i className="bi bi-circle" /><span>Đánh giá</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/Comment" >
                                    <i className="bi bi-circle" /><span>Bình luận</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Charts Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem" /><span>Quảng cáo</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="icons-bootstrap.html">
                                    <i className="bi bi-circle" /><span>Bootstrap Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-remix.html">
                                    <i className="bi bi-circle" /><span>Remix Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <i className="bi bi-circle" /><span>Boxicons</span>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Icons Nav */}
                    <li className="nav-heading">Về chúng tôi</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/Profile" >
                            <i className="bi bi-question-circle" />
                            <span>Profile</span>
                        </Link>
                    </li>{/* End Profile Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/Faq" >
                            <i className="bi bi-question-circle" />
                            <span>F.A.Q</span>
                        </Link>

                    </li>{/* End F.A.Q Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/Contact" >
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </Link>
                    </li>{/* End Contact Page Nav */}
                </ul>
            </aside>

        </>
    );
}

export default Sidebar;