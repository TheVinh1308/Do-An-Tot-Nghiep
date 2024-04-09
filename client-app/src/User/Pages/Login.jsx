import "./CSS/Login.css"
const Login = () => {
    return ( 
    <>
        <div className="login">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="password"  placeholder="Password"/>
                </div>
                <button>Continute</button>
                <p className="login-login">Already have an account? <span>Login here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default Login;