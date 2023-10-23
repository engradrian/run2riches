import AndroidIcon from "../../images/android@3x.webp"
import AppleIcon from "../../images/ios@3x.webp"
import Background from "../../images/appDescriptionBGtwo.webp"
import Background2 from "../../images/home_bg2@3x.webp"
import Banner from "../../images/home_banner_img@3x.webp"
import BenefitsIcon1 from "../../images/home_ico4-1@3x.webp"
import BenefitsIcon2 from "../../images/home_ico4-2@3x.webp"
import BenefitsIcon3 from "../../images/home_ico4-3@3x.webp"
import BenefitsIcon4 from "../../images/home_ico4-4@3x.webp"
import BenefitsIcon5 from "../../images/home_ico4-5@3x.webp"
import BenefitsIcon6 from "../../images/home_ico4-6@3x.webp"
import BNBLogo from "../../images/bnb.webp"
import BTCLogo from "../../images/btc.webp"
import Core1 from "../../images/home_ico3-1@3x.webp"
import Core2 from "../../images/home_ico3-2@3x.webp"
import Core3 from "../../images/home_ico3-3@3x.webp"
import EmailIcon from "../../images/email.webp"
import ETHLogo from "../../images/eth.webp"
import FacebookIcon from "../../images/facebook.webp"
import HomeIcon1 from "../../images/home_ico_ico1-1@3x.webp"
import HomeIcon2 from "../../images/home_ico_ico1-2@3x.webp"
import HomeIcon3 from "../../images/home_ico_ico1-3@3x.webp"
import HomeLine from "../../images/home_line@3x.webp"
import HomePhone from "../../images/home_phone@3x.webp"
import PhoneBG from "../../images/home_bg1@3x.webp"
import QRCode from "../../images/erweima@3x.webp"
import QRCodeHover from "../../images/sampleqr.webp"
import Screenshots from "../../images/home_img4@3x.webp"
import SocialMedias from "../../images/home_img3@3x.webp"
import TelegramIcon from "../../images/about_ico2@3x.webp"
import TronLogo from "../../images/trx.webp"
import WCoinLogo from "../../images/wcoin_logo.webp"
import WCoinScreenshot from "../../images/home_img2@3x.webp"
import ZaloIcon from "../../images/zalo-circular.webp"

import AppDescription from "./AppDescription"
import Footer from "./Footer"

import "../../styles/GiớiThiệuSảnPhẩm.css"

function GiớiThiệuSảnPhẩm() {
    return (
        <div>
            <div className="downloadSection">
                <img className="phoneBG" src={PhoneBG} alt="Phone Background" />
                <img className="downloadBanner" src={Banner} alt="Banner" />
                <div className="downloadTexts">
                    <h2>Hãy để chúng tôi đồng hành cùng bạn</h2>
                    <h3>Đi bộ kiếm tiền - Nhận phần thưởng - Chơi thả ga</h3>
                    <h4>Hành trình đi bộ kiếm tiền đầy hứng khởi cùng hơn 1 triệu người dùng</h4>
                </div>
                <div className="downloadIcons">
                    <div className="iosIcon"><img src={AppleIcon} alt="Apple Icon" />iOS</div>
                    <a href="https://ostapis.run2riches.com/api/app/download">
                        <div className="androidIcon"><img src={AndroidIcon} alt="Android Icon" />Android</div>
                    </a>
                    <div className="firstQRCode"><img src={QRCode} alt="QR Code" />
                        <div className="downloadPopup">
                            <img src={QRCodeHover} alt="QR Code Hover" />
                        </div>
                    </div>
                    <img className="phone" src={HomePhone} alt="Run2Riches Screenshot" />       
                </div>
            </div>
            <div className="counter">
                <div className="leftCounter">
                    <h5>10000+</h5>
                    <h6>Lựa chọn của người dùng</h6>
                </div>
                <div className="middleCounter">
                    <h5>14125979+</h5>
                    <h6>24h giao dịch</h6>
                </div>
                <div className="rightCounter">
                    <h5>12+</h5>
                    <h6 className="widthReducer">Được đề xuất bởi các phương tiện truyền thông lớn</h6>
                </div>
            </div>
            {/* <div className="cryptoPrices">
                <div className="titleCrypto">Giao dịch</div>
                <div className="mainCrypto">
                    <table className="cryptoTable">
                        <tr>
                            <th className="firstColumn">Tên</th>
                            <th className="secondColumn" >Giá mới nhất (VND)</th>
                            <th className="thirdColumn"  >Thay đổi</th>
                            <th className="fourthColumn fourthColumnHeader">5d qua</th>
                        </tr>
                        <tr>
                            <td className="firstColumn"><img src={WCoinLogo} alt="WCoin Logo" />Wcoin</td>
                            <td className="secondColumn" id="wCoinPrice">Loading...</td>
                            <td className="thirdColumn"   id="wCoinChange">Loading...</td>
                            <td id="wCoin-graph" className="graph fourthColumn"></td>
                        </tr>
                        <tr>
                            <td className="firstColumn"><img src={BNBLogo} alt="BNB Logo" />BNB</td>
                            <td className="secondColumn" id="bnbPrice">Loading...</td>
                            <td className="thirdColumn"   id="bnbChange">Loading...</td>
                            <td id="bnb-graph" className="graph fourthColumn"></td>
                        </tr>
                        <tr>
                            <td className="firstColumn"><img src={BTCLogo} alt="BTC Logo" />BTC</td>
                            <td className="secondColumn" id="btcPrice">Loading...</td>
                            <td className="thirdColumn"  id="btcChange">Loading...</td>
                            <td id="btc-graph" className="graph fourthColumn"></td>
                        </tr>
                        <tr>
                            <td className="firstColumn" ><img src={ETHLogo} alt="ETH Logo" />ETH</td>
                            <td className="secondColumn" id="ethPrice">Loading...</td>
                            <td className="thirdColumn"   id="ethChange">Loading...</td>
                            <td id="eth-graph" className="graph fourthColumn"></td>
                        </tr>
                        <tr>
                            <td className="firstColumn"><img src={TronLogo} alt="Tron Logo" />TRX</td>
                            <td className="secondColumn" id="trxPrice">Loading...</td>
                            <td className="thirdColumn"   id="trxChange">Loading...</td>
                            <td id="trx-graph" className="graph fourthColumn"></td>
                        </tr>
                    </table>
                </div>
            </div>  */}
            <div className="steps">
                <div className="titleSteps">
                    Ba bước để bắt đầu hành trình của bạn
                </div>
                <div className="stepsIcons">
                    <div className="step1"><img src={HomeIcon1} alt="Home Icon" />Tải ứng dụng</div>
                    <div className="stepLine"><img src={HomeLine} alt="Line" /></div>
                    <div className="step2"><img src={HomeIcon2} alt="Home Icon" />Bắt đầu đi bộ</div>
                    <div className="stepLine"><img src={HomeLine} alt="Line" /></div>
                    <div className="step3"><img src={HomeIcon3} alt="Home Icon" />Kiếm tiền</div>
                </div>
                <a href="https://vnfilesbk1.s3.amazonaws.com/app/demo/run2Riches-release-1%287%29.apk" download><div className="downloadButton">Tải ứng dụng</div></a>
            </div> 
            <div className="appDescription">
                <img className="appDescriptionBGOne" src={Background2} alt="Background" />
                <img className="appDescriptionBGTwo" src={Background} alt="Background" />
                <div className="appDescriptionContents">
                    <div className="appLeft"><img src={WCoinScreenshot} alt="WCoin Screenshot" /></div>
                    <div className="appRight">
                        <h7>APP khuyến khích người dùng tập thể dục</h7>
                        <h8>Là một ứng dụng luyện tập tạo động lực cho người dùng nâng cao sức khỏe</h8>
                    </div>
                </div>
            </div>
            <div className="socialMediaLinks">
                <div className="socialLeft">
                    <h9>Tham gia cộng đồng của chúng tôi trên nền tảng mạng xã hội</h9>
                    <h10>Nhận tin tức mới nhất của chúng tôi</h10>
                    <div className="socialMediaIcons">
                        <a href="https://zalo.me/3733805797735313484" target="_blank" rel="noreferrer"><img src={ZaloIcon} alt="Zalo Icon" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100067485453717" target="_blank" rel="noreferrer"><img src={FacebookIcon} alt="Facebook Icon" /></a>
                        <a href="https://t.me/run2richesofficial" target="_blank" rel="noreferrer"><img src={TelegramIcon} alt="Telegram Icon" /></a>
                        <a href="mailto:Support@run2riches.com" target="_blank" rel="noreferrer"><img src={EmailIcon} alt="Email Icon" /></a>
                    </div>
                </div>
                <div className="socialRight"><img src={SocialMedias} alt="Social Medias" /></div>
            </div>
            <div className="core">
                <div className="coreLeft"><img src={Screenshots} alt="Screenshots" /></div>
                <div className="coreRight">
                    <div className="h11">
                        Chức năng cốt lõi của chúng tôi
                    </div>
                    <div className="h12">
                        <img src={Core1} alt="Core Icon" />
                        Điểm danh nhận xu
                    </div>
                    <div className="h13">
                        <img src={Core2} alt="Core Icon" />
                        Giao dịch thời gian thực
                    </div>
                    <div className="h14">
                        <img src={Core3} alt="Core Icon" />
                        Trò chơi phong phú
                    </div>
                </div>
            </div>
            <div className="benefits">
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon1} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Tài sản được đảm bảo</div>
                    <div className="benefitsDescription">Ứng dụng yêu cầu người dùng thiết lập bảo mật tài khoản như mật khẩu hoặc nhận diện khuôn mặt. Ngoài ra, ứng dụng còn cung cấp bảo mật đa lớp như xác thực danh tính. </div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon2} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Dịch vụ khách hàng 24h</div>
                    <div className="benefitsDescription">Đội ngũ chăm sóc khách hàng cung cấp dịch vụ 24h hỗ trợ mọi nhu cầu và giải đáp thắc mắc của khách hàng nhanh nhất có thể.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon3} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">An toàn và đáng tin cậy</div>
                    <div className="benefitsDescription"> Ứng dụng thực hiện các biện pháp hiệu quả để bảo vệ thông tin cá nhân và dữ liệu quan trọng của người dùng nhằm ngăn chặn truy cập trái phép và rò rỉ thông tin.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon4} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Khả năng vô tận</div>
                    <div className="benefitsDescription">Người dùng có thể đạt được mục tiêu thu nhập của mình bằng cách hoàn thành nhiệm vụ và nhận phần thưởng, đồng thời tận hưởng tính linh hoạt và chủ động của ứng dụng.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon5} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Trò chơi thú vị</div>
                    <div className="benefitsDescription">Ứng dụng cung cấp nhiều nội dung giải trí, người dùng có thể tương tác, chia sẻ và giao lưu với những người dùng khác, mang đến trải nghiệm phong phú và thú vị hơn.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon6} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Số liệu thị trường thực tế</div>
                    <div className="benefitsDescription">Giá và số lượng mua/bán tốt nhất được cập nhật liên tục theo thị trường thực tế. Dữ liệu phản ánh mức độ sẵn sàng và độ sâu giao dịch của người mua và người bán trên thị trường giúp đánh giá các điểm hỗ trợ và kháng cự.</div>
                </div>
            </div>
            <AppDescription />
            <Footer />
        </div>
    )
}

export default GiớiThiệuSảnPhẩm