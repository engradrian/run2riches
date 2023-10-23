import Run2RichesLogo from "../../images/run2riches_logo.webp"
import Step1 from "../../images/step1.webp"
import Step2 from "../../images/step2.webp"
import Step3 from "../../images/step3.webp"
import Step4 from "../../images/step4.webp"
import Step5 from "../../images/step5.webp"
import Step6 from "../../images/step6.webp"
import "../../styles/HủyTàiKhoản.css"

function AccountCancellation() {
    return(
        <div className="cancellationPage">
            <div className="cancellationLogo">
                <img src={Run2RichesLogo} alt="Run2Riches Logo" />
                Run2Riches
            </div>
            <div className="cancellationContentContainer">
                <div className="cancellationTitle"><strong>The steps to delete an account:</strong></div>
                <div className="cancellationContents">
                    1. Logging into the application:
                </div>
                <div className="cancellationContents">
                    2. Click on the profile picture at the top left corner of the homepage to view personal information.
                    <div className="photoInstructions">
                        <img src={Step1} alt="Steps"/>
                    </div>
                </div>
                <div className="cancellationContents">
                    3. Scroll down to the bottom and click on "Delete Account," then confirm.
                    <div className="photoInstructions">
                        <img src={Step2} alt="Steps" />
                        <img src={Step3} alt="Steps" />
                        <img src={Step4} alt="Steps" />
                        <img src={Step5} alt="Steps" />
                    </div>
                </div>
                <div className="cancellationContents">
                    4. After scanning Face ID, your account will be successfully deleted.
                    <div className="photoInstructions">
                        <img src={Step6} alt="Steps" />
                    </div>
                </div>
            </div>
            <div className="cancellationContentContainer">
                <div className="cancellationTitle"><strong>Confirmation about the account deletion and its implications after cancellation:</strong></div>
                <div className="cancellationContents">
                    1. When deciding to delete your account, please be aware that this action is irreversible. The account will be closed, and you won't be able to access or use it anymore. All personal information related to this account will be deleted and cannot be recovered. Therefore, you do not have the right to request us to restore any deleted personal data.
                </div>
                <div className="cancellationContents">
                    2. At the same time, all benefits and privileges that you have gained or could have obtained from using the Run2Riches account, including future benefits, will be lost. Therefore, before proceeding with the deletion of your Run2Riches account, please ensure that you have properly handled all the benefits and privileges you currently possess. If you fail to do so, we reserve the right to process and completely remove all benefits and privileges associated with this account, and you will be responsible for all related consequences.
                </div>
                <div className="cancellationContents">
                    Please think carefully and confirm once again before deciding to delete your account. This decision will have long-term implications and may affect your benefits and personal data.
                </div>
            </div>
        </div>
    )
}

export default AccountCancellation