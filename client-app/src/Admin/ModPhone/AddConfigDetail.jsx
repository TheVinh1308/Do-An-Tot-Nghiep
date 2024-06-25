import axios from "axios";
import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row, Form, Button, Container, Card } from "react-bootstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";

const AddConfigDetail = () => {
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

  const handleChange = (e, group, field) => {
    setConfig({
      ...config,
      id: selectedMPhone,
      thongTin: {
        ...config.thongTin,
        [group]: {
          ...config.thongTin[group],
          [field]: e.target.value,
        },
      },
    });
  };

  const handleArrayChange = (e, group, field) => {
    const values = e.target.value.split('\n');
    setConfig({
      ...config,
      id: selectedMPhone,
      thongTin: {
        ...config.thongTin,
        [group]: {
          ...config.thongTin[group],
          [field]: values,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3001/phoneConfig`, config);
      console.log(res);
      alert("Đã thêm")
    } catch (err) {
      console.log("Lỗi cập nhật dữ liệu", err);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <Container>
          <Row>
            <Col>
              <Form.Select value={selectedMPhone} onChange={handleSelectChange}>
                <option value="">Chọn dòng điện thoại</option>
                {modPhones.length > 0 && modPhones.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
              {
                selectedMPhone && (
                <Card>
                    <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <ListGroup>
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
                                onChange={(e) => handleChange(e, 'manHinh', 'manHinhRong')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Độ phân giải:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                type="text"
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
                                onChange={(e) => handleChange(e, 'cameraSau', 'doPhanGiai')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Quay phim:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'cameraSau', 'quayPhim')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Đèn flash:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'cameraSau', 'denFlash')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Tính năng:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'cameraSau', 'tinhNang')}
                                />
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
                                onChange={(e) => handleChange(e, 'cameraTruoc', 'doPhanGiai')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Tính năng:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'cameraTruoc', 'tinhNang')}
                                />
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
                                onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'heDieuHanh')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Chip xử lý:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                type="text"
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
                                onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'tocDoCPU')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Chip đồ họa:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'heDieuHanhCPU', 'chipDoHoaGPU')}
                                />
                            </Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <h6>Bộ nhớ & Lưu trữ:</h6>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col lg={4}>
                                    <p>Danh bạ:</p>
                                </Col>
                                <Col>
                                    <Form.Control
                                    type="text"
                                    onChange={(e) => handleChange(e, 'boNhoLuuTru', 'danhBa')}
                                    />
                                </Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <h6>Pin & Sạc:</h6>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col lg={4}>
                                    <p>Dung lượng pin:</p>
                                </Col>
                                <Col>
                                    <Form.Control
                                    type="text"
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
                                    onChange={(e) => handleChange(e, 'pinSac', 'loaiPin')}
                                    />
                                </Col>
                            </Row>

                            <Row>
                            <Col lg={4}>
                                <p>Công nghệ pin:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'pinSac', 'congNghePin')}
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
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) => handleChange(e, 'ketNoi', 'mangDiDong')}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4}>
                                    <p>SIM:</p>
                                </Col>
                                <Col>
                                    <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) => handleChange(e, 'ketNoi', 'SIM')}
                                    />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col lg={4}>
                                    <p>Wi-Fi:</p>
                                </Col>
                                <Col>
                                    <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) => handleArrayChange(e, 'ketNoi', 'wifi')}
                                    />
                                </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Bluetooth:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'ketNoi', 'bluetooth')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>GPS:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'ketNoi', 'GPS')}
                                />
                            </Col>
                            </Row>

                            <Row>
                                <Col lg={4}>
                                    <p>Cổng kết nối sạc:</p>
                                </Col>
                                <Col>
                                    <Form.Control
                                    as="textarea"
                                    rows={3}
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
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) => handleChange(e, 'ketNoi', 'jackTaiNghe')}
                                    />
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
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'tienIch', 'baoMatNangCao')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Tính năng đặc biệt:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'tienIch', 'tinhNangDacBiet')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Ghi âm:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'tienIch', 'ghiAm')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Nghe nhạc:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'tienIch', 'ngheNhac')}
                                />
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={4}>
                                <p>Xem phim:</p>
                            </Col>
                            <Col>
                                <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => handleArrayChange(e, 'tienIch', 'xemPhim')}
                                />
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
                                            onChange={(e) => handleChange(e, 'thongTinChung', 'hang')}
                                        />
                                  </Col>
                              </Row>
              
                              
                          </ListGroupItem>
                        

                        <ListGroupItem>
                            <Button type="submit">Lưu</Button>
                        </ListGroupItem>
                        </ListGroup>
                    </form>
                    </Card.Body>
                </Card>

                )
              }
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default AddConfigDetail;
