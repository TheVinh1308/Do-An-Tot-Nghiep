import { Link } from "react-router-dom";
import "./Item.css"
const Item = (props) => {

    return ( 
        <>
            <div className="item">
                <Link to={`${props.id}`}>
                    <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                </Link>
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        5000
                    </div>
                    <div className="item-price-old">
                        10000
                    </div>
                </div>
            </div>
         
        </>
     );
}
 
export default Item;