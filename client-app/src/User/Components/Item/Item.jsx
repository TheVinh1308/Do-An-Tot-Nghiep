import { Link } from "react-router-dom";
import "./Item.css"
import StarRatings from "react-star-ratings";
const Item = (props) => {
    console.log(props);
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
                    // changeRating={onStarClick}
                    numberOfStars={5}
                    name='rating'
                    starDimension="15px"
                    starSpacing="2px"
                />
                <div className="item-prices">
                    {
                        props.promotionId != 1 ? (
                            new Date(props.startDay) > new Date() ? (<><div className="item-price-new">${props && (props.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div><div>Sắp khuyến mãi</div></>) :
                                ((new Date() > new Date(props.endDay)) ? <div className="item-price-new">${props && (props.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div> :
                                    <>
                                        <div className="item-price-new">${props && (props.price - ((props.price * props.discountPercent) / 100))?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                        <div className="item-price-old">${props && (props.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                    </>))
                            : (<div className="item-price-new">${props && (props.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>)
                    }
                </div>
            </div>
        </>
    );
}

export default Item;