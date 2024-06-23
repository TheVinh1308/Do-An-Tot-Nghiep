import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Bounce, ToastContainer, toast } from "react-toastify";

const AppPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [modPhones, setModPhones] = useState([]);
    const [modPhoneId, setModPhoneId] = useState(null);
    const [selectedPromotionId, setSelectedPromotionId] = useState(null);
    const [userId, setUserId] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);
            setUserId(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Promotion`)
            .then(res => {
                setPromotions(res.data);
            });
    }, [])

    useEffect(() => {
        axios.get(`https://localhost:7258/api/ModPhones`)
            .then(res => {
                setModPhones(res.data);
            });
    }, [])
    const [setNO, setsetNO] = useState({});
    const notifySuccess = (message) => toast.success(message, {
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

    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        transition: Bounce,
    });
    const handleAppPromotion = async (e) => {
        e.preventDefault();
        if (!modPhoneId || !selectedPromotionId) {
            alert("Please select both a promotion and a phone.");
            return;
        }

        try {
            const modPhoneResponse = await axios.get(`https://localhost:7258/api/ModPhones/${modPhoneId}`);
            const modPhoneData = modPhoneResponse.data;

            const promotion = promotions.find(promo => promo.id === parseInt(selectedPromotionId));
            const promotionStartDate = new Date(promotion.startDay);
            const promotionEndDate = new Date(promotion.endDay);

            const currentDate = new Date();

            if (currentDate < promotionStartDate) {
                const timeUntilPromotionStarts = promotionStartDate - currentDate;
                setTimeout(async () => {
                    const formDataReset = new FormData();
                    formDataReset.append('promotionId', 1);
                    await axios.put(`https://localhost:7258/api/ModPhones/${modPhoneId}`, formDataReset);
                    alert('Promotion started and applied successfully.');
                }, timeUntilPromotionStarts);
            }

            if (currentDate > promotionEndDate) {
                const timeUntilPromotionEnds = promotionEndDate - currentDate;
                setTimeout(async () => {
                    const formDataReset = new FormData();
                    formDataReset.append('promotionId', 1);
                    await axios.put(`https://localhost:7258/api/ModPhones/${modPhoneId}`, formDataReset);
                    alert('Promotion ended and reset successfully.');
                }, timeUntilPromotionEnds);
            }

            modPhoneData.promotionId = parseInt(selectedPromotionId);
            const formData = new FormData();
            for (let key in modPhoneData) {
                formData.append(key, modPhoneData[key]);
            }

            await axios.put(`https://localhost:7258/api/ModPhones/${modPhoneId}`, formData);
            const formDataHistory = new FormData();
            formDataHistory.append("action", "Áp dụng khuyến mãi");
            formDataHistory.append("userId", userId);
            formDataHistory.append("time", new Date().toISOString());
            formDataHistory.append("productId", modPhoneId);
            formDataHistory.append("productName", modPhoneData.name);
            formDataHistory.append("operation", "Áp dụng");
            formDataHistory.append("amount", 0);

            await axios.post(`https://localhost:7258/api/History`, formDataHistory);

            await axios.get(`https://localhost:7258/api/Phones/GetFisrtPhoneByModPhone/${modPhoneData.id}`)
                .then((res) => {
                    setsetNO(res.data);
                })

            console.log(`itemNo`, userId);
            const formNotification = new FormData();
            formNotification.append("userId", userId);
            formNotification.append("time", new Date().toISOString());
            formNotification.append('phoneId', modPhoneId);
            formNotification.append("title", `Khuyến mãi ${modPhoneData.name}`);
            formNotification.append("url", `http://localhost:3000/${setNO.modPhone?.brand.name}/${setNO.id}`);
            console.log(`formNotification`, formNotification);
            await axios.post(`https://localhost:7258/api/Notification`, formNotification);
            notifySuccess("Áp dụng khuyến mãi thành công");
        } catch (error) {
            console.error("Error applying promotion: ", error);
            notifyError(error);
        }
    };

    return (
        <form className="form-modphone g-3" onSubmit={handleAppPromotion}>
            <ToastContainer />
            <Row>
                <Col className="form-item" xs={12} md={6}>
                    <i className="bi bi-phone"></i>
                    <label htmlFor="promotionSelect" className="form-label">Chọn khuyến mãi</label>
                    <Form.Select id="promotionSelect" onChange={(e) => setSelectedPromotionId(e.target.value)}>
                        <option value="">Chọn khuyến mãi</option>
                        {promotions.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col className="form-item" xs={12} md={6}>
                    <i className="bi bi-phone"></i>
                    <label htmlFor="modPhoneSelect" className="form-label">Điện thoại áp dụng</label>
                    <Form.Select id="modPhoneSelect" onChange={(e) => setModPhoneId(e.target.value)}>
                        <option value="">Chọn điện thoại</option>
                        {modPhones.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            <div className="text-center">
                <Button type="submit" className="btn btn-success mx-2">Áp dụng</Button>
                <Button type="reset" className="btn btn-secondary mx-2">Làm mới</Button>
            </div>
        </form>
    );
};

export default AppPromotion;
