import $ from "jquery"
import { useEffect, useState } from "react";
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap";
import InfoInvoiceDetail from "./InfoInvoiceDetail";
const DetailInvoice = () => {


    // SHOW SỬA ĐIỆN THOẠI
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    useEffect(() => {
        const table = $('#DataTables_Table_DetailInvoice_0').DataTable({
            responsive: true,
            autoWidth: true,
            paging: [{
                className: 'p-0',
            }]
        });

        return () => {
            // Destroy the DataTable instance when component unmounts
            table.destroy();
        };
    }, []);
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Danh sách chi tiết hoá đơn</h5>
                                <table id="DataTables_Table_DetailInvoice_0" className="table table-striped responsive modphone-table">
                                    {/*  */}
                                    <thead>
                                        <tr>
                                            <th className="col-2 tb-item">ID</th>
                                            <th className="col-2 tb-item">Image</th>
                                            <th className="col-3 tb-item">Name</th>
                                            <th className="col-2 tb-item">Quantity</th>
                                            <th className="col-2 tb-item">UnitPrice</th>
                                            <th className="col-1 tb-item">Feature</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" tb-item">055UK44</td>
                                            <td className="img-modphone">
                                                <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} />
                                            </td>
                                            <td className=" tb-item">IPhone 15 Pro max</td>
                                            <td className=" tb-item">2</td>
                                            <td className=" tb-item">  {(25000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                            <td className="tb-item">
                                                <Row>
                                                    <Col className="col-12" onClick={handleShowEdit}> <i class="bi bi-info-circle-fill btn btn-success"></i></Col>
                                                </Row>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" tb-item">055UK44</td>
                                            <td className="img-modphone">
                                                <Image src={process.env.PUBLIC_URL + '/assets/img/ModPhone/ip14promax.png'} />
                                            </td>
                                            <td className=" tb-item">IPhone 15 Pro max</td>
                                            <td className=" tb-item">2</td>
                                            <td className=" tb-item">  {(25000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                            <td className="tb-item">
                                                <Row>
                                                    <Col className="col-12" onClick={handleShowEdit}> <i class="bi bi-info-circle-fill btn btn-success"></i></Col>
                                                </Row>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                {/* End Table with stripped rows */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CẬP NHẬT ĐIỆN THOẠI */}

            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title className="add-title">Cập nhật chi tiết hoá đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InfoInvoiceDetail />

                </Modal.Body>

            </Modal>
            {showEdit && <div className="modal-backdrop fade show"></div>}
        </>
    );
}

export default DetailInvoice;