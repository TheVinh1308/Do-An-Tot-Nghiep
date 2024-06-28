import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row, Form, Button, Modal } from "react-bootstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const ConfigDetail = () => {
  const [config, setConfig] = useState({
    thongTin: {
      manHinh: {},
      cameraSau: { quayPhim: [], tinhNang: [] },
      cameraTruoc: { tinhNang: [] },
      heDieuHanhCPU: {},
      boNhoLuuTru: {},
      pinSac: { congNghePin: [] },
      ketNoi: { wifi: [], bluetooth: [], GPS: [] },
      tienIch: {
        baoMatNangCao: [],
        tinhNangDacBiet: [],
        ghiAm: [],
        ngheNhac: [],
        xemPhim: [],
      },
      thongTinChung: { kichThuocKhoiLuong: {}, chatLieu: {} },
      ramLuuTru: {},
    },
  });

    const [modPhones, setModPhones] = useState([]);
    const [selectedMPhone, setSelectedMPhone] = useState('');

  useEffect(() => {
    if (selectedMPhone !== '') { 
        axios.get(`http://localhost:3001/phoneConfig/${selectedMPhone}`)
            .then((res) => setConfig(res.data))
            .catch((err) => console.log("Lỗi lấy dữ liệu", err));
    }
}, [selectedMPhone]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get('https://localhost:7258/api/ModPhones');
            setModPhones(res.data);
        } catch (error) {
            console.error('Failed to load modPhones: ', error);
        }
    };

    fetchData();
}, []); 
const handleSelectChange = (event) => {
    setSelectedMPhone(event.target.value);
};
 const [newCf, setNewCf] = useState(config);
 const handleChange = (e, group, field) => {
    try{
        setConfig({
            ...config,
            thongTin: {
                ...config.thongTin,
                [group]: {
                    ...config.thongTin[group],
                    [field]: e.target.value,
                },
            },
        });
    }
    catch{
        setConfig({
            ...config,
            thongTin: {
                ...config.thongTin,
                [group]: {
                    ...config.thongTin[group],
                    [field]: e,
                },
            },
        });
    }
};


  const handleArrayChange = (e, group, field) => {
    const values = e.target.value.split('\n');
    setNewCf({
      ...config,
      thongTin: {
        ...config.thongTin,
        [group]: {
          ...config.thongTin[group],
          [field]: [...config.thongTin[group][field], ...values], // Create a new array with existing and new values
        },
      },
    });
  };
  useEffect(() => {
    setNewCf(config);
  }, [config])

  const handleSubmit = async () => {
    try {

      const res = await axios.put(`http://localhost:3001/phoneConfig/${selectedMPhone}`, newCf);
      console.log(res.data);// Cập nhật lại dữ liệu sau khi lưu thành công
      alert("Đã lưu")
    } catch (err) {
      console.log("Lỗi cập nhật dữ liệu", err);
    }
  };
  return (
    <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Link to="/admin/ConfigDetail/AddConfigDetail">
                    <button className="btn btn-success mb-3">Thêm mới</button>
                </Link>
                <Form.Select value={selectedMPhone} onChange={handleSelectChange}>
                    <option value="">Chọn dòng điện thoại</option>
                    {modPhones.length > 0 && modPhones.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </Form.Select>
                
                        <form onSubmit={handleSubmit}>
                        <ListGroup>
                        <div>
                          <ListGroupItem>
                            <h6>Màn hình</h6>
                          </ListGroupItem>
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Công nghệ màn hình:</p>
                                  </Col>
                                  <Col>
                                    <Form.Control
                                            type="text"
                                            value={config.thongTin.manHinh.congNgheManHinh}
                                            onChange={(e) => handleChange(e, 'manHinh', 'congNgheManHinh')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Màn hình rộng:</p>
                                  </Col>
                                  <Col>
                                    <Form.Control
                                            type="text"
                                            value={config.thongTin.manHinh.manHinhRong}
                                            onChange={(e) => handleChange(e, 'manHinh', 'manHinhRong')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Đô phân giải:</p>
                                  </Col>
                                  <Col>
                                    <Form.Control
                                            type="text"
                                            value={config.thongTin.manHinh.doPhanGiai}
                                            onChange={(e) => handleChange(e, 'manHinh', 'doPhanGiai')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Độ sáng tối đa:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.manHinh.doSangToiDa}
                                            onChange={(e) => handleChange(e, 'manHinh', 'doSangToiDa')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Mặt kính cảm ứng:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.manHinh.matKinhCamUng}
                                            onChange={(e) => handleChange(e, 'manHinh', 'matKinhCamUng')}
                                        />
                                  </Col>
                              </Row>
                          </ListGroupItem>
              
                          <ListGroupItem>
                            <h6>Camera sau:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                                <Row>
                                    <Col lg={4}>
                                        <p>Độ phân giải:</p>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            value={config.thongTin.cameraSau.doPhanGiai}
                                            onChange={(e) => handleChange(e, 'cameraSau', 'doPhanGiai')}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <p>Quay phim:</p>
                                    </Col>
                                    <Col>
                                    {config.thongTin.cameraSau.quayPhim.map((item, index) => (
                                            <Form.Control
                                                as="textarea"
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const updatedQuayPhim = [...config.thongTin.cameraSau.quayPhim];
                                                    updatedQuayPhim[index] = e.target.value;
                                                    handleChange(updatedQuayPhim, 'cameraSau', 'quayPhim');
                                                }}
                                            />
                                        ))}
                                     <Row>
                                    <Col>
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Thêm dữ liệu mới tại đây..."
                                        rows={3}
                                        onChange={(e) => handleArrayChange(e, 'cameraSau', 'quayPhim')}
                                        />
                                    </Col>
                                    </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <p>Đèn flash:</p>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            value={config.thongTin.cameraSau.denFlash}
                                            onChange={(e) => handleChange(e, 'cameraSau', 'denFlash')}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <p>Tính năng:</p>
                                    </Col>
                                    <Col>
                                        {config.thongTin.cameraSau.tinhNang.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const updatedTinhNang = [...config.thongTin.cameraSau.tinhNang];
                                                    updatedTinhNang[index] = e.target.value;
                                                    handleChange(updatedTinhNang, 'cameraSau', 'tinhNang');
                                                }}
                                            />
                                        ))}
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                as="textarea"
                                                placeholder="Thêm dữ liệu mới tại đây..."
                                                rows={3}
                                                onChange={(e) => handleArrayChange(e, 'cameraSau', 'tinhNang')}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </ListGroupItem>

              
                          <ListGroupItem>
                            <h6>Camera trước:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Độ phân giải:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.cameraTruoc.doPhanGiai}
                                            onChange={(e) => handleChange(e, 'cameraTruoc', 'doPhanGiai')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Tính năng:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.cameraTruoc.tinhNang.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const updatedTinhNang = [...config.thongTin.cameraTruoc.tinhNang];
                                                    updatedTinhNang[index] = e.target.value;
                                                    handleChange(updatedTinhNang, 'cameraTruoc', 'tinhNang');
                                                }}
                                            />
                                        ))}
                                  <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'cameraTruoc', 'tinhNang')}
                                            />
                                        </Col>
                                  </Row>
                                  </Col>
                              </Row>
                          </ListGroupItem>
              
                          <ListGroupItem>
                            <h6>Hệ điều hành & CPU:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Hệ điều hành:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.heDieuHanhCPU.heDieuHanh}
                                            onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'heDieuHanh')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Chip sử lý CPU:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.heDieuHanhCPU.chipXuLyCPU}
                                            onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'chipXuLyCPU')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Tốc độ CPU:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.heDieuHanhCPU.tocDoCPU}
                                            onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'tocDoCPU')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Chíp đồ họa GPU:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.heDieuHanhCPU.chipDoHoaGPU}
                                            onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'chipDoHoaGPU')}
                                        />
                                  </Col>
                              </Row>
              
                              
                          </ListGroupItem>
              
                          <ListGroupItem>
                            <h6>Bộ nhớ & lưu trữ:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Danh bạ:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.boNhoLuuTru.danhBa}
                                            onChange={(e) => handleChange(e, 'boNhoLuuTru', 'danhBa')}
                                        />
                                  </Col>
                              </Row>
                              
                          </ListGroupItem>
              
                          <ListGroupItem>
                            <h6>Kết nối:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Mạng di động:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.ketNoi.mangDiDong}
                                            onChange={(e) => handleChange(e, 'ketNoi', 'mangDiDong')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Sim:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.ketNoi.SIM}
                                            onChange={(e) => handleChange(e, 'ketNoi', 'SIM')}
                                        />
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Wifi:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.ketNoi.wifi.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                
                                                value={item}
                                                onChange={(e) => {
                                                    const updateWifi = [...config.thongTin.ketNoi.wifi];
                                                    updateWifi[index] = e.target.value;
                                                    handleChange(updateWifi, 'ketNoi', 'wifi');
                                                }}
                                            />
                                        ))}
                                  <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'ketNoi', 'wifi')}
                                            />
                                        </Col>
                                  </Row>
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Bluetooth:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.ketNoi.bluetooth.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.ketNoi.bluetooth];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'ketNoi', 'bluetooth');
                                                }}
                                            />
                                        ))}
                                  <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'ketNoi', 'bluetooth')}
                                            />
                                        </Col>
                                  </Row>
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Cổng kết nối sạc:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.ketNoi.congKetNoiSac}
                                            onChange={(e) => handleChange(e, 'ketNoi', 'congKetNoiSac')}
                                        />
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Jack tai nghe:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.ketNoi.jackTaiNghe}
                                            onChange={(e) => handleChange(e, 'ketNoi', 'jackTaiNghe')}
                                        />
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>GPS:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.ketNoi.GPS.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.ketNoi.GPS];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'ketNoi', 'GPS');
                                                }}
                                            />
                                    ))}
                                  <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'ketNoi', 'GPS')}
                                            />
                                        </Col>
                                  </Row>
                                  </Col>
                              </Row>
                              
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <h6>Pin sạc:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Dung lượng pin:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.pinSac.dungLuongPin}
                                            onChange={(e) => handleChange(e, 'pinSac', 'dungLuongPin')}
                                        />
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Loại pin:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.pinSac.loaiPin}
                                            onChange={(e) => handleChange(e, 'pinSac', 'loaiPin')}
                                        />
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Công nghệ pin:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.pinSac.congNghePin.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.pinSac.congNghePin];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'pinSac', 'congNghePin');
                                                }}
                                            />
                                    ))}
                                    <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'pinSac', 'congNghePin')}
                                            />
                                        </Col>

                                    </Row>
                                  </Col>
                              </Row>
              
                              
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <h6>Tiện ích:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Bảo mật nâng cao:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.tienIch.baoMatNangCao.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.tienIch.baoMatNangCao];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'tienIch', 'baoMatNangCao');
                                                }}
                                            />
                                    ))}
                                  <Row>
                                    <Col>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Thêm dữ liệu mới tại đây..."
                                            rows={3}
                                            onChange={(e) => handleArrayChange(e, 'tienIch', 'baoMatNangCao')}
                                            />
                                        </Col>

                                  </Row>
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Tính năng đặc biệt:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.tienIch.tinhNangDacBiet.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.tienIch.tinhNangDacBiet];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'tienIch', 'tinhNangDacBiet');
                                                }}
                                            />
                                    ))}
                                  <Row>
                                  <Col>
                                        <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Thêm dữ liệu mới tại đây..."
                                        onChange={(e) => handleArrayChange(e, 'tienIch', 'tinhNangDacBiet')}
                                        />
                                    </Col>
                                  </Row>
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Ghi âm:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.tienIch.ghiAm.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.tienIch.ghiAm];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'tienIch', 'ghiAm');
                                                }}
                                            />
                                    ))}
                                  <Col>
                                        <Form.Control
                                        as="textarea"
                                        rows={3}
                                        onChange={(e) => handleArrayChange(e, 'tienIch', 'ghiAm')}
                                        />
                                    </Col>
                                  </Col>
                                  <Row>

                                  </Row>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Xem phim:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.tienIch.xemPhim.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.tienIch.xemPhim];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'tienIch', 'xemPhim');
                                                }}
                                            />
                                    ))}
                                  <Row>
                                  <Col>
                                        <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Thêm dữ liệu mới tại đây..."
                                        onChange={(e) => handleArrayChange(e, 'tienIch', 'xemPhim')}
                                        />
                                    </Col>

                                  </Row>
                                  </Col>
                              </Row>
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Nghe nhạc:</p>
                                  </Col>
                                  <Col>
                                  {config.thongTin.tienIch.ngheNhac.map((item, index) => (
                                            <Form.Control
                                                key={index}
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const update = [...config.thongTin.tienIch.ngheNhac];
                                                    update[index] = e.target.value;
                                                    handleChange(update, 'tienIch', 'ngheNhac');
                                                }}
                                            />
                                    ))}
                                  <Row>
                                  <Col>
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Thêm dữ liệu mới tại đây..."
                                        rows={3}
                                        onChange={(e) => handleArrayChange(e, 'tienIch', 'ngheNhac')}
                                        />
                                    </Col>
                                  </Row>
                                  </Col>
                              </Row>
              
                              
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <h6>Thông tin chung:</h6>
                          </ListGroupItem>
              
                          <ListGroupItem>
                              <Row>
                                  <Col lg={4}>
                                      <p>Thiết kế:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.thongTinChung.thietKe}
                                            onChange={(e) => handleChange(e, 'thongTinChung', 'thietKe')}
                                        />
                                  </Col>
                              </Row>
              
              
              
                              <Row>
                                  <Col lg={4}>
                                      <p>Thời điểm ra mắt:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.thongTinChung.thoiDiemRaMat}
                                            onChange={(e) => handleChange(e, 'thongTinChung', 'thoiDiemRaMat')}
                                        />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={4}>
                                      <p>Hãng:</p>
                                  </Col>
                                  <Col>
                                  <Form.Control
                                            type="text"
                                            value={config.thongTin.thongTinChung.hang}
                                            onChange={(e) => handleChange(e, 'thongTinChung', 'hang')}
                                        />
                                  </Col>
                              </Row>
              
                              
                          </ListGroupItem>
                        </div>
                          </ListGroup>
                          <button type="submit">Save</button>
                        </form>
                    
                
            </main>
    </>
        
  );
};

export default ConfigDetail;

