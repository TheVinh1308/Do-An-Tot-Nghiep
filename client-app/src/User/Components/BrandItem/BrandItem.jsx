import axios from "axios";
import { Carousel } from "bootstrap";

import "./BrandItem.css";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const BrandItem = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Brands`)
            .then(res => {
                setBrands(res.data); // Cập nhật dữ liệu DataTable
            });
    }, []);
    console.log(`brands`, brands);
    return (
        <>
            <div className="brandItem">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 6,
                            spaceBetween: 25,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        brands.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/${item.name}`}>
                                    <div className="brand-item">
                                        <Image src={'https://localhost:7258/images/brands/' + item.logo} />
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>



        </>

    );
}

export default BrandItem;