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
import { Link } from "react-router-dom";
import Review from "../Review/Review";

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

    const [invoiceDetail, setInvoiceDetail] = useState([]);


    const handleCancelInvoice = async () => {
        if (selectedInvoice) {
            const updatedInvoice = { ...selectedInvoice, status: 4 };
    
            try {
                await axios.put(`https://localhost:7258/api/Invoices/${selectedInvoice.id}`, updatedInvoice);
                handleCloseReason();
    
                const formNotificationAdmin = new FormData();
                formNotificationAdmin.append("invoiceId", selectedInvoice.id);
                formNotificationAdmin.append("content", `${userName} đã huỷ một đơn hàng`);
                formNotificationAdmin.append("time", new Date().toISOString());
                formNotificationAdmin.append("url", `http://localhost:3000/admin/invoice/InvoiceDetail/${selectedInvoice.id}`);
                formNotificationAdmin.append("status", true);
    
                const res = await axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${selectedInvoice.id}`);
                setInvoiceDetail(res.data);
                console.log("invoiceStock", res.data);
    
                if (res.data.length > 0) {
                    await Promise.all(res.data.map(async (item) => {
                        const productResponse = await axios.get(`https://localhost:7258/api/Phones/${item.phone.id}`);
                        const product = productResponse.data;
    
                        const updatedStock = product.stock + item.quantity;
                        const formUp = {
                            ...product,
                            stock: updatedStock,
                        };
    
                        await axios.put(`https://localhost:7258/api/Phones/${item.phone.id}`, formUp, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            }
                        });
                    }));
    
                    alert("Đã hủy đơn hàng");
                }
    
                await axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin);
            } catch (error) {
                console.error('Error cancelling invoice:', error);
            }
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
                return "Đơn hàng đã được hoàn thành"
            case 5: 
                return "Đã thanh toán"
            case 6: 
                return "Thanh toán thất bại"
            default:
                return "Đơn hàng đã huỷ"
        }
    }

    return (
        <>
            <Navbar />
            <hr />
            <h1 className="title-compare">Lịch sử mua hàng</h1>


            <Tabs>
                <TabList>
                    {/* <Tab>Tất cả</Tab> */}
                    <Tab>Đang xác nhận</Tab>
                    <Tab>Đang vận chuyển</Tab>
                    <Tab>Đã thanh toán</Tab>
                    <Tab>Đã hoàn thành</Tab>
                    <Tab>Đã huỷ</Tab>
                </TabList>

                {/* <TabPanel>
                    {invoices && invoices.filter(item => item.status !== 6).map((item, index) => (
                        <>
                            <div className="content" key={index}>
                                <Link to={`InvoiceDetail/${item.id}`}>

                                    {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                        indexDetail === 0 && (
                                        <>
                                            <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
                                            <Row key={indexDetail} className="body-content">
                                                <Col md={4}>
                                                    <img src={`https://localhost:7258/images/products/${itemDetail.phone.modPhone.image}`} alt="" width={150} />
                                                   
                                                </Col>
                                                <Col md={8}>
                                               
                                                    <h4 style={{color: "black"}}>{itemDetail.phone.name}</h4>
                                                    <p  style={{color: "black"}}>{itemDetail.phone.modPhone.description}</p>
                                                    <p  style={{color: "black"}}>Màu: {itemDetail.phone.color}, Dung lượng:  {itemDetail.phone.rom} GB</p>
                                                    <p style={{color: "red"}}>{(itemDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x{itemDetail.quantity}</p>

                                                </Col>
                                                
                                            </Row>
                                            <hr />
                                            
                                        </>
                                        )

                                    ))}
                                </Link>
                                <Row>
                                    <Col className="btn-content">
                                        {
                                            item.status == 4 ?
                                                <>
                                                    <Button>Mua lại</Button>
                                                </> :
                                                item.status == 1 ?
                                                    <>
                                                        <Button onClick={() => handleShowReason(item)}>Huỷ đơn hàng</Button>
                                                    </>
                                                    : item.status == 2 && item.status !== 6?
                                                        <>

                                                        </>
                                                        : <>
                                                            <Button>Mua lại</Button>
                                                            <Link to={`InvoiceDetail/${item.id}`}>
                                                                <Button>Viết đánh giá</Button>
                                                            </Link>
                                                        </>
                                        }
                                    </Col>
                                </Row>

                            </div >
                        </>
                    ))}
                </TabPanel> */}
                <TabPanel>
                    {invoices && invoices.filter(item => item.status === 1).map((item, index) => (

                        <div className="content" key={index}>
                            <Link to={`InvoiceDetail/${item.id}`}>
                              
                                {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                    indexDetail === 0 && (
                                    <>
                                     <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
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
                                    )
                                ))}
                            </Link>
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {
                                        item.status == 4 ?
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

                    {invoices && invoices.filter(item => item.status === 2).map((item, index) => (

                        <div className="content" key={index}>
                            <Link to={`InvoiceDetail/${item.id}`}>
                               
                                {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                    indexDetail === 0 && (
                                    <>
                                         <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
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
                                    )
                                ))}
                            </Link>
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    {/* {
                                        item.status == 4 ?
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
                                    } */}
                                </Col>
                            </Row>
                        </div>

                    ))}

                </TabPanel>
                <TabPanel>
                    {invoices && invoices.filter(item => item.status === 5).map((item, index) => (

                        <div className="content" key={index}>
                            <Link to={`InvoiceDetail/${item.id}`}>
                              
                                {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                    indexDetail === 0 && (
                                    <>
                                     <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
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
                                    )
                                ))}
                            </Link>
                            <Row>
                                <Col className="btn-content">
                                    <Link to={`InvoiceDetail/${item.id}`}>
                                        <Button>Xem chi tiết</Button>
                                    </Link>
                                </Col>
                            </Row>
                           
                        </div>

                    ))}
                </TabPanel>
                <TabPanel>
                    {invoices && invoices.filter(item => item.status === 3).map((item, index) => (

                        <div className="content" key={index}>
                            <Link to={`InvoiceDetail/${item.id}`}>
                               
                                {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                    indexDetail === 0 && (
                                    <>
                                     <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
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
                                    )
                                ))}
                            </Link>
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                    <Link to={`InvoiceDetail/${item.id}`}>
                                        <Button>Xem chi tiết</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>

                    ))}

                </TabPanel>
                <TabPanel>
                    {invoices && invoices.filter(item => item.status === 4).map((item, index) => (

                        <div className="content" key={index}>
                            <Link to={`InvoiceDetail/${item.id}`}>
                               
                                {invoiceDetails[item.id] && invoiceDetails[item.id].map((itemDetail, indexDetail) => (
                                    indexDetail === 0 && (
                                    <>
                                     <Row className="head-content">
                                                <Col>#{item.code}</Col>
                                                <Col>{handleTT(item.status)}</Col>
                                                <p  style={{color: "red"}}>Gồm {(invoiceDetails[item.id]).length} sản phẩm</p>
                                            </Row>
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
                                    )
                                ))}
                            </Link>
                            <Row>
                                <Col>
                                </Col>
                                <Col className="btn-content">
                                </Col>
                            </Row>
                        </div>

                    ))}

                </TabPanel>
              
             
                
            </Tabs >


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
