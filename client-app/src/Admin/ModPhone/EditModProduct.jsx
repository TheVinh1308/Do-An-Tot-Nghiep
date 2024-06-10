import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
const EditModPhone = ({ modPhoneId }) => {
    const [imageSrc, setImageSrc] = useState();
    const [modPhone, setModPhone] = useState({ status: true, ImageFile: null, PromotionId: 1 });
    const [brands, setBrands] = useState([{ brand: { name: "Chọn hãng điện thoại" } }]);
    const [brand, setBrand] = useState({});
    const [isInsert, setIsInsert] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImageSrc(file);
        setModPhone(prev => ({ ...prev, ImageFile: e.target.files[0] }));
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
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setModPhone(prev => ({ ...prev, [name]: value }));
    }
    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        const selectedBrand = brands.find(brand => brand.id === value);
        setModPhone(prev => ({
            ...prev,
            [name]: value,
            brand: selectedBrand
        }));
    }
    const [phoneByModPhone, setPhoneByModPhone] = useState();
    const fetchPhoneByModPhoneId = async (id) => {
        try {
            const response = await axios.get(`https://localhost:7258/api/Phones/GetFisrtPhoneByModPhone/${id}`);
            setPhoneByModPhone(response.data);
        } catch (error) {
            console.error('Error fetching phone:', error);
        }
    }

    useEffect(() => {
        if (modPhone.id) {
            fetchPhoneByModPhoneId(modPhone.id);
        }
    }, [modPhone.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(modPhone).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.put(`https://localhost:7258/api/ModPhones/${modPhoneId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }) // Pass formData here
            .then(res => {
                const newModPhone = res.data;
                setModPhone(newModPhone);
                setIsInsert(true);

                const formDataHistory = new FormData();
                formDataHistory.append("action", "Sửa dòng điện gf thoại");
                formDataHistory.append("userId", userId);
                formDataHistory.append("time", new Date().toISOString());
                formDataHistory.append("productId", phoneByModPhone.id);
                formDataHistory.append("operation", "Sửa");
                formDataHistory.append("amount", 1);
                axios.post(`https://localhost:7258/api/History`, formDataHistory)
                    .then(ress => {

                    })
            })
            .catch(error => {
                console.error('Error adding brand:', error);
                console.log(`modPhone`, modPhone);
            });
    }
    // lấy modPhone theo id
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones/${modPhoneId}`)
            .then(res => {
                setModPhone(res.data);
            });
    }, [modPhoneId]);

    // lấy danh sách brands
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands`)
            .then(res => {
                setBrands(res.data);
            });
    }, []);
    return (
        <>
            <form className="form-modphone g-3" onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-4 form-item" md={4} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" name="image" onChange={handleImageChange} />
                        {imageSrc ? (
                            <img src={imageSrc.preview} width="100%" />
                        ) : (
                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                        )}

                    </Col>
                    <Col className="col-8" md={8} xs={12}>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-info-circle-fill"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên dòng</label>
                                <input type="text" className="form-control" name="name" onChange={handleChange} value={modPhone.name} />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-memory"></i>
                                <label htmlFor="inputNanme4" className="form-label">Ram</label>
                                <input type="text" className="form-control" name="ram" onChange={handleChange} value={modPhone.ram} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Hệ điều hành</label>
                                <input type="text" className="form-control" name="os" onChange={handleChange} value={modPhone.os} />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-phone"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màng hình</label>
                                <input type="text" className="form-control" name="screenSize" onChange={handleChange} value={modPhone.screenSize} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-battery-half"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng pin</label>
                                <input type="text" className="form-control" name="battery" onChange={handleChange} value={modPhone.battery} />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-cpu"></i>
                                <label htmlFor="inputNanme4" className="form-label">CPU</label>
                                <input type="text" className="form-control" name="cpu" onChange={handleChange} value={modPhone.cpu} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-battery-half"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng pin</label>
                                <Form.Select name="brandId" onChange={handleSelect} value={modPhone.brandId}>
                                    {modPhone.brand && <option>{modPhone.brand.name}</option>}
                                    {brands.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))}
                                </Form.Select>


                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-cpu"></i>
                                <label htmlFor="inputNanme4" className="form-label">CPU</label>
                                <input type="text" className="form-control" name="description" onChange={handleChange} />
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

export default EditModPhone;