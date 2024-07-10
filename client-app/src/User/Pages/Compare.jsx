import { Accordion, Button, Card, Col, Modal, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import { ShopContext } from "../Context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ChoiceCompare from "./ChoiceCompare";
import "./CSS/Compare.css"
import axios from "axios";
import { set } from "date-fns";

const Compare = () => {
    const { iitemCompare, setIitemCompare, show, setShow } = useContext(ShopContext);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleCancel = (item) => {
        setIitemCompare((prevItems) => prevItems.filter((compareItem) => compareItem !== item));

    }

    
    useEffect(() => {

    }, [iitemCompare]);
    console.log(iitemCompare);
    const [config1, setConfig1] = useState(null);
    const [config2, setConfig2] = useState(null);
    const [config3, setConfig3] = useState(null);
    console.log(`config1`, config1);
    useEffect(() => {
        if (iitemCompare[0]?.modPhoneId) {
            axios.get(`http://localhost:3001/phoneConfig/${iitemCompare[0].modPhoneId}`)
                .then((res) => setConfig1(res.data))
                .catch((err) => console.log("Error fetching data", err));
        } else {
            setConfig1(null);
        }
    }, [iitemCompare[0]?.modPhoneId]);

    useEffect(() => {
        if (iitemCompare[1]?.modPhoneId) {
            axios.get(`http://localhost:3001/phoneConfig/${iitemCompare[1].modPhoneId}`)
                .then((res) => setConfig2(res.data))
                .catch((err) => console.log("Error fetching data", err));
        } else {
            setConfig2(null);
        }
    }, [iitemCompare[1]?.modPhoneId]);

    useEffect(() => {
        if (iitemCompare[2]?.modPhoneId) {
            axios.get(`http://localhost:3001/phoneConfig/${iitemCompare[2].modPhoneId}`)
                .then((res) => setConfig3(res.data))
                .catch((err) => console.log("Error fetching data", err));
        } else {
            setConfig3(null);
        }
    }, [iitemCompare[2]?.modPhoneId]);

    return (
        <>
            <Navbar />
            <h1 className="title-compare">SO SÁNH SẢN PHẨM</h1>
            <hr />
            <Row>
                <Col></Col>
                <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Img variant="top" src={iitemCompare[0]?.image || `https://localhost:7258/images/products/${iitemCompare[0].modPhone.image}`}  style={{ width: 150 }} />
                    <h6 style={{ textAlign: 'center' }}>{iitemCompare[0]?.name}</h6>
                </Col>
                {iitemCompare.length === 1 ? (
                    <>
                        <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button className="add-compare" onClick={handleShow}>
                                <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                            </Button>
                        </Col>
                        <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button className="add-compare" onClick={handleShow}>
                                <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                            </Button>
                        </Col>
                    </>
                ) : iitemCompare.length === 2 ? (
                    <>
                        <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variant="top" src={iitemCompare[1]?.image || `https://localhost:7258/images/products/${iitemCompare[1].modPhone.image}`} style={{ width: 150 }} />
                            <h6 style={{ textAlign: 'center' }}>{iitemCompare[1]?.name}</h6>
                            <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[1])}>Huỷ chọn</Button>
                        </Col>
                        <Col className="col-add" md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button className="add-compare" onClick={handleShow}>
                                <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
                            </Button>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variant="top" src={iitemCompare[1]?.image ||  `https://localhost:7258/images/products/${iitemCompare[1].modPhone.image}`} style={{ width: 150 }} />
                            <h6 style={{ textAlign: 'center' }}>{iitemCompare[1]?.name}</h6>
                            <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[1])}>Huỷ chọn</Button>
                        </Col>
                        <Col md={3} sx={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variant="top" src={iitemCompare[2]?.image ||  `https://localhost:7258/images/products/${iitemCompare[2].modPhone.image}`} style={{ width: 150 }} />
                            <h6 style={{ textAlign: 'center' }}>{iitemCompare[2]?.name}</h6>
                            <Button className="btn-huy" onClick={() => handleCancel(iitemCompare[2])}>Huỷ chọn</Button>
                        </Col>
                    </>
                )}
            </Row>
            <Accordion defaultActiveKey="0,1,2,3,4,5,6,7,8,9">

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Thông tin màn hình</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Công nghệ màn hình</strong></Col>
                            <Col>{config1?.thongTin?.manHinh?.congNgheManHinh}</Col>
                            <Col>{config2?.thongTin?.manHinh?.congNgheManHinh}</Col>
                            <Col>{config3?.thongTin?.manHinh?.congNgheManHinh}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Độ phân giải</strong></Col>
                            <Col>{config1?.thongTin?.manHinh?.doPhanGiai}</Col>
                            <Col>{config2?.thongTin?.manHinh?.doPhanGiai}</Col>
                            <Col>{config3?.thongTin?.manHinh?.doPhanGiai}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Màn hình rộng</strong></Col>
                            <Col>{config1?.thongTin?.manHinh?.manHinhRong}</Col>
                            <Col>{config2?.thongTin?.manHinh?.manHinhRong}</Col>
                            <Col>{config3?.thongTin?.manHinh?.manHinhRong}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Độ sáng tối đa</strong></Col>
                            <Col>{config1?.thongTin?.manHinh?.doSangToiDa}</Col>
                            <Col>{config2?.thongTin?.manHinh?.doSangToiDa}</Col>
                            <Col>{config3?.thongTin?.manHinh?.doSangToiDa}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Mặt kính cảm ứng</strong></Col>
                            <Col>{config1?.thongTin?.manHinh?.matKinhCamUng}</Col>
                            <Col>{config2?.thongTin?.manHinh?.matKinhCamUng}</Col>
                            <Col>{config3?.thongTin?.manHinh?.matKinhCamUng}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Camera sau</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Độ phân giải</strong></Col>
                            <Col>{config1?.thongTin?.cameraSau?.doPhanGiai}</Col>
                            <Col>{config2?.thongTin?.cameraSau?.doPhanGiai}</Col>
                            <Col>{config3?.thongTin?.cameraSau?.doPhanGiai}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Quay phim</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.cameraSau?.quayPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.cameraSau?.quayPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.cameraSau?.quayPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Đèn Flash</strong></Col>
                            <Col>{config1?.thongTin?.cameraSau?.denFlash}</Col>
                            <Col>{config2?.thongTin?.cameraSau?.denFlash}</Col>
                            <Col>{config3?.thongTin?.cameraSau?.denFlash}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Tính năng</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.cameraSau?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.cameraSau?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.cameraSau?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Camera trước</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Độ phân giải</strong></Col>
                            <Col>{config1?.thongTin?.cameraTruoc?.doPhanGiai}</Col>
                            <Col>{config2?.thongTin?.cameraTruoc?.doPhanGiai}</Col>
                            <Col>{config3?.thongTin?.cameraTruoc?.doPhanGiai}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Tính năng</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.cameraTruoc?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.cameraTruoc?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.cameraTruoc?.tinhNang.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Hệ điều hành và CPU</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Hệ điều hành</strong></Col>
                            <Col>{config1?.thongTin?.heDieuHanhCPU?.heDieuHanh}</Col>
                            <Col>{config2?.thongTin?.heDieuHanhCPU?.heDieuHanh}</Col>
                            <Col>{config3?.thongTin?.heDieuHanhCPU?.heDieuHanh}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Chip xử lý CPU</strong></Col>
                            <Col>{config1?.thongTin?.heDieuHanhCPU?.chipXuLyCPU}</Col>
                            <Col>{config2?.thongTin?.heDieuHanhCPU?.chipXuLyCPU}</Col>
                            <Col>{config3?.thongTin?.heDieuHanhCPU?.chipXuLyCPU}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Tốc độ CPU</strong></Col>
                            <Col>{config1?.thongTin?.heDieuHanhCPU?.tocDoCPU}</Col>
                            <Col>{config2?.thongTin?.heDieuHanhCPU?.tocDoCPU}</Col>
                            <Col>{config3?.thongTin?.heDieuHanhCPU?.tocDoCPU}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Chip đồ họa GPU</strong></Col>
                            <Col>{config1?.thongTin?.heDieuHanhCPU?.chipDoHoaGPU}</Col>
                            <Col>{config2?.thongTin?.heDieuHanhCPU?.chipDoHoaGPU}</Col>
                            <Col>{config3?.thongTin?.heDieuHanhCPU?.chipDoHoaGPU}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Bộ nhớ lưu trữ</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>RAM</strong></Col>
                            <Col>{config1?.thongTin?.boNhoLuuTru?.RAM}</Col>
                            <Col>{config2?.thongTin?.boNhoLuuTru?.RAM}</Col>
                            <Col>{config3?.thongTin?.boNhoLuuTru?.RAM}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Dung lượng lưu trữ</strong></Col>
                            <Col>{config1?.thongTin?.boNhoLuuTru?.dungLuongLuuTru}</Col>
                            <Col>{config2?.thongTin?.boNhoLuuTru?.dungLuongLuuTru}</Col>
                            <Col>{config3?.thongTin?.boNhoLuuTru?.dungLuongLuuTru}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Dung lượng còn lại</strong></Col>
                            <Col>{config1?.thongTin?.boNhoLuuTru?.dungLuongConLai}</Col>
                            <Col>{config2?.thongTin?.boNhoLuuTru?.dungLuongConLai}</Col>
                            <Col>{config3?.thongTin?.boNhoLuuTru?.dungLuongConLai}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Danh bạ</strong></Col>
                            <Col>{config1?.thongTin?.boNhoLuuTru?.danhBa}</Col>
                            <Col>{config2?.thongTin?.boNhoLuuTru?.danhBa}</Col>
                            <Col>{config3?.thongTin?.boNhoLuuTru?.danhBa}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Kết nối</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Mạng di động</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.mangDiDong}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.mangDiDong}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.mangDiDong}</Col>
                        </Row>
                        <Row>
                            <Col><strong>SIM</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.SIM}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.SIM}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.SIM}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Wi-Fi</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.ketNoi?.wifi.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.ketNoi?.wifi.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.ketNoi?.wifi.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>GPS</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.ketNoi?.GPS.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.ketNoi?.GPS.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.ketNoi?.GPS.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Bluetooth</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.bluetooth}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.bluetooth}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.bluetooth}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Cổng kết nối sạc</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.congKetNoiSac}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.congKetNoiSac}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.congKetNoiSac}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Jack tai nghe</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.jackTaiNghe}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.jackTaiNghe}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.jackTaiNghe}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Kết nối khác</strong></Col>
                            <Col>{config1?.thongTin?.ketNoi?.ketNoiKhac}</Col>
                            <Col>{config2?.thongTin?.ketNoi?.ketNoiKhac}</Col>
                            <Col>{config3?.thongTin?.ketNoi?.ketNoiKhac}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Pin và sạc</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Dung lượng pin</strong></Col>
                            <Col>{config1?.thongTin?.pinSac?.dungLuongPin}</Col>
                            <Col>{config2?.thongTin?.pinSac?.dungLuongPin}</Col>
                            <Col>{config3?.thongTin?.pinSac?.dungLuongPin}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Loại pin</strong></Col>
                            <Col>{config1?.thongTin?.pinSac?.loaiPin}</Col>
                            <Col>{config2?.thongTin?.pinSac?.loaiPin}</Col>
                            <Col>{config3?.thongTin?.pinSac?.loaiPin}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Hỗ trợ sạc tối đa</strong></Col>
                            <Col>{config1?.thongTin?.pinSac?.hoTroSacToiDa}</Col>
                            <Col>{config2?.thongTin?.pinSac?.hoTroSacToiDa}</Col>
                            <Col>{config3?.thongTin?.pinSac?.hoTroSacToiDa}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Công nghệ pin</strong></Col>
                            <Col>{config1?.thongTin?.pinSac?.congNghePin.join(', ')}</Col>
                            <Col>{config2?.thongTin?.pinSac?.congNghePin.join(', ')}</Col>
                            <Col>{config3?.thongTin?.pinSac?.congNghePin.join(', ')}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Tiện ích và tính năng đặc biệt</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Bảo mật nâng cao</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.tienIch?.baoMatNangCao.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.tienIch?.baoMatNangCao.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.tienIch?.baoMatNangCao.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Tính năng đặc biệt</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.tienIch?.tinhNangDacBiet.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.tienIch?.tinhNangDacBiet.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.tienIch?.tinhNangDacBiet.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Kháng nước bụi</strong></Col>
                            <Col>{config1?.thongTin?.tienIch?.khangNuocBui}</Col>
                            <Col>{config2?.thongTin?.tienIch?.khangNuocBui}</Col>
                            <Col>{config3?.thongTin?.tienIch?.khangNuocBui}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Ghi âm</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.tienIch?.ghiAm.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.tienIch?.ghiAm.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.tienIch?.ghiAm.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Xem phim</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.tienIch?.xemPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.tienIch?.xemPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.tienIch?.xemPhim.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Nghe nhạc</strong></Col>
                            <Col>
                                <ul>
                                    {config1?.thongTin?.tienIch?.ngheNhac.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config2?.thongTin?.tienIch?.ngheNhac.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {config3?.thongTin?.tienIch?.ngheNhac.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Thông tin chung</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col><strong>Thiết kế</strong></Col>
                            <Col>{config1?.thongTin?.thongTinChung?.thietKe}</Col>
                            <Col>{config2?.thongTin?.thongTinChung?.thietKe}</Col>
                            <Col>{config3?.thongTin?.thongTinChung?.thietKe}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Chất liệu</strong></Col>
                            <Col>{config1?.thongTin?.thongTinChung?.chatLieu?.khung}</Col>
                            <Col>{config2?.thongTin?.thongTinChung?.chatLieu?.khung}</Col>
                            <Col>{config3?.thongTin?.thongTinChung?.chatLieu?.khung}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Mặt lưng</strong></Col>
                            <Col>{config1?.thongTin?.thongTinChung?.chatLieu?.matLung}</Col>
                            <Col>{config2?.thongTin?.thongTinChung?.chatLieu?.matLung}</Col>
                            <Col>{config3?.thongTin?.thongTinChung?.chatLieu?.matLung}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Kích thước và khối lượng</strong></Col>
                            <Col>
                                <ul>
                                    <li>Dài: {config1?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.dai}</li>
                                    <li>Ngang: {config1?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.ngang}</li>
                                    <li>Dày: {config1?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.day}</li>
                                    <li>Nặng: {config1?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.nang}</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Dài: {config2?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.dai}</li>
                                    <li>Ngang: {config2?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.ngang}</li>
                                    <li>Dày: {config2?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.day}</li>
                                    <li>Nặng: {config2?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.nang}</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Dài: {config3?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.dai}</li>
                                    <li>Ngang: {config3?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.ngang}</li>
                                    <li>Dày: {config3?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.day}</li>
                                    <li>Nặng: {config3?.thongTin?.thongTinChung?.kichThuocKhoiLuong?.nang}</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Thời điểm ra mắt</strong></Col>
                            <Col>{config1?.thongTin?.thongTinChung?.thoiDiemRaMat}</Col>
                            <Col>{config2?.thongTin?.thongTinChung?.thoiDiemRaMat}</Col>
                            <Col>{config3?.thongTin?.thongTinChung?.thoiDiemRaMat}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Hãng</strong></Col>
                            <Col>{config1?.thongTin?.thongTinChung?.hang}</Col>
                            <Col>{config2?.thongTin?.thongTinChung?.hang}</Col>
                            <Col>{config3?.thongTin?.thongTinChung?.hang}</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>







            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Thêm sản phẩm so sánh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChoiceCompare />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Compare;
