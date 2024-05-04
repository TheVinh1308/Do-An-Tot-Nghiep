import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_droppdown from "../Assets/dropdown_icon.png"
import iphone_icon from "../Assets/iphone.png"
import samsung_icon from "../Assets/samsung.png"
import vivo_icon from "../Assets/vivo.png"
import oppo_icon from "../Assets/oppo.png"
import huawei_icon from "../Assets/huawei.png"
import xiaomi_icon from "../Assets/xiaomi.png"
const Navbar = () => {
    const [menu, setMenu] = useState();
    // const shopContext = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
                <img onClick={dropdown_toggle} src={nav_droppdown} alt="" className="nav-dropdown" />
                <ul className="nav-menu" ref={menuRef}>
                    <li onClick={() => { setMenu("iphone") }}>
                        <Link to="/iphone" style={{ textDecoration: "none" }}>
                            <img clasname="icon" src={iphone_icon} alt="" />
                        </Link>{menu === "iphone" ? <hr /> : <></>}
                    </li>

                    <li onClick={() => { setMenu("samsung") }}>
                        <Link to="/samsung" style={{ textDecoration: "none" }}>
                            <img classname="icon" src={samsung_icon} alt="" />
                        </Link>{menu === "samsung" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("vivo") }}>
                        <Link to="/vivo" style={{ textDecoration: "none" }}>
                            <img classname="icon" src={vivo_icon} alt="" />
                        </Link>{menu === "vivo" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("oppo") }}>
                        <Link to="/oppo" style={{ textDecoration: "none" }}>
                            <img classname="icon" src={oppo_icon} alt="" />
                        </Link>{menu === "oppo" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("huawei") }}>
                        <Link to="/huawei" style={{ textDecoration: "none" }}>
                            <img classname="icon" src={huawei_icon} alt="" />
                        </Link>{menu === "huawei" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("xiaomi") }}>
                        <Link to="/xiaomi" style={{ textDecoration: "none" }}>
                            <img classname="icon" src={xiaomi_icon} alt="" />
                        </Link>{menu === "xiaomi" ? <hr /> : <></>}
                    </li>

                </ul>
                <div className="nav-login-cart">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/cart">
                        <img src={cart_icon} alt="" />
                    </Link>
                    <div className="nav-cart-count">{0}</div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;