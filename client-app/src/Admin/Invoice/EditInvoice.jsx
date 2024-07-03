import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const EditInvoice = ({ selectID, statusInvoice }) => {
    const [invoice, setInvoice] = useState({});
    const [user, setUser] = useState({});
    const [payment, setPayment] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${selectID}`)
            .then((res) => {
                setInvoice(res.data);
            })
            .catch((error) => {
                console.error('Error fetching invoice:', error);
            });
    }, [selectID]);

    useEffect(() => {
        if (invoice.userId) {
            axios.get(`https://localhost:7258/api/Users/${invoice.userId}`)
                .then((res) => {
                    setUser(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching user:', error);
                });
        }
    }, [invoice.userId]);

    useEffect(() => {
        if (invoice.paymentMethodId) {
            axios.get(`https://localhost:7258/api/PaymentMethod/${invoice.paymentMethodId}`)
                .then((res) => {
                    setPayment(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching payment method:', error);
                });
        }
    }, [invoice.paymentMethodId]);

    let formattedDate = "Invalid date";
    if (invoice?.issuedDate) {
        try {
            const issuedDate = parseISO(invoice.issuedDate);
            formattedDate = format(issuedDate, 'H:mm:ss - dd/MM/yyyy');
        } catch (error) {
            console.error('Invalid date format:', error);
        }
    }

    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInvoice(prev => ({ ...prev, [name]: value }));
    }

    const handleEdit = (e) => {
        e.preventDefault(); // Prevent default form submission

        console.log('Sending invoice data:', JSON.stringify(invoice, null, 2));

        axios.put(`https://localhost:7258/api/Invoices/${selectID}`, invoice, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                console.log('Invoice updated successfully');
                const formNotificationAdmin = new FormData();
                formNotificationAdmin.append("invoiceId", selectID);
                formNotificationAdmin.append("content", `Đơn hàng của ${user.fullname} đã ${invoice.status == 4 ? "bị huỷ" : "hoàn thành"}`);
                formNotificationAdmin.append("time", new Date().toISOString());
                formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${selectID}`);
                formNotificationAdmin.append("status", true);

                axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin)
                    .then(() => {
                        alert("Thông báo đã được thêm.");
                    })
                    .catch((error) => console.error('Error adding notification:', error));

                alert("Đã xác nhận đơn hàng.");
            })
            .catch((error) => {
                console.error('Error updating invoice:', error);
                console.log('Request data:', JSON.stringify(invoice, null, 2));
            });
    }


    return (
        <>
            <form className="form-modphone g-3" datatype="" onSubmit={handleEdit}>
                <Row>
                    <Col className="form-item">
                        <i className="bi bi-upc-scan"></i>
                        <label htmlFor="inputNanme4" className="form-label">CODE</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={invoice.code} />
                    </Col>
                    <Col className="form-item">
                        <i className="bi bi-person-bounding-box"></i>
                        <label htmlFor="inputNanme4" className="form-label">Khách hàng</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={user.fullname} />
                    </Col>
                    <Col className="form-item">
                        <i className="bi bi-calendar-check"></i>
                        <label htmlFor="inputNanme4" className="form-label">Ngày tạo</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={formattedDate} />
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item">
                        <i className="bi bi-memory"></i>
                        <label htmlFor="inputNanme4" className="form-label">Trạng thái</label>
                        <Form.Select value={invoice.status} disabled={statusInvoice == 4 || statusInvoice == 3} name="status" onChange={handleSelect} >
                            {
                                statusInvoice == 1 ?
                                    <>
                                        <option value="1">Đang xác nhận </option>
                                        <option value="4">Huỷ đơn hàng</option>
                                        <option value="2">Đang giao</option>
                                    </>
                                    :
                                    <>
                                        <option value="2">Đang giao</option>
                                        <option value="3">Đơn hàng đã hoàn thành</option>
                                    </>
                            }

                        </Form.Select>
                    </Col>
                    <Col className="form-item">
                        <i className="bi bi-memory"></i>
                        <label htmlFor="inputNanme4" className="form-label">Số điện thoại</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={invoice.shippingPhone} />
                    </Col>
                    <Col className="form-item">
                        <i className="bi bi-credit-card-2-front-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Phương thức thanh toán</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={payment.name} />
                    </Col>
                </Row>
                <Row>
                    <Col className="form-item" md={8}>
                        <i className="bi bi-geo-alt-fill"></i>
                        <label htmlFor="inputNanme4" className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={invoice.shippingAddress} />
                    </Col>
                    <Col className="form-item" md={4}>
                        <i className="bi bi-cash-coin"></i>
                        <label htmlFor="inputNanme4" className="form-label">Tổng tiền</label>
                        <input type="text" className="form-control" id="inputNanme4" disabled value={(invoice?.total)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} />
                    </Col>
                </Row>
                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2" >Cập nhật</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
}

export default EditInvoice;
