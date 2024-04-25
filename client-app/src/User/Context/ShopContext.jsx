import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null)

const ShopContextProvider = (props) =>{


    const [modPhones, setModPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then((res) => {
                setModPhones(res.data)
            })
            .catch((err) => {
                console.log("Lỗi lấy dữ liệu: ", err);
            })
               
    },[])


    // const [cartItems, setCartItems] = useState()
    

    const contextValue = {modPhones}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;