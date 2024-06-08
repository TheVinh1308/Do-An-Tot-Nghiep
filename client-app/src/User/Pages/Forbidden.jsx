import { Link, Outlet } from "react-router-dom";
import "./CSS/Forbidden.css"
const Forbidden = () => {
    
    const handleBack = () => {
        // Sử dụng hàm điều hướng để quay trở lại trang chủ
        window.location.href = "/"
      };
    return (
        <>
              <div className="container-403">
        <div className="scene">
          <div className="overlay" />
          <div className="overlay" />
          <div className="overlay" />
          <div className="overlay" />
          <span className="bg-403">403</span>
          <div className="text">
            <span className="hero-text" />
            <span className="msg">
              can't let <span>you</span> in.
            </span>
            <span className="support">
              <span>unexpected?</span>
              <Link to="/">

              <button onClick={handleBack} style={{border:"none", color: "green"}}>Trở về trang chủ!!!</button>
              </Link>
            </span>
          </div>
          <div className="lock" />
        </div>
      </div>
      <Outlet/>
        </>
    
    );
    
}
 
export default Forbidden;