import { Link } from "react-router-dom";
import "./Item.css"
const Item = (props) => {
    console.log(props);
    return (
        <>

            <div className="item">
                <Link to={`${props.id}`}>
                    <img src={props.image} alt="" />
                    {/* onClick={window.scrollTo(0, 0)} */}
                </Link>
                <p>{props.name}</p>
                <div className="item-prices">
                    {/* <div className="item-price-new">
                        {(props.price)}
                    </div>
                    <div className="item-price-old">
                        10000
                    </div> */}


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