import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/ChoiceCompare.css"
import StarRatings from "react-star-ratings";
import { ShopContext } from "../Context/ShopContext";
const ChoiceCompare = () => {
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

    //
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands`)
            .then((res) => {
                setBrand(res.data);
            })
    }, []);
    const [brandId, setBrandId] = useState(1);
    const handleBrand = (brandId) => {
        setBrandId(brandId);
    }

    const [phoneCompare, setPhoneCompare] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/${brandId}`)
            .then((res) => {
                setPhoneCompare(res.data);
            })
    }, [brandId]);

    const { iitemCompare, setIitemCompare, setShow } = useContext(ShopContext); // Use useContext
    const handleCompare = (item) => {
        setIitemCompare((prevItems) => [...prevItems, item]);
        setShow(false);
    };

    console.log(`iitemCompare`, iitemCompare);

    return (
        <>
            <div className="choice">
                <Row>
                    <div className="search-form-container">
                        <div className="search-form" >
                            <input className="search-input" type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
                            <button className="search-button" type="submit">Search</button>
                        </div>
                    </div>

                </Row>
                <Row className="list-brand">
                    {
                        brand.map((item, index) => (
                            <Col key={index} onClick={() => handleBrand(item.id)}>
                                {item.name}
                            </Col>
                        ))
                    }
                </Row>
                <Row>

                    <ul className="content-compare">
                        {

                            result.length && value !== "" > 0 ? result.map((item) => (

                                <li >
                                    <>
                                        <img src={`https://localhost:7258/images/products/${item.modPhone.image}`} alt="" />
                                        <h6>{item.name}</h6>
                                        <StarRatings
                                            rating={5}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="2px"

                                        />
                                        <p>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                        <button onClick={() => handleCompare(item)}>
                                            <i class="bi bi-plus-circle"></i> Thêm so sánh
                                        </button>
                                    </>

                                </li>
                            )) :

                                phoneCompare.map((item, index) => (
                                    <li key={index}>
                                        <>
                                            <img src={`https://localhost:7258/images/products/${item.modPhone.image}`} alt="" />
                                            <h6>{item.name}</h6>
                                            <StarRatings
                                                rating={5}
                                                starRatedColor="orange"
                                                // changeRating={onStarClick}
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="15px"
                                                starSpacing="2px"

                                            />
                                            <p>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                            <button onClick={() => handleCompare(item)}>
                                                <i class="bi bi-plus-circle"></i> Thêm so sánh
                                            </button>
                                        </>

                                    </li>

                                ))
                        }
                    </ul>

                </Row>
            </div>
        </>
    );
}

export default ChoiceCompare;