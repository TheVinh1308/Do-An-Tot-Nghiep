import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    return (
        <>
            <div className="choice">
                <Row>
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
                </Row>
                <Row>
                    {
                        brand.map((item, index) => (
                            <Col key={index} onClick={() => handleBrand(item.id)}>
                                {item.name}
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    {
                        phoneCompare.map((item, index) => (
                            <Col key={index}>
                                <Card>
                                    <img src={`https://localhost:7258/images/products/${item.modPhone.image}`} alt="" />

                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    );
}

export default ChoiceCompare;