import Run2RichesLogo from "../../images/run2riches_logo.webp"
import Step1 from "../../images/step1.webp"
import Step2 from "../../images/step2.webp"
import Step3 from "../../images/step3.webp"
import Step4 from "../../images/step4.webp"
import Step5 from "../../images/step5.webp"
import Step6 from "../../images/step6.webp"
import "../../styles/HủyTàiKhoản.css"

function HủyTàiKhoản() {
    return(
        <div className="cancellationPage">
            <div className="cancellationLogo">
                <img src={Run2RichesLogo} alt="Run2Riches Logo" />
                Run2Riches
            </div>
            <div className="cancellationContentContainer">
                <div className="cancellationTitle"><strong>Các bước huỷ tài khoản:</strong></div>
                <div className="cancellationContents">
                    1. Đăng nhập ứng dụng:
                </div>
                <div className="cancellationContents">
                    2. Nhấp vào hình đại diện ở góc trên bên trái của trang chủ để xem thông tin cá nhân
                    <div className="photoInstructions">
                        <img src={Step1} alt="Steps"/>
                    </div>
                </div>
                <div className="cancellationContents">
                    3. Kéo xuống dưới cùng nhấp vào "Xóa tài khoản" và chọn "Xác nhận"
                    <div className="photoInstructions">
                        <img src={Step2} alt="Steps" />
                        <img src={Step3} alt="Steps" />
                        <img src={Step4} alt="Steps" />
                        <img src={Step5} alt="Steps" />
                    </div>
                </div>
                <div className="cancellationContents">
                    4. Sau khi quét face ID, tài khoản của bạn sẽ được hủy thành công
                    <div className="photoInstructions">
                        <img src={Step6} alt="Steps" />
                    </div>
                </div>
            </div>
            <div className="cancellationContentContainer">
                <div className="cancellationTitle"><strong>Xác nhận về việc hủy tài khoản và tác động sau khi hủy:</strong></div>
                <div className="cancellationContents">
                    1. Khi quyết định hủy tài khoản, hãy lưu ý rằng hành động này là không thể hoàn tác. Tài khoản sẽ bị đóng và bạn sẽ không thể truy cập hoặc sử dụng nó nữa. Tất cả thông tin cá nhân liên quan đến tài khoản này sẽ bị xóa và không thể khôi phục lại. Vì vậy, bạn không có quyền yêu cầu chúng tôi phục hồi lại dữ liệu cá nhân đã bị xóa.
                </div>
                <div className="cancellationContents">
                    2. Đồng thời, tất cả lợi ích và quyền lợi mà bạn đã thu được hoặc có thể thu được từ việc sử dụng tài khoản Run2Riches, bao gồm cả các lợi ích trong tương lai, sẽ bị mất đi. Vì vậy, trước khi thực hiện hủy tài khoản Run2Riches, hãy chắc chắn rằng bạn đã xử lý đầy đủ tất cả các lợi ích và quyền lợi mà bạn đang sở hữu. Nếu bạn không làm điều này, chúng tôi có quyền xử lý và xoá bỏ hoàn toàn các lợi ích và quyền lợi thuộc tài khoản này, và bạn sẽ phải chịu trách nhiệm về tất cả hậu quả liên quan.
                </div>
                <div className="cancellationContents">
                    Hãy suy nghĩ thận trọng và xác nhận một lần nữa trước khi quyết định hủy tài khoản. Quyết định này sẽ có tác động lâu dài và có thể ảnh hưởng đến các lợi ích và dữ liệu cá nhân của bạn.
                </div>
            </div>
        </div>
    )
}

export default HủyTàiKhoản