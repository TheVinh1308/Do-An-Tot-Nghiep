import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useCallback, useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Tabs from "../Tabs/Tabs"
import { jwtDecode } from "jwt-decode"
import { Button, Col, Modal, Row } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const { id } = useParams()
    const [images, setImages] = useState([]);
    const [colors, setColors] = useState([{ phone: {} }])
    const [color, setColor] = useState({})
    const [roms, setRoms] = useState([{ phone: {} }]);
    const { product } = props // điện thoại đang được chọn
    const [phones, setPhones] = useState([]) // danh sách điện thoại
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedRom, setSelectedRom] = useState(null);
    const [selectedColorButton, setSelectedColorButton] = useState(null);
    const [selectedRomButton, setSelectedRomButton] = useState(null);

    const { phone, setPhone } = useContext(ShopContext);

    // lấy hình ảnh theo phone
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/${id}`)
            .then((res) => {
                setImages(res.data);
            });
    }, [id, images.path]);
    // lấy hình ảnh theo màu phone được chọn
    const handleChangeColor = useCallback((id) => {
        axios.get(`https://localhost:7258/api/Images/${id}`)
            .then((res) => {
                setColor(res.data);
            });
    }, []);


    // lấy danh sách màu và rom của dòng điện thoại
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/GetImgByModPhone/${product.modPhone.id}`)
            .then((res) => {
                setColors(res.data);
                setRoms(res.data)
            });
    }, [product.modPhone.id]);
    //lấy danh sách tất cả các điện thoại
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
            .then((res) => {
                setPhones(res.data)
            });
    }, []);
    //thông tin người dùng
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();


    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setIsAuthenticated(true);
        }
    }, []);



    const selectedPhone = phones.find(item =>
        item.rom === selectedRom &&
        item.color === selectedColor &&
        item.modPhoneId === product.modPhone.id)
    useEffect(() => {
        setPhone(selectedPhone?.id);
    }, [selectedPhone, setPhone]);
    console.log(`phone`, phone);
    console.log(`selectedPhone`, selectedPhone);
    useEffect(() => {
        if (colors.length > 0 && selectedColor === null && selectedRom === null && selectedColorButton === null && selectedRomButton === null) {
            let availableColor = null;
            let availableRom = null;

            // Find the first color with sufficient stock
            for (let i = 0; i < colors.length; i++) {
                if (colors[i].phone.stock > 0) {
                    availableColor = colors[i];
                    availableRom = colors[i]
                    break;
                }
            }



            if (availableColor) {
                setSelectedColor(availableColor.phone.color);
                setSelectedColorButton(availableColor.phone.color);
                handleChangeColor(availableColor.phoneId);
                setIndexImage(1);
            }
            if (availableRom) {
                setSelectedRom(availableRom.phone.rom);
                setSelectedRomButton(availableRom.phone.rom);
            }
        }
    }, [colors, roms, selectedColor, selectedRom, selectedColorButton, selectedRomButton]);


    const uniqueRom = {};
    roms.forEach(item => {
        if (!uniqueRom[item.phone.rom]) {
            uniqueRom[item.phone.rom] = item;
        }
    });
    const uniqueRomArray = Object.values(uniqueRom);

    const [indexImage, setIndexImage] = useState('');
    // hình ảnh mặc định khi chưa chọn ảnh
    useEffect(() => {
        if (color.path) {
            const parsedList = JSON.parse(color.path);
            setIndexImage(parsedList[0]);
        }
    }, [color.path]);
    useEffect(() => {

    }, [new Date()]);
    const [PhoneEx, setPhoneEx] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
            .then((res) => {
                setPhoneEx(res.data)
            });
    }, [userId]);

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
    const handleAddCart = (name) => {
        if (isAuthenticated && selectedPhone) { // Kiểm tra xem người dùng đã đăng nhập và đã chọn sản phẩm
            const phoneEx = PhoneEx.find(item => item.phoneId === selectedPhone.id);
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
                        formDataHistory.append("action", "Thêm sản phẩm vào giỏ hàng");
                        formDataHistory.append("userId", userId);
                        formDataHistory.append("time", new Date().toISOString());
                        formDataHistory.append("productId", selectedPhone.id); // Sử dụng selectedPhone.id
                        formDataHistory.append("productName", name);
                        formDataHistory.append("operation", "Thêm");
                        formDataHistory.append("amount", 1);

                        axios.post(`https://localhost:7258/api/History`, formDataHistory)
                            .then(ress => {
                                notify();
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
                formAddCart.append("phoneId", selectedPhone.id); // Sử dụng selectedPhone.id
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
                        formDataHistory.append("productName", name);
                        formDataHistory.append("operation", "Thêm");
                        formDataHistory.append("amount", 1);

                        axios.post(`https://localhost:7258/api/History`, formDataHistory)
                            .then(ress => {
                                notify();
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
    };




    return (
        <>
            <ToastContainer />
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        {
                            (color.path) &&
                            JSON.parse(color.path).map((path, pathIndex) => (
                                pathIndex !== 0 ?
                                    <>
                                        <button key={pathIndex} onClick={() => (setIndexImage(path))}>
                                            <img
                                                src={`https://localhost:7258/images/products/${path}`}
                                                alt=""
                                            />
                                        </button>
                                    </>
                                    : null
                            ))}
                    </div>
                    <div className="productdisplay-img">
                        <img

                            className="productdisplay-main-img"
                            src={`https://localhost:7258/images/products/${indexImage}`}
                            alt=""
                        // style={{ display: pathIndex === indexImage ? 'block' : 'none' }}
                        />
                    </div>

                </div>
                <div className="productdisplay-right">
                    <h1>{selectedPhone && selectedPhone.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">

                        {/* <div className="productdisplay-right-price-new">${selectedPhone && (selectedPhone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div> */}
                        {

                            product.modPhone.promotionId != 1 ? (
                                new Date(product.modPhone.promotion.startDay) > new Date() ? (<><div className="productdisplay-right-price-new">${selectedPhone && (selectedPhone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div><div><img className="img-km" src="https://localhost:7258/images/khac/khuyenMai.webp" alt="" /></div></>) :
                                    ((new Date() > new Date(product.modPhone.promotion.endDay)) ? <div className="productdisplay-right-price-new">${selectedPhone && (selectedPhone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div> :
                                        <>
                                            <div className="productdisplay-right-price-new">${selectedPhone && (selectedPhone.price - ((selectedPhone.price * selectedPhone.modPhone.promotion.discountPercent) / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                            <div className="productdisplay-right-price-old">${selectedPhone && (selectedPhone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                        </>))
                                : (<div className="productdisplay-right-price-new">${selectedPhone && (selectedPhone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>)
                        }

                    </div>
                    <div className="productdisplay-right-description">
                        {product.modPhone.description}
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Rom</h1>
                        <div className="productdisplay-right-rom">
                            <div className="productdisplay-right-roms">
                                {
                                    Array.isArray(uniqueRomArray) && uniqueRomArray.map((item, index) => {

                                        return (
                                            <button
                                                key={index}
                                                style={{ width: 50, height: 50, margin: 0, padding: 0, backgroundColor: "#B4B1B1", color: "#000" }}
                                                className={`${selectedRomButton === item.phone.rom ? 'selected' : ''}`}
                                                // disabled={item.phone.stock < 1 }
                                                onClick={() => {
                                                    handleChangeColor(item.phoneId);
                                                    setSelectedRom(item.phone.rom);
                                                    setSelectedRomButton(item.phone.rom);
                                                    setSelectedColorButton(item.phone.color);
                                                }}
                                            >
                                                {item.phone.rom}
                                            </button>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            {
                                Array.isArray(colors) && colors.map((item, index) => (
                                    item.phone.rom === selectedRom && (
                                        <button
                                            key={index}
                                            className={`${selectedColorButton === item.phone.color ? 'selected' : ''} ${item.phone.stock < 1 && selectedRom === item.phone.rom ? 'disabled' : ''}`}
                                            style={{ background: "#fff", width: 60, height: 60, margin: 0, padding: 0 }}
                                            disabled={selectedRom === item.phone.rom && item.phone.stock < 1}
                                            onClick={() => {
                                                handleChangeColor(item.phoneId);
                                                setSelectedColor(item.phone.color);
                                                setSelectedColorButton(item.phone.color);
                                            }}
                                        >
                                            <img src={`https://localhost:7258/images/products/${JSON.parse(item.path)[0]}`} alt="" style={{ width: 50, backgroundColor: "#fff" }} />
                                        </button>
                                    )
                                ))

                            }
                        </div>
                    </div>

                    {/* <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tag: </span>Modern, Latest</p> */}
                    <div>
                        <Row>
                            <Link to="/pay"> <Button className="btn-muangay">
                                Mua ngay
                            </Button></Link>

                        </Row>
                        <Row>
                            <Col md={6} className="col-cart"><Button className="btn-cart" onClick={() => handleAddCart(selectedPhone.name)}><i class="bi bi-cart"></i></Button></Col>
                            <Col md={6} className="col-heart"><Button className="btn-heart"><i class="bi bi-heart-fill"></i></Button></Col>
                        </Row>
                    </div>
                </div>
            </div >
            {selectedPhone && (
                <Tabs selectedPhone={selectedPhone} isAuthenticated={isAuthenticated} userId={userId} userName={userName} />
            )
            }


        </>
    );
}

export default ProductDisplay;