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
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Popular = () => {

    const [phonePromotion, setPhonePromotion] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/GetPhonePromotion`)
            .then(res => {
                setPhonePromotion(res.data)
            })
            .catch((err) => console.log("Loi lay du lieu",err))
    }, []);

    // const [topPhones, setTopPhones] = useState([{modPhone: {}}]);
    // useEffect(() => {
    //     axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/1`)
    //     .then((res) => setTopPhones(res.data))
    //     .catch((err) => console.log("Loi lay du lieu: ", err))

    // },[])

    const [iphone, setIPhone] = useState([{modPhone: {}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/1`)
        .then((res) => setIPhone(res.data))
        .catch((err) => console.log("Loi lay du lieu: ", err))

    },[])

    const [samsung, setSamsung] = useState([{modPhone: {}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/2`)
        .then((res) => setSamsung(res.data))
        .catch((err) => console.log("Loi lay du lieu: ", err))

    },[])

    const [vivo, setVivo] = useState([{modPhone: {}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/3`)
        .then((res) => setVivo(res.data))
        .catch((err) => console.log("Loi lay du lieu: ", err))

    },[])

    const [oppo, setOppo] = useState([{modPhone: {}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/getPhoneByBrandId/4`)
        .then((res) => setOppo(res.data))
        .catch((err) => console.log("Loi lay du lieu: ", err))

    },[])


    console.log(`phonePromotion`, phonePromotion);
    return (
        <div className="popular">
           
            <h2>CÁC SẢN PHẨM ĐANG KHUYẾN MÃI</h2>
            <hr />
            <Swiper
                slidesPerView={5}
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
                         <Link to={`${item?.modPhone?.brand?.name}/${item.id}`}>
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
                                    <p style={{color: "red"}}>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                </div>

                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr />
            {/* <h2>IPHONE</h2> */}
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
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
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {iphone.length > 0 && iphone.map((item, index) => (
                   index < 6 && (
                    <>
         
                    <SwiperSlide key={index}>
                        
                        <Link to={`${item?.modPhone?.brand?.name}/${item.id}`}>
                        <div className='img-popular'>
                            <div>
                                <img src={'https://localhost:7258/images/products/' + item?.modPhone.image} alt="Hinh anh"/>
                            </div>
                            <div className='info-popular'>

                                <p className='popular-name' style={{fontSize: "large"}}>{item?.modPhone.name}</p>
                                <div className='pop-price'>
                                    <p style={{color:"red", justifyContent: "center"}}>{(item?.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    {/* <p>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p> */}
                                </div>

                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    </>
                   )
                ))}
                 <Link to="/iPhone">
                        <Button>Xem thêm</Button>
                </Link>
            </Swiper>
            <hr />
            {/* <h2>SAMSUNG</h2> */}
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
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
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {samsung.length > 0 && samsung.map((item, index) => (
                    index < 6 &&   (
                    <SwiperSlide key={index}>
                        
                        <Link to={`${item?.modPhone?.brand?.name}/${item.id}`}>
                        <div className='img-popular'>
                            <div>
                                <img src={'https://localhost:7258/images/products/' + item?.modPhone.image} alt="Hinh anh"/>
                            </div>
                            <div className='info-popular'>
                                {/* <StarRatings
                                    rating={0}
                                    starRatedColor="#FFC107"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                /> */}
                                <p className='popular-name'>{item?.modPhone.name}</p>
                                <div className='pop-price'>
                                    <p style={{color:"red"}}>{(item?.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    {/* <p>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p> */}
                                </div>

                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                   )
                ))}
                   <Link to="/Samsung">
                        <Button>Xem thêm</Button>
                </Link>
            </Swiper>
            <hr />
            {/* <h2>OPPO</h2> */}
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
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
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {oppo.length > 0 && oppo.map((item, index) => (
                    index < 6 &&   (
                    <SwiperSlide key={index}>
                        
                        <Link to={`${item?.modPhone?.brand?.name}/${item.id}`}>
                        <div className='img-popular'>
                            <div>
                                <img src={'https://localhost:7258/images/products/' + item?.modPhone.image} alt="Hinh anh"/>
                            </div>
                            <div className='info-popular'>
                                {/* <StarRatings
                                    rating={0}
                                    starRatedColor="#FFC107"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                /> */}
                                <p className='popular-name'>{item?.modPhone.name}</p>
                                <div className='pop-price'>
                                    <p style={{color:"red"}}>{(item?.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    {/* <p>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p> */}
                                </div>

                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                   )
                ))}
                   <Link to="/Oppo">
                        <Button>Xem thêm</Button>
                </Link>
            </Swiper>
            <hr />
            {/* <h2>Vivo</h2> */}
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
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
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {vivo.length > 0 && vivo.map((item, index) => (
                    index < 6 &&   (
                    <SwiperSlide key={index}>
                        
                        <Link to={`${item?.modPhone?.brand?.name}/${item.id}`}>
                        <div className='img-popular'>
                            <div>
                                <img src={'https://localhost:7258/images/products/' + item?.modPhone.image} alt="Hinh anh"/>
                            </div>
                            <div className='info-popular'>
                                {/* <StarRatings
                                    rating={0}
                                    starRatedColor="#FFC107"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                /> */}
                                <p className='popular-name'>{item?.modPhone.name}</p>
                                <div className='pop-price'>
                                    <p style={{color:"red"}}>{(item?.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    {/* <p>{(item.price - (item.price * item.modPhone.promotion.discountPercent / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p> */}
                                </div>

                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                   )
                ))}
                   <Link to="/Vivo">
                        <Button>Xem thêm</Button>
                </Link>
            </Swiper>
        </div>
    );
}

export default Popular;
