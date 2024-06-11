import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const AddBrand = () => {
    const [imageSrc, setImageSrc] = useState();
    const [brand, setBrand] = useState({ status: true, LogoFile: null });
    const [isInsert, setIsInsert] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImageSrc(file)
        setBrand(prev => ({ ...prev, LogoFile: e.target.files[0] }));
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBrand(prev => ({ ...prev, [name]: value }));
    }

    // const handleCheck = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.checked
    //     setBrand(prev => ({ ...prev, [name]: value }));
    // }

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
        Object.entries(brand).forEach(([key, value]) => {
            formData.append(key, value);
        });
        axios.post(`https://localhost:7258/api/Brands`, formData) // Pass formData here
            .then(res => {
                const newBrand = res.data;
                setBrand(newBrand);
                navigate("/admin/Brand");
                setIsInsert(true);
                const formDataHistory = new FormData();
                formDataHistory.append("action", "Thêm nhãn hiệu");
                formDataHistory.append("userId", userId);
                formDataHistory.append("time", new Date().toISOString());
                formDataHistory.append("productId", 1);
                formDataHistory.append("productName", `Brand ${newBrand.name}`);
                formDataHistory.append("operation", "Thêm");
                formDataHistory.append("amount", 1);
                axios.post(`https://localhost:7258/api/History`, formDataHistory)
                    .then(ress => {

                    })
            })
            .catch(error => {
                console.error('Error adding brand:', error);
            });
    }

    return (
        <>
            <form className="form-modphone g-3" onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-6 form-item" md={6} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" name="LogoFile" onChange={handleImageChange} required />
                        {imageSrc ? (
                            <img src={imageSrc.preview} width="100%" />
                        ) : (
                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                        )}

                    </Col>
                    <Col className="col-6" md={6} xs={12}>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-memory"></i>
                                <label htmlFor="inputNanme4" className="form-label">Ngày tạo</label>
                                <input type="date" className="form-control" name="PostDay" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên hãng</label>
                                <input type="text" className="form-control"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    required />
                            </Col>

                        </Row>
                        <Row className="btn-brand">
                            <div className="text-center btn-brand">
                                <button type="submit" className="btn btn-success mx-2">Thêm</button>
                                <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                            </div>

                        </Row>

                    </Col>
                </Row>

            </form>
        </>
    );
}

export default AddBrand;