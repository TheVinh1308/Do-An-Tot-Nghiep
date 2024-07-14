import { Badge, Button, Col, Row } from "react-bootstrap";
import "./CSS/ChangeAdress.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";

const ChangeAdress = ({ invoiceId }) => {
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Invoices/${invoiceId}`)
            .then((res) => {
                setInvoice(res.data);
            });
    }, [invoiceId]);

    const [invoiceDetail, setInvoiceDetail] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetInvoiceDetailByInvoiceId/${invoiceId}`)
            .then((res) => {
                setInvoiceDetail(res.data);
            });
    }, [invoiceId]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 1:
                return <Badge bg="secondary" style={{ border: "solid 1px black", color: "black" }}>Đang xác nhận</Badge>;
            case 2:
                return <Badge bg="info">Đang giao</Badge>;
            case 3:
                return <Badge bg="success">Hoàn thành</Badge>;
            default:
                return <Badge bg="danger">Đã huỷ</Badge>;
        }
    };

    const [formData, setFormData] = useState({
        shippingAddress: '',
        shippingPhone: ''
    });

    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState('');
    const [selectedDistrictId, setSelectedDistrictId] = useState('');
    const [selectedWardId, setSelectedWardId] = useState('');

    const [provinceName, setProvinceName] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [wardName, setWardName] = useState('');

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Province`).then((res) => {
            setProvince(res.data);
        });
    }, []);
    // lấy giá trị sau khi người dùng chọn tỉnh
    const handleProvinceChange = (e) => {
        setSelectedProvinceId(e.target.value);
    };
    // lấy giá trị sau khi người dủng chọn quạn huyện
    const handleDistrictChange = (e) => {
        setSelectedDistrictId(e.target.value);
    };

    // lấy giá trị sau khi nguòi dùng chọn phường xã
    const handleWardChange = (e) => {
        setSelectedWardId(e.target.value);
    };

    useEffect(() => {
        if (selectedProvinceId) {
            axios.get(`https://localhost:7258/api/District/GetAllDistrictByProvince/${selectedProvinceId}`)
                .then((res) => {
                    setDistrict(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching districts:', error);
                });
        }
    }, [selectedProvinceId]);

    useEffect(() => {
        if (selectedDistrictId) {
            axios.get(`https://localhost:7258/api/Ward/GetAllWardsByDistrictId/${selectedDistrictId}`)
                .then((res) => {
                    setWard(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching wards:', error);
                });
        }
    }, [selectedDistrictId]);

    useEffect(() => {
        if (selectedProvinceId) {
            axios.get(`https://localhost:7258/api/Province/${selectedProvinceId}`).then((res) => {
                setProvinceName(res.data.name);
            });
        }
    }, [selectedProvinceId]);

    useEffect(() => {
        if (selectedDistrictId) {
            axios.get(`https://localhost:7258/api/District/${selectedDistrictId}`)
                .then((res) => {
                    setDistrictName(res.data.name);
                })
                .catch((error) => {
                    console.error('Error fetching districts:', error);
                });
        }
    }, [selectedDistrictId]);

    useEffect(() => {
        if (selectedWardId) {
            axios.get(`https://localhost:7258/api/Ward/${selectedWardId}`)
                .then((res) => {
                    setWardName(res.data.name);
                })
                .catch((error) => {
                    console.error('Error fetching wards:', error);
                });
        }
    }, [selectedWardId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // setInvoice((prev) => ({ ...prev, [name]: value }));
    };

    const updateAddress = (e) => {
        e.preventDefault();
        const newAddress = `${formData.shippingAddress} - ${wardName} - ${districtName} - ${provinceName}`;
        setInvoice((prev) => ({ ...prev, shippingAddress: newAddress }));

        axios.put(`https://localhost:7258/api/Invoices/${invoiceId}`, { ...invoice, shippingAddress: newAddress }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                toast.success("Thay đổi địa chỉ giao hàng thành công", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.error('Error updating address:', error);
                toast.error('Failed to update address');
            });
    };

    return (
        <>
            <div className="content">
                <ToastContainer />
                <h2 className="text-center">Thay đổi địa chỉ giao hàng</h2>
                <div className="infor">
                    <Row>
                        <Col>
                            <div className="img">
                                {invoiceDetail.map((item, index) => (
                                    <div key={index}>
                                        <img src={`https://localhost:7258/images/products/${item.phone.modPhone.image}`} alt="" />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <p>Code: #{invoice.code}</p>
                            <p>Địa chỉ: {invoice.shippingAddress}</p>
                            <p>Số điện thoại: {(invoice.shippingPhone)?.slice(0, -4) + '****'}</p>
                            <p>Tổng thành tiền: {(invoice.total)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                            <p>Trạng thái: {getStatusBadge(invoice.status)}</p>
                        </Col>
                    </Row>
                </div>
                <div className="change">
                    <Row>
                        <Col md={10}>
                            <div className="col-md-12 in-cus address">
                                <div className="location">
                                    <label htmlFor="kh_diachi">Địa chỉ</label>
                                    <div className="location-address">
                                        <select value={selectedProvinceId} onChange={handleProvinceChange} required>
                                            <option value="">Chọn Tỉnh/Thành phố</option>
                                            {province.map((item) => (
                                                <option key={item.id} value={item.id} >{item.name}</option>
                                            ))}
                                        </select>
                                        <select value={selectedDistrictId} onChange={handleDistrictChange} required>
                                            <option value="">Chọn Quận/Huyện</option>
                                            {district.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <select value={selectedWardId} onChange={handleWardChange} required>
                                            <option value="">Chọn Phường/Xã</option>
                                            {ward.map((item) => (
                                                <option key={item.id} value={item.id} >{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <input
                                type="text"
                                name="shippingAddress"
                                placeholder="Nhập địa chỉ mới"

                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={2}>
                            <Button onClick={updateAddress}>Thay đổi</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ChangeAdress;
