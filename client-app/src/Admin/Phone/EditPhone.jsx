import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const EditPhone = ({ PhoneId }) => {
    const [phone, setPhone] = useState({ status: true });
    const [modPhones, setModPhones] = useState([]);
    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPhone(prev => ({ ...prev, [name]: value }));
    }
    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setPhone(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(phone).forEach(([key, value]) => {
            formData.append(key, value);
        });
        axios.put(`https://localhost:7258/api/Phones/${PhoneId}`, formData) // Pass formData here
            .then(res => {
                setPhone(res.data);
                navigate("/admin/Phone");
            })
            .catch(error => {
                console.error('Error adding phone:', error);
            });
    }
    // lấy danh sách modphone
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then(res => {
                setModPhones(res.data);
            });
    }, []);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/${PhoneId}`)
            .then(res => {
                setPhone(res.data);
            });
    }, [id]);

    return (
        <>
            <form className="form-modphone g-3" datatype="" onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-12">
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-info-circle-fill"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên điện thoại</label>
                                <input type="text" className="form-control" name="name" value={phone.name} onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={8} md={6}>
                                <div xs={8} md={8} className="form-item">
                                    <i class="bi bi-upc-scan"></i>
                                    <label htmlFor="inputNanme4" className="form-label">SKU</label>
                                    <div className="d-flex form-sku">
                                        <input type="text" className="form-control" name="sku" disabled value={phone.sku} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={4}>
                                <i class="bi bi-tags"></i>
                                <label htmlFor="inputNanme4" className="form-label">Giá tiền</label>
                                <input type="text" className="form-control" name="price" value={phone.price} onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={12} md={4}>
                                <i class="bi bi-layout-wtf"></i>
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
                                <i class="bi bi-phone"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng</label>
                                <input type="text" className="form-control" name="rom" value={phone.rom} onChange={handleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-palette"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màu sách</label>
                                <input type="text" className="form-control" name="color" value={phone.color} onChange={handleChange} />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-bar-chart-line"></i>
                                <label htmlFor="inputNanme4" className="form-label">Số lượng tồn kho</label>
                                <input type="text" className="form-control" name="stock" value={phone.stock} onChange={handleChange} />
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Cập nhật</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
}

export default EditPhone;