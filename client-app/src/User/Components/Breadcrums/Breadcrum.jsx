import "./Breadcrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
    const {brand, name} = props;
    return ( 
        <>
            <div className="breadcrum">
                HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{brand} <img src={arrow_icon} alt="" /> {name}
            </div>
        </>
     );
}
 
export default Breadcrum;