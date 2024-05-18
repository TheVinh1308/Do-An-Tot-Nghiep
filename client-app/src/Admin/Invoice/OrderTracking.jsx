import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../Breadcrumb";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./OderTracking.css"
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { useState } from "react";
import Footer from "../Footer/Footer";
const OderTracking = () => {
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const handleShow = () => {
        setShowOrderDetail(!showOrderDetail);
    }
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Breadcrumb />
                <section className="section">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <section className="vh-80">
                                    <div className="container h-100">
                                        <div className="row d-flex justify-content-center align-items-end h-100">

                                            <div className="col-12">
                                                <div className="container pb-5 mb-sm-4">
                                                    {/* Details*/}
                                                    <div className="row mb-3">
                                                        <div className="col-sm-4 mb-2">
                                                            <div className="bg-secondary p-4 text-dark text-center"><span className="font-weight-semibold mr-2">Shipped via:</span>UPS Ground</div>
                                                        </div>
                                                        <div className="col-sm-4 mb-2">
                                                            <div className="bg-secondary p-4 text-dark text-center"><span className="font-weight-semibold mr-2">Status:</span>Quality check</div>
                                                        </div>
                                                        <div className="col-sm-4 mb-2">
                                                            <div className="bg-secondary p-4 text-dark text-center"><span className="font-weight-semibold mr-2">Expected date:</span>June 17, 2019</div>
                                                        </div>
                                                    </div>
                                                    {/* Progress*/}
                                                    <div className="steps">
                                                        <div className="steps-header">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="steps-body">
                                                            <div className="step step-completed"><span className="step-indicator"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg></span><span className="step-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></span>Order confirmed</div>
                                                            <div className="step step-completed"><span className="step-indicator"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg></span><span className="step-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></span>Processing order</div>
                                                            <div className="step step-active"><span className="step-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx={12} cy={8} r={7} /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg></span>Quality check</div>
                                                            <div className="step"><span className="step-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck"><rect x={1} y={3} width={15} height={13} /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span>Product dispatched</div>
                                                            <div className="step"><span className="step-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>Product delivered</div>
                                                        </div>
                                                    </div>
                                                    {/* Footer*/}
                                                    <div className="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
                                                        <div className="custom-control custom-checkbox mt-2 mr-3">
                                                            <input className="custom-control-input" type="checkbox" id="notify-me" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="notify-me">Notify me when order is delivered</label>
                                                        </div>
                                                        <a className="btn btn-primary btn-sm mt-2" href="#order-details" data-toggle="modal" onClick={handleShow}>View Order Details</a>
                                                    </div>
                                                    {
                                                        showOrderDetail ? (
                                                            <div>
                                                                <div className="card" style={{ marginTop: '1rem' }}>
                                                                    <div className="card-body">
                                                                        <div>
                                                                            <h4 className="card-title mb-4">Work Experince</h4>
                                                                            <ul className="list-unstyled work-activity mb-0">
                                                                                <li className="work-item" data-date="2020-21">
                                                                                    <h6 className="lh-base mb-0">ABCD Company</h6>
                                                                                    <p className="font-size-13 mb-2">Web Designer</p>
                                                                                    <p>To achieve this, it would be necessary to have uniform grammar, and more
                                                                                        common words.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                                <li className="work-item" data-date="2019-20">
                                                                                    <h6 className="lh-base mb-0">XYZ Company</h6>
                                                                                    <p className="font-size-13 mb-2">Graphic Designer</p>
                                                                                    <p className="mb-0">It will be as simple as occidental in fact, it will be
                                                                                        Occidental person, it will seem like simplified.</p>
                                                                                </li>
                                                                            </ul>{/* end ul */}
                                                                        </div>
                                                                    </div>{/* end card-body */}
                                                                </div>{/* end card */}

                                                            </div>
                                                        ) : ''
                                                    }

                                                </div>

                                            </div>

                                            {/* <div style={{ textAlign: 'center', marginLeft: '10px' }} >
                                                <Row className="row-order" >
                                                    <Col className="col-order"><i class="bi bi-upc-scan fa-3x me-lg-4 mb-3 mb-lg-0"></i>Mã đơn hàng: FDFTR8TJF</Col>
                                                    <Col className="col-order"><i class="bi bi-alarm fa-3x me-lg-4 mb-3 mb-lg-0"></i>Thời gian dự kiến: 12/05/2024 - 14/05/2024</Col>
                                                    <Col className="col-order"><i class="bi bi-cash-coin fa-3x me-lg-4 mb-3 mb-lg-0"></i>Tổng giá tiền: 25.000.000đ</Col>
                                                </Row>
                                                <Row className="row-order">
                                                    <Col className="col-order"><i class="bi bi-person-lines-fill fa-3x me-lg-4 mb-3 mb-lg-0"></i>Đơn vị vận chuyển: Ninja Vận</Col>
                                                    <Col className="col-order"><i class="bi bi-person-fill-check fa-3x me-lg-4 mb-3 mb-lg-0"></i>Nhân viên vận chuyển: Phạm Hoan Vinh</Col>
                                                    <Col className="col-order"><i class="bi bi-telephone-forward fa-3x me-lg-4 mb-3 mb-lg-0"></i>Số điện thoại: 036-4067-704</Col>
                                                </Row>

                                            </div> */}
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </section >
                <Footer />
            </main >

        </>
    );
}

export default OderTracking;