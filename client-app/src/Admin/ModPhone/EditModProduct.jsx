import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
const EditModPhone = () => {
    const [imageSrc, setImageSrc] = useState();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImageSrc(file)
    }
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>
                    <Col className="col-4 form-item" md={4} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" id="inputName4" onChange={handleImageChange} />
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
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-memory"></i>
                                <label htmlFor="inputNanme4" className="form-label">Ram</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Hệ điều hành</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-phone"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màng hình</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-battery-half"></i>
                                <label htmlFor="inputNanme4" className="form-label">Dung lượng pin</label>
                                <input type="text" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col className="form-item" xs={12} md={6}>
                                <i class="bi bi-cpu"></i>
                                <label htmlFor="inputNanme4" className="form-label">CPU</label>
                                <input type="text" className="form-control" id="inputNanme4" />
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