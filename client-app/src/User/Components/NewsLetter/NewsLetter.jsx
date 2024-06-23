import { Col, Row } from "react-bootstrap";
import "./NewsLetter.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination } from 'swiper/modules';

const NewsLetter = () => {
    return (
        <>
            <div className="newsletter">
                <hr />
                <p>Subscribe to our newsletter and stay updated</p>

                <h1>Customer Care</h1>

                <Row>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}

                        pagination={{
                            clickable: true,
                        }}

                        modules={[Pagination]}
                        className="mySwiper"

                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="img-1">
                                {/* Add image or content here */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img-2">
                                {/* Add image or content here */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img-3">
                                {/* Add image or content here */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img-4">
                                {/* Add image or content here */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img-5">
                                {/* Add image or content here */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </div>
        </>
    );
}

export default NewsLetter;
