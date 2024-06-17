import Footer from "../Components/Footer/Footer";
import CartItems from "../Components/CartItems/CartItems";
import Navbar from "../Components/Navbar/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import "../Pages/CSS/Cart.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";



const Cart = () => {
    // const [userId, setUserId] = useState(null);
    // const [userName, setUserName] = useState("");
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // // Effect to decode the token and set user information
    // useEffect(() => {
    //     const token = localStorage.getItem('jwt');
    //     if (token) {
    //         const decoded = jwtDecode(token);
    //         setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
    //         setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
    //         setIsAuthenticated(true);
    //     }
    // }, []);
    // const [carts, setCarts] = useState([]);
    // // Effect to fetch cart items based on userId
    // useEffect(() => {
    //     if (userId) {
    //         axios.get(`https://localhost:7258/api/Carts/GetCartByUserId/${userId}`)
    //             .then((res) => {
    //                 setCarts(res.data);
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching carts:', error);
    //             });
    //     }
    // }, [userId]);

    // const [total, setTotal] = useState(0);
    // const [totalAllItem, setTotalAllItem] = useState(0);

    // useEffect(() => {
    //     const newTotal = carts.reduce((acc, item) => acc + (item.quantity * item.phone.price), 0);
    //     setTotal(newTotal);
    //     setTotalAllItem(newTotal);
    // }, [carts]);

    // console.log(`totalAllItem`, totalAllItem);
    return (
        <>
            <Navbar />


            <CartItems />


            <Footer />
        </>
    );
}

export default Cart;