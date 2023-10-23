import React from "react"
import NavbarLogoImg from "../../images/home_logo1@3x.webp"
import Globe from "../../images/home_yuyan@3x.webp"
import ArrowDown from "../../images/home_sanjiao@3x.webp"
import Menu from "../../images/menu.webp"
import '../../styles/Navbar.css';
import LanguageSelector from "./LanguageSelector";


function Navbar(props) {
    return(
        <div>
            <div className="navbar">
                <div onClick={props.showSidebar} className="menu" id="menu"><img src={Menu} alt="Menu" /></div>
                <div className="navbarLogo">
                    <img src={NavbarLogoImg} alt="Navbar Logo"/>
                    <div className="mobileTop"><strong>Run2Riches</strong></div>
                </div>
                <div className="navbarMenu">
                    <h1 onClick={props.GiớiThiệuSảnPhẩmClick}><strong>Giới thiệu sản phẩm</strong></h1>
                    <h1 onClick={props.CâuHỏiThườngGặpClick}><strong>Câu hỏi thường gặp</strong></h1>
                    <h1 onClick={props.TảiỨngDụngClick}><strong>Tải ứng dụng</strong></h1>
                    <h1 onClick={props.LiênHệChúngTôiClick}><strong>Liên hệ chúng tôi</strong></h1>
                    <h1 onClick={props.HủyTàiKhoảnClick}><strong>Hủy tài khoản</strong></h1>
                </div>
                <div id="languageSelectorButton" className="navbarRight" onClick={props.showLanguageSelectorClick} >
                    <img src={Globe} alt="Globe"/>
                    <h1><strong>Tiếng Việt</strong></h1>
                    <img src={ArrowDown} alt="Arrow Down" />
                </div>
            </div>
            <LanguageSelector 
                showLanguageSelector={props.showLanguageSelector} 
                changeLanguage={props.changeLanguage}
            />
        </div>
    )
}

export default Navbar