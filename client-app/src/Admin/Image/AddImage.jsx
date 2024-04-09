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
                    {/* <Col className="col-12">
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-info-circle-fill"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên điện thoại</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={8} md={6}>
                                <div xs={8} md={8} className="form-item">
                                    <i class="bi bi-upc-scan"></i>
                                    <label htmlFor="inputNanme4" className="form-label">SKU</label>
                                    <div className="d-flex form-sku">
                                        <input type="text" className="form-control" id="inputNanme4" />
                                        <button>Tạo SKU</button>
                                    </div>

                                </div>


                            </Col>

                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={4}>
                                <i class="bi bi-tags"></i>
                                <label htmlFor="inputNanme4" className="form-label">Giá tiền</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={12} md={4}>
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dòng điện thoại</label>
                                <Form.Select >
                                    <option>Large select</option>
                                </Form.Select>
                            </Col>
                            <Col className="form-item" xs={12} md={4}>
                                <i class="bi bi-phone"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-palette"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màu sách</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-bar-chart-line"></i>
                                <label htmlFor="inputNanme4" className="form-label">Số lượng tồn kho</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>
                    </Col> */}
                </Row>
                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Thêm</button>
                    <button type="reset" className="btn btn-secondary mx-2">Reset</button>
                </div>
            </form>
        </>
    );
}

export default AddImage;