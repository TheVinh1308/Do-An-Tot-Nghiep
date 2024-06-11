import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
const AddPromotion = () => {

    const [promotion, setPromotion] = useState();
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPromotion(prev => ({ ...prev, [name]: value }));
    }

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
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(promotion).forEach(([key, value]) => {
            formData.append(key, value);
        });
        axios.post(`https://localhost:7258/api/Promotions`, formData) // Pass formData here
            .then(res => {
                const newPromotion = res.data;
                setPromotion(newPromotion);
                const formDataHistory = new FormData();
                formDataHistory.append("action", "Thêm khuyến mãi");
                formDataHistory.append("userId", userId);
                formDataHistory.append("time", new Date().toISOString());
                formDataHistory.append("productId", 1);
                // formDataHistory.append("productName", newPromotion.name);
                formDataHistory.append("operation", "Thêm");
                formDataHistory.append("amount", 0);
                axios.post(`https://localhost:7258/api/History`, formDataHistory)
                    .then(ress => {

                    })
            })
            .catch(error => {
                console.error('Thêm khuyến mãi thất bại:', error);
                console.log(promotion);
            });
    }
    return (
        <>
            <form className="form-modphone g-3" onSubmit={handleSubmit}>
                <Row>

                    <Col className="form-item" xs={12} md={4}>
                        <i class="bi bi-receipt-cutoff"></i>
                        <label htmlFor="inputNanme4" className="form-label">Tên khuyến mãi</label>
                        <input type="text" className="form-control" id="name"
                            name="name"
                            onChange={handleChange} />
                    </Col>
                    <Col className="form-item" xs={12} md={2}>
                        <i class="bi bi-currency-exchange"></i>
                        <label htmlFor="inputNanme4" className="form-label">Chỉ số</label>
                        <input type="text" className="form-control" id="discountPercent"
                            name="discountPercent"
                            onChange={handleChange} />
                    </Col>
                    <Col className="form-item" xs={12} md={3}>
                        <i class="bi bi-calendar-event"></i>
                        <label htmlFor="inputNanme4" className="form-label">Ngày bắt đầu</label>
                        <input type="date" className="form-control" id="startDay"
                            name="startDay"
                            onChange={handleChange} />
                    </Col>
                    <Col className="form-item" xs={12} md={3}>
                        <i class="bi bi-calendar-event"></i>
                        <label htmlFor="inputNanme4" className="form-label">Ngày kết thúc</label>
                        <input type="date" className="form-control" id="endDay"
                            name="endDay"
                            onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" xs={12} md={12}>
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Nội dung khuyến mãi</label>
                        <textarea type="text" className="form-control" id="content"
                            name="content"
                            onChange={handleChange} />
                    </Col>
                </Row>

                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Thêm</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
}

export default AddPromotion;