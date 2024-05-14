import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useCallback, useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Context/ShopContext"
import axios from "axios"
import { useParams } from "react-router-dom"
const ProductDisplay = (props) => {
    const {id} = useParams()
    const [images, setImages] = useState([]);
    const [colors, setColors] = useState([])
    const [color, setColor] = useState({})
    const [roms, setRoms] = useState([{phone: {}}]);
    const {product} = props // danh sách dòng điện thoại
    const [phones, setPhones] = useState([]) // danh sách điện thoại
    // lấy hình ảnh theo phone
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/${id}`)
          .then((res) => {
            setImages(res.data);
          });
    }, [id, images.path]); 
    // lấy hình ảnh theo màu phone được chọn
    const handleChangeColor = useCallback((id) => {
        axios.get(`https://localhost:7258/api/Images/${id}`)
          .then((res) => {
            setColor(res.data);
          });
    }, []);
      // lấy danh sách màu và rom của dòng điện thoại
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/GetImgByModPhone/${product.modPhone.id}`)
          .then((res) => {
            setColors(res.data);
            setRoms(res.data)
          });
    }, [product.modPhone.id]);
    //lấy danh sách tất cả các điện thoại
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
          .then((res) => {
            setPhones(res.data)
          });
    }, []);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedRom, setSelectedRom] = useState(null);

    const selectedPhone = phones.find(item => item.rom === selectedRom && item.color === selectedColor)
    console.log(selectedPhone);


    useEffect(() => {
        if (colors.length > 0 && selectedColor === null && selectedRom === null) { // Chỉ thực hiện khi danh sách màu được tải và màu mặc định chưa được thiết lập

          const firstColor = colors[0].phoneId; // Lấy màu đầu tiên trong danh sách
          setSelectedColor(colors[0].phone.color); // Thiết lập màu đầu tiên là màu mặc định
          handleChangeColor(firstColor); // Gọi hàm handleChangeColor với màu đầu tiên
          setIndexImage(1)

          const firstRom = colors[0].phone.rom
          setSelectedRom(firstRom)


          
        }
    }, [colors, selectedColor,selectedRom, handleChangeColor]);
    // console.log('mau duoc chon',selectedColor);
    // console.log('rom duoc chon', selectedRom);
    // console.log(colors);
    // console.log('màu: ',colors);
      //COLOR
    const uniqueColor = {};
    colors.forEach(item => {
        if (!uniqueColor[item.phone.color]) {
            uniqueColor[item.phone.color] = item;
        }
    });
    const uniqueColorArray = Object.values(uniqueColor);

    //ROM
    const uniqueRom = {};
    roms.forEach(item => {
        if (!uniqueRom[item.phone.rom]) {
            uniqueRom[item.phone.rom] = item;
        }
    });
    const uniqueRomArray = Object.values(uniqueRom);

    const [indexImage, setIndexImage] = useState(null)


    return ( 
        <>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        {
                            (color.path) &&
                            JSON.parse(color.path).map((path, pathIndex) => (
                                pathIndex !== 0 ?
                                <>
                                    <button key={pathIndex} onClick={() => (setIndexImage(pathIndex))}>
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
                            (color.path) && color &&
                            JSON.parse(color.path).map((path, pathIndex) => (
                                <img
                                    key={pathIndex}
                                    className="productdisplay-main-img"
                                    src={`https://localhost:7258/images/products/${path}`}
                                    alt=""
                                    style={{ display: pathIndex === indexImage ? 'block' : 'none' }}
                                />
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
                        <h1>Select Rom</h1>
                        <div className="productdisplay-right-rom">
                            <div className="productdisplay-right-roms">
                            {
                                Array.isArray(uniqueRomArray) && uniqueRomArray.map((item,index) => {
                                
                                        return(
                                            <button key={index} style={{width: 50, height: 50, margin: 0, padding: 0}} onClick={() => (handleChangeColor(item.phoneId), setSelectedRom(item.phone.rom))}>
                                                {item.phone.rom}
                                            </button> 

                                        )
                                }) 
                            }
                            </div>
                        </div>
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                        {
                              Array.isArray(uniqueColorArray) && uniqueColorArray.map((item,index) => {
                               
                                    return(
                                        <button key={index} style={{background: "#fff", width: 50, height: 50, margin: 0, padding: 0}} onClick={() => (handleChangeColor(item.phoneId), setSelectedColor(item.phone.color))}>
                                            <img  src={`https://localhost:7258/images/products/${JSON.parse(item.path)[0]}`} alt="" style={{width: 50, backgroundColor: "#fff"}} />
                                        </button> 

                                    )
                            }) 
                        }
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