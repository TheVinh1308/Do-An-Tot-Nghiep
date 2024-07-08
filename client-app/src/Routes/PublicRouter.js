import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "../User/Pages/ShopCategory";
import Product from "../User/Pages/Product";
import Login from "../User/Pages/Login";
import Cart from "../User/Pages/Cart";
import Shop from "../User/Pages/Shop";
import Register from "../User/Pages/Register";
import Pay from "../User/Pages/Pay";
import Invoice from "../User/Components/Invoice/Invoice";
import AfterPay from "../User/Pages/AfterPay";
import Compare from "../User/Pages/Compare";
import ConfirmEmail from "../User/Components/CofirmEmail/ConfirmEmail";
import InvoiceDetail from "../User/Components/Invoice/InvoiceDetail";
import Favorite from "../User/Pages/Favorite";

const PublicRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Shop />} />

                        <Route path='iphone' element={<ShopCategory brand="iPhone" banner={`https://localhost:7258/images/baner/iphone.jpg`} />} />
                        <Route path='samsung' element={<ShopCategory brand="Samsung" banner={`https://localhost:7258/images/baner/samsung.jpg`} />} />
                        <Route path='vivo' element={<ShopCategory brand="Vivo" banner={`https://localhost:7258/images/baner/vivo.jpg`} />} />
                        <Route path='huawei' element={<ShopCategory brand="Huawei" banner={`https://localhost:7258/images/baner/huawei.jpg`} />} />
                        <Route path='oppo' element={<ShopCategory brand="Oppo" banner={`https://localhost:7258/images/baner/oppo.jpg`} />} />
                        <Route path='xiaomi' element={<ShopCategory brand="Xiaomi" banner={`https://localhost:7258/images/baner/xiaomi.jpg`} />} />
                        <Route path='iphone/:id' element={<Product />}></Route>
                        <Route path='samsung/:id' element={<Product />}></Route>
                        <Route path='vivo/:id' element={<Product />}></Route>
                        <Route path='oppo/:id' element={<Product />}></Route>
                        <Route path='xiaomi/:id' element={<Product />}></Route>
                        <Route path='huawei/:id' element={<Product />}></Route>
                        <Route path='cart' element={<Cart />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='pay' element={<Pay />} />
                        <Route path='invoice' element={<Invoice />} />
                        <Route path='afterPay/:id' element={<AfterPay />} />
                        <Route path='compare' element={<Compare />} />
                        <Route path='favorite' element={<Favorite />} />
                        <Route path='confirmemail' element={<ConfirmEmail />} />
                        <Route path='invoice/invoiceDetail/:id' element={<InvoiceDetail />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default PublicRouter;
