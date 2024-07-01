import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "datatables.net-bs5";
import $ from "jquery";
import { Badge, Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Invoice.css";
import { jwtDecode } from "jwt-decode";
import InvoiceDetail from "./InvoiceDetail";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Invoice = () => {
    const [loadData, setLoadData] = useState(false);
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();
    const [invoiceId, getInvoiceId] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        getInvoiceId(id);
    }
    // cancle
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [showReason, setShowReason] = useState(false);
    const handleCloseReason = () => setShowReason(false);
    const handleShowReason = (invoice) => {
        setShowReason(true);
        setSelectedInvoice(invoice);
        setCancelReasons({}); // Reset cancel reasons when opening modal
    };
    const [cancelReasons, setCancelReasons] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setIsAuthenticated(true);
        }
    }, []);

    const [invoices, setInvoices] = useState([]);
    const [invoiceDetails, setInvoiceDetails] = useState({});

    useEffect(() => {
        if (userId) {
            const fetchInvoicesAndDetails = async () => {
                try {
                    const res = await axios.get(`https://localhost:7258/GetInvoiceByUserId/${userId}`);
                    const invoices = res.data;
                    setInvoices(invoices);

                    const detailsPromises = invoices.map(invoice =>
                        axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${invoice.id}`)
                    );
                    const detailsResponses = await Promise.all(detailsPromises);

                    const details = detailsResponses.reduce((acc, response, index) => {
                        acc[invoices[index].id] = response.data;
                        return acc;
                    }, {});

                    setInvoiceDetails(details);
                } catch (error) {
                    console.error('Error fetching invoices or invoice details:', error);
                }
            };

            fetchInvoicesAndDetails();
        }
    }, [userId, showReason]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await axios.get(`https://localhost:7258/api/Brands`);
                setInvoices(res.data);
            } catch (error) {
                console.error("Error fetching invoices", error);
            }
        };
        fetchInvoices();
    }, []);


    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ border: "solid 1px black", color: "black" }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:

                return <Badge bg="danger">Đã huỷ</Badge>;
            default:
                return <Badge bg="success">Hoàn thành</Badge>;
        }
    };

    const getPaymentMethod = (paymentMethod) => {
        switch (paymentMethod) {
            case 1:
                return "Tiền mặt";
            case 2:
                return "MOMO";
            default:
                return "VNPay";
        }
    };

    const handleCancelReasonChange = (reason) => {
        setCancelReasons(prevReasons => ({
            ...prevReasons,
            [reason]: !prevReasons[reason]
        }));
    };
    const isAnyReasonSelected = Object.values(cancelReasons).some(value => value);

    console.log("sl", selectedInvoice);
    const handleCancelInvoice = () => {
        if (selectedInvoice) {
            const updatedInvoice = { ...selectedInvoice, status: 4 };

            axios.put(`https://localhost:7258/api/Invoices/${selectedInvoice.id}`, updatedInvoice)
                .then(() => {
                    handleCloseReason()
                    alert("Đã hủy đơn hàng")
                })
                .catch((error) => console.error('Error cancelling invoice:', error));
        }
    };

    console.log(`invoices`, invoiceDetails);

    const handleTT = (status) => {
        switch (status) {
            case 1:
                return "Đơn hàng đang xác nhận"
            case 2:
                return "Đơn hàng đang vận chuyển"
            case 3:
                return "Đơn hàng đã huỷ"
            default:
                return "Đơn hàng đã được hoàn thành"
        }
    }

    return (
        <>
            <Navbar />
            <hr />
            <h1 className="title-compare">Lịch sử mua hàng</h1>


            <Tabs>
                <TabList>
                    <Tab>Tất cả</Tab>
                    <Tab>Đang xác nhận</Tab>
                    <Tab>Đang vận chuyển</Tab>
                    <Tab>Đã huỷ</Tab>
                    <Tab>Đã hoàn thành</Tab>
                </TabList>

                <TabPanel>
                    {invoices.map((item, index) => (
                        <div className="content" key={index}>
                            <Row className="head-content">
                                <Col>#{item.code}</Col>
                                <Col>{handleTT(item.status)}</Col>
                            </Row>
                            {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                <>
                                    <Row key={indexDetail} className="body-content">
                                        <Col md={4}>
                                            <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                        </Col>
                                        <Col md={8}>
                                            <h4>{itemDetail.phone.name}</h4>
                                            <p>{itemDetail.phone.modPhone.description}</p>
                                            <p>{itemDetail.phone.color}, {itemDetail.phone.rom}GB</p>
                                            <p>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {itemDetail.quantity}</p>

                                        </Col>
                                    </Row>
                                    <hr />
                                </>

                            ))}
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 3 ?
                                            <>
                                                <Button>Mua lại</Button>
                                            </> :
                                            item.status == 1 ?
                                                <>
                                                    <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                </>
                                                : item.status == 2 ?
                                                    <>

                                                    </>
                                                    : <>
                                                        <Button>Mua lại</Button>
                                                        <Button>Viết đánh giá</Button>
                                                    </>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel>
                    {invoices.filter(item => item.status === 1).map((item, index) => (
                        <div className="content" key={index}>
                            <Row className="head-content">
                                <Col>#{item.code}</Col>
                                <Col>{handleTT(item.status)}</Col>
                            </Row>
                            {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                <>
                                    <Row key={indexDetail} className="body-content">

                                        <Col md={4}>
                                            <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                        </Col>
                                        <Col md={8}>
                                            <h4>{itemDetail.phone.name}</h4>
                                            <p>{itemDetail.phone.modPhone.description}</p>
                                            <p>{itemDetail.phone.color}, {itemDetail.phone.rom}GB</p>
                                            <p>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {itemDetail.quantity}</p>

                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            ))}
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 3 ?
                                            <>
                                                <Button>Mua lại</Button>
                                            </> :
                                            item.status == 1 ?
                                                <>
                                                    <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                </>
                                                : item.status == 2 ?
                                                    <>

                                                    </>
                                                    : <>
                                                        <Button>Mua lại</Button>
                                                        <Button>Viết đánh giá</Button>
                                                    </>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel>
                    {invoices.filter(item => item.status === 2).map((item, index) => (
                        <div className="content" key={index}>
                            <Row className="head-content">
                                <Col>#{item.code}</Col>
                                <Col>{handleTT(item.status)}</Col>
                            </Row>
                            {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                <>
                                    <Row key={indexDetail} className="body-content">

                                        <Col md={4}>
                                            <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                        </Col>
                                        <Col md={8}>
                                            <h4>{itemDetail.phone.name}</h4>
                                            <p>{itemDetail.phone.modPhone.description}</p>
                                            <p>{itemDetail.phone.color}, {itemDetail.phone.rom}GB</p>
                                            <p>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {itemDetail.quantity}</p>

                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            ))}
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 3 ?
                                            <>
                                                <Button>Mua lại</Button>
                                            </> :
                                            item.status == 1 ?
                                                <>
                                                    <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                </>
                                                : item.status == 2 ?
                                                    <>

                                                    </>
                                                    : <>
                                                        <Button>Mua lại</Button>
                                                        <Button>Viết đánh giá</Button>
                                                    </>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))}

                </TabPanel>
                <TabPanel>
                    {invoices.filter(item => item.status === 3).map((item, index) => (
                        <div className="content" key={index}>
                            <Row className="head-content">
                                <Col>#{item.code}</Col>
                                <Col>{handleTT(item.status)}</Col>
                            </Row>
                            {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                <>
                                    <Row key={indexDetail} className="body-content">

                                        <Col md={4}>
                                            <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                        </Col>
                                        <Col md={8}>
                                            <h4>{itemDetail.phone.name}</h4>
                                            <p>{itemDetail.phone.modPhone.description}</p>
                                            <p>{itemDetail.phone.color}, {itemDetail.phone.rom}GB</p>
                                            <p>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {itemDetail.quantity}</p>

                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            ))}
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 3 ?
                                            <>
                                                <Button>Mua lại</Button>
                                            </> :
                                            item.status == 1 ?
                                                <>
                                                    <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                </>
                                                : item.status == 2 ?
                                                    <>

                                                    </>
                                                    : <>
                                                        <Button>Mua lại</Button>
                                                        <Button>Viết đánh giá</Button>
                                                    </>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))}

                </TabPanel>
                <TabPanel>
                    {invoices.filter(item => item.status === 4).map((item, index) => (
                        <div className="content" key={index}>
                            <Row className="head-content">
                                <Col>#{item.code}</Col>
                                <Col>{handleTT(item.status)}</Col>
                            </Row>
                            {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                <>
                                    <Row key={indexDetail} className="body-content">

                                        <Col md={4}>
                                            <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                        </Col>
                                        <Col md={8}>
                                            <h4>{itemDetail.phone.name}</h4>
                                            <p>{itemDetail.phone.modPhone.description}</p>
                                            <p>{itemDetail.phone.color}, {itemDetail.phone.rom}GB</p>
                                            <p>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x {itemDetail.quantity}</p>

                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            ))}
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 3 ?
                                            <>
                                                <Button>Mua lại</Button>
                                            </> :
                                            item.status == 1 ?
                                                <>
                                                    <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                </>
                                                : item.status == 2 ?
                                                    <>

                                                    </>
                                                    : <>
                                                        <Button>Mua lại</Button>
                                                        <Button>Viết đánh giá</Button>
                                                    </>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>


            <Modal fullscreen show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Chi tiết hoá đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceDetail invoiceId={invoiceId} />
                </Modal.Body>
            </Modal>

            <Modal size="lg" show={showReason} onHide={handleCloseReason}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Lý do hủy đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Cập nhật số lượng')} />
                        <span className="text">Cập nhật số lượng</span> <br />
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Thay đổi số điện thoại')} />
                        <span className="text">Thay đổi số điện thoại</span> <br />
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Thay đổi địa chỉ nhận hàng')} />
                        <span className="text">Thay đổi địa chỉ nhận hàng</span> <br />
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Chọn nhầm sản phẩm')} />
                        <span className="text">Chọn nhầm sản phẩm</span>  <br />
                        <input type="checkbox" className="chk" onChange={() => handleCancelReasonChange('Khác')} />
                        <span className="text"  >Khác</span>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-success" onClick={handleCancelInvoice} disabled={!isAnyReasonSelected}>Xác nhận hủy</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Invoice;
