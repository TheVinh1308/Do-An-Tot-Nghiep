import { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Row } from "react-bootstrap";
import { Slider } from "@mui/material";
import axios from "axios";

const ShopCategory = (props) => {
    const { phones } = useContext(ShopContext)
    console.log(phones);
    const [price, setPrice] = useState([1000, 560000]);
    const [images, setImages] = useState([]);



    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images`)
          .then((res) => {
            setImages(res.data);
          });
    }, []); 
    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const [filled, setFilled] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCancelFill = (itemToRemove) => {
        if (itemToRemove) {
            setSelectedItems(selectedItems.filter(item => item !== itemToRemove));

        } else {
            setFilled(false);
            setSelectedItems([]);
        }


    }
    const handleCancel = () => {
        setFilled(false);
        setSelectedItems([]);
    }
    const handleClickFill = (itemName) => {
        setFilled(true);
        setSelectedItems([...selectedItems, itemName]);
    }

    return (
        <div className="shop-category">
            <Navbar />
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-12</span>out of 36 products</p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-filter" >
                <Dropdown    >
                    <Dropdown.Toggle  >
                        Chức năng
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item onClick={() => handleClickFill("Chơi Game")} name="choiGame">Chơi game</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Quay Phim")} name="quayPhim">Quay phim</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Chức năng cơ bản")} name="coBan">Chức năng cơ bản</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Dung lượng
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item onClick={() => handleClickFill("2 GB")}>
                            2 GB
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("3 GB")}>
                            3 GB
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("4 GB")}>4 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("6 GB")}>6 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("8 GB")}>8 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("12 GB")}>12 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("16 GB")}>16 GB</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Giá tiền
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <div style={{ width: '300px' }}>
                            <h5 className="title-price">Kéo thả số tiền mong muốn</h5>
                            <div>
                                <p className="show-price">{price[0]} - {price[1]}</p>
                            </div>
                            <Slider className="slider-price"
                                getAriaLabel={() => 'Temperature range'}
                                value={price}
                                onChange={handleChange}
                                min={0}
                                max={50000000}
                                step={100000}
                                valueLabelDisplay="auto"
                            />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button className="shopcategory-fill" style={{ margin: "5px 0" }}>Huỷ</button>
                                <button className="shopcategory-fill" onClick={() => handleClickFill(price[0] + ' - ' + price[1])} style={{ margin: "5px 0" }}>Tìm kiếm</button>
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Lượng Pin
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item onClick={() => handleClickFill("Trên 3000 mAh")}>
                            3000 mAh
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Trên 4000 mAh")}>4000 mAh</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Trên 5000 mAh")}>5000 mAh</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Trên 6000 mAh")}>6000 mAh</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Kích thước
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item onClick={() => handleClickFill("4 Inches")}>4 Inches</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("5 Inches")}>5 Inches</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("6 Inches")}>6 Inches</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("7 Inches")}>7 Inches</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Chip xử lý
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item onClick={() => handleClickFill("Apple Bionic")}>Apple Bionic</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Exynos")}>Exynos</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("ARM Snapdragon")}>ARM Snapdragon</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("MediaTek")}>MediaTek</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("Kirin")}> Kirin</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {filled && selectedItems.length > 0 ? (
                <div className="shopcategory-filtered">
                    <h4>Các mục đã lọc</h4>
                    <hr />
                    {selectedItems.map((item, index) => (
                        <button key={index} className="shopcategory-fill-cancel">
                            {item}
                            <button className="cancel-fill" onClick={() => handleCancelFill(item)}>x</button>
                        </button>
                    ))}
                    <button className="shopcategory-fill-cancel" onClick={handleCancel}>Huỷ lọc</button>
                </div>
            ) : ""}



            <div className="shopcategory-products">

                {phones.map((item, index) => (
                    item !== null ?
                        props.brand === item.modPhone.brand.name
                            ?
                            Array.isArray(images) && images.map((itemImg, indexImg) => (
                                itemImg.phoneId === item.id ?
                            <Item
                                key={index}
                                id={item.id}
                                name={item.name}
                                image={`https://localhost:7258/images/products/${JSON.parse(itemImg.path)[0]}`}
                                price={(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} 
                            // ld_price={item.old_price}
                            />
                            : null
                            ))
                            : null
                            
                        : null
                            
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
            <Footer />
        </div>

    );
}

export default ShopCategory;