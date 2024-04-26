import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Product = () => {
    const {phones} = useContext(ShopContext)
    const {id} = useParams();
    console.log(phones);
    const product = phones.find((e) => e.id === Number(id))
    console.log(id);
    return ( 
        <>
            <div>
                <Navbar />
                {
                    product !== undefined ? <Breadcrum brand={product.modPhone.brand.name} name={product.modPhone.name}/> : <></>
                }
                {
                    product !== undefined ? <ProductDisplay product={product} /> : <></>
                }
                <DescriptionBox />
                <RelatedProducts />
                <Footer/>
            </div>
        </>
     );
}
 
export default Product;