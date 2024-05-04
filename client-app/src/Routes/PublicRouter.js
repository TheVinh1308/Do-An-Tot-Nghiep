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

                        <Route path='iphone' element={<ShopCategory brand="iPhone" banner={men_banner} />} />
                        <Route path='samsung' element={<ShopCategory brand="Samsung" banner={women_banner} />} />
                        <Route path='vivo' element={<ShopCategory brand="vivo" banner={women_banner} />} />
                        <Route path='huawei' element={<ShopCategory brand="huawei" banner={women_banner} />} />
                        <Route path='oppo' element={<ShopCategory brand="oppo" banner={women_banner} />} />
                        <Route path='xiaomi' element={<ShopCategory brand="xiaomi" banner={women_banner} />} />
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
