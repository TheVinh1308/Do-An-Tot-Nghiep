import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null)

const ShopContextProvider = (props) =>{


    const [phones, setPhones] = useState([{modPhone: {brand: {}}}]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones/FirstByModel`)
            .then((res) => {
                setPhones(res.data)
            })
            .catch((err) => {
                console.log("Lỗi lấy dữ liệu: ", err);
            })
               
    },[])


    // const [cartItems, setCartItems] = useState()
    

    const contextValue = {phones}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;