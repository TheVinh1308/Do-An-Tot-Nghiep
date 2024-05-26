import { Col, Row, Form } from "react-bootstrap"; // Thêm Form từ react-bootstrap

const InforHistory = () => {
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>
                    <Col className="form-item" xs={12} md={4}>
                        <i className="bi bi-phone"></i> {/* Thêm className */}
                        <label htmlFor="inputNanme4" className="form-label">Tên người dùng</label>
                        <input type="text" className="form-control" name="" id="" disabled value={"Phạm Hoan Vinh"} />
                    </Col>
                    <Col className="form-item" xs={12} md={4}>
                        <i className="bi bi-phone"></i> {/* Thêm className */}
                        <label htmlFor="inputNanme4" className="form-label">Thời gian thực hiện</label>
                        <input type="text" className="form-control" name="" id="" disabled value={"20:21 PM, 25/05/2024"} />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Thao tác</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"Mua"} />
                            </Col>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Số lượng</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"02"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" xs={12} md={4}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                    </Col>
                    <Col className="form-item" xs={12} md={4}>
                        <Row>
                            <Col>
                                <i className="bi bi-phone"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Tên đối tượng</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"Samsung Galaxy S24"} />
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <i className="bi bi-phone"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Thời gian thực hiện</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"20:21 PM, 25/05/2024"} />
                            </Col>

                        </Row>

                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Thao tác</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"Thêm"} />
                            </Col>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Số lượng</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"02"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Màu sắc</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"Thêm"} />
                            </Col>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Hãng</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"02"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Mã Hoá đơn</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"Thêm"} />
                            </Col>
                            <Col xs={12} md={6} className="form-item">
                                <i className="bi bi-calendar-check"></i> {/* Thêm className */}
                                <label htmlFor="inputNanme4" className="form-label">Giá tiền</label>
                                <input type="text" className="form-control" name="" id="" disabled value={"02"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Áp dụng</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
};

export default InforHistory;
