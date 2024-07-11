import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddImage = () => {
    const [imageSrcs, setImageSrcs] = useState([]);
    const [isInsert, setIsInsert] = useState(false);
    const [image, setImage] = useState({ status: true, Files: [] });

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

    const handleImageChange = (e) => {
        let files = e.target.files;
        let name = e.target.name;
        const previews = Array.from(files).map(file => URL.createObjectURL(file));

        const filesArray = Array.from(files);

        setImage(prev => ({ ...prev, [name]: filesArray }));
        setImageSrcs(previews);
    };


    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setImage(prev => ({ ...prev, [name]: value }));
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append each file to form data
        image.Files.forEach(file => {
            formData.append('Files', file);
        });

        // Append other form data fields
        formData.append('status', image.status);
        formData.append('phoneId', image.phoneId);
        console.log(formData);
        axios.post(`https://localhost:7258/api/Images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                const newImg = res.data;
                setIsInsert(true);
                setImage(newImg);

                const formDataHistory = new FormData();
                formDataHistory.append("action", "Thêm hình ảnh");
                formDataHistory.append("userId", userId);
                formDataHistory.append("time", new Date().toISOString());
                formDataHistory.append("productId", newImg.phoneId);
                formDataHistory.append("operation", "Thêm");
                formDataHistory.append("amount", 4);
                axios.post(`https://localhost:7258/api/History`, formDataHistory)
                    .then(ress => {

                    })
            })
            .catch((err) => {
                alert("Thêm thất bại!!!")
                console.log(`error`, err);
                console.log(formData);
            })
    }

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
            .then(res => {
                setPhones(res.data);
            });
    }, []);
    return (
        <>
            <form className="form-modphone g-3" datatype="" onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-8 form-item" md={8} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" id="inputName4" name="Files" onChange={handleImageChange} multiple required/>


                        <Row>
                            <Col> {imageSrcs[0] ? (
                                <img className="imgs" src={imageSrcs[0]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col>
                            <Col> {imageSrcs[1] ? (
                                <img className="imgs" src={imageSrcs[1]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col>

                        </Row>
                        <Row>
                            <Col> {imageSrcs[2] ? (
                                <img className="imgs" src={imageSrcs[2]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col>
                            <Col> {imageSrcs[3] ? (
                                <img className="imgs" src={imageSrcs[3]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col>
                            {/* <Col> {imageSrcs[4] ? (
                                <img className="imgs" src={imageSrcs[4]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col> */}
                        </Row>

                    </Col>
                    <Col className="col-4 form-item" md={4} xs={12}>
                        <i class="bi bi-layout-wtf"></i>
                        <label htmlFor="inputNanme4" className="form-label">Điện thoại</label>
                        <Form.Select name="phoneId" onChange={handleSelect} required>
                            {phones.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </Form.Select>
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

export default AddImage;