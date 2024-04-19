import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
const EditBrand = () => {
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
                    <Col className="col-6 form-item" md={6} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" id="inputName4" onChange={handleImageChange} />
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
                                <input type="date" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Hệ điều hành</label>
                                <input type="text" className="form-control" id="inputNanme4" />
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