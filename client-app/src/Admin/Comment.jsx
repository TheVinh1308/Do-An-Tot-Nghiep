import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Col, Image, Modal, Row, ProgressBar } from "react-bootstrap";
import Footer from "./Footer/Footer";
import axios from "axios";
const Comment = () => {

    const [liked, setLiked] = useState(false);
    const [reply, setReply] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }

    const handleReply = () => {
        setReply(!reply);
    }

    const [modPhones, setModPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then(res => {
                setModPhones(res.data);
            });
    }, []);

    const [modPhoneId, setModPhoneId] = useState(1);
    const handleGetIdModPhone = (modPhoneId) => {
        setModPhoneId(modPhoneId);
    }

    const [modPhoneSelected, setModPhoneSelected] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones/${modPhoneId}`)
            .then(res => {
                setModPhoneSelected(res.data);
            });
    }, [modPhoneId]);
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
                                <ul className="list-review" style={{ maxHeight: "100vh", overflow: "scroll" }}>
                                    {
                                        modPhones.map((item, index) => (
                                            <li key={index} onClick={() => { handleGetIdModPhone(item.id) }}>{item.name}</li>
                                        ))
                                    }
                                </ul>
                            </aside>
                        </Col>
                        <Col className="col-8">
                            <Row className="preview" style={{ height: '180px' }}>
                                <Col className="col-6 thumbnail-review">
                                    <img src={'https://localhost:7258/images/modPhones/' + modPhoneSelected.image} width="100%" />

                                </Col>
                                <Col className="col-6">
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>

                                    </Col>
                                    <Col md={8}>

                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                        <div className="feature-item">
                                            <i class="bi bi-trash2"></i>
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

                                    </Col>
                                    <Col md={8}>

                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                        <div className="feature-item">
                                            <i class="bi bi-trash2"></i>
                                            <i class="bi bi-reply"></i>
                                            <i class="bi bi-hand-thumbs-up"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>

                                    </Col>
                                    <Col md={8}>

                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                        <div className="feature-item">
                                            <i class="bi bi-trash2"></i>
                                            <i class="bi bi-reply"></i>
                                            <i class="bi bi-hand-thumbs-up"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="review-item">
                                    <Col md={4}>
                                        <p className="user-review">Phạm Hoan Vinh</p>
                                        <p className="date-review">11/04/2024</p>

                                    </Col>
                                    <Col md={8}>

                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, eos minima quia illo repudiandae labore quae, accusamus quam necessitatibus commodi reiciendis harum sed facere, sit consequatur aliquam natus quaerat? Eligendi?
                                        </div>
                                        <div className="feature-item">
                                            <i class="bi bi-trash2"></i>
                                            <i class="bi bi-reply"></i>
                                            <i class="bi bi-hand-thumbs-up"></i>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </div>
                </section>
                <Footer />
            </main>

        </>
    );
}

export default Comment;