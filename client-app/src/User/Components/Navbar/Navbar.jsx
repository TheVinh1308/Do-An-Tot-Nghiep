import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import nav_droppdown from "../Assets/dropdown_icon.png"
import 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import { format } from "date-fns";
import { ShopContext } from "../../Context/ShopContext";
import { Form } from "react-bootstrap";
const Navbar = () => {
    const [menu, setMenu] = useState();
    // const shopContext = useContext(ShopContext);
    const menuRef = useRef();
    const { isAddToCart } = useContext(ShopContext);
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
                        setResetAmount(res.data.length);
                    }

                })

                .catch((error) => console.error('Error fetching carts:', error));
        }
    }, [userId,isAddToCart]);

    // thông báo
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Notification/GetNoficationByUserId/${userId}`)
            .then(res => {
                setNotification(res.data);
            });
    }, [userId])

    const reversedNotifications = notification.slice().reverse();
    const [value, setValue] = useState();
    const [result, setResult] = useState([]);
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 500);


        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    useEffect(() => {
        if (debouncedValue) {
            axios.get(`https://localhost:7258/api/Phones/search/${debouncedValue}`)
                .then(response => {
                    console.log("search", response.data);
                    setResult(response.data);
                })
                .catch(error => {
                    console.error('Lỗi lấy dữ liệu:', error);
                });
        } else {
            setResult([]);
        }
    }, [debouncedValue]);






    return (
        <>

            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <p className="d-inline">2VPHONE</p>
                    </Link>
                </div>
                <img onClick={dropdown_toggle} src={nav_droppdown} alt="" className="nav-dropdown" />
                <ul className="nav-menu" ref={menuRef}>


                    <div>
                        <div className="search-form-container">
                            <div className="search-form" >
                                <input className="search-input" type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
                                <button className="search-button" type="submit">Search</button>
                            </div>
                        </div>
                        <div className="product-suggestions">
                            {
                                result.length && value !== "" > 0 ? result.map((item) => (
                                    <Link to={`${item.modPhone.brand.name}/${item.id}`}>
                                        <div className="product-item" key={item.id}>
                                            <img src={`https://localhost:7258/images/products/${item.modPhone.image}`} alt="Product 1" className="product-image" />
                                            <div className="product-info">
                                                <h3 className="product-name">{item.name}</h3>
                                                <p className="product-price">{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )) : <></>
                            }
                        </div>



                    </div>





                </ul>
                <div className="nav-login-cart">

                   
                    <div>
                        <nav role="navigation" class="primary-navigation">

                            <ul>
                                {
                                    isAuthenticated ?
                                        <li className="nav-item dropdown pe-3">
                                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                                <i class="bi bi-bell dropdown-toggle"></i>
                                                <div className="nav-bell-count ">{reversedNotifications.length}</div>
                                            </a>{/* End Profile Iamge Icon */}
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile ul-nofi">
                                                {
                                                    reversedNotifications.map((item, index) => (
                                                        <>
                                                            {item.title.includes("Khuyến mãi") ? (
                                                                <>
                                                                    <li key={index} style={{ marginBottom: "0px" }}>
                                                                        <a href={item.url}>
                                                                            {item.title}
                                                                            <p>
                                                                                {format(new Date(item.phone.modPhone.promotion.startDay), 'dd/MM/yyyy')} - {format(new Date(item.phone.modPhone.promotion.endDay), 'dd/MM/yyyy')}
                                                                            </p>
                                                                        </a>
                                                                    </li>
                                                                    <li style={{ marginBottom: "0px" }}>
                                                                        <hr className="dropdown-divider" />
                                                                    </li>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <li key={index} style={{ marginBottom: "0px" }}>
                                                                        <a href={`${item.url}`}>
                                                                            {item.title}
                                                                            <p> {format(new Date(item.time), 'dd/MM/yyyy')} </p>
                                                                        </a>
                                                                    </li>
                                                                    <li style={{ marginBottom: "0px" }}>
                                                                        <hr className="dropdown-divider" />
                                                                    </li>
                                                                </>
                                                            )}
                                                        </>
                                                    ))
                                                }


                                            </ul>
                                        </li>

                                        :
                                        <>
                                            <div></div>
                                        </>
                                }


                            </ul>
                        </nav>
                    </div>
                    <Link to="/cart">
                        <img src={cart_icon} alt="" className="img-cart" />
                    </Link>
                   
                    <div className="nav-cart-count">{resetAmount}</div>

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
                                            <a className="dropdown-item d-flex align-items-center" href="/favorite">
                                                    <i className="bi bi-heart" />
                                                    <span>Sản phẩm đã thích</span>
                                                </a>
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li style={{ marginBottom: "0px" }}>
                                                <a className="dropdown-item d-flex align-items-center" href="/invoice">
                                                    <i class="bi bi-clock-history"></i>
                                                    <span>Lịch sử mua hàng</span>
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


                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;