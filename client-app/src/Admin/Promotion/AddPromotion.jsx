import { Button, Col, Form, Image, Row } from "react-bootstrap";
const AddPromotion = () => {
    return (
        <>
            <form className="form-modphone g-3" datatype="">
                <Row>

                    <Col className="form-item" xs={12} md={6}>
                        <i class="bi bi-receipt-cutoff"></i>
                        <label htmlFor="inputNanme4" className="form-label">Tên khuyến mãi</label>
                        <input type="text" className="form-control" id="inputNanme4" />
                    </Col>
                    <Col className="form-item" xs={12} md={6}>
                        <i class="bi bi-currency-exchange"></i>
                        <label htmlFor="inputNanme4" className="form-label">Chỉ số khuyến mãi</label>
                        <input type="text" className="form-control" id="inputNanme4" />
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" xs={12} md={12}>
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Nội dung khuyến mãi</label>
                        <textarea type="text" className="form-control" id="inputNanme4" />
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

export default AddPromotion;