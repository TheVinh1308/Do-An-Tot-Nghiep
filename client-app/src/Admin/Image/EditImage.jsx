import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
const EditImage = ({ imageId,setIsSave }) => {
    const [imageSrcs, setImageSrcs] = useState([]);
    const [isInsert, setIsInsert] = useState(false);
    const [image, setImage] = useState({ status: true, Files: [] });
    

    const handleImageChange = (e) => {
        let files = e.target.files;
        let name = e.target.name;
        const previews = Array.from(files).map(file => URL.createObjectURL(file));

        const filesArray = Array.from(files);

        setImage(prev => ({ ...prev, [name]: filesArray }));
        setImageSrcs(previews);
    };


    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setImage(prev => ({ ...prev, [name]: value }));
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Array.isArray(image.Files)) {
            const formData = new FormData();

            // Append each file to form data
            image.Files.forEach(file => {
                formData.append('Files', file);
            });

            // Append other form data fields
             formData.append('id', image.id);
            formData.append('status', image.status);
            formData.append('phoneId', image.phoneId);
            console.log(formData);

            axios.put(`https://localhost:7258/api/Images/${imageId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((res) => {
                    setImage(res.data);
                    alert("Success");
                    setIsInsert(true);
                    
                })
                .catch((err) => {
                    alert("Thêm thất bại!!!");
                    console.log(`error`, err);
                    console.log(formData);
                });
        } else {
            // Handle the case when image.Files is not an array
            alert("No files selected");
        }
    }

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Phones`)
            .then(res => {
                setPhones(res.data);
            });
    }, []);


    const [getImage, setGetImage] = useState({ phone: {} });
    const [selectImage, setSelectImage] = useState([]);
    const [test, setTest] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Images/${imageId}`)
            .then(res => {
                setGetImage(res.data);
                setImage(res.data); // Populate image state with the retrieved data
                if (res.data.path) {
                    const imagePaths = typeof res.data.path === 'string' ? JSON.parse(res.data.path) : res.data.path;
                    setSelectImage(imagePaths);
                    setTest(imagePaths);
                }
            });
    }, [imageId]);
    console.log(test[0]);
    return (
        <>
            <form className="form-modphone g-3" datatype="" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={getImage.id} onChange={handleSelect} />
                <Row>
                    <Col className="col-8 form-item" md={8} xs={12}>
                        <i class="bi bi-image"></i>
                        <label htmlFor="inputName4" className="form-label">Hình ảnh</label>
                        <input type="file" className="form-control" id="inputName4" name="Files" onChange={handleImageChange} multiple />


                        <Row>
                            <Col> {imageSrcs[0] ? (
                                <img className="imgs" src={imageSrcs[0]} width="100%" />
                            ) : (
                                <img src={'https://localhost:7258/images/products/' + test[0]} width="100%" />
                            )}</Col>
                            <Col> {imageSrcs[1] ? (
                                <img className="imgs" src={imageSrcs[1]} width="100%" />
                            ) : (
                                <img src={'https://localhost:7258/images/products/' + test[1]} width="100%" />
                            )}</Col>

                        </Row>
                        <Row>
                            <Col> {imageSrcs[2] ? (
                                <img className="imgs" src={imageSrcs[2]} width="100%" />
                            ) : (
                                <img src={'https://localhost:7258/images/products/' + test[2]} width="100%" />
                            )}</Col>
                            <Col> {imageSrcs[3] ? (
                                <img className="imgs" src={imageSrcs[3]} width="100%" />
                            ) : (
                                <img src={'https://localhost:7258/images/products/' + test[3]} width="100%" />
                            )}</Col>
                            {/* <Col> {imageSrcs[4] ? (
                                <img className="imgs" src={imageSrcs[4]} width="100%" />
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/img/ModPhone/noimg.jpg'} width="100%" />
                            )}</Col> */}
                        </Row>

                    </Col>
                    <Col className="col-4 form-item" md={4} xs={12}>
                        <i class="bi bi-layout-wtf"></i>
                        <label htmlFor="inputNanme4" className="form-label">Điện thoại</label>
                        <Form.Select name="phoneId" onChange={handleSelect}>
                            <option value={getImage.phone.id}>{getImage?.phone?.name}</option>
                            {phones.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </Form.Select>
                    </Col>

                </Row>
                <div className="text-center">
                    <button type="submit" className="btn btn-success mx-2">Thêm</button>
                    <button type="reset" className="btn btn-secondary mx-2">Làm mới</button>
                </div>
            </form>
        </>
    );
}

export default EditImage;