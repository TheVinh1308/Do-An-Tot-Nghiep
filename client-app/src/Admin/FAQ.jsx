import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FAQ = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <Breadcrumb />
                </div>{/* End Page Title */}
                <section className="section faq">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card basic">
                                <div className="card-body">
                                    <h5 className="card-title">NỘI DUNG CỬA HÀNG</h5>
                                    <div>
                                        <h6>1. Thời gian hoạt động</h6>
                                        <p>Cửa hàng hoạt động từ 8h đến 22h hàng ngày. Tết và các ngày khác sẽ có thông báo riêng.</p>
                                    </div>
                                    <div className="pt-2">
                                        <h6>2. Reiciendis dolores repudiandae?</h6>
                                        <p>Id ipsam non ut. Placeat doloremque deserunt quia tenetur inventore laboriosam dolores totam odio. Aperiam incidunt et. Totam ut quos sunt atque modi molestiae dolorem.</p>
                                    </div>
                                    <div className="pt-2">
                                        <h6>3. Qui qui reprehenderit ut est illo numquam voluptatem?</h6>
                                        <p>Enim inventore in consequuntur ipsam voluptatem consequatur beatae. Nostrum consequuntur voluptates et blanditiis.</p>
                                    </div>
                                </div>
                            </div>
                            {/* F.A.Q Group 1 */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">NHỮNG ĐIỀU CẦN LƯU Ý KHI TRẢ GÓP</h5>
                                    <div className="accordion accordion-flush" id="faq-group-1">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsOne-1" type="button" data-bs-toggle="collapse">
                                                    1. Điều kiện và giấy tờ gốc cần có
                                                </button>
                                            </h2>
                                            <div id="faqsOne-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Tuổi từ 18 – 60. Riêng khách hàng thành viên ACS thì đến 65 tuổi (tính theo ngày tháng năm sinh trên chứng minh nhân dân/Căn cước công dân)
                                                        </li>
                                                        <li>
                                                            Chứng từ đơn giản chỉ cần có chứng minh nhân dân (15 năm tính từ ngày cấp)/ căn cước công dân còn thời hạn sử dụng.
                                                        </li>
                                                        <li>
                                                            Công ty tài chính chỉ kiểm tra xong và gửi lại không giữ bất cứ giấy tờ gì của khách hàng.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsOne-2" type="button" data-bs-toggle="collapse">
                                                    2. “Bí kíp” để duyệt trả góp tớI 90%
                                                </button>
                                            </h2>
                                            <div id="faqsOne-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Nếu bạn đang còn góp một hợp đồng trước đó với công ty tài chính thì nên góp hết hoặc thanh lý xong mới làm hồ sơ góp mới.
                                                        </li>
                                                        <li>
                                                            Số tiền góp mỗi tháng nên bằng một nửa số tiền bạn còn dư sau khi chi tiêu. VD: Thu nhập của bạn là 8tr, bạn chi tiêu bình quân 5tr còn dư 3tr thì tốt nhất bạn nên góp 1.5tr/tháng.
                                                        </li>
                                                        <li>
                                                            Số điện thoại người tham chiếu nên là người thân của mình như vợ/chồng, anh/chị/em trong gia đình, bạn thân và phải biết việc mình chuẩn bị mua trả góp.
                                                        </li>
                                                        <li>
                                                            Thông tin bạn cung cấp cho nhân viên tài chính càng chi tiết và chính xác thì hồ sơ của bạn có tỷ lệ duyệt càng cao.
                                                        </li>
                                                        <li>
                                                            Lịch sử vay tiền mặt hoặc trả góp tốt (trả hết, không đóng tiền quá trễ mỗi tháng) cũng là điều kiện để bạn được duyệt cho những lần kế tiếp.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsOne-3" type="button" data-bs-toggle="collapse">
                                                    3. Lợi ích khi mua trả góp tại ShopePhone
                                                </button>
                                            </h2>
                                            <div id="faqsOne-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Trả tiền góp hàng tháng tiện lợi, nhanh chóng tại website và hơn 3.000 siêu thị TGDĐ/ĐMX trên toàn quốc.
                                                        </li>
                                                        <li>
                                                            Luôn có sản phẩm trả góp lãi suất 0% hoặc nhiều ưu đãi khác.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsOne-4" type="button" data-bs-toggle="collapse">
                                                    4. Quy định về trả góp hàng hóa
                                                </button>
                                            </h2>
                                            <div id="faqsOne-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Quý Khách Hàng có nhu cầu mua hàng trả góp, trả chậm có thể tự do lựa chọn và sử dụng dịch vụ của bất kỳ bên cung cấp dịch vụ, sản phẩm (“Đối Tác”) trả góp, trả chậm hoặc các dịch vụ, sản phẩm tài chính tương tự (“Dịch Vụ”).
                                                        </li>
                                                        <li>
                                                            Thế Giới Di Động (TGDĐ)/Điện máy XANH (ĐMX) là bên cung cấp dịch vụ nhập liệu cho Đối Tác. TGDĐ/ĐMX hỗ trợ Đối Tác thực hiện một số công việc như thu thập thông tin, nhập liệu và hướng dẫn Khách Hàng ký hợp đồng với Đối Tác theo mẫu quy định tại Mục 3.
                                                        </li>
                                                        <li>
                                                            TGDĐ/ĐMX được ủy quyền cung cấp hóa đơn và chi tiết sản phẩm bán của khách hàng cho đối tác trả góp.
                                                        </li>
                                                        <li>
                                                            Khách Hàng đồng ý để cung cấp thông tin cá nhân cho TGDĐ/ĐMX để sử dụng Dịch Vụ bằng việc xác nhận mã OTP như sau: sau khi hợp đồng đã ký giữa Khách Hàng và Công ty Tài Chính thanh lý
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsOne-5" type="button" data-bs-toggle="collapse">
                                                    5. Các câu hỏi thường gặp
                                                </button>
                                            </h2>
                                            <div id="faqsOne-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    <ol>
                                                        <li>
                                                            <strong>Tôi có được mua trả góp tiếp khi đang trả góp hàng tháng sản phẩm khác không?</strong>
                                                            <p>
                                                                Yêu cầu mua trả góp của anh/chị sẽ được công ty tài chính xem xét tùy vào tình trạng hồ sơ. Tuy nhiên, để hồ sơ dễ dàng được công ty tài chính duyệt, anh/chị nên góp hết hợp đồng cũ rồi mới làm tiếp hợp đồng khác.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <strong> Khi mua trả góp tôi có được hưởng đầy đủ khuyến mãi như mua bình thường không?</strong>
                                                            <p>
                                                                Anh/chị sẽ hưởng khuyến mãi như bình thường khi mua trả góp có lãi suất.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <strong> Tôi có thể thanh toán tiền trả góp bằng những cách nào?</strong>
                                                            <p>
                                                                Khách hàng có thể đến cửa hàng TGDĐ, ĐMX, An Khang, Ava Sport, Ava Kids, Bách Hóa Xanh để thu hộ tiền trả góp hoặc thanh toán trực tuyến tại
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <strong>Tôi đang công tác tại Tp Hồ Chí Minh / Hà Nội thì có thể dùng hộ khẩu ở quê để mua trả góp được không?</strong>
                                                            <p>
                                                                Anh/chị có thể dùng hộ khẩu ở quê để mua trả góp tại khu vực Tp Hồ Chí Minh / Hà Nội.
                                                            </p>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End F.A.Q Group 1 */}
                        </div>
                        <div className="col-lg-6">
                            {/* F.A.Q Group 2 */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">CHÍNH SÁCH XỬ LÝ DỮ LIỆU CÁ NHÂN</h5>
                                    <div className="accordion accordion-flush" id="faq-group-2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse">
                                                    1. Phạm vi thông tin thu thập
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Để mua hàng tại Hệ Thống (tạo đơn hàng, để lại bình luận đánh giá, liên hệ với chúng tôi, v.v), Quý Khách Hàng có thể sẽ được yêu cầu để lại thông tin cho chúng tôi, bao gồm: Email, Họ tên, Số điện thoại, địa chỉ và dữ liệu cá nhân khác cần thiết tại từng thời điểm (“Dữ liệu cá nhân”). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp, Thế Giới Di Động không chịu trách nhiệm trong trường hợp thông tin Khách Hàng cung cấp là không chính xác.
                                                        </li>
                                                        <li>
                                                            Trong trường hợp Quý Khách Hàng giao dịch tại website/ứng dụng của Thế Giới Di Động, Hệ Thống cũng có thể thu thập thông tin về số lần ghé thăm, bao gồm số trang Quý Khách Hàng xem, số links (liên kết) mà Khách Hàng click và những thông tin khác liên quan đến việc kết nối đến site Thế Giới Di Động. Chúng tôi cũng thu thập các thông tin mà trình duyệt Web (Browser) mà Khách Hàng sử dụng mỗi khi truy cập vào Hệ Thống, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất đến.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse">
                                                    2. Mục đích sử dụng Dữ liệu cá nhân: Các Dữ liệu cá nhân mà Hệ Thống thu thập của Khách Hàng sẽ được sử dụng trong phạm vi
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Xử lý đơn hàng: gọi điện/tin nhắn xác nhận việc đặt hàng, thông báo về trạng thái đơn hàng & thời gian giao hàng, xác nhận việc hủy đơn hàng (nếu có).
                                                        </li>
                                                        <li>
                                                            Gửi thư ngỏ/thư cảm ơn, giới thiệu sản phẩm mới, dịch vụ mới hoặc các chương trình khuyến mại của Thế Giới Di Động.
                                                        </li>
                                                        <li>
                                                            Gửi thông tin về bảo hành sản phẩm.
                                                        </li>
                                                        <li>
                                                            Giải quyết khiếu nại.
                                                        </li>
                                                        <li>
                                                            Thực hiện các chương trình khuyến mại của Thế Giới Di Động, bao gồm: chương trình khuyến mại do Thế Giới Di Động tự thực hiện hoặc phối hợp với bên thứ ba thực hiện; thông tin về việc trao thưởng cho Khách Hàng khi trúng thưởng.
                                                        </li>
                                                        <li>
                                                            Gửi thông tin cho công ty tài chính để tiếp nhận, thẩm định & duyệt hồ sơ trả góp theo các quy định tại.
                                                        </li>
                                                        <li>
                                                            Các khảo sát để chăm sóc Khách Hàng tốt hơn.
                                                        </li>
                                                        <li>
                                                            Xác minh danh tính và đảm bảo tính bảo mật Dữ liệu cá nhân của Khách Hàng.
                                                        </li>
                                                        <li>
                                                            Các trường hợp có sự yêu cầu của cơ quan nhà nước có thẩm quyền, hoặc bắt buộc phải cung cấp theo quy định của pháp luật.
                                                        </li>
                                                        <li>
                                                            Mục đích hợp lý khác nhằm phục vụ yêu cầu của Khách Hàng.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse">
                                                    3. Thời gian lưu trữ Dữ liệu cá nhân
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Dữ liệu sẽ được lưu trữ cho đến khi có yêu cầu xóa từ Khách Hàng, trừ trường hợp pháp luật không cho phép xóa. Còn lại trong mọi trường hợp Dữ liệu cá nhân Khách Hàng sẽ được bảo mật, lưu trữ trên máy chủ của Thế Giới Di Động.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse">
                                                    4. Các bên có thể tiếp cận Dữ liệu cá nhân của Quý Khách Hàng
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Các đối tác giao hàng, viễn thông, cung cấp dịch vụ tin nhắn qua internet, đối tác là công ty tài chính, doanh nghiệp bảo hiểm, thương nhân kinh doanh dịch vụ khuyến mại, thương nhân phối hợp với Thế Giới Di Động thực hiện chương trình khuyến mại, đối tác khác mà Thế Giới Di Động hợp tác tại từng thời điểm nhằm thực hiện các công việc theo phạm vi nêu tại mục 2;
                                                        </li>
                                                        <li>
                                                            Công ty liên kết của Thế Giới Di Động (công ty mẹ, công ty con và/hoặc các công ty cùng chịu chung sự kiểm soát, chi phối với Thế Giới Di Động);
                                                        </li>
                                                        <li>
                                                            Luật sư, cố vấn, đơn vị kiểm toán của Thế Giới Di Động;
                                                        </li>
                                                        <li>
                                                            Bên xử lý Dữ liệu cá nhân cho Thế Giới Di Động theo Hợp đồng cung cấp dịch vụ tại từng thời điểm;
                                                        </li>
                                                        <li>
                                                            Các bên thứ ba khác nếu được sự đồng ý của Quý Khách Hàng tại từng thời điểm.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse">
                                                    5. Cách thức xử lý Dữ liệu cá nhân
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Dữ liệu cá nhân của Khách Hàng được thu thập thông qua hoạt động của Khách Hàng trên Hệ Thống sẽ được lưu trữ tại hệ thống của bên thứ ba và bảo đảm an toàn dưới sự quản lý của Thế Giới Di Động.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse">
                                                    6. Quyền của Khách Hàng đối với Dữ liệu cá nhân: Khách Hàng có đầy đủ các quyền theo quy định của pháp luật đối với Dữ liệu cá nhân của mình
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Đăng nhập vào trang quản lý thông tin Khách Hàng tại website/ứng dụng của Thế Giới Di Động, tự chỉnh sửa lại hoặc xóa thông tin của Khách Hàng.
                                                        </li>
                                                        <li>
                                                            Gọi điện thoại đến tổng đài 1800 1063: Thế Giới Di Động sẽ hỗ trợ điều chỉnh thông tin hoặc tiến hành xóa thông tin nếu có cơ sở xác định Dữ liệu cá nhân mà Khách Hàng cung cấp hoặc yêu cầu chỉnh sửa/xóa là chính xác.
                                                        </li>
                                                        <li>
                                                            Để lại bình luận hoặc gửi góp ý trực tiếp từ Hệ Thống, Thế Giới Di Động kiểm tra thông tin và liên lạc lại với Quý Khách Hàng để xác nhận thông tin và chỉnh sửa/xóa thông tin Khách Hàng khi các thông tin đã được xác minh đầy đủ và chính xác.
                                                        </li>
                                                        <li>
                                                            Ngoài việc thực hiện các quyền đối với Dữ liệu cá nhân đã được thiết lập sẵn tại website/ứng dụng như nêu tại mục 6.1, đối với các quyền khác, Khách Hàng có thể gửi thư điện tử (email) có đính kèm văn bản yêu cầu để nêu rõ cụ thể yêu cầu của Khách Hàng. Sau khi nhận được yêu cầu của Khách Hàng, Thế Giới Di Động thông báo cho Khách Hàng cân nhắc trước các hạn chế, hậu quả, thiệt hại có thể xảy ra nếu thực hiện theo các yêu cầu của Khách Hàng trước khi thực hiện yêu cầu đó.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse">
                                                    7. Hậu quả, thiệt hại không mong muốn có khả năng xảy ra khi xử lý Dữ liệu cá nhân
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Hậu quả: Dữ liệu cá nhân bị tiết lộ cho các chủ thể khác mà chưa được sự đồng ý của Khách Hàng; hoặc bên thứ ba có thể tiếp cận Dữ liệu cá nhân và sử dụng vào mục đích khác mà chưa được sự đồng ý của Khách Hàng.
                                                        </li>
                                                        <li>
                                                            Thiệt hại không mong muốn có khả năng xảy ra: mất tài sản; hoặc danh dự, uy tín của Khách hàng bị xâm phạm.
                                                        </li>
                                                        <li>
                                                            Hậu quả, thiệt hại khác mà Thế Giới Di Động không thể lường trước được do các nguyên nhân khách quan.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End F.A.Q Group 2 */}
                            {/* F.A.Q Group 3 */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">GIAO HÀNG</h5>
                                    <div className="accordion accordion-flush" id="faq-group-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsThree-1" type="button" data-bs-toggle="collapse">
                                                    1. Phạm vi áp
                                                </button>
                                            </h2>
                                            <div id="faqsThree-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Những khu vực tỉnh thành có hệ thống siêu thị Thegioididong.com
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsThree-2" type="button" data-bs-toggle="collapse">
                                                    2. Thời gian nhận hàng
                                                </button>
                                            </h2>
                                            <div id="faqsThree-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            nhận giao nhanh trong ngày với khoảng cách từ các siêu thị có hàng đến điểm giao là 20 km. Khoảng cách lớn hơn nhân viên của chúng tôi sẽ tư vấn cách thức giao hàng thuận tiện nhất cho khách hàng.
                                                        </li>
                                                        <li>
                                                            Riêng đối với đơn hàng giá rẻ online, sản phẩm sẽ được giao sớm nhất là 1 ngày sau khi đặt.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsThree-3" type="button" data-bs-toggle="collapse">
                                                    3. Phí giao hàng
                                                </button>
                                            </h2>
                                            <div id="faqsThree-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Đối với giao siêu nhanh sẽ có cộng thêm phụ phí giao
                                                        </li>
                                                        <li>
                                                            Khoảng cách tính phí giao hàng: được tính từ kho xuất hàng đến nhà khách hàng.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-target="#faqsThree-4" type="button" data-bs-toggle="collapse">
                                                    4. Đem theo nhiểu sản phẩm. mẫu mã khác để khách hàng lựa tại nhà
                                                </button>
                                            </h2>
                                            <div id="faqsThree-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            Nếu có sự băn khoăn trong việc lựa chọn sản phẩm, hãy để nhân viên giao hàng của chúng tôi sẽ đem hơn 2 sản phẩm (đem thêm mẫu máy khác, đem thêm màu khác) theo yêu cầu của bạn đến tận nơi tư vấn.
                                                        </li>
                                                        <li>
                                                            Kỹ thuật viên của chúng tôi sẽ giúp Quý khách khám phá kỹ hơn những tính năng ưu việt của từng sản phầm để Quý khách có được lựa chọn tốt nhất.
                                                        </li>
                                                        <li>
                                                            Quý khách chỉ thanh toán khi thật sự hài lòng với sản phẩm và chất lượng dịch vụ của chúng tôi. Chúng tôi sẽ không tính bất kỳ khoản phí nào cho đến khi Quý khách hoàn toàn đồng ý.
                                                        </li>
                                                        <li>
                                                            Khi Quý khách hoàn toàn hài lòng với sự lựa chọn của mình, Quý khách có thể thanh toán ngay bằng các thẻ quốc tế, nội địa mà không cần phải ra ngân hàng rút tiền mặt trước.
                                                        </li>
                                                        <li>
                                                            Hãy gọi cho chúng tôi bất cứ lúc nào Quý khách cần được phục vụ với chất lượng 5 sao hoàn hảo.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End F.A.Q Group 3 */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default FAQ;