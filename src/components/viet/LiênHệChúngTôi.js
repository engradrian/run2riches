import EmailIcon from "../../images/lianxi_ico2@3x.webp"
import EmailIcon2 from "../../images/about_ico4@3x.webp"
import FacebookIcon from "../../images/about_ico3@3x.webp"
import ImgBanner from "../../images/about_img1@3x.webp"
import ImgBannerMobile from "../../images/lianxi_img1@3x.webp"
import Map from "../../images/lianxi_img2@3x.webp"
import Person from "../../images/about_img3@3x.webp"
import PhoneIcon from "../../images/lianxi_ico1@3x.webp"
import TelegramIcon from "../../images/about_ico2@3x.webp"
import ZaloIcon from "../../images/zalo-circular.webp"

import AppDescription from "./AppDescription"
import Footer from "./Footer"

import "../../styles/LiênHệChúngTôi.css"


function LiênHệChúngTôi() {
    return(
        <div class="introduction">
            <img class="aboutImg" src={ImgBanner} alt="Banner" />
            <img class="aboutImgPhone" src={ImgBannerMobile} alt="Banner" />
            <div class="bannerContents">
                <div class="h15">Giới thiệu Run2Riches</div>
                <div class="h16">Công nghệ và dịch vụ hàng đầu</div>
            </div>
            <div class="introSecondSection">
                <div class="h17">Về chúng tôi</div>
                <div class="h18">
                    <p class="pWeb">“Run2Riches” là một ứng dụng di động khuyến khích người dùng đi bộ và tham gia hoạt động thể chất, đồng thời cung cấp phần thưởng cho những nỗ lực của họ.</p>
                    <p class="pWeb">Mục tiêu của "Run2Riches" là thúc đẩy mọi người thực hiện lối sống lành mạnh bằng cách truyền cảm hứng luyện tập và cải thiện thói quen hàng ngày. Dựa trên số bước ghi lại, "Run2Riches" trao thưởng cho người dùng, và người dùng có thể sử dụng phần thưởng để tham gia các chơi các trò chơi trong APP và nhận được nhiều hơn.</p>
                    <p class="pWeb">Hơn nữa, "Run2Riches" tập trung vào tương tác xã hội, cho phép người dùng kết nối với bạn bè, tham gia cộng đồng và chia sẻ trải nghiệm của mình. Tương tác xã hội tạo động lực và môi trường hỗ trợ cho người dùng thực hiện những thói quen lành mạnh.</p>
                    <p class="pWeb">"Run2Riches" hướng đến việc thúc đẩy hoạt động thể chất, cải thiện sức khỏe và tạo động lực cho người dùng ưu tiên việc đi bộ trong thói quen sinh hoạt hàng ngày. Vì một tương lai khỏe mạnh và thịnh vượng. Hãy hành động ngay!</p>
                    <p class="pPhone">Run2Riches là công ty công nghệ tiên tiến và là nền tảng giao dịch lớn nhất tại Việt Nam. Kể từ khi thành lập vào năm 2015, công ty đã phục vụ hàng triệu người dùng, tạo ra môi trường giao dịch an toàn - thú vị, tích hợp thể thao và tiền kỹ thuật số cho người dùng.</p>
                </div>
                <div class="introContactDetails">
                    <div class="contactTitle">Tư vấn hợp tác</div>
                    <div class="contactContainer">
                        <div class="leftContact"><img src={PhoneIcon} alt="Phone Icon" /></div>
                        <div class="rightContact">
                            <div class="h26">Hợp tác kinh doanh</div>
                            <div class="h27">Tel：+84 819049690</div>
                        </div>
                    </div>
                    <div class="contactContainer">
                        <div class="leftContact"><img src={EmailIcon} alt="Email Icon" /></div>
                        <div class="rightContact">
                            <div class="h26">Tư vấn sản phẩm</div>
                            <div class="h27">Mail：Support@run2riches.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introThirdSection">
                <div class="h19">Liên hệ với chúng tôi</div>
                <div class="introContainer">
                    <div class="maps"><img src={Map} alt="Map" /></div>
                    <div class="introContacts">
                        <a href="https://zalo.me/3733805797735313484" target="_blank" rel="noreferrer">
                            <div class="h20">
                                <img src={ZaloIcon} alt="Zalo Icon" />
                                <div class="h20Text">Zalo：Run2Riches</div>
                            </div>
                        </a>
                        <a href="https://t.me/run2richesofficial" target="_blank" rel="noreferrer">
                            <div class="h20">
                                <img src={TelegramIcon} alt="Telegram Icon"/>
                                <div class="h20Text">Telegram：RUN2RICHES Official</div>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100067485453717" target="_blank" rel="noreferrer">
                            <div class="h20">
                                <img src={FacebookIcon} alt="Telegram Icon" />
                                <div class="h20Text">Facebook：Run2Riches</div>
                            </div>
                        </a>
                        <a href="mailto:Support@run2riches.com" target="_blank" rel="noreferrer">
                            <div class="h20">
                                <img src={EmailIcon2} alt="Email Icon" />
                                <div class="h20Text">Email：Support@run2riches.com</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="introFourthSection">
                <div class="h21">Dịch vụ khách hàng</div>
                <div class="h22">Bất kể bạn là ai, đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn lòng phục vụ.</div>
                <div class="fourthContainer">
                    <div class="fourthLeft">
                        <img src={Person} alt="Person" />
                    </div>
                    <div class="fourthRight">
                        <div class="h23">Giúp đỡ và hỗ trợ</div>
                        <div class="h24">Nếu trong quá trình sử dụng bạn gặp điều gì chưa hiểu hoặc có thắc mắc cần giải đáp, vui lòng truy cập vào liên kết bên dưới để chúng tôi hỗ trợ bạn.</div>
                        <div class="h25">Dịch vụ khách hàng</div>
                    </div>
                </div>
            </div>
            <AppDescription />
            <Footer />
        </div>
    )
}

export default LiênHệChúngTôi