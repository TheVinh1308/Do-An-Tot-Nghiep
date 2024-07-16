import "./Hero.css";
import '@fontsource/marcellus';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2 style={{fontSize: "3em"}}>Chào mừng đến với</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>2VPHONE STORE</p>
                        </div>
                        <p></p>
                        <p></p>
                    </div>
                    {/* <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Hero;
