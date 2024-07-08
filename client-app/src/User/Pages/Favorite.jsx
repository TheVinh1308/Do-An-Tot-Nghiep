import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Button, Col, Row } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import "./CSS/Favorite.css"
import { ShopContext } from "../Context/ShopContext";

const Favorite = () => {
    const [username, setusername] = useState();
    const [userId, setuserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [favorites, setFavorites] = useState([])
    const { setIsAddToCart, setTotalItemPrice } = useContext(ShopContext);
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setusername(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setuserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (userId) {
                try {
                    axios.get(`https://localhost:7258/api/Favorites/GetFavByUserId/${userId}`).then((res) => setFavorites(res.data))
                   

                } catch (error) {
                    console.error('Error fetching invoices or invoice details:', error);
                }
        }
    }, [userId]);

    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images`).then((res) => setImages(res.data))
        .catch((err) => console.log("Loi lay du lieu: ",err))
    },[])

    const [PhoneEx, setPhoneEx] = useState([{phone: {}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
            .then((res) => {
                setPhoneEx(res.data)
            });
    }, []);

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
            .then((res) => {
                setPhones(res.data)
            });
    }, []);

    

    const notify = () => toast.success("Thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const handleAddCart = (id) => {
        if (isAuthenticated) { // Kiểm tra xem người dùng đã đăng nhập và đã chọn sản phẩm
            const phoneEx = PhoneEx.find(item => item.phoneId === id);
            const selectedPhone = phones.find(item => item.id === id)
            if (phoneEx) {
                // Cập nhật số lượng trong giỏ hàng
                const formEditCart = {
                    ...phoneEx,
                    quantity: phoneEx.quantity + 1
                };

                axios.put(`https://localhost:7258/api/Carts/${phoneEx.id}`, formEditCart, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(res => {
                        const formDataHistory = new FormData();
                        formDataHistory.append("action", "Thêm sản phẩm yêu thích vào giỏ hàng");
                        formDataHistory.append("userId", userId);
                        formDataHistory.append("time", new Date().toISOString());
                        formDataHistory.append("productId", selectedPhone.id); // Sử dụng selectedPhone.id
                        formDataHistory.append("productName", selectedPhone.name);
                        formDataHistory.append("operation", "Thêm");
                        formDataHistory.append("amount", 1);

                        axios.post(`https://localhost:7258/api/History`, formDataHistory)
                            .then(ress => {
                                notify();
                                setIsAddToCart(true)
                            })
                            .catch(error => {
                                console.error("Error adding to history:", error);
                            });
                    })
                    .catch(error => {
                        console.error("Error updating cart:", error.response || error.message || error);
                    });
            } else {
                // Thêm sản phẩm mới vào giỏ hàng
                const formAddCart = new FormData();
                formAddCart.append("userId", userId);
                formAddCart.append("phoneId",selectedPhone.id); // Sử dụng selectedPhone.id
                formAddCart.append("quantity", 1);

                axios.post(`https://localhost:7258/api/Carts`, formAddCart)
                    .then(res => {
                        axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
                            .then((res) => {
                                setPhoneEx(res.data)
                            });
                        const formDataHistory = new FormData();
                        formDataHistory.append("action", "Thêm sản phẩm vào giỏ hàng");
                        formDataHistory.append("userId", userId);
                        formDataHistory.append("time", new Date().toISOString());
                        formDataHistory.append("productId", selectedPhone.id); // Sử dụng selectedPhone.id
                        formDataHistory.append("productName", selectedPhone.name);
                        formDataHistory.append("operation", "Thêm");
                        formDataHistory.append("amount", 1);

                        axios.post(`https://localhost:7258/api/History`, formDataHistory)
                            .then(ress => {
                                notify();
                                setIsAddToCart(true)
                            })
                            .catch(error => {
                                console.error("Error adding to history:", error);
                            });
                    })
                    .catch(error => {
                        console.error("Error adding to cart:", error.response || error.message || error);
                    });
            }
        }
        else {
            window.location.href = "/login"
        }
    };




    return ( 
        <>
            <Navbar/>
            <div>
            
            <Row className="head-content">
                                <p  style={{color: "red", textAlign: "center"}}>Gồm {favorites.length} sản phẩm</p>
                            </Row>

                {favorites.length > 0  ?
                 favorites.map((item, index) => (
                   
                    <>
                        <div className="favorite">
                            <Row key={index} className="body-content">
                                <Col md={2}>
                                    {
                                        images.map((itemImage,indexImage) => (
                                            item.phoneId === itemImage.phoneId && (
                                                <div className="image">
                                                    <img src={`https://localhost:7258/images/products/${JSON.parse(itemImage.path)[0]}`} alt="" style={{width: 150}}/>
                                                </div>
                                            )
                                        ))
                                    } 
                                </Col>
                                <Col md={4} className="content-detail">
                            
                                    <h4 style={{color: "black"}}>{item.phone.name}</h4>
                                    {/* <p  style={{color: "black"}}>{item.phone.modPhone.description}</p> */}
                                    <p  style={{color: "black"}}>Màu: {item.phone.color}, Dung lượng:  {item.phone.rom} GB</p>
                                    <p style={{color: "red"}}>{(item.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    <Button className="btn-fav" onClick={() => handleAddCart(item.phone.id)}>Thêm vào giỏ hàng</Button>
                                    <Button className="btn-fav mt-3">Xóa sản phẩm yêu thích</Button>

                                </Col>
                                
                        <hr />
                            </Row>
                        </div>
                            <Row>
                               
                            </Row>
                            </>
                            ) 

                        ) : <p>Không có sản phẩm yêu thích</p>
                }
            </div>

        </>
     );
}
 
export default Favorite;