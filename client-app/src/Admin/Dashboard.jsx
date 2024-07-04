import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Breadcrumb from './Breadcrumb';
import Chart from 'chart.js/auto';
import * as echarts from 'echarts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faHandHoldingDollar, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer/Footer';
import axios from 'axios';


const Dashboard = () => {
    const canvasRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        // Hủy biểu đồ hiện tại trước khi vẽ biểu đồ mới
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);
    const [topBrand, setTopBrand] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetTopSellInvoiceDetailByBrand`)
            .then((res) => {
                setTopBrand(res.data);
            })
    }, []);
    console.log(`topBrand`, topBrand);
    useEffect(() => {
        const chart = echarts.init(document.querySelector("#trafficChart"));
        const formattedData = topBrand.map(brand => ({
            value: brand.totalQuantity,
            name: brand.invoiceDetail.phone.modPhone.brand.name
        }));
        chart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: formattedData
            }]
        });

        // Cleanup function to destroy the chart when component unmounts
        return () => {
            chart.dispose();
        };
    }, [topBrand]);
    const formatTimeDifference = (itemTime) => {
        const timeDifference = Date.now() - new Date(itemTime).getTime() - (7 * 3600 * 1000);
        const minutes = Math.floor(timeDifference / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (minutes < 60) {
            return `${minutes} phút`;
        } else if (hours < 24) {
            return `${hours} hrs  `;
        } else {
            return `${days} d  `;
        }
    };
    // thông báo
    const [notificationAdmin, setNotificationAdmin] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/NotificationAdmin`)
            .then((res) => (
                setNotificationAdmin(res.data)
            ))
    }, []);
    const [topsellings, setTopsellings] = useState([]);
    const [imgTopsell, setImgTopsell] = useState([]);
    const [filter, setFilter] = useState('today'); // State để lưu trữ bộ lọc hiện tại

    // Fetch data for Today
    useEffect(() => {
        if (filter === 'today') {
            axios.get(`https://localhost:7258/api/InvoiceDetails/GetTopSellInvoiceDetail`)
                .then((res) => {
                    setTopsellings(res.data);
                    fetchImages(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching top selling invoice details:', error);
                });
        }
    }, [filter]);

    // Fetch data for This Month
    useEffect(() => {
        if (filter === 'thisMonth') {
            axios.get(`https://localhost:7258/api/InvoiceDetails/GetTopSellInvoiceDetailByMonth`)
                .then((res) => {
                    setTopsellings(res.data);
                    fetchImages(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching top selling invoice details:', error);
                });
        }
    }, [filter]);

    // Fetch data for This Year
    useEffect(() => {
        if (filter === 'thisYear') {
            axios.get(`https://localhost:7258/api/InvoiceDetails/GetTopSellInvoiceDetailByYear`)
                .then((res) => {
                    setTopsellings(res.data);
                    fetchImages(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching top selling invoice details:', error);
                });
        }
    }, [filter]);

    const fetchImages = (data) => {
        const fetchImagesPromises = data.map((item) =>
            axios.get(`https://localhost:7258/api/Images/${item.invoiceDetail?.phoneId}`)
                .then((res) => {
                    const imagePath = JSON.parse(res.data.path)[0];
                    return imagePath;
                })
                .catch((error) => {
                    console.error(`Error fetching image for phoneId ${item.invoiceDetail?.phoneId}:`, error);
                    return null; // Return null in case of error
                })
        );

        Promise.all(fetchImagesPromises)
            .then((images) => {
                setImgTopsell(images); // Set the array of image paths
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    };

    // Function to handle selecting filter
    const handleFilterSelect = (filter) => {
        setFilter(filter);
    };

    const filterText = {
        today: 'Today',
        thisMonth: 'This Month',
        thisYear: 'This Year'
    };
    // Render topsellings and imgTopsell accordingly in your JSX

    // Customer
    const [customer, setCustomer] = useState(0);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Users/CountCustomer`)
            .then((res) => {
                setCustomer(res.data);
            })
    }, [customer]);

    // TotalPrice
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/InvoiceDetails/GetTotalPrice`)
            .then((res) => {
                setTotalPrice(res.data);
            })
    }, [totalPrice]);

    // const handleFilterSelect = (filter) => {
    //     switch (filter) {
    //         case 'today':
    //             setTopsellings(topsellings);
    //             break;
    //         case 'thisMonth':
    //             setTopsellings(topsellingByMonth);
    //             break;
    //         case 'thisYear':
    //             setTopsellings(topsellingByYear);
    //             break;
    //         default:
    //             break;
    //     }
    // };
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Breadcrumb />
                <section className="section dashboard">
                    <div class="row">
                        {/* NỘI DUNG BÊN TRÁI */}
                        <div class="col-lg-8">
                            <div class="row">
                                {/* SALE */}
                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card sales-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Sales <span>| Today</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                                                </div>
                                                <div class="ps-3">
                                                    <h6>145</h6>
                                                    <span class="text-success small pt-1 fw-bold">12%</span> <span
                                                        class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* DOANH THU */}
                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card revenue-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Revenue <span>| This Month</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <FontAwesomeIcon icon={faSackDollar} />
                                                </div>
                                                <div class="ps-3">
                                                    <h6 style={{ fontSize: 20 }}>{(totalPrice).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h6>
                                                    <span class="text-success small pt-1 fw-bold">8%</span> <span
                                                        class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* SỐ HOÁ ĐƠN */}
                                <div class="col-xxl-4 col-xl-12">

                                    <div class="card info-card customers-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Customers <span>| This Year</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <FontAwesomeIcon icon={faChartSimple} />
                                                </div>
                                                <div class="ps-3">
                                                    <h6>{customer}</h6>
                                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span
                                                        class="text-muted small pt-2 ps-1">decrease</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                {/* BIỂU ĐÒ DOANH THU */}
                                <div className="col-12">


                                    <div className="card">
                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Doanh Thu Theo Tuần</h5>
                                            <canvas id="barChart" ref={canvasRef} style={{ maxHeight: 400 }}></canvas>
                                        </div>
                                    </div>
                                </div>
                                {/* SẢN PHẨM GIẢM GIÁ */}
                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleFilterSelect('today')}>Today</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleFilterSelect('thisMonth')}>This Month</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleFilterSelect('thisYear')}>This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body pb-0">
                                            <h5 className="card-title">Top Selling <span>| {filterText[filter]}</span></h5>
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Preview</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Sold</th>
                                                        <th scope="col">Revenue</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        topsellings.map((item, index) => (
                                                            <tr key={index}>
                                                                <th scope="row"><a href="#">   {imgTopsell[index] && (
                                                                    <img src={`https://localhost:7258/images/products/${imgTopsell[index]}`} alt={item.invoiceDetail?.phone?.name} />
                                                                )}</a></th>
                                                                <td><a href="#" className="text-primary fw-bold">{item.invoiceDetail.phone?.name}</a></td>
                                                                <td>{(item.invoiceDetail.phone.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                                <td className="fw-bold">{item.totalQuantity}</td>
                                                                <td>{((item.invoiceDetail.phone.price) * (item.totalQuantity)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* NỘI DUNG BÊN PHẢI */}
                        <div className="col-lg-4">
                            {/* LUỒNG HOẠT ĐỘNG */}
                            <div className="card notificaAdmin">
                                <div className="filter">
                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Today</a></li>
                                        <li><a className="dropdown-item" href="#">This Month</a></li>
                                        <li><a className="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
                                    <div className="activity">
                                        {
                                            notificationAdmin.map((item, index) => (
                                                <div className="activity-item d-flex" key={index}>
                                                    <div className="activite-label"> <time>{formatTimeDifference(item.time)}</time></div>

                                                    <i className={`bi bi-circle-fill activity-badge ${item?.content?.includes("huỷ") ? 'text-danger' : item?.content?.includes("đặt") ? 'text-success' : item?.content?.includes("duyệt") ? 'text-warning' : 'text-primary'} align-self-start`} />
                                                    <div className="activity-content">

                                                        <a href={item.url} className="fw-bold text-dark"> {item.content}</a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                                            <div className="activity-content">
                                                Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>{/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">56 min</div>
                                            <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                                            <div className="activity-content">
                                                Voluptatem blanditiis blanditiis eveniet
                                            </div>
                                        </div>{/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 hrs</div>
                                            <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                                            <div className="activity-content">
                                                Voluptates corrupti molestias voluptatem
                                            </div>
                                        </div>{/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">1 day</div>
                                            <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                                            <div className="activity-content">
                                                Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                                            </div>
                                        </div>{/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 days</div>
                                            <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                                            <div className="activity-content">
                                                Est sit eum reiciendis exercitationem
                                            </div>
                                        </div>{/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">4 weeks</div>
                                            <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                                            <div className="activity-content">
                                                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                            </div>
                                        </div>{/* End activity item*/}
                                    </div>
                                </div>
                            </div>
                            {/* HIỆU SUẤT BRAND */}
                            <div class="card">
                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div class="card-body pb-0">
                                    <h5 class="card-title">Hiệu suất Bán Hàng<span>| Today</span></h5>

                                    <div id="trafficChart" style={{ minHeight: 400 }} className="echart" />



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </>
    );
}

export default Dashboard;
