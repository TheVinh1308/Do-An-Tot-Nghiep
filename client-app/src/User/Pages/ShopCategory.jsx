import { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from "@mui/material";
import axios from "axios";
import ReactPaginate from 'react-paginate';

const ShopCategory = (props) => {
    const { phones, setPhones, defaultPhones } = useContext(ShopContext);
    const [images, setImages] = useState([]);
    const [filled, setFilled] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [priceFilterEnabled, setPriceFilterEnabled] = useState(false);
    const [batteryFilterEnabled, setBatteryFilterEnabled] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        ram: [],
        price: [1000, 50000000],
        battery: [],
        screensize: [],
        cpu: []
    });

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images`)
            .then((res) => {
                setImages(res.data);
            });
    }, []);

    const [price, setPrice] = useState([1000, 50000000]);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
        setPriceFilterEnabled(true);
        setFilterCriteria(prev => ({ ...prev, price: newValue }));
        applyFilters({ ...filterCriteria, price: newValue });
    };

    const handleCancelFill = (itemToRemove) => {
        if (itemToRemove) {
            const updatedItems = selectedItems.filter(item => item.itemName !== itemToRemove.itemName);
            setSelectedItems(updatedItems);

            const updatedCriteria = { ...filterCriteria };
            updatedCriteria[itemToRemove.category] = updatedCriteria[itemToRemove.category].filter(value => value !== itemToRemove.itemName);
            setFilterCriteria(updatedCriteria);

            applyFilters(updatedCriteria);
        } else {
            setFilled(false);
            setSelectedItems([]);
            setFilterCriteria({
                ram: [],
                price: [1000, 50000000],
                battery: [],
                screensize: [],
                cpu: []
            });
            setPhones(defaultPhones);
        }
    };

    const handleCancel = () => {
        setFilled(false);
        setSelectedItems([]);
        setPriceFilterEnabled(false);
        setBatteryFilterEnabled(false);
        setFilterCriteria({
            ram: [],
            price: [1000, 50000000],
            battery: [],
            screensize: [],
            cpu: []
        });
        setPhones(defaultPhones);
    };

    const handleClickFill = (category, itemName) => {
        setFilled(true);
        setSelectedItems([...selectedItems, { category, itemName }]);
        setFilterCriteria(prev => {
            const newCriteria = { ...prev };
            if (!newCriteria[category].includes(itemName)) {
                newCriteria[category].push(itemName);
            }
            return newCriteria;
        });
        applyFilters({ ...filterCriteria, [category]: [...filterCriteria[category], itemName] });
    };

    const applyFilters = (criteria) => {
        let filteredPhones = defaultPhones;

        if (criteria.ram.length > 0) {
            filteredPhones = filteredPhones.filter(item => criteria.ram.includes(item.modPhone.ram));
        }
        if (priceFilterEnabled) {
            filteredPhones = filteredPhones.filter(item => item.price >= criteria.price[0] && item.price <= criteria.price[1]);
        }
        if (criteria.battery.length > 0) {
            filteredPhones = filteredPhones.filter(item => criteria.battery.some(b => item.modPhone.battery >= b && item.modPhone.battery < (b + 1000)));
        }
        if (criteria.screensize.length > 0) {
            filteredPhones = filteredPhones.filter(item => criteria.screensize.some(s => item.modPhone.screenSize >= s && item.modPhone.screenSize < (s + 1)));
        }
        if (criteria.cpu.length > 0) {
            filteredPhones = filteredPhones.filter(item => criteria.cpu.includes(item.modPhone.cpu));
        }

        setPhones(filteredPhones);
    };

    const [PhoneByBrand, setPhoneByBrand] = useState([]);
    useEffect(() => {
        setPhoneByBrand(phones.filter((item) => item.modPhone.brand.name === props.brand))
    }, [props.brand]);

    // Logic for pagination
    const offset = currentPage * itemsPerPage;
    const currentPhones = PhoneByBrand.slice(offset, offset + itemsPerPage);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };
    console.log(`currentPhones`, currentPhones);
    return (
        <div className="shop-category">
            <Navbar />
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing {offset + 1}-{offset + currentPhones.length}</span> out of {PhoneByBrand.length} products</p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-filter">
            <Dropdown>
                    <Dropdown.Toggle>
                        Chức năng
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickFill("function", "Chơi Game")}>Chơi game</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("function", "Quay Phim")}>Quay phim</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("function", "Chức năng cơ bản")}>Chức năng cơ bản</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="shopcategory-fill">
                        Dung lượng
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickFill("ram", "4")}>4 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("ram", "6")}>6 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("ram", "8")}>8 GB</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("ram", "12")}>12 GB</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="shopcategory-fill">
                        Giá tiền
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div style={{ width: '300px' }}>
                            <h5 className="title-price">Kéo thả số tiền mong muốn</h5>
                            <div>
                                <p className="show-price">{price[0].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} - {price[1].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
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
                                <button className="shopcategory-fill" style={{ margin: "5px 0" }} onClick={handleCancel}>Huỷ</button>
                                <button className="shopcategory-fill" onClick={() => handleClickFill("price", price)} style={{ margin: "5px 0" }}>Tìm kiếm</button>
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="shopcategory-fill">
                        Lượng Pin
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickFill("battery", 3000)}>3000 mAh</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("battery", 4000)}>4000 mAh</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("battery", 5000)}>5000 mAh</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("battery", 6000)}>6000 mAh</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="shopcategory-fill">
                        Kích thước
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickFill("screensize", 5)}>5 Inches</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("screensize", 6)}>6 Inches</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("screensize", 7)}>7 Inches</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="shopcategory-fill">
                        Chip xử lý
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickFill("cpu", "Apple")}>Apple Bionic</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("cpu", "Exynos")}>Exynos</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("cpu", "Snapdragon")}>ARM Snapdragon</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("cpu", "MediaTek")}>MediaTek</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClickFill("cpu", "Kirin")}>Kirin</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {filled && selectedItems.length > 0 ? (
                <div className="shopcategory-filtered">
                     <h4>Các mục đã lọc</h4>
                    <hr />
                    {selectedItems.map((item, index) => (
                        <button key={index} className="shopcategory-fill-cancel">
                            {item.itemName}
                            <button className="cancel-fill" onClick={() => handleCancelFill(item)}>x</button>
                        </button>
                    ))}
                    <button className="shopcategory-fill-cancel" onClick={handleCancel}>Huỷ lọc</button>
                </div>
            ) : ""}

            <div className="shopcategory-products">
                {/* Render filtered phones */}
                {currentPhones.map((item, index) => (
                    <Item
                        key={index}
                        id={item.id}
                        modPhoneId={item.modPhoneId}
                        name={item.name}
                        image={`https://localhost:7258/images/products/${item.modPhone.image}`}
                        price={item.price}
                        promotionId={item.modPhone.promotionId}
                        discountPercent={item.modPhone.promotion.discountPercent}
                        startDay={item.modPhone.promotion.startDay}
                        endDay={item.modPhone.promotion.endDay}
                    />
                ))}
            </div>

            {/* Pagination component */}
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={Math.ceil(PhoneByBrand.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
            <Footer />
        </div>
    );
};

export default ShopCategory;
