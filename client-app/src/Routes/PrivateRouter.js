import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import ModProduct from "../Admin/ModPhone/ModProduct";
import Phone from "../Admin/Phone/Phone";
import Images from "../Admin/Image/Image";
import Invoice from "../Admin/Invoice/Invoice";
import Promotion from "../Admin/Promotion/Promotion";
import Profile from "../Admin/Profile";
import FAQ from "../Admin/FAQ";
import Contact from "../Admin/Contact";
import Review from "../Admin/Review";
import Comment from "../Admin/Comment";
import Brand from "../Admin/Brand/Brand";
const PrivateRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="admin">
                        <Route index element={<Dashboard />} />

                        <Route path="ModProduct">
                            <Route index element={<ModProduct />} />
                        </Route>

                        <Route path="Phone">
                            <Route index element={<Phone />} />
                        </Route>

                        <Route path="Image" >
                            <Route index element={<Images />} />
                        </Route>
                        <Route path="Invoice" >
                            <Route index element={<Invoice />} />
                        </Route>
                        <Route path="Promotion" >
                            <Route index element={<Promotion />} />
                        </Route>
                        <Route path="Profile" >
                            <Route index element={<Profile />} />
                        </Route>
                        <Route path="Faq" >
                            <Route index element={<FAQ />} />
                        </Route>
                        <Route path="Contact">
                            <Route index element={<Contact />} />
                        </Route>
                        <Route path="Review">
                            <Route index element={<Review />} />
                        </Route>
                        <Route path="Comment">
                            <Route index element={<Comment />} />
                        </Route>
                        <Route path="Brand">
                            <Route index element={<Brand />} />
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default PrivateRouter;