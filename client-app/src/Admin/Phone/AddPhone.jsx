import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const AddPhone = () => {

    const [phone, setPhone] = useState({});
    const [isInsert, setIsInsert] = useState(false);
    const [clickSku, seClickSku] = useState(false);
    const [modPhones, setModPhones] = useState([]);

    // User
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
    // end user
    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPhone(prev => ({ ...prev, [name]: value }));
    }

    // const handleCheck = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.checked
    //     setBrand(prev => ({ ...prev, [name]: value }));
    // }

    const handleSKU = () => {
        const generatedSKU = generateRandomString(10);
        setPhone(prev => ({ ...prev, sku: generatedSKU }));
        seClickSku(true);
        // Set the generated SKU directly in the input field
        document.getElementById("inputSku").value = generatedSKU;
    };


    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setPhone(prev => ({ ...prev, [name]: value }));
    }


    // lấy danh sách modphone
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then(res => {
                setModPhones(res.data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(phone).forEach(([key, value]) => {
            formData.append(key, value);
        });
        axios.post(`https://localhost:7258/api/Phones`, formData) // Pass formData here
            .then(res => {
                const newPhone = res.data;
                setPhone(newPhone);
                navigate("/admin/Phone");
                setIsInsert(true);
                const formDataHistory = new FormData();
                formDataHistory.append("action", "Thêm điện thoại");
                formDataHistory.append("userId", userId);
                formDataHistory.append("time", new Date().toISOString());
                formDataHistory.append("productId", newPhone.id);
                formDataHistory.append("operation", "Thêm");
                formDataHistory.append("amount", newPhone.stock);
                axios.post(`https://localhost:7258/api/History`, formDataHistory)
                    .then(ress => {

                    })
            })
            .catch(error => {
                console.error('Error adding phone:', error);
            });
    }
    function generateRandomString(length) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }

    var randomString = generateRandomString(10);
    console.log(phone);


    return (
        <>
            <form className="form-modphone g-3" datatype="" onSubmit={handleSubmit}>
                <Row>

                    <Col className="col-12">
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i className="bi bi-info-circle-fill"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên điện thoại</label>
                                <input type="text" className="form-control" id="inputNanme4" name="name" onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={8} md={6}>
                                <div xs={8} md={8} className="form-item">
                                    <i classNames="bi bi-upc-scan"></i>
                                    <label htmlFor="inputNanme4" className="form-label">SKU</label>
                                    <div className="d-flex form-sku">
                                        <input type="text" className="form-control" id="inputSku" name="sku" />

                                        <div className="btn btn-success" onClick={handleSKU}>Tạo SKU</div>
                                    </div>

                                </div>


                            </Col>

                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={4}>
                                <i className="bi bi-tags"></i>
                                <label htmlFor="inputNanme4" className="form-label">Giá tiền</label>
                                <input type="text" className="form-control" id="inputNanme4" name="price" onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={12} md={4}>
                                <i className="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dòng điện thoại</label>
                                <Form.Select name="modPhoneId" onChange={handleSelect}>

                                    <option>Lựa chọn dòng điện thoại</option>
                                    {
                                        Array.isArray(modPhones) ? modPhones.map((item, index) => (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )) : <option>KHong co</option>
                                    }
                                </Form.Select>
                            </Col>
                            <Col className="form-item" xs={12} md={4}>
                                <i className="bi bi-phone"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng</label>
                                <input type="text" className="form-control" id="inputNanme4" name="rom" onChange={handleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i className="bi bi-palette"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màu sách</label>
                                <input type="text" className="form-control" id="inputNanme4" name="color" onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i className="bi bi-bar-chart-line"></i>
                                <label htmlFor="inputNanme4" className="form-label">Số lượng tồn kho</label>
                                <input type="text" className="form-control" id="inputNanme4" name="stock" onChange={handleChange} />
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Thêm</button>
                    <button type="reset" className="btn btn-secondary mx-2">Reset</button>
                </div>
            </form>
        </>
    );
}

export default AddPhone;