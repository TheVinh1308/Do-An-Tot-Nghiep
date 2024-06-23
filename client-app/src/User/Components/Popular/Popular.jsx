import './Popular.css';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@fontsource/marcellus';
// import required modules
import { Pagination } from 'swiper/modules';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

const Popular = () => {

    const [phonePromotion, setPhonePromotion] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/GetPhonePromotion`)
            .then(res => {
                setPhonePromotion(res.data);
            });
    }, []);
    console.log(`phonePromotion`, phonePromotion);
    return (
        <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <h2>ON PROMOTION</h2>
            <hr />
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {phonePromotion.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='img-popular'>
                            <div>
                                <img src={'https://localhost:7258/images/products/' + item.modPhone.image} alt={item.modPhone.name} />
                            </div>
                            <div className='info-popular'>
                                <StarRatings
                                    rating={0}
                                    starRatedColor="#FFC107"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                />
                                <p>{item.modPhone.name}</p>
                                <div className='pop-price'>
                                    <p className='price-old'>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    <p>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Popular;
