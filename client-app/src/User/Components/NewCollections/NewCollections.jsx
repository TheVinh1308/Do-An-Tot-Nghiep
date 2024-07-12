import './NewCollections.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import StarRatings from 'react-star-ratings';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
const NewCollections = () => {

    const [newPhone, setNewPhone] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/GetNewPhone`)
            .then(res => {
                setNewPhone(res.data);
            });
    }, []);
    return (
        <>
            <div className="new-collections">
                <p> NEW PRODUCTS</p>
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="collections">
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {newPhone.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Row>
                                    <Col >
                                        <div className=" img-col">
                                            <img src={'https://localhost:7258/images/modPhones/' + item.modPhone.image} alt={item.modPhone.name} />

                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='info-new'>
                                            <h3>{item.name}</h3>
                                            <StarRatings
                                                rating={0}
                                                starRatedColor="#FFC107"
                                                numberOfStars={5}
                                                starDimension="15px"
                                                starSpacing="1px"
                                            />

                                            <p>{item.modPhone.description}</p>
                                            <p>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                            <button className="btn-col">Xem chi tiết</button>
                                        </div>
                                    </Col>
                                </Row>

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default NewCollections;