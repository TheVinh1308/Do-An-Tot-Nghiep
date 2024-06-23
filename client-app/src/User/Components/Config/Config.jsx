import axios from "axios";
import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./Config.css"
const Config = ({selectedPhone}) => {
    console.log("sl", selectedPhone);
    const [config, setConfig] = useState({ thongTin: { manHinh: {}, cameraSau: { quayPhim: [], tinhNang: [] }, cameraTruoc: { tinhNang: [] }, heDieuHanhCPU: {},boNhoLuuTru: {}, pinSac: { congNghePin: [] }, ketNoi: { wifi: [], bluetooth:[], GPS: [] }, tienIch: { baoMatNangCao: [], tinhNangDacBiet: [], ghiAm: [], ngheNhac: [], xemPhim: [] }, thongTinChung: {kichThuocKhoiLuong :{}, chatLieu: {}}, ramLuuTru: {} } });

    useEffect(() => {
        axios.get(`http://localhost:3001/phoneConfig/${selectedPhone.modPhone.id}`)
        .then((res) => setConfig(res.data))
        .catch((err) => console.log("lỗi lấy dữ liệu", err))
    },[])
    console.log("cf",config);
    return (
      <>
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
                        <p>{config.thongTin.manHinh.congNgheManHinh}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Màn hình rộng:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.manHinh.manHinhRong}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Đô phân giải:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.manHinh.doPhanGiai}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Độ sáng tối đa:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.manHinh.doSangToiDa}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Mặt kính cảm ứng:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.manHinh.matKinhCamUng}</p>
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
                        <p>{config.thongTin.cameraSau.doPhanGiai}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Quay phim:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.cameraSau.quayPhim.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Đèn flash:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.cameraSau.denFlash}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Tính năng:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.cameraSau.tinhNang.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
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
                        <p>{config.thongTin.cameraTruoc.doPhanGiai}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Tính năng:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.cameraTruoc.tinhNang.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem>
              <h6>Hệ điều hành & CPU:</h6>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col lg={4}>
                        <p>Độ phân giải:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.heDieuHanhCPU.heDieuHanh}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Chip sử lý CPU:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.heDieuHanhCPU.chipXuLyCPU}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Tốc độ CPU:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.heDieuHanhCPU.tocDoCPU}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Chíp đồ họa GPU:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.heDieuHanhCPU.chipDoHoaGPU}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Chíp đồ họa GPU:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.heDieuHanhCPU.chipDoHoaGPU}</p>
                    </Col>
                </Row>
                
            </ListGroupItem>

            <ListGroupItem>
              <h6>Bộ nhớ & lưu trữ:</h6>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col lg={4}>
                        <p>Ram:</p>
                    </Col>
                    <Col>
                        <p>{selectedPhone.modPhone.ram} GB</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Dung lượng lưu trữ:</p>
                    </Col>
                    <Col>
                        <p>{selectedPhone.rom} GB</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Dung lượng khả dụng còn lại:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.boNhoLuuTru.dungLuongConLai}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Danh bạ:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.boNhoLuuTru.danhBa} GB</p>
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
                        <p>{config.thongTin.ketNoi.mangDiDong}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Sim:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.ketNoi.SIM}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Wifi:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.ketNoi.wifi.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Bluetooth:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.ketNoi.bluetooth.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Cổng kết nối sạc:</p>
                    </Col>
                    <Col>
                         <p>{config.thongTin.ketNoi.congKetNoiSac}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Jack tai nghe:</p>
                    </Col>
                    <Col>
                         <p>{config.thongTin.ketNoi.jackTaiNghe}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>GPS:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.ketNoi.GPS.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
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
                        <p>{config.thongTin.pinSac.dungLuongPin}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Loại pin:</p>
                    </Col>
                    <Col>
                        <p>{config.thongTin.pinSac.loaiPin}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Công nghệ pin:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.pinSac.congNghePin.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
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
                    {
                        config.thongTin.tienIch.baoMatNangCao.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Tính năng đặc biệt:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.tienIch.tinhNangDacBiet.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Ghi âm:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.tienIch.ghiAm.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Xem phim:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.tienIch.ghiAm.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Nghe nhạc:</p>
                    </Col>
                    <Col>
                    {
                        config.thongTin.tienIch.ngheNhac.map((item, index) => {
                            return (
                                    <p key={index}>{item}</p>
                            )})
                    }
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
                        <p>{config.thongTin.thongTinChung.thietKe}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Chất liệu:</p>
                    </Col>
                    <Col>
                        <p>Khung: {config.thongTin.thongTinChung.chatLieu.khung}, mặt lưng: {config.thongTin.thongTinChung.chatLieu.matLung}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Kích thước khối lượng:</p>
                    </Col>
                    <Col>
                        <p>Dài: {config.thongTin.thongTinChung.kichThuocKhoiLuong.dai}, Ngang: {config.thongTin.thongTinChung.kichThuocKhoiLuong.ngang}, Dày: {config.thongTin.thongTinChung.kichThuocKhoiLuong.day}, Nặng: {config.thongTin.thongTinChung.kichThuocKhoiLuong.nang}</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <p>Thời điểm ra mắt:</p>
                    </Col>
                    <Col>
                       <p>{config.thongTin.thongTinChung.thoiDiemRaMat}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <p>Hãng:</p>
                    </Col>
                    <Col>
                       <p>{config.thongTin.thongTinChung.hang}</p>
                    </Col>
                </Row>

                
            </ListGroupItem>
          </div>
        </ListGroup>
      </>
    );
}
 
export default Config;