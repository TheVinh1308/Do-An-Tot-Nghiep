import axios from "axios";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { format } from "date-fns";
import "./ReviewDisplay.css";
import { Col, ProgressBar, Row } from "react-bootstrap";
const ReviewDisplay = ({
  selectedPhone,
  isAuthenticated,
  userId,
  userName,
}) => {
    const [reviews, setReviews] = useState([{ user: {} }]);
    const [sumRate, setSumRate] = useState(0);
    const [Rate1, setRate1] = useState(0);
    const [Rate2, setRate2] = useState(0);
    const [Rate3, setRate3] = useState(0);
    const [Rate4, setRate4] = useState(0);
    const [Rate5, setRate5] = useState(0);
    const [setRate, setSetRate] = useState(0); // Sửa tên state thành setRate
    
    useEffect(() => {
      axios
        .get(
          `https://localhost:7258/api/Reviews/GetReviewByModPhone/${selectedPhone.modPhone.id}`
        )
        .then((res) => {
          setReviews(res.data);
    
          const sum = res.data.reduce((accumulator, currentVote) => {
            switch (currentVote.rate) {
              case 1:
                setRate1((prevRate1) => prevRate1 + 1);
                break;
              case 2:
                setRate2((prevRate2) => prevRate2 + 1);
                break;
              case 3:
                setRate3((prevRate3) => prevRate3 + 1);
                break;
              case 4:
                setRate4((prevRate4) => prevRate4 + 1);
                break;
              case 5:
                setRate5((prevRate5) => prevRate5 + 1);
                break;
              default:
                break;
            }
            return accumulator + currentVote.rate;
          }, 0);
    
          setSumRate(sum);
          const calculatedRate = res.data.length > 0 ? parseFloat((sum / res.data.length).toFixed(1)) : 0;
          setSetRate(calculatedRate); // Cập nhật setRate tại đây
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    }, []); // Thêm dependencies nếu cần thiết



  return (
    <>
      <section className="content-item" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
                <form>
                    <fieldset>
                    <div class="row">

                        <div class="col-sm-3 col-lg-12 hidden-xs">
                            
                            <div className="rate-review">
                                <div className="d-flex align-items-center">
                                <span style={{ fontSize: "2.1em", color: "#FFBF00", display: "block", marginRight: 5}}>{setRate} sao </span> 
                                    <StarRatings
                                            className="list-vote-icon rate-main"
                                            rating={setRate}
                                            starRatedColor="orange"
                                            // changeRating={onStarClick}
                                            numberOfStars={5}
                                            name="rating"
                                            starDimension="30px"
                                            starSpacing="2px"
                                            
                                    /> 

                                    <span style={{ fontSize: "2.0em", display: "inline", marginLeft: 5}}> và </span> 

                                    <span style={{ fontSize: "2.1em", display: "inline", marginLeft: 5}}>{reviews.length} lượt đánh giá:</span>
                                    
                                </div>
                           
                           
                           
                            
                          

                            <div className="d-flex">
                                <StarRatings
                                        className="list-vote-icon"
                                        rating={5}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="22px"
                                        starSpacing="2px"
                                />
                            <span style={{fontSize: "1em" , marginTop: 3, marginLeft: 5}}>{Rate5} lượt</span>
                            </div>
                            <div className="d-flex">
                                <StarRatings
                                        className="list-vote-icon"
                                        rating={4}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="22px"
                                        starSpacing="2px"
                                />
                            <span style={{fontSize: "1em" , marginTop: 3, marginLeft: 5}}>{Rate4} lượt</span>
                            </div>
                           
                            <div className="d-flex">
                                <StarRatings
                                        className="list-vote-icon"
                                        rating={3}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="22px"
                                        starSpacing="2px"
                                />
                            <span style={{fontSize: "1em" , marginTop: 3, marginLeft: 5}}>{Rate3} lượt</span>
                            </div>
                            <div className="d-flex">
                                <StarRatings
                                        className="list-vote-icon"
                                        rating={2}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="22px"
                                        starSpacing="2px"
                                />
                                 <span style={{fontSize: "1em" , marginTop: 3, marginLeft: 5}}>{Rate2} lượt</span>
                            </div>
                            <div className="d-flex">
                                <StarRatings
                                        className="list-vote-icon"
                                        rating={1}
                                        starRatedColor="orange"
                                        // changeRating={onStarClick}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="22px"
                                        starSpacing="2px"
                                />
                                 <span style={{fontSize: "1em" , marginTop: 3, marginLeft: 5}}>{Rate1} lượt</span>
                            </div>
                            </div>
                          
                        </div>
                    </div>
                </fieldset>
                            
                </form>
              
                { 
                    reviews.length > 0 ? 
                    reviews.map((item, index) => (
                        <div className="media d-flex">
                        <div className="media-body">
                        <h4 className="media-heading">{item.user.fullname}</h4>
                        <p className="list-review mt-2">
                            <StarRatings
                                    className="list-vote-icon"
                                    rating={item.rate}
                                    starRatedColor="orange"
                                    // changeRating={onStarClick}
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="30px"
                                    starSpacing="2px"
                            />
                        </p>

                        <p className="content-review">{item.content}</p>
                        <div style={{marginBottom: 15}}>
                            {
                                item.path !== null && (
                                    <img src={`https://localhost:7258/images/reviews/${item.path}`} alt="" style={{width: 100, height: 100}}/>
                                )
                            }
                        </div>
                        <ul className="list-unstyled media-detail pull-left">
                            <li className="d-block">
                            <i className="fa fa-calendar" />
                                {format(new Date(item?.dateReview || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                    ))
                    
                    : <p style={{fontSize: "2em"}}>Không có đánh giá nào</p>
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewDisplay;
