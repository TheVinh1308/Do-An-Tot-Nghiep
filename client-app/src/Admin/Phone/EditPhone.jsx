import { Button, Col, Form, Image, Row } from "react-bootstrap";
const EditPhone = () => {
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>

                    <Col className="col-12">
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
                                        <input type="text" className="form-control" id="inputNanme4" disabled value="56GJR59G5" />
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