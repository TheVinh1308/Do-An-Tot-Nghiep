import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "../User/Pages/ShopCategory";
import Product from "../User/Pages/Product";
import Login from "../User/Pages/Login";
import Cart from "../User/Pages/Cart";
import men_banner from "../User/Components/Assets/banner_mens.png"
import women_banner from "../User/Components/Assets/banner_women.png"
import kid_banner from "../User/Components/Assets/banner_kids.png"
import Shop from "../User/Pages/Shop";

const PublicRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Shop />} />

                        <Route path='iphone' element={<ShopCategory brand="iPhone" banner={`https://localhost:7258/images/baner/iphone.jpg`} />} />
                        <Route path='samsung' element={<ShopCategory brand="Samsung" banner={`https://localhost:7258/images/baner/samsung.jpg`} />} />
                        <Route path='vivo' element={<ShopCategory brand="vivo" banner={`https://localhost:7258/images/baner/vivo.jpg`} />} />
                        <Route path='huawei' element={<ShopCategory brand="huawei" banner={`https://localhost:7258/images/baner/huawei.jpg`} />} />
                        <Route path='oppo' element={<ShopCategory brand="oppo" banner={`https://localhost:7258/images/baner/oppo.jpg`} />} />
                        <Route path='xiaomi' element={<ShopCategory brand="xiaomi" banner={`https://localhost:7258/images/baner/xiaomi.jpg`} />} />
                        <Route path='iphone/:id' element={<Product />}></Route>
                        <Route path='cart' element={<Cart />} />
                        <Route path='login' element={<Login />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default PublicRouter;
