import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "../User/Pages/ShopCategory";
import Product from "../User/Pages/Product";
import Login from "../User/Pages/Login";
import Cart from "../User/Pages/Cart";
import Shop from "../User/Pages/Shop";
import Register from "../User/Pages/Register";

const PublicRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Shop />} />

                        <Route path='iphone' element={<ShopCategory brand="iPhone" />} />
                        <Route path='samsung' element={<ShopCategory brand="Samsung" />} />
                        <Route path='vivo' element={<ShopCategory brand="Vivo" />} />
                        <Route path='huawei' element={<ShopCategory brand="Huawei" />} />
                        <Route path='oppo' element={<ShopCategory brand="Oppo" />} />
                        <Route path='xiaomi' element={<ShopCategory brand="Xiaomi" />} />
                        <Route path='iphone/:id' element={<Product />}></Route>
                        <Route path='samsung/:id' element={<Product />}></Route>
                        <Route path='vivo/:id' element={<Product />}></Route>
                        <Route path='oppo/:id' element={<Product />}></Route>
                        <Route path='xiaomi/:id' element={<Product />}></Route>
                        <Route path='huawei/:id' element={<Product />}></Route>
                        <Route path='cart' element={<Cart />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default PublicRouter;
