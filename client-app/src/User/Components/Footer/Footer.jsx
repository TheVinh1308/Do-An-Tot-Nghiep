import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
const Footer = () => {
    return (
        <>
            {/* Remove the container if you want to extend the Footer to full width. */}
            <div className="container my-5">
                {/* Footer */}
                <footer className="text-center text-lg-start " style={{ backgroundColor: 'white' }}>
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Links */}
                        <section className>
                            {/*Grid row*/}
                            <div className="row content-footer">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h6>
                                    <h1>2VPHONE</h1>
                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        <a className=" text-dark">IPhone</a>
                                    </p>
                                    <p>
                                        <a className=" text-dark ">Xiaomi</a>
                                    </p>
                                    <p>
                                        <a className=" text-dark ">Vivo</a>
                                    </p>
                                    <p>
                                        <a className="  text-dark">Hauwei</a>
                                    </p>

                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a className="text-dark ">Your Account</a>
                                    </p>
                                    <p>
                                        <a className=" text-dark">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a className="text-dark ">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a className="text-dark ">Help</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Liên Hệ</h6>
                                    <p><i class="bi bi-house-check"></i> Nha Be, TP HCM</p>
                                    <p><i class="bi bi-envelope-check"></i> nguyenthevinh7649@gmail.com</p>
                                    <p><i class="bi bi-telephone-forward"></i> +84 368308277</p>
                                    <p><i class="bi bi-phone"></i> +84 368308277</p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/* Section: Links */}
                        <hr className="my-3" />
                        {/* Section: Copyright */}
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                {/* Grid column */}
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* Copyright */}
                                    <div className="p-3">
                                        © 2020 Copyright:
                                        <a className=" " href="https://mdbootstrap.com/">MDBootstrap.com</a>
                                    </div>
                                    {/* Copyright */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    {/* Facebook */}
                                    <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
                                    {/* Twitter */}
                                    <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
                                    {/* Google */}
                                    <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
                                    {/* Instagram */}
                                    <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
                                </div>
                                {/* Grid column */}
                            </div>
                        </section>
                        {/* Section: Copyright */}
                    </div>
                    {/* Grid container */}
                </footer>
                {/* Footer */}
            </div>
            {/* End of .container */}

        </>
    );
}

export default Footer;