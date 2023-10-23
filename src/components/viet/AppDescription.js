import certificateImg from "../../images/vn_cert_logo.webp"
import qrCode from "../../images/erweima@3x.webp"

import "../../styles/AppDescription.css"

function AppDescription() {
    return(
        <div className="appDescriptionDownload">
            <div className="appDescriptionLeft">
                <div>Run2Riches khuyến khích mọi người trở nên tích cực hơn trong việc đi bộ để cải thiện sức khỏe và kiếm phần thưởng trong lúc thực hiện nhiệm vụ.</div>
                <div className="certificate">
                    <strong>CHỨNG NHẬN</strong>
                    <img src={certificateImg} alt="Certification" />
                </div>
            </div>
            <div className="appDescriptionRight">
                <div className="downloadButtons">
                    <div className="download">
                        iOS
                    </div>
                    <a href="https://ostapis.run2riches.com/api/app/download">
                        <div className="download"> 
                            Android
                        </div>
                    </a>
                </div>
                <div className="qrCode">
                    <img src={qrCode} alt="qrCode" />
                </div>
            </div>
        </div>
    )
}

export default AppDescription
