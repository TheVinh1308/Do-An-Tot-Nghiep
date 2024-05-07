import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Context/ShopContext"
import axios from "axios"
import { useParams } from "react-router-dom"
const ProductDisplay = (props) => {
    const {id} = useParams()
    const [images, setImages] = useState([]);

    const {product} = props
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/${id}`)
          .then((res) => {
            setImages(res.data);
            // Optionally, set selectedImage here if needed
          });
      }, [id, images.path]); // Include id if it's used elsewhere in the component
    console.log(product);
    
    const [selectedImage, setSelectedImage] = useState(1);
    const [indexImage, setIndexImage] = useState(1)
    
    return ( 
        <>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        {
                            images.path &&
                            JSON.parse(images.path).map((path, pathIndex) => (
                                pathIndex !== 0 ?
                                <>
                                    <button key={pathIndex} onClick={() => (setSelectedImage(path.id),setIndexImage(pathIndex))}>
                                        <img
                                            src={`https://localhost:7258/images/products/${path}` }
                                            alt=""
                                        />
                                    </button>
                                </>
                                : null
                        ))}
                    </div>
                    <div className="productdisplay-img">
                        {
                            images.path &&
                            JSON.parse(images.path).map((path, pathIndex) => (
                                selectedImage === path.id && pathIndex === indexImage?
                                <img
                                key={pathIndex}
                                className="productdisplay-main-img"
                                src={`https://localhost:7258/images/products/${path}`}
                                alt=""
                                /> : null
                            ))
                        }
                    </div>
                   
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.price}</div>
                        <div className="productdisplay-right-price-new">${product.price}</div> 
                    </div>
                    <div className="productdisplay-right-description">
                        {product.modPhone.description}
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Sizd</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    {/* <button onClick={() => addToCart(product.id)}>ADD TO CART</button> */}
                    <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tag: </span>Modern, Latest</p>
                </div>
            </div>
        </>
     );
}
 
export default ProductDisplay;