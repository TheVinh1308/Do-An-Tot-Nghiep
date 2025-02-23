import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import "./CSS/Login.css";
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [account, setAccount] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`https://localhost:7258/api/Users/login`, account)
            .then(res => {
                setLoading(false);
                if (res.status === 200) {
                    navigate("/");
                }
               
                localStorage.setItem("jwt", res.data.token);
            })
            .catch(error => {
                setLoading(false);
                
                if(error.response.status == 403) {
                    setError("Bạn cần xác thực email để đăng nhập! Vui lòng kiểm tra email của bạn");
                }
                if(error.response.status == 401) {
                    setError("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!");
                }
                
                
            });
    }

   

    const handleGoogleSuccess = (response) => {
        
        if(response) {
            const decoded = jwtDecode(response.credential)
            const newAccGoogle = {
                Email: decoded["email"],
                Fullname: decoded["name"]
            }
        
            axios.post(`https://localhost:7258/api/Users/login-google`, newAccGoogle )
                .then(res => {
                    localStorage.setItem("jwt", res.data.token);
                    if (res.status === 200) {
                        navigate("/");
                    }
                })
                .catch(error => {
                    setError("Đăng nhập bằng Google thất bại. Vui lòng thử lại!");
                    console.log(error);
                });
        }
    };

    const handleGoogleFailure = (response) => {
        setError("Đăng nhập bằng Google thất bại. Vui lòng thử lại!");
        console.log(response);
    };

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your username & password to login</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" name="Username" onChange={handleChange} className="form-control" id="yourUsername" required />
                                                    <div className="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="Password" onChange={handleChange} className="form-control" id="yourPassword" required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <p style={{ color: "red" }}>{error}</p>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit" onClick={handleSubmit}>Login</button>
                                            </div>
                                            <div className="col-12">
                                            <GoogleLogin
                                                onSuccess={handleGoogleSuccess}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Don't have an account? <Link to="/register">Create an account</Link></p>
                                                {loading && <div class="loader"></div>}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="credits">
                                    {/* Footer Credits */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;
