import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Col, Image, Modal, Row, ProgressBar } from "react-bootstrap";
import Footer from "./Footer/Footer";
import axios from "axios";
import { format } from "date-fns";
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
    const [comments, setComments] = useState([])
    const handleGetIdModPhone = (modPhoneId) => {
        setModPhoneId(modPhoneId);
        axios.get(`https://localhost:7258/api/Comments/GetCommentByModPhone/${modPhoneId}`)
        .then((res) => setComments(res.data))
        .catch((err) => console.log("Lỗi lấy dữ liệu"));
    }

    console.log(comments);

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
                            {
                                comments.map((item, index) => (
                                    <Row style={{ marginTop: '20px' }}>
                                        <Row className="review-item">
                                            <Col md={4}>
                                                <p className="user-review">{item.user.fullname}</p>
                                                <p className="date-review">{format(new Date(item?.postDate || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}</p>

                                            </Col>
                                            <Col md={8}>

                                                <div>
                                                    {item.content}
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
                                    </Row>
                                ))
                            }
                        </Col>
                    </div>
                </section>
                <Footer />
            </main>

        </>
    );
}

export default Comment;