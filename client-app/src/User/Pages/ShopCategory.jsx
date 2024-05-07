import { useContext } from "react";
import "./CSS/ShopCategory.css"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton } from "react-bootstrap";

const ShopCategory = (props) => {
    const { phones } = useContext(ShopContext)
    return (
        <div className="shop-category">
            <Navbar />
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-12</span>out of 36 products</p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-filter" >
                <Dropdown    >
                    <Dropdown.Toggle  >
                        Chức năng
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item name="choiGame">Chơi game</Dropdown.Item>
                        <Dropdown.Item name="quayPhim">Quay phim</Dropdown.Item>
                        <Dropdown.Item name="coBan">Chức năng cơ bản</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Dung lượng
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" active>
                            2 GB
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1" active>
                            3 GB
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">4 GB</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">6 GB</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">8 GB</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">12 GB</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">16 GB</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Giá tiền
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Lượng Pin
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Kích thước
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown  >
                    <Dropdown.Toggle className="shopcategory-fill" >
                        Chip xử lý
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="shopcategory-filtered">
                <h4>Các mục đã lọc</h4>
                <hr />
                <button className="shopcategory-fill">Chơi game <button className="cancel-fill">x</button></button>
                <button className="shopcategory-fill">Chơi game <button className="cancel-fill">x</button></button>
                <button className="shopcategory-fill">Chơi game <button className="cancel-fill">x</button></button>
            </div>
            <div className="shopcategory-products">

                {phones.map((item, index) => (
                    item !== null ?
                        props.brand === item.modPhone.brand.name
                            ?
                            <Item
                                key={index}
                                id={item.id}
                                name={item.name}
                                image={`https://localhost:7258/images/products/${item.modPhone.image}`}
                            // new_price={item.new_price} 
                            // ld_price={item.old_price}
                            />
                            : null
                        : null
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
            <Footer />
        </div>

    );
}

export default ShopCategory;