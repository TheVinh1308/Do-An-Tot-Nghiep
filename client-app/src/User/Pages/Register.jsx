import { Link, useNavigate } from "react-router-dom";
import "./CSS/Register.css";
import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [account, setAccount] = useState({
        username: "",
        password: "",
        fullname: "",
        email: "",
        phone: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  // Set loading to true when the form is submitted
        axios.post(`https://localhost:7258/api/Users/register`, account)
            .then((res) => {
                setLoading(false);  // Reset loading to false when request completes
                if (res.status === 200) {
                    navigate("/confirmemail");
                }
            })
            .catch((error) => {
                setLoading(false);  // Reset loading to false when an error occurs
                setError(error.response?.data?.Message || "Đăng ký thất bại!");
                console.log(error);
            });
    };
    

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
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
                                        <img src="assets/img/logo.png" alt="Logo" />
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                                <input type="text" name="fullname" className="form-control" id="yourName" required onChange={handleChange} />
                                                <div className="invalid-feedback">Please, enter your name!</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" required onChange={handleChange} />
                                                <div className="invalid-feedback">Please enter a valid Email address!</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPhone" className="form-label">Your Phone</label>
                                                <input type="number" name="phone" className="form-control" id="yourPhone" required onChange={handleChange} />
                                                <div className="invalid-feedback">Please enter your number!</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" name="username" className="form-control" id="yourUsername" required onChange={handleChange} />
                                                    <div className="invalid-feedback">Please choose a username.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" required onChange={handleChange} />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" name="terms" type="checkbox" id="acceptTerms" onChange={handleCheckboxChange} required />
                                                    <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit" disabled={!isChecked}>Create Account</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <Link to="/Login">Log in</Link></p>
                                            </div>
                                            {loading && <div class="loader"></div>}
                                            {error && <p style={{ color: "red" }}>{error}</p>}
                                        </form>
                                    </div>
                                </div>
                                <div className="credits"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Register;
