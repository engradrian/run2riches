import Banner from "../../images/wenti_bg1@3x.webp"
import Profile1 from "../../images/wenti_tx1@3x.webp"
import Profile2 from "../../images/wenti_tx5@3x.webp"
import Profile3 from "../../images/wenti_tx2@3x.webp"
import Profile4 from "../../images/wenti_tx4@3x.webp"
import Profile5 from "../../images/wenti_tx6@3x.webp"
import Profile6 from "../../images/wenti_tx3@3x.webp"
import Profile7 from "../../images/wenti_tx7@3x.webp" 
import Run2RichesLogo from "../../images/wenti_logo@3x.webp"

import AppDescription from "./AppDescription"
import Footer from "./Footer"

import "../../styles/CâuHỏiThườngGặp.css"

function CâuHỏiThườngGặp() {
    return (
        <div>
            <div className="initial">
                <div className="initialBanner">
                    <img className="initialBannerBG" src={Banner} alt="Banner" />
                    <div className="initialBannerContents">
                        <div className="IBCTop"><img src={Run2RichesLogo} alt="Run2Riches Logo" />Run2Riches</div>
                        <div className="IBCBottom">Run2Riches - Lần đầu ra mắt </div>
                    </div>
                </div>
                <div className="initialSecondSection">
                    <div className="secondSectionTitle">
                        Các câu hỏi thường gặp
                    </div>
                    <div className="instructions">
                        <div className="instruction">
                            <div className="instructionTitle">
                                Làm thế nào sử dụng Run2Riches?
                            </div>
                            <div className="instructionDescription">
                                Đầu tiên, bạn cần sở hữu một đôi giày và thực hiện thử thách đi bộ đếm số bước chân để nhận thưởng. Để đảm bảo mỗi tải khoản là người dùng thực và duy trì cộng đồng chất lượng tốt, trước tiên bạn cần thực hiện xác minh tên thật. Sau khi hoàn tất xác minh, Run2Riches sẽ tặng bạn đôi giày đầu tiên MIỄN PHÍ. Hoàn thành đi bộ 800 bước mỗi ngày, bạn nhận ngay 5 WCoin. Click vào mục "Nhận thưởng" để không bỏ phí phần thưởng.
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Làm cách nào để rút số tiền tôi kiếm được trên Run2Riches?
                            </div>
                            <div className="instructionDescription">
                                WCoin kiếm được nhờ hoàn thành nhiệm vụ đi bộ bạn có thể quy đổi thành VND và rút về tài khoản ngân hàng dễ dàng.<br />
                                Số tiền tối thiểu để rút từ 50.000 VND<br />
                                Bước 1: Vào mục “ Sàn giao dịch “.<br />
                                Bước 2: Nhấn vào “ Rút tiền “.<br />
                                Bước 3: Chọn ngân hàng liên kết.<br />
                                Bước 4: Nhập số tiền và điền đầy đủ thông tin cá nhân.<br />
                                Bước 5: Xác nhận và thực hiện “ Quét Face ID “.<br />
                                Lưu ý: Giao dịch dự kiến sẽ hoàn thành trong khoảng thời gian từ 3 đến 5 phút và được hỗ trợ giao dịch 24/7.<br />
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Có thể sử dụng Run2Riches trên máy tính không?
                            </div>
                            <div className="instructionDescription">
                                Xin lưu ý rằng ứng dụng này được thiết kế dành riêng cho điện thoại di động và không thể sử dụng trên máy tính. Nếu bạn muốn sử dụng ứng dụng để theo dõi dữ liệu tập thể dục và sức khỏe, vui lòng đảm bảo rằng bạn đã cài đặt ứng dụng trên điện thoại di động cá nhân. Nếu bạn cần một ứng dụng tương tự trên máy tính, bạn có thể thử tìm kiếm các các phần mềm có sẵn khác và đảm bảo chúng tương thích với hệ điều hành máy tính bạn đang sử dụng.
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Giày Run2Riches có bao nhiêu cấp độ?
                            </div>
                            <div className="instructionDescription">
                                Hiện tại có 6 loại giày, tương đương 6 cấp độ (LV0 - LV5), đôi giày đầu tiên được tặng MIỄN PHÍ, những đôi giày còn lại tương đương với các cấp độ khác nhau, bạn có thể sử dụng WCoin để mua hoặc nhận miễn phí bằng cách "Điểm danh nhận thưởng".
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                "Cửa hàng" trong Run2Riches có gì?
                            </div>
                            <div className="instructionDescription">
                                Trong "Cửa hàng" đầy hứa hẹn, WCoin là chìa khóa cho chương trình quay số trúng thưởng, mang về những phần thưởng hấp dẫn. Hãy đặt cược ngay và chuẩn bị trải nghiệm những kết quả thú vị đang chờ đón!
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Sẽ có phần thưởng gì khi giới thiệu bạn bè?
                            </div>
                            <div className="instructionDescription">
                                Giới thiệu bạn bè sử dụng APP. Sau khi bạn của bạn đăng ký tài khoản và xác thực tên thật bằng mã giới thiệu của bạn và trở thành cấp dưới trực tiếp, giá trị đóng góp của bạn sẽ tăng lên. Càng nhiều cấp dưới, giá trị đóng góp càng nhiều và cấp độ của bạn cũng sẽ càng cao. Nếu cấp dưới của bạn có giày, hoạt động của bạn cũng sẽ tăng lên, do đó thu nhập hàng ngày sẽ cao hơn và phí giao dịch cũng giảm đi.
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Trong Run2Riches, giao dịch được đảm bảo an toàn không ?
                            </div>
                            <div className="instructionDescription">
                                Run2Riches đã thực hiện nhiều biện pháp khác nhau để đảm bảo an toàn cho các giao dịch. Nền tảng sử dụng công nghệ mã hóa để bảo vệ thông tin cá nhân và dữ liệu giao dịch của người dùng, đồng thời sử dụng các phương pháp xác thực đa yếu tố để đảm bảo rằng chỉ những người được người dùng ủy quyền mới có thể truy cập vào tài khoản và ví tiền của bạn. Ngoài ra, ứng dụng cũng sẽ xét duyệt thông tin nhận dạng người dùng gửi để đảm bảo rằng chỉ người dùng thực mới có thể tham gia giao dịch. Tuy nhiên, bất kỳ giao dịch trực tuyến nào cũng có những rủi ro nhất định, vì vậy người dùng nên thận trọng khi sử dụng nền tảng để giao dịch và không tiết lộ thông tin tài khoản và mật khẩu tùy ý.
                            </div>
                        </div>
                    </div>
                    <div className="thirdSection">
                        <div className="thirdSectionTitle">Phản hồi từ khách hàng</div>
                        <div className="allTestimonials">
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Đi bộ là một hoạt động mà chúng ta thực hiện hàng ngày, tùy thuộc vào thói quen sinh hoạt của mỗi người. Tôi tìm thấy sự thú vị và hấp dẫn từ Run2Riches. Điều tôi muốn nói là, chúng ta đều muốn đạt được số bước tối đa mỗi ngày, đúng  không? Điều này không chỉ là một cách đơn giản để kiếm thêm thu nhập, mà còn giúp tăng cường hoạt động thể chất. Nếu bạn thường xuyên đi bộ hàng ngày, hãy tải ngay Run2Riches
                                </div>
                                <div className="user">
                                    <img src={Profile1} alt="Profile" />daihung253
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Tôi đã sử dụng Run2Riches trong một khoảng thời gian khá dài và phải nói rằng nó đã vượt quá mong đợi của tôi. Một trong những điều tuyệt vời nhất về ứng dụng này là cho bạn động lực để hoạt động nhiều hơn. Từ khi dùng APP, tôi chăm chỉ đi bộ hàng ngày và đạt được mục tiêu về sức khỏe. APP cũng có những thử thách và cuộc thi khá hấp dẫn.
                                </div>
                                <div className="user">
                                    <img src={Profile2} alt="Profile" />Võ Huyền Trang
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    Nói chung, tôi đề xuất ứng dụng này cho những ai muốn tăng thêm thu nhập. Nó mang đến cho bạn cơ hội kiếm tiền đa dạng, hệ thống thanh toán bảo mật, dịch vụ chăm sóc khách hàng nhanh chóng. Hãy trải nghiệm ngay và bạn sẽ không thất vọng!
                                </div>
                                <div className="user">
                                    <img src={Profile3} alt="Profile" />nguyenxiu1309
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    Tôi đã sử dụng Run2Riches trong một thời gian và phải nói rằng đó là một trải nghiệm tuyệt vời. Không chỉ dễ dàng sử dụng, nó còn giúp tôi có thêm nguồn thu nhập dễ dàng ngay tại nhà.
                                </div>
                                <div className="user">
                                    <img src={Profile4} alt="Profile" />Quê Hà Nội
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    Ý tưởng Run2Riches khá hay ho và thực tế. Khích lệ người dùng đi bộ nhiều hơn bằng cách biến những bước chân thành phần thưởng thực tế. Mỗi bước đi của tôi đều được tích lũy điểm, sau đó tôi có thể đổi điểm này để nhận thưởng. Điều này không chỉ giúp tôi cải thiện sức khỏe mà còn có thêm động lực thú vị.
                                </div>
                                <div className="user">
                                    <img src={Profile5} alt="Profile" />longhoang7282
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Run2Riches là một ứng dụng không thể thiếu cho những người muốn duy trì vóc dáng, tìm kiếm động lực và nhận được phần thưởng có giá trị. Với giao diện thân thiện với người dùng, các lựa chọn phần thưởng đa dạng, thử thách hấp dẫn và cộng đồng hỗ trợ nhiệt tình làm cho ứng dụng trở thành lựa chọn xuất sắc. Hãy bắt đầu đi bộ để hướng tới một lối sống khỏe mạnh và đạt được lợi ích với Run2Riches.
                                </div>
                                <div className="user">
                                    <img src={Profile6} alt="Profile" />phongvan
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Đội ngũ chăm sóc khách hàng xuất sắc. Phản hồi nhanh chóng, câu trả lời hữu ích. Thật đáng ngạc nhiên khi có một ứng dụng quan tâm đến người dùng và hỗ trợ tuyệt vời đến như vậy. 
                                </div>
                                <div className="user">
                                    <img src={Profile7} alt="Profile" />truclinh23082017
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppDescription />
            <Footer />
        </div>
    )
}

export default CâuHỏiThườngGặp