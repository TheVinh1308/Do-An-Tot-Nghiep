import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer/Footer";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Contact = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <Breadcrumb />
                </div>{/* End Page Title */}
                <section className="section contact">
                    <div className="row gy-4">
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-geo-alt" />
                                        <h3>Address</h3>
                                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-telephone" />
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-envelope" />
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-clock" />
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card p-4">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 ">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </>
    );
}

export default Contact;