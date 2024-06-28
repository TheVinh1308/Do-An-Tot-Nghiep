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


    const [cartItems, setCartItems] = useState([]);
    const [totalItemPrice, setTotalItemPrice] = useState(0);


    const contextValue = { phones, setPhones, defaultPhones, cartItems, setCartItems, totalItemPrice, setTotalItemPrice, phone, setPhone }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;