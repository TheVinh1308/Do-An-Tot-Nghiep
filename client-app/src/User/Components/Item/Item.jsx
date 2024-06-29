import { Link } from "react-router-dom";
import "./Item.css";
import StarRatings from "react-star-ratings";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import ChoiceCompare from "../../Pages/ChoiceCompare";

const Item = (props) => {
    const [showStickyDiv, setShowStickyDiv] = useState(false);

    console.log(`this.props.`, props);
    const [listCompare, setListCompare] = useState({});
    const handleCompareButtonClick = (item) => {
        setShowStickyDiv(true);
        setListCompare(item);
    };

    const [show, setShow] = useState(false);
    const [brandSelect, setBrandSelect] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseCompare = () => {
        setShowStickyDiv(false);
    };

    return (
        <>
            <div className="item">
                <Link to={`${props.id}`}>
                    <img src={props.image} alt="" />
                </Link>
                <p>{props.name}</p>
                <StarRatings
                    rating={5}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="2px"
                />
                <div className="item-prices">
                    {props.promotionId !== 1 ? (
                        new Date(props.startDay) > new Date() ? (
                            <>
                                <div className="item-price-new">
                                    ${props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                                <div>Sắp khuyến mãi</div>
                            </>
                        ) : new Date() > new Date(props.endDay) ? (
                            <div className="item-price-new">
                                ${props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </div>
                        ) : (
                            <>
                                <div className="item-price-new">
                                    ${((props.price - (props.price * props.discountPercent) / 100)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }))}
                                </div>
                                <div className="item-price-old">
                                    ${props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </>
                        )
                    ) : (
                        <div className="item-price-new">
                            ${props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </div>
                    )}
                </div>
                <Button className="btn-sosanh" onClick={() => handleCompareButtonClick(props)}>
                    <i className="bi bi-plus-circle"></i>So sánh
                </Button>
            </div>


            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm hãng điện thoại</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChoiceCompare />
                </Modal.Body>

            </Modal>



            <div className="sticky-div" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000, display: showStickyDiv ? 'block' : 'none', backgroundColor: 'white' }}>
                <Row>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <>
                            {/* <Button style={{ transform: 'translate(65px, 20px)', marginTop: 5, backgroundColor: 'white', border: 'none' }}>
                                <FontAwesomeIcon icon={faXmark} style={{ color: 'gray' }} />
                            </Button> */}
                            <Card.Img variant="top" src={listCompare.image} style={{ width: 100 }} />
                            <h5 style={{ textAlign: 'center' }}>{listCompare.name}</h5>
                        </>

                    </Col>
                    <Col>
                        <Button style={{ width: 70, height: 70, backgroundColor: 'white', border: '2px dashed gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} onClick={handleShow} />
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{ width: 70, height: 70, backgroundColor: 'white', border: '2px dashed gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                        </Button>
                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Button onClick={handleCloseCompare} variant="secondary">
                            <FontAwesomeIcon icon={faRectangleXmark} /> Cancel
                        </Button>
                        <Link >
                            <Button style={{ marginTop: 2 }}>Compare</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Item;
