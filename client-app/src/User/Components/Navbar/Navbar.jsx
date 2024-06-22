import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_droppdown from "../Assets/dropdown_icon.png"
import iphone_icon from "../Assets/iphone.png"
import samsung_icon from "../Assets/samsung.png"
import vivo_icon from "../Assets/vivo.png"
import oppo_icon from "../Assets/oppo.png"
import huawei_icon from "../Assets/huawei.png"
import xiaomi_icon from "../Assets/xiaomi.png"
import 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
const Navbar = () => {
    const [menu, setMenu] = useState();
    // const shopContext = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

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

    const handleLogout = () => {
        // Xóa token khỏi cookie
        window.location.href = "/"
        localStorage.removeItem("jwt")

        // Cập nhật trạng thái đăng nhập
        setIsAuthenticated(false);

    };

    const [carts, setCarts] = useState([]);
    const [resetAmount, setResetAmount] = useState();
    // Fetch cart items based on userId
    useEffect(() => {
        if (userId) {
            axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
                .then((res) => {
                    setCarts(res.data)
                    if (carts) {
                        setResetAmount(carts.length);
                    }

                })

                .catch((error) => console.error('Error fetching carts:', error));
        }
    }, [userId]);



    return (
        <>

            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>2VPHONE</p>
                </div>
                <img onClick={dropdown_toggle} src={nav_droppdown} alt="" className="nav-dropdown" />
                <ul className="nav-menu" ref={menuRef}>
                    <li onClick={() => { setMenu("iphone") }}>
                        <Link to="/iphone" style={{ textDecoration: "none" }}>
                            {/* <img clasname="icon" src={iphone_icon} alt="" /> */}
                            IPHONE
                        </Link>{menu === "iphone" ? <hr /> : <></>}
                    </li>

                    <li onClick={() => { setMenu("samsung") }}>
                        <Link to="/samsung" style={{ textDecoration: "none" }}>
                            {/* <img classname="icon" src={samsung_icon} alt="" /> */}
                            SAMSUNG
                        </Link>{menu === "samsung" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("vivo") }}>
                        <Link to="/vivo" style={{ textDecoration: "none" }}>
                            {/* <img classname="icon" src={vivo_icon} alt="" /> */}
                            VIVO
                        </Link>{menu === "vivo" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("oppo") }}>
                        <Link to="/oppo" style={{ textDecoration: "none" }}>
                            {/* <img classname="icon" src={oppo_icon} alt="" /> */}
                            OPPO
                        </Link>{menu === "oppo" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("huawei") }}>
                        <Link to="/huawei" style={{ textDecoration: "none" }}>
                            {/* <img classname="icon" src={huawei_icon} alt="" /> */}
                            HUAWEI
                        </Link>{menu === "huawei" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("xiaomi") }}>
                        <Link to="/xiaomi" style={{ textDecoration: "none" }}>
                            {/* <img classname="icon" src={xiaomi_icon} alt="" /> */}
                            XIAOMI
                        </Link>{menu === "xiaomi" ? <hr /> : <></>}
                    </li>

                </ul>
                <div className="nav-login-cart">

                    <nav role="navigation" class="primary-navigation">
                        <ul>
                            {
                                isAuthenticated ?
                                    <li className="nav-item dropdown pe-3">
                                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                            <span className="d-none d-md-block dropdown-toggle ps-2">{userName}</span>
                                        </a>{/* End Profile Iamge Icon */}
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                            <li style={{ marginBottom: "0px" }}>
                                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                                    <i className="bi bi-person" />
                                                    <span>My Profile</span>
                                                </a>
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                                    <i className="bi bi-gear" />
                                                    <span>Account Settings</span>
                                                </a>
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                                    <i className="bi bi-question-circle" />
                                                    <span>Need Help?</span>
                                                </a>
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <a className="dropdown-item d-flex align-items-center" href="#" onClick={handleLogout}>
                                                    <i className="bi bi-box-arrow-right" />
                                                    <span>Sign Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    :
                                    <>
                                        <Link to="/login"><li>Đăng nhập</li></Link>
                                    </>
                            }


                        </ul>
                    </nav>

                    <Link to="/cart">
                        <img src={cart_icon} alt="" className="img-cart" />

                    </Link>
                    <div className="nav-cart-count">{resetAmount}</div>


                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;