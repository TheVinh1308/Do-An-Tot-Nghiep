import { Badge, Button, Col, Row } from "react-bootstrap";
import "./CSS/ChangeAdress.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";

const ChangeAdress = ({ invoiceId }) => {
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${invoiceId}`)
            .then((res) => {
                setInvoice(res.data);
            });
    }, [invoiceId]);

    const [invoiceDetail, setInvoiceDetail] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${invoiceId}`)
            .then((res) => {
                setInvoiceDetail(res.data);
            });
    }, [invoiceId]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ border: "solid 1px black", color: "black" }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:
                return <Badge bg="success">Hoàn thành</Badge>;
            default:
                return <Badge bg="danger">Đã huỷ</Badge>;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice((prev) => ({ ...prev, [name]: value }));
    };

    const notifySuccess = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const updateAddress = (e) => {
        e.preventDefault();
        console.log(invoice);

        axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, invoice, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                notifySuccess("Thay đổi địa chỉ giao hàng thành công");
            })
            .catch((error) => {
                console.error('Error updating address:', error);
                toast.error('Failed to update address');
            });
    };

    return (
        <>
            <div className="content">
                <ToastContainer />
                <h2 className="text-center">Thay đổi địa chỉ giao hàng</h2>
                <div className="infor">
                    <Row>
                        <Col>
                            <div className="img">
                                {invoiceDetail.map((item, index) => (
                                    <div key={index}>
                                        <img src={`https://localhost:7258/images/products/${item.phone.modPhone.image}`} alt="" />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <p>Code: #{invoice.code}</p>
                            <p>Địa chỉ: {invoice.shippingAddress}</p>
                            <p>Số điện thoại: {(invoice.shippingPhone)?.slice(0, -4) + '****'}</p>
                            <p>Tổng thành tiền: {(invoice.total)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                            <p>Trạng thái: {getStatusBadge(invoice.status)}</p>
                        </Col>
                    </Row>
                </div>
                <div className="change">
                    <Row>
                        <Col md={10}>
                            <input
                                type="text"
                                name="shippingAddress"
                                placeholder="Nhập địa chỉ mới"
                                onChange={handleChange}
                                value={invoice.shippingAddress || ""}
                            />
                        </Col>
                        <Col md={2}>
                            <Button onClick={updateAddress}>Thay đổi</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ChangeAdress;
