import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
    return ( 
        <>
            <div>
                <Navbar/>
                <Hero />
                <Popular/>
                <Offers />
                <NewCollections />
                <NewsLetter/>
                <Footer/>
            </div>
        </>
     );
}
 
export default Shop;