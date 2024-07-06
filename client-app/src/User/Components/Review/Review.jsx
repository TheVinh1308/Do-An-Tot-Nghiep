import { Col, Row } from "react-bootstrap";
import "./Review.css"
import { useEffect, useState } from "react";
import axios from "axios";
const Review = ({userId, modPhoneId}) => {

    const [imageSrc, setImageSrc] = useState();
    const [review, setReview] = useState({ status: true, ImageFile: null });
    const [selectedStarCount, setSelectedStarCount] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [rate, setRate] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Reviews/GetReviewByModPhone/${modPhoneId}`)
            .then(res => {
                setReviews(res.data);
            });
    }, []); 
    

    

    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImageSrc(file)
        setReview(prev => ({ ...prev, ImageFile: e.target.files[0] }));
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setReview(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formReview = new FormData();
        Object.entries(review).forEach(([key, value]) => {
            formReview.append(key, value);
        });
        formReview.append('userId', userId);
        formReview.append('modPhoneId', modPhoneId);
        formReview.append("status", 1);
        formReview.append("rate",selectedStarCount)
        formReview.append("dateReview", new Date().toLocaleString())

        axios.post(`https://localhost:7258/api/Reviews`,formReview )
        .then(() => alert("đã thêm đánh giá"))
        .catch((err) => console.log("lỗi thêm đánh giá",err));
    }

   
    

    return ( 
        <>
           <form className="form-modphone g-3" onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-6 form-item" md={6} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" name="ImageFile" onChange={handleImageChange} />
                        {imageSrc ? (
                            <img src={imageSrc.preview} width="100%" />
                        ) : (
                            <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                        )}

                    </Col>
                    <Col className="col-6" md={6} xs={12}>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-image"></i>
                                <label htmlFor="inputNanme4" className="form-label">Đánh giá về điện thoại: </label>
                                <span className="stars d-block">
                                    {
                                        [...Array(5)].map((_,index) => {
                                            return <span key={index}
                                                        className={`${index + 1 <= selectedStarCount ? 'selecte' : ''} `}
                                                        onClick={() => setSelectedStarCount(index + 1)}
                                                        // onMouseOver={() => setSelectedStarCount(index + 1)}
                                                        // onMouseOut={() => setSelectedStarCount(0)}
                                            >&#9733;</span>
                                        })
                                    }
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-item" xs={12} >
                                <i class="bi bi-layout-wtf"></i>
                                <label htmlFor="inputNanme4" className="form-label">Nội dung: </label>
                                <input type="text" className="form-control"
                                    id="name"
                                    name="content"
                                    onChange={handleChange}
                                    required />
                            </Col>

                        </Row>

                        <Row className="btn-brand">
                            <div className="btn-brand">
                                <button type="submit" className="btn btn-success mt-3">Thêm</button>
                            </div>

                        </Row>

                    </Col>
                </Row>

            </form>
        </>
     );
}
 
export default Review
