import { useNavigate } from "react-router-dom";
import "./CSS/Register.css"
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [account, setAccount] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    console.log(account);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:7258/api/Users/register`, account)
            .then(res => {
                if (res.status === 200) {
                    navigate("/login");

                }
            })
            .catch(error => {
                setError("Đăng ký thất bại!");
                console.log(error);
            });
    }
    return ( 
    <>
        <div className="register">
            <div className="register-container">
                <h1>Sign Up</h1>
                <div className="register-fields">
                    <input type="text" placeholder="Username" name="Username" onChange={handleChange}/>
                    <input type="password"  placeholder="Password" name="Password" onChange={handleChange}/>
                    <input type="text"  placeholder="Fullname" name="Fullname" onChange={handleChange}/>
                    <input type="email"  placeholder="Email" name="Email" onChange={handleChange}/>
                    <input type="number"  placeholder="Phone" name="Phone" onChange={handleChange}/>
                </div>
                <p style={{color: "red"}}>{error}</p>
                <button onClick={handleSubmit}>Đăng ký</button>
                
            </div>
        </div>
    </> );
}
 
export default Register;