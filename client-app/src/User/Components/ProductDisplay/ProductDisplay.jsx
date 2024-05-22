import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const ProductDisplay = (props) => {
    const {id} = useParams()
    const [images, setImages] = useState([]);
    const [colors, setColors] = useState([{phone: {}}])
    const [color, setColor] = useState({})
    const [roms, setRoms] = useState([{phone: {}}]);
    const {product} = props // điện thoại đang được chọn
    const [phones, setPhones] = useState([]) // danh sách điện thoại
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedRom, setSelectedRom] = useState(null);
    const [selectedColorButton, setSelectedColorButton] = useState(null);
    const [selectedRomButton, setSelectedRomButton] = useState(null);
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

    const selectedPhone = phones.find(item => 
                                        item.rom === selectedRom && 
                                        item.color === selectedColor && 
                                        item.modPhoneId === product.modPhone.id)
   
                                        useEffect(() => {
                                            if (colors.length > 0 && selectedColor === null && selectedRom === null && selectedColorButton === null && selectedRomButton === null) {
                                                let availableColor = null;
                                                let availableRom = null;
                                        
                                                // Find the first color with sufficient stock
                                                for (let i = 0; i < colors.length; i++) {
                                                    if (colors[i].phone.stock > 0) {
                                                        availableColor = colors[i];
                                                        availableRom = colors[i]
                                                        break;
                                                    }
                                                }

                                              
                                        
                                                if (availableColor) {
                                                    setSelectedColor(availableColor.phone.color);
                                                    setSelectedColorButton(availableColor.phone.color);
                                                    handleChangeColor(availableColor.phoneId);
                                                    setIndexImage(1);
                                                }
                                                if (availableRom) {
                                                    setSelectedRom(availableRom.phone.rom);
                                                    setSelectedRomButton(availableRom.phone.rom);
                                                }
                                            }
                                        }, [colors, roms, selectedColor, selectedRom, selectedColorButton, selectedRomButton, handleChangeColor]);
                                        
                                        
                                        
    console.log('mau duoc chon',selectedColor);
    console.log('rom duoc chon', selectedRom);


    // const uniqueColor = {};
    // colors.forEach(item => {
    //     if (!uniqueColor[item.phone.color]) {
    //         uniqueColor[item.phone.color] = item;
    //     }
    // });
    // const uniqueColorArray = Object.values(uniqueColor);

    //ROM
    const uniqueRom = {};
    roms.forEach(item => {
        if (!uniqueRom[item.phone.rom]) {
            uniqueRom[item.phone.rom] = item;
        }
    });
    const uniqueRomArray = Object.values(uniqueRom);

    const [indexImage, setIndexImage] = useState(null)
    console.log(colors);
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
                                            <button
                                                key={index} 
                                                style={{width: 50, height: 50, margin: 0, padding: 0, backgroundColor: "#B4B1B1", color: "#000"}} 
                                                className={`${selectedRomButton === item.phone.rom ? 'selected' : ''}`}
                                                // disabled={item.phone.stock < 1 }
                                                onClick={() => {
                                                    handleChangeColor(item.phoneId);
                                                    setSelectedRom(item.phone.rom);
                                                    setSelectedRomButton(item.phone.rom);
                                                }}
                                            >
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
                              Array.isArray(colors) && colors.map((item, index) => (
                                item.phone.rom === selectedRom && (
                                  <button
                                    key={index}
                                    className={`${selectedColorButton === item.phone.color ? 'selected' : ''} ${item.phone.stock < 1 && selectedRom === item.phone.rom ? 'disabled' : ''}`}
                                    style={{ background: "#fff", width: 60, height: 60, margin: 0, padding: 0 }}
                                    disabled={selectedRom === item.phone.rom && item.phone.stock < 1}
                                    onClick={() => {
                                      handleChangeColor(item.phoneId);
                                      setSelectedColor(item.phone.color);
                                      setSelectedColorButton(item.phone.color);
                                    }}
                                  >
                                    <img src={`https://localhost:7258/images/products/${JSON.parse(item.path)[0]}`} alt="" style={{ width: 50, backgroundColor: "#fff" }} />
                                  </button>
                                )
                              ))
                              
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