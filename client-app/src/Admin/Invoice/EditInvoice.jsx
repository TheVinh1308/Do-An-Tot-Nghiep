import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
const EditInvoice = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>
                    <Col className="form-item" >
                        <i class="bi bi-upc-scan"></i>
                        <label htmlFor="inputNanme4" className="form-label">CODE</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value="6384857459" />
                    </Col>
                    <Col className="form-item" >
                        <i class="bi bi-person-bounding-box"></i>
                        <label htmlFor="inputNanme4" className="form-label">Khách hàng</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value="Phạm Hoan Vinh" />
                    </Col>
                    <Col className="form-item" >
                        <i class="bi bi-calendar-check"></i>
                        <label htmlFor="inputNanme4" className="form-label">Ngày tạo</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value="05-04-2024" />
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" >
                        <i class="bi bi-memory"></i>
                        <label htmlFor="inputNanme4" className="form-label">Trạng thái</label>
                        <Form.Select >
                            <option>  <Badge bg="danger">Đã giao</Badge></option>
                            <option>  <Badge bg="danger">Đang giao</Badge></option>
                            <option>  <Badge bg="danger">Đã huỷ</Badge></option>
                            <option>  <Badge bg="danger">Trả hàng</Badge></option>
                            <option>  <Badge bg="danger">Đang xử lý</Badge></option>
                        </Form.Select>
                        {/* <ul>
                            <li><Badge bg="danger">Đã huỷ</Badge></li>
                            <li><Badge bg="danger">Đã huỷ</Badge></li>
                            <li><Badge bg="danger">Đã huỷ</Badge></li>
                            <li><Badge bg="danger">Đã huỷ</Badge></li>
                            <li><Badge bg="danger">Đã huỷ</Badge></li>
                        </ul> */}
                    </Col>
                    <Col className="form-item" >
                        <i class="bi bi-memory"></i>
                        <label htmlFor="inputNanme4" className="form-label">Số điệm thoại</label>
                        <input type="text" className="form-control" id="inputNanme4" value="0364067704" />
                    </Col>
                    <Col className="form-item" >
                        <i class="bi bi-credit-card-2-front-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Phương thức thanh toán</label>
                        <Form.Select >
                            <option>  <Badge bg="danger">Tiền mặt</Badge></option>
                            <option>  <Badge bg="danger">Momo</Badge></option>
                            <option>  <Badge bg="danger">VNPay</Badge></option>
                            <option>  <Badge bg="danger">Thẻ tính dụng</Badge></option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" md={8} >
                        <i class="bi bi-geo-alt-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" id="inputNanme4" value="16 Tân Thuận Tây, Quận 7, TP Hồ Chí Minh" />
                    </Col>

                    <Col className="form-item" md={4} >
                        <i class="bi bi-cash-coin"></i>
                        <label htmlFor="inputNanme4" className="form-label">Tổng tiền</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value="43.000.000 Vnđ" />
                    </Col>
                </Row>



                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Thêm</button>
                    <button type="reset" className="btn btn-secondary mx-2">Reset</button>
                </div>
            </form>

        </>
    );
}

export default EditInvoice;