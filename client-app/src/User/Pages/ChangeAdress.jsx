import { Badge, Button, Col, Row } from "react-bootstrap";
import "./CSS/ChangeAdress.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ChangeAdress = ({ invoiceId }) => {

    const [invoice, setInvoice] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${invoiceId}`)
            .then((res) => {
                setInvoice(res.data);
            })
    }, [invoiceId]);

    const [invoiceDetail, setInvoiceDetail] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${invoiceId}`)
            .then((res) => {
                setInvoiceDetail(res.data);
            })
    }, [invoiceId]);
    console.log(`invoiceDetail`, invoice);
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
        let name = e.target.name;
        let value = e.target.value;
        setInvoice(prev => ({ ...prev, [name]: value }));
    }
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
    const updateAdreaa = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(invoice).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((res) => {
                notifySuccess("Thay đổi địa chỉ giao hàng thành công");
            })
    }

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
                                    <>
                                        <img key={index} src={`https://localhost:7258/images/products/${item.phone.modPhone.image}`} alt="" />
                                        <hr />
                                    </>

                                ))}

                            </div>
                        </Col>

                        <Col>
                            <p>Code: #{invoice.code}</p>
                            <p>Địa chỉ: {invoice.shippingAddress}</p>
                            <p>Số điện thoại: {(invoice.shippingPhone)?.slice(0, -4) + '****'}</p>
                            <p>Tổng thành tiền: {(invoice.total)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                            <p>Trạng thái:  {getStatusBadge(invoice.status)}</p>

                        </Col>
                    </Row>
                </div >
                <div className="change">
                    <Row>
                        <Col md={10}>
                            <input type="text" name="shippingAddress" id="" width={"100%"} placeholder="Nhập địa chỉ mới" onChange={handleChange} />
                        </Col>
                        <Col md={2}>
                            <Button onClick={updateAdreaa}>Thay đổi</Button>
                        </Col>
                    </Row>

                </div>
            </div >
        </>
    );
}

export default ChangeAdress;