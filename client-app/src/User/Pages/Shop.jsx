import BrandItem from "../Components/BrandItem/BrandItem";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import "./CSS/Shop.css";
const Shop = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className="content-1">
                    <Hero />
                    <BrandItem />
                    <Popular />
                </div>
                <div className="content-2">
                    <Offers />

                </div>
                <div className="content-3">
                    <NewCollections />
                    <NewsLetter />
                    <Footer />

                </div>

            </div>
        </>
    );
}

export default Shop;