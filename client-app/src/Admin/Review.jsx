import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Col, Image, Modal, Row, ProgressBar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import StarRatings from "react-star-ratings";
import { useState } from "react";
const Review = () => {
    let sumRate = 47;
    let num = 10;
    let rating;
    if (num == 0) {
        rating = 0;
    }
    else {
        rating = parseFloat((sumRate / num).toFixed(1));
    }

    const [liked, setLiked] = useState(false);
    const [reply, setReply] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }

    const handleReply = () => {
        setReply(!reply);
    }
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Breadcrumb />
                <section className="section">
                    <div className="row">
                        <Col className="col-4">
                            <aside id="sidebar" className="sidebar-review">
                                <ul className="list-review">
                                    <li>IPhone 15 Pro max</li>
                                    <li>IPhone 15 Pro</li>
                                    <li>IPhone 15 </li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                    <li>Điện thoại 01</li>
                                </ul>
                            </aside>
                        </Col>
                        <Col className="col-8">
                            <Row className="preview">
                                <Col className="col-6 thumbnail-review">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />

                                </Col>
                                <Col className="col-6">
                                    <StarRatings className='list-vote-icon'
                                        rating={rating}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="30px"
                                        starSpacing="2px"

                                    />
                                    <Row className="rate-item">
                                        <Col xs='auto'>
                                            <p className="p-start" >
                                                <span style={{ display: 'inline-block' }}> <StarRatings
                                                    rating={5}
                                                    starRatedColor="#FFC107"
                                                    // changeRating={onStarClick}
                                                    numberOfStars={5}
                                                    starDimension="15px"
                                                    starSpacing="1px"
                                                /></span>
                                            </p>
                                        </Col>
                                        <Col><ProgressBar className="PB-start" variant="warning" max={num} now={5} style={{ height: '8px', marginTop: '11px' }} /></Col>
                                        <Col>{5}</Col>
                                    </Row>
                                    <Row className="rate-item">
                                        <Col xs='auto'>
                                            <p className="p-start" >
                                                <span style={{ display: 'inline-block' }}> <StarRatings
                                                    rating={4}
                                                    starRatedColor="#FFC107"
                                                    // changeRating={onStarClick}
                                                    numberOfStars={5}
                                                    starDimension="15px"
                                                    starSpacing="1px"
                                                /></span>
                                            </p>
                                        </Col>
                                        <Col><ProgressBar className="PB-start" variant="warning" max={num} now={1} style={{ height: '8px', marginTop: '11px' }} /></Col>
                                        <Col>{1}</Col>
                                    </Row>
                                    <Row className="rate-item">
                                        <Col xs='auto'>
                                            <p className="p-start" >
                                                <span style={{ display: 'inline-block' }}> <StarRatings
                                                    rating={3}
                                                    starRatedColor="#FFC107"
                                                    // changeRating={onStarClick}
                                                    numberOfStars={5}
                                                    starDimension="15px"
                                                    starSpacing="1px"
                                                /></span>
                                            </p>
                                        </Col>
                                        <Col><ProgressBar className="PB-start" variant="warning" max={num} now={0} style={{ height: '8px', marginTop: '11px' }} /></Col>
                                        <Col>{0}</Col>
                                    </Row>
                                    <Row className="rate-item" >
                                        <Col xs='auto'>
                                            <p className="p-start" >
                                                <span style={{ display: 'inline-block' }}> <StarRatings
                                                    rating={2}
                                                    starRatedColor="#FFC107"
                                                    // changeRating={onStarClick}
                                                    numberOfStars={5}
                                                    starDimension="15px"
                                                    starSpacing="1px"
                                                /></span>
                                            </p>
                                        </Col>
                                        <Col><ProgressBar className="PB-start" variant="warning" max={num} now={1} style={{ height: '8px', marginTop: '11px' }} /></Col>
                                        <Col>{1}</Col>
                                    </Row>
                                    <Row className="rate-item">
                                        <Col xs='auto'>
                                            <p className="p-start" >
                                                <span style={{ display: 'inline-block' }}> <StarRatings
                                                    rating={1}
                                                    starRatedColor="#FFC107"
                                                    // changeRating={onStarClick}
                                                    numberOfStars={5}
                                                    starDimension="15px"
                                                    starSpacing="1px"
                                                /></span>
                                            </p>
                                        </Col>
                                        <Col><ProgressBar className="PB-start" variant="warning" max={num} now={3} style={{ height: '8px', marginTop: '11px' }} /></Col>
                                        <Col>{3}</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>
                                        <StarRatings
                                            rating={5}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="2px"

                                        />
                                    </Col>
                                    <Col md={8}>
                                        <div className="img-review">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                        <div className="feature-item">
                                            <i class="bi bi-reply" onClick={handleReply}></i>
                                            <i class="bi bi-hand-thumbs-up" style={{ color: liked ? 'rgb(255, 193, 7)' : '' }} onClick={handleLike}></i>
                                        </div>
                                        {
                                            reply && (
                                                <div className="reply-comment">
                                                    <input className="input-comment" type="text" />
                                                    <button className="btn-comment" >Đăng</button>
                                                </div>
                                            )
                                        }
                                    </Col>
                                </Row>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>
                                        <StarRatings
                                            rating={5}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="2px"

                                        />
                                    </Col>
                                    <Col md={8}>
                                        <div className="img-review">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>
                                        <StarRatings
                                            rating={5}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="2px"

                                        />
                                    </Col>
                                    <Col md={8}>
                                        <div className="img-review">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>
                                        <StarRatings
                                            rating={5}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="2px"

                                        />
                                    </Col>
                                    <Col md={8}>
                                        <div className="img-review">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                            <img src={process.env.PUBLIC_URL + '/assets/img/Phone/ip-15-pro-max-blue-1.png'} width="100%" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Review;