import { Button, Col, Form, Image, Row } from "react-bootstrap";
const InfoInvoiceDetail = () => {

    return (

        <>

            <form className="form-modphone g-3" datatype="">
                <Row>

                    <Col className="form-item" xs={12} md={4}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                    </Col>
                    <Col xs={8} md={4}>
                        <Row>
                            <Col className="form-item">
                                <i class="bi bi-upc"></i>
                                <label htmlFor="inputNanme4" className="form-label">Mã chi tiết</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value="95IYKGJIR4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" >
                                <i class="bi bi-info-circle"></i>
                                <label htmlFor="inputNanme4" className="form-label">Tên sản phẩm</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value="IPhone 15 Pro max 512GB" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item">
                                <i class="bi bi-clipboard-data"></i>
                                <label htmlFor="inputNanme4" className="form-label">Số lượng</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value="2" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={8} md={4}>
                        <Row>
                            <Col className="form-item">
                                <i class="bi bi-upc-scan"></i>
                                <label htmlFor="inputNanme4" className="form-label">SKU</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value="59TITGJGG" />
                            </Col>

                        </Row>
                        <Row>
                            <Col className="form-item" >
                                <i class="bi bi-palette"></i>
                                <label htmlFor="inputNanme4" className="form-label">Màu sắc</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value="Blue" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" >
                                <i class="bi bi-cash-coin"></i>
                                <label htmlFor="inputNanme4" className="form-label">Giá tiền</label>
                                <input type="text" className="form-control" id="inputNanme4" disabled value={(25000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} />
                            </Col>
                        </Row>
                    </Col>

                </Row>



            </form>

        </>
    );
}

export default InfoInvoiceDetail;