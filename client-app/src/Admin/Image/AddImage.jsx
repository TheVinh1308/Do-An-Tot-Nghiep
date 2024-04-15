import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddImage = () => {
    const [imageSrcs, setImageSrcs] = useState([]);

    const handleImageChange = (e) => {
        const files = e.target.files;
        const previews = Array.from(files).map(file => URL.createObjectURL(file));
        setImageSrcs(previews);
    };
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>
                    <Col className="col-8 form-item" md={8} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" id="inputName4" onChange={handleImageChange} multiple />


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
                            <Col> {imageSrcs[4] ? (
                                <img className="imgs" src={imageSrcs[4]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col>
                        </Row>

                    </Col>
                    <Col className="col-4 form-item" md={4} xs={12}>
                        <i class="bi bi-layout-wtf"></i>
                        <label htmlFor="inputNanme4" className="form-label">Dòng điện thoại</label>
                        <Form.Select >
                            <option>Large select</option>
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