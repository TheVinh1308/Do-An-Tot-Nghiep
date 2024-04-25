import { useContext } from "react";
import "./CSS/ShopCategory.css"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const ShopCategory = (props) => {
    const {modPhones} = useContext(ShopContext)

    return ( 
        <div className="shop-category">
            <Navbar/>
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-12</span>out of 36 products</p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {modPhones.map((item,index) => (
                   props.brand === item.brand.name
                    ? 
                   <Item 
                        key={index} 
                        id={item.id} 
                        name={item.name} 
                        image={`https://localhost:7258/images/products/${item.image}`} 
                        // new_price={item.new_price} 
                        // ld_price={item.old_price}
                    />
                    : null
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
            <Footer/>
        </div>
       
     );
}
 
export default ShopCategory;