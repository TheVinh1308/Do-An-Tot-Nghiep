import "./Hero.css";
import '@fontsource/marcellus';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>Chào mừng đến với</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>2VPHONE STORE</p>
                        </div>
                        <p>Collections</p>
                        <p>For everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
