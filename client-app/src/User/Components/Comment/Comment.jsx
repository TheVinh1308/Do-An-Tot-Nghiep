import { useEffect, useState } from "react";
import "./Comment.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { format } from "date-fns";
const Commnent = ({ selectedPhone, isAuthenticated, userId, userName }) => {
    const navigate = useNavigate();
    const [comments, setCommnents] = useState([{ user: {} }]);
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

    const notifySuccess = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        transition: Bounce,
    });

    const handleSubmit = async (e) => {
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

            try {
                // Post the new comment
                await axios.post(`https://localhost:7258/api/Comments`, newComment);
                notifySuccess("Thành công!");
                fetchComments();

                // thông báo cho admin
                const phoneResponse = await axios.get(`https://localhost:7258/api/Phones/GetFisrtPhoneByModPhone/${selectedPhone.modPhone.id}`);
                const phoneData = phoneResponse.data;

                // Log the phone data for debugging
                console.log('Phone Data:', phoneData);

                // Prepare notification data
                const formNotificationAdmin = new FormData();
                formNotificationAdmin.append("itemid", phoneData?.id);
                formNotificationAdmin.append("content", `${userName} đã thêm một bình luận: "${newComment.content}"`);
                formNotificationAdmin.append("time", new Date().toISOString());
                formNotificationAdmin.append("url", `http://localhost:3000/${phoneData?.modPhone?.brand.name}/${phoneData?.id}`);
                formNotificationAdmin.append("status", true);

                // Log the form data for debugging
                for (let [key, value] of formNotificationAdmin.entries()) {
                    console.log(key, value);
                }

                // Post the notification
                await axios.post(`https://localhost:7258/api/NotificationAdmin`, formNotificationAdmin);
                alert("Thêm thông báo thành công");
            } catch (error) {
                console.error("Error posting comment or notification:", error);
                alert(`Request failed: ${error.message}`);
            }
        } else {
            navigate("/login");
        }
    };

    const [setNO, setsetNO] = useState({});
    const [UserOfParent, setUserOfParent] = useState({});
    useEffect(() => {
        console.log(`UserOfParent`, UserOfParent.userId);
    }, [UserOfParent]);

    const handleReply = async (id) => {
        const newComment = {
            ...comment,
            modPhoneId: selectedPhone.modPhone.id,
            userId: userId,
            parentCommentId: id,
            status: true
        };

        try {
            await axios.post(`https://localhost:7258/api/Comments`, newComment);

            setShowTextareaIndex(null); // Reset showTextareaIndex sau khi trả lời
            setReplyTextareaState({});
            fetchComments();

            const parentCommentResponse = await axios.get(`https://localhost:7258/api/Comments/${id}`);
            const userOfParent = parentCommentResponse.data;
            setUserOfParent(userOfParent);

            const phoneResponse = await axios.get(`https://localhost:7258/api/Phones/GetFisrtPhoneByModPhone/${selectedPhone.modPhone.id}`);
            const phoneData = phoneResponse.data;
            setsetNO(phoneData);

            const formNotification = new FormData();
            formNotification.append("userId", userOfParent.userId);
            formNotification.append("time", new Date().toISOString());
            formNotification.append('phoneId', selectedPhone.modPhone.id);
            formNotification.append("title", `${userName} đã trả lời bình luận của bạn`); 
            formNotification.append("url", `http://localhost:3000/${phoneData.modPhone?.brand.name}/${phoneData.id}`);

            console.log(`formNotification`, userOfParent.userId);

            await axios.post(`https://localhost:7258/api/Notification`, formNotification);

        } catch (error) {
            console.error("Error during reply handling:", error);
            notifyError();
        }
    };


    return (
        <>
            <section className="content-item" id="comments">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <form>
                                <h3 class="pull-left">Thêm bình luận của bạn</h3>

                                <fieldset>
                                    <div class="row">
                                        <div class="col-sm-3 col-lg-2 hidden-xs">
                                            <Avatar className="img-responsive" name={userName} />
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

                                            <a className="pull-left" href=""><Avatar className="media-object" name={item.user.fullname} /></a>
                                            <div className="media-body">
                                                <h4 className="media-heading">{item.user.fullname}</h4>
                                                <p style={{fontSize: "18px"}}>{item.content}</p>
                                                <ul className="list-unstyled media-detail pull-left">
                                                    <li className="d-block"><i className="fa fa-calendar" />{format(new Date(item?.postDate || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}</li>
                                                </ul>
                                                <ul className="list-unstyled media-detail pull-right mb-3">
                                                    <li className="d-block"><a href onClick={() => showReply(index)}>Trả lời</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {showTextareaIndex === index && (
                                            <>
                                                <fieldset className="reply">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-lg-2 hidden-xs">
                                                            <Avatar className="img-responsive" name={userName} />
                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                                            <textarea class="form-control" id="message" placeholder="Your message" name="content" required="" onChange={handleContent}></textarea>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-normal pull-right reply-sub" onClick={() => handleReply(item.id)}>Trả lời</button>
                                                    <button className="btn btn-normal pull-right bg-danger" onClick={() => setShowTextareaIndex(null)}>Đóng</button>
                                                </fieldset>
                                            </>
                                        )}

                                        {
                                            comments.filter((reply) => reply.parentCommentId === item.id)
                                                .map((reply, replyIndex) => (
                                                    <div className="media comment-reply" key={replyIndex}>
                                                        <a className="pull-left" href=""><Avatar className="media-object" name={reply.user.fullname} /></a>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">{reply.user.fullname}</h4>
                                                            <p style={{fontSize: "18px"}}> {reply.content}</p>
                                                            <ul className="list-unstyled media-detail pull-left">
                                                                <li className="d-block"><i className="fa fa-calendar" />{format(new Date(reply?.postDate || '2024-07-02T12:33:30.195'), 'H:mm:ss - d/MM/yyyy')}</li>
                                                            </ul>
                                                            <ul className="list-unstyled media-detail pull-right mb-3">
                                                                <li className="d-block"><a href onClick={() => setReplyTextareaState(prevState => ({
                                                                    ...prevState,
                                                                    [index]: replyIndex,
                                                                }))}>Trả lời</a></li>
                                                            </ul>
                                                        </div>
                                                        {replyTextareaState[index] === replyIndex && (
                                                            <fieldset className="reply-reply">
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-lg-2 hidden-xs">
                                                                        <Avatar className="img-responsive" name={userName} />
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                                                        <textarea class="form-control" id="message" placeholder="Your message" name="content" required="" onChange={handleContent}></textarea>
                                                                    </div>
                                                                </div>
                                                                <button type="submit" className="btn btn-normal pull-right reply-sub" onClick={() => handleReply(item.id)}>Trả lời</button>
                                                                <button className="btn btn-normal pull-right bg-danger" onClick={() => setReplyTextareaState({})}>Đóng</button>
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