import { useEffect, useState } from "react";
import "./Comment.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';
const Commnent = ({selectedPhone,isAuthenticated,userId,userName}) => {
    const navigate = useNavigate();
    const [comments, setCommnents] = useState([{user: {}}]);
    const [comment, setComment] = useState({});

    const [showTextareaIndex, setShowTextareaIndex] = useState(null);
    const [replyTextareaState, setReplyTextareaState] = useState({});

    const fetchComments = () => {
        axios.get(`https://localhost:7258/api/Comments/GetCommentByModPhone/${selectedPhone.modPhone.id}`)
            .then((res) => setCommnents(res.data))
            .catch((err) => {
                console.log("Lỗi lấy comment: ", err);
            });
    };

    useEffect(() => {
        fetchComments();
    }, [selectedPhone.modPhone.id]);

    const showReply = (index) => {
    // Chỉ set showTextareaIndex nếu không phải là reply
    if (index !== showTextareaIndex) {
      setShowTextareaIndex(index);
        }
    };
  
    const handleContent = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setComment((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
          if (isAuthenticated) {
            // Tạo một đối tượng mới chứa tất cả các giá trị cần thiết
            const newComment = {
              ...comment,
              modPhoneId: selectedPhone.modPhone.id,
              userId: userId,
              parentCommentId: null,
              status: true
            };
    
            // Cập nhật state một lần duy nhất
            setComment(newComment);
    
            console.log(newComment);
    
            axios
              .post(`https://localhost:7258/api/Comments`, newComment)
              .then(() => {
                alert("Đã thêm bình luận!");
                fetchComments();
              })
              .catch((err)=> {
                console.log("Lỗi: ", err);
              })
        } else {
          navigate("/login");
        }
      };

    const handleReply = (id) => {
        const newComment = {
            ...comment,
            modPhoneId: selectedPhone.modPhone.id,
            userId: userId,
            parentCommentId: id,
            status: true
          };
    
        axios.post(`https://localhost:7258/api/Comments`, newComment)
        .then(() => {
            alert("đã trả lời")
            setShowTextareaIndex(null); // Reset showTextareaIndex sau khi trả lời
            setReplyTextareaState({});
            fetchComments();
        });
      };
    return ( 
        <>
        <section className="content-item" id="comments">
            <div className="container">   
                <div className="row">
                <div className="col-sm-8">   
                <form>
                	<h3 class="pull-left">New Comment</h3>
                	
                    <fieldset>
                        <div class="row">
                            <div class="col-sm-3 col-lg-2 hidden-xs">
                            	<Avatar className="img-responsive" name={userName}/>
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                <textarea class="form-control" id="message" placeholder="Your message" name="content" required="" onChange={handleContent}></textarea>
                            </div>
                        </div>  	
                    </fieldset>
                    <button type="submit" class="btn btn-normal pull-right btn-success" onClick={handleSubmit}>Submit</button>
                </form>
                        {
                        comments.length > 0 &&
                        comments.filter(item => item.parentCommentId === null).map((item, index) => (
                            <>
                                <div className="media" key={item.id}>
                                   
                                        <a className="pull-left" href=""><Avatar className="media-object" name={item.user.fullname}/></a>
                                        <div className="media-body">
                                            <h4 className="media-heading">{item.user.fullname}</h4>
                                            <p>{item.content}</p>
                                            <ul className="list-unstyled media-detail pull-left">
                                                <li className="d-block"><i className="fa fa-calendar" />{item.postDate}</li>
                                            </ul>
                                            <ul className="list-unstyled media-detail pull-right mb-3">
                                                <li className="d-block"><a href onClick={() => showReply(index)}>Reply</a></li>
                                            </ul>
                                        </div>
                                </div>

                                {showTextareaIndex === index && (
                                    <>
                                        <fieldset className="reply">
                                            <div class="row">
                                                <div class="col-sm-3 col-lg-2 hidden-xs">
                                                    <Avatar className="img-responsive" name={userName}/>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                                    <textarea class="form-control" id="message" placeholder="Your message" name="content" required="" onChange={handleContent}></textarea>
                                                </div>
                                            </div>
                                            <button className="btn btn-normal pull-right bg-danger" onClick={() => setShowTextareaIndex(null)}>Đóng</button>
                                            <button type="submit" className="btn btn-normal pull-right reply-sub" onClick={() => handleReply(item.id)}>Trả lời</button>
                                        </fieldset>
                                    </>
                                )}

                                {
                                    comments.filter((reply) => reply.parentCommentId === item.id)
                                            .map((reply, replyIndex) => (
                                                <div className="media comment-reply" key={replyIndex}>
                                                    <a className="pull-left" href=""><Avatar className="media-object" name={reply.user.fullname}/></a>
                                                    <div className="media-body">
                                                        <h4 className="media-heading">{reply.user.fullname}</h4>
                                                        <p>{reply.content}</p>
                                                        <ul className="list-unstyled media-detail pull-left">
                                                            <li className="d-block"><i className="fa fa-calendar" />{reply.postDate}</li>
                                                        </ul>
                                                        <ul className="list-unstyled media-detail pull-right mb-3">
                                                            <li className="d-block"><a href onClick={() => setReplyTextareaState(prevState => ({
                                                        ...prevState,
                                                        [index]: replyIndex,
                                                    }))}>Reply</a></li>
                                                        </ul>
                                                    </div>
                                                    {replyTextareaState[index] === replyIndex && (
                                                        <fieldset className="reply-reply">
                                                            <div class="row">
                                                                <div class="col-sm-3 col-lg-2 hidden-xs">
                                                                    <Avatar className="img-responsive" name={userName}/>
                                                                </div>
                                                                <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                                                    <textarea class="form-control" id="message" placeholder="Your message" name="content" required="" onChange={handleContent}></textarea>
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-normal pull-right bg-danger" onClick={() => setReplyTextareaState({})}>Đóng</button>
                                                            <button type="submit" className="btn btn-normal pull-right reply-sub" onClick={() => handleReply(item.id)}>Trả lời</button>
                                                        </fieldset>
                              )}
                                                </div>



                                            ))
                                            
                                            
                                        }
                                        
                                        
                                </>
                            ))


                        }

                       
                    </div>
                </div>
            </div>
        </section>


        </>
     );
}
 
export default Commnent;