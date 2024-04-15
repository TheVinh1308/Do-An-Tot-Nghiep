import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
const AppPromotion = () => {

    return (

        <>
            <form className="form-modphone g-3" datatype="">
                <Row>

                    <Col className="form-item" xs={12} md={6}>
                        <i class="bi bi-phone"></i>
                        <label htmlFor="inputNanme4" className="form-label">Điện thoại áp dụng</label>
                        <Form.Select >
                            <option>IPhone 15 Pro max</option>
                            <option>IPhone 14 Pro max</option>
                            <option>IPhone 13 Pro max</option>
                        </Form.Select>
                    </Col>
                    <Col >
                        <Row>
                            <Col xs={12} md={6} className="form-item">
                                <i class="bi bi-calendar-check"></i>
                                <label htmlFor="inputNanme4" className="form-label">Từ ngày</label>
                                <input type="date" className="form-control" id="inputNanme4" />
                            </Col>
                            <Col xs={12} md={6} className="form-item">
                                <i class="bi bi-calendar-check"></i>
                                <label htmlFor="inputNanme4" className="form-label">Đến ngày</label>
                                <input type="date" className="form-control" id="inputNanme4" />
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" xs={12} md={6}>
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Chủ đề khuyến mãi</label>
                        <Form.Select >
                            <option>Sản phẩm lên đời</option>
                            <option>Khuyến mãi cuối tuần</option>
                            <option>Mừng 30/4 - 1/5</option>
                        </Form.Select>
                    </Col>
                    <Col className="form-item" xs={12} md={6}>
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Phần trăm giảm giá</label>
                        <input type="text" className="form-control" id="inputNanme4" />
                    </Col>
                </Row>

                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Áp dụng</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
}

export default AppPromotion;