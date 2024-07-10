import { Link } from "react-router-dom";
import "./Item.css";
import StarRatings from "react-star-ratings";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import ChoiceCompare from "../../Pages/ChoiceCompare";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
    const [showStickyDiv, setShowStickyDiv] = useState(false);
    const { iitemCompare, setIitemCompare, show, setShow } = useContext(ShopContext); // Use useContext
    console.log(`this.props.`, props);
    const [listCompare, setListCompare] = useState({});
    const handleCompareButtonClick = (item) => {
        setShowStickyDiv(true);
        setListCompare(item);
        setIitemCompare((prevItems) => [...prevItems, item]);
    };


    const [brandSelect, setBrandSelect] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseCompare = () => {
        setShowStickyDiv(false);
        setIitemCompare([]);
    };


    const handleCancel = (item) => {
        setIitemCompare((prevItems) => prevItems.filter((compareItem) => compareItem !== item));
    }


    console.log(`props`, props);
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
                                    {props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
                                    {((props.price - (props.price * props.discountPercent) / 100)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }))}
                                </div>
                                <div className="item-price-old">
                                    {props.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
                    <Modal.Title className="add-title">Thêm sản phẩm so sánh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChoiceCompare />
                </Modal.Body>

            </Modal>



            <div className="sticky-div" style={{ display: showStickyDiv ? 'block' : 'none' }}>
                <Row>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} md={3} sx={6}>
                        <>
                            {/* <Button style={{ transform: 'translate(65px, 20px)', marginTop: 5, backgroundColor: 'white', border: 'none' }}>
                                <FontAwesomeIcon icon={faXmark} style={{ color: 'gray' }} />
                            </Button> */}
                            <Card.Img variant="top" src={listCompare?.image} style={{ width: 150 }} />
                            <h6 style={{ textAlign: 'center' }}>{listCompare?.name}</h6>
                        </>

                    </Col>
                    {
                        iitemCompare.length == 1 ?
                            <>
                                <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Button className="add-compare" onClick={handleShow} >
                                        <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                                    </Button>
                                </Col>
                                <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Button className="add-compare" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                                    </Button>
                                </Col>
                            </> : iitemCompare.length == 2 ?
                                <>
                                    <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {/* <Button className="del-compare" ><FontAwesomeIcon icon={faXmark} style={{ color: 'black' }} /></Button> */}
                                        <Card.Img variant="top" src={`https://localhost:7258/images/products/${iitemCompare[1]?.modPhone?.image}`} style={{ width: 150 }} />
                                        <h6 style={{ textAlign: 'center' }}>{iitemCompare[1]?.name}</h6>
                                        <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[1])}>Huỷ chọn</Button>
                                    </Col>
                                    <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Button className="add-compare" onClick={handleShow}>
                                            <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                                        </Button>
                                    </Col>
                                </> : <>
                                    <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                        <Card.Img variant="top" src={`https://localhost:7258/images/products/${iitemCompare[1]?.modPhone?.image}`} style={{ width: 150 }} />
                                        <h6 style={{ textAlign: 'center' }}>{iitemCompare[1]?.name}</h6>
                                        <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[1])}>Huỷ chọn</Button>
                                    </Col>
                                    <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                        <Card.Img variant="top" src={`https://localhost:7258/images/products/${iitemCompare[2]?.modPhone?.image}`} style={{ width: 150 }} />
                                        <h6 style={{ textAlign: 'center' }}>{iitemCompare[2]?.name}</h6>
                                        <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[2])}>Huỷ chọn</Button>
                                    </Col>
                                </>
                    }


                    <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Button onClick={handleCloseCompare} variant="secondary">
                            <FontAwesomeIcon icon={faRectangleXmark} /> Cancel
                        </Button>

                        <Button style={{ marginTop: 2 }} disabled={iitemCompare.length === 1}> <Link to="/compare" className="btn-compare">Compare  </Link></Button>

                    </Col>
                </Row>
            </div >
        </>
    );
};

export default Item;
