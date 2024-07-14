import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/CSS/AfterPay.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ChangeAdress from "./ChangeAdress";
const AfterPay = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${id}`)
            .then((res) => {
                setInvoice(res.data);
            })
    }, []);
    const [invoiceId, setInvoiceId] = useState(null);
    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => setShowChange(false);
    const handleShowChange = (invoiceId) => {
        setShowChange(true);
        setInvoiceId(invoiceId);
    }


    return (
        <>
            <Navbar />
            <div className="AfterPay container">
                <div className="Cancel-pay" md={12}>
                    <i class="bi bi-check2-circle"></i>
                    <h4>Đã gửi đơn hàng</h4>
                    <p>Đơn hàng #{invoice.code}, số điện thoại: {(invoice.shippingPhone)?.slice(0, -4) + '****'}, địa chỉ: {invoice.shippingAddress}, tổng giá tiền: {invoice.total}</p>
                    <div className="btn-afterpay">

                        <button type="submit" onClick={() => handleShowChange(invoice.id)}>Thay đổi địa chỉ</button>
                        <Link to={`../invoice/invoiceDetail/${invoice.id}`}>
                            <button type="">Xem đơn hàng</button>

                        </Link>
                    </div>
                </div>
            </div>


            <Modal size="lg" show={showChange} onHide={handleCloseChange}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật hãng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChangeAdress invoiceId={invoiceId} />
                </Modal.Body>

            </Modal>
        </>
    );
}

export default AfterPay;