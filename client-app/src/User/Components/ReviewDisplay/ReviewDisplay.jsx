import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import "./ReviewDisplay.css"
const ReviewDisplay = ({selectedPhone, isAuthenticated, userId, userName}) => {
    const [reviews, setReviews] = useState([{user: {}}]);
    const [selectedStarCount, setSelectedStarCount] = useState(0);
    useEffect(() => {
        axios.get(`https://localhost:7258/api/Reviews/GetReviewByModPhone/${selectedPhone.modPhone.id}`)
            .then(res => {
                setReviews(res.data);
                setSelectedStarCount(res.data.rate)
            });
    }, []); // useEffect chỉ chạy một lần khi component mount
        // Tính tổng rate và rating trung bình
    var sumRate = 0;
    var rating = 0;

  
    if (reviews.length > 0) {
        sumRate = reviews.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.rate;
        }, 0); // Tính tổng rate của các reviews hiện có

        // Tính rating trung bình
        rating = parseFloat((sumRate / reviews.length).toFixed(1));
        console.log(rating);
        // Giới hạn rating từ 0 đến 5
        if (rating > 5) {
            rating = 5;
            }
        }
    return ( 
        <>
         <section className="content-item" id="reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                                <fieldset>
                                    <div class="">

                                    <span style={{fontSize: "2.1em"}}>{reviews.length} <span> lượt đánh giá: </span></span><br />
                                    <span style={{fontSize: "2.1em", color: "#FFBF00"}}>{rating} sao</span>
                                        {[...Array(5)].map((_, index) => (
                                            <>
                                                <span
                                                    key={index}
                                                    className={`${index + 1 <= rating ? 'selecte' : ''}`}
                                                    style={{fontSize: "3em",display: "inline", marginRight: "10px"}}
                                                >
                                                    &#9733;
                                                </span>

                                            </>
                                            ))}

                                      
                                    </div>
                                           
                                </fieldset>
                            {
                               reviews.map((item, index) => (
                                <div className="media" key={item.id}>
                                    <div className="media-body">
                                        <h4 className="media-heading">{item.user.fullname}</h4>
                                      
                                            {[...Array(5)].map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`${index + 1 <= item.rate ? 'selecte' : ''}`}
                                                    style={{fontSize: "1.5em"}}
                                                >
                                                    &#9733;
                                                </span>
                                            ))}
                                        <div>
                                            {
                                                item.path !== null && (

                                                    <img src={`https://localhost:7258/images/reviews/${item.path}`} alt="" style={{width: 100, height: 100}}/>
                                                )
                                            }
                                        </div>
                                        <p>{item.content}</p>
                                        <ul className="list-unstyled media-detail pull-left">
                                            <li className="d-block"><i className="fa fa-calendar" />{item.dateReview}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                            
                            }
                        </div>
                    </div>
                </div>
            </section>
           
        </>
     );
}
 
export default ReviewDisplay;