import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const EditBrand = () => {
    const [imageSrc, setImageSrc] = useState();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImageSrc(file);
        setBrand((prev) => ({ ...prev, LogoFile: e.target.files[0] }));
    }


    const [brand, setBrand] = useState({ status: true, LogoFile: null });
    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBrand(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(brand).forEach(([key, value]) => {
            formData.append(key, value);
        });
        axios.put(`https://localhost:7258/api/Brands/${id}`, formData) // Pass formData here
            .then(res => {
                setBrand(res.data);
                navigate("/admin/Brand");
            })
            .catch(error => {
                console.error('Error adding brand:', error);
            });
    }


    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands/${id}`)
            .then(res => {
                setBrand(res.data);
            });
    }, [id]);
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
                            <img src={'https://localhost:7258/images/brands/' + brand.logo} width="100%" />
                        )}

                    </Col>
                    <Col className="col-6" md={6} xs={12}>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-memory"></i>
                                <label htmlFor="inputNanme4" className="form-label">Ngày tạo</label>
                                <input type="date" className="form-control" id="inputNanme4" />
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
                                    required
                                    value={brand.name} />
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

export default EditBrand;