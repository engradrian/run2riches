import AndroidLogo from "../../images/android@3x.webp"
import AppleLogo from "../../images/ios@3x.webp"
import BackgroundImage from "../../images/down_bg1@3x.webp"
import Logo from "../../images/down_logo@3x.webp"
import MobileBackgroundImage from "../../images/down_bg1@3x (1).webp"
import Phones from "../../images/down_img1@3x.webp"
import QrCode from "../../images/erweima@3x.webp"

import Footer from "./Footer"

import "../../styles/TảiỨngDụng.css"

function TảiỨngDụng() {
    return(
        <div>
            <div className="downloadPage">
                <img className="dpbgimg" src={BackgroundImage} alt="Background" />
                <img className="dpbgimgphone" src={MobileBackgroundImage} alt="Mobile Background" />
                <div className="downloadPageContents">
                    <div className="leftDownloadP">
                        <div className="leftTopDownloadP">
                            <div className="topOne"><img  src={Logo} alt="Logo" />Run2Riches</div>
                            <div className="topTwo">Tải ứng dụng Run2Riches</div>
                            <div className="topThree">Nơi sức khỏe và tài phú hội tụ </div>
                        </div>
                        <div className="leftBotDownloadP">
                            <div className="qrCodeThree">
                                <div className="outerSquare">
                                    <div className="innerSquare">
                                        <img src={QrCode} alt="QR Code" />
                                    </div>
                                </div>
                            </div>
                            <div className="downloadPButtons">
                                <div className="iosDownloadP"><img src={AppleLogo} alt="Apple Logo" />iOS</div>
                                <a href="https://ostapis.run2riches.com/api/app/download">
                                    <div className="androidDownloadP"><img src={AndroidLogo} alt="Android Logo" />Android</div>    
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rightDownloadP">
                        <img src={Phones} alt="Screenshots" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TảiỨngDụng