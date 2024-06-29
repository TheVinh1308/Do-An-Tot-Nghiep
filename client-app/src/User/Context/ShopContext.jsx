import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {


    const [phones, setPhones] = useState([{ modPhone: { brand: {}, promotion: {} } }]);
    const [defaultPhones, setDefaultPhone] = useState([{ modPhone: { brand: {}, promotion: {} } }]);
    const [phone, setPhone] = useState(null);
    console.log(phones);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/FirstByModel`)
            .then((res) => {
                setPhones(res.data)
                setDefaultPhone(res.data)
            })
            .catch((err) => {
                console.log("Lỗi lấy dữ liệu: ", err);
            })

    }, [])

    const [resultSearch, setResultSearch] = useState([]);


    const [cartItems, setCartItems] = useState([]);
    const [totalItemPrice, setTotalItemPrice] = useState(0);
    const [isAddToCart, setIsAddToCart] = useState(false)

    // so sánh
    const [iitemCompare, setIitemCompare] = useState([]);
    const [show, setShow] = useState(false);
    const contextValue = { phones, setPhones, defaultPhones, cartItems, setCartItems, totalItemPrice, setTotalItemPrice, setResultSearch, resultSearch, phone, setPhone, iitemCompare, setIitemCompare, show, setShow, isAddToCart, setIsAddToCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;