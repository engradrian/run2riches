import certificateImg from "../../images/vn_cert_logo.webp"
import qrCode from "../../images/erweima@3x.webp"

import "../../styles/AppDescription.css"

function AppDescriptionE() {
    return(
        <div className="appDescriptionDownload">
            <div className="appDescriptionLeft">
                <div>Run2Riches motivates individuals to enhance their physical activity by walking, promoting better health, and providing rewards for completing tasks.</div>
                <div className="certificate">
                    <strong>CERTIFICATE</strong>
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

export default AppDescriptionE
