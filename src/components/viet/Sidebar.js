import React from "react"
import ActiveSidebarIcon1 from "../../images/cebian_ico1@3x.webp"
import ActiveSidebarIcon2 from "../../images/cebian_ico2@3x_active.webp"
import ActiveSidebarIcon3 from "../../images/cebian_ico3@3x_active.webp"
import ActiveSidebarIcon4 from "../../images/cebian_ico4@3x_active.webp"
import ActiveSidebarIcon5 from "../../images/cancel_account_icon_active.webp"
import ArrowDown from "../../images/sidebar_arrowdown.webp"
import Globe from "../../images/sidebar_world.webp"
import InactiveSidebarIcon1 from "../../images/cebian_ico1@3x_inactive.webp"
import InactiveSidebarIcon2 from "../../images/cebian_ico2@3x.webp"
import InactiveSidebarIcon3 from "../../images/cebian_ico3@3x.webp"
import InactiveSidebarIcon4 from "../../images/cebian_ico4@3x.webp"
import InactiveSidebarIcon5 from "../../images/cancel_account_icon.webp"
import XButton from "../../images/guanbi@3x.webp"

import SidebarLanguageSelector from "./SidebarLanguageSelector"

import "../../styles/Sidebar.css"

function Sidebar(props) {
    return(
        <div>
            <div>
                <div className={`sidebar ${props.sidebar ? "sidebarShow" : ""}`} id="sidebar">
                    <div onClick={props.hideSidebar} className="xButton" id="xButton"><img src={XButton} alt="X Button" /></div>
                    <div className="sidebarMenus">
                        <div onClick={props.GiớiThiệuSảnPhẩmClick} className={`sidebarMenu ${props.giớiThiệuSảnPhẩm ? "active" : ""}`}><img src={props.giớiThiệuSảnPhẩm ? ActiveSidebarIcon1 : InactiveSidebarIcon1} alt="Side Bar Icon" />{props.isEnglish ? "Home" : "Giới thiệu sản phẩm"} </div>
                        <div onClick={props.CâuHỏiThườngGặpClick} className={`sidebarMenu ${props.câuHỏiThườngGặp ? "active" : ""}`}><img src={props.câuHỏiThườngGặp ? ActiveSidebarIcon2 : InactiveSidebarIcon2} alt="Side Bar Icon" />{props.isEnglish ? "FAQ" : "Câu hỏi thường gặp"} </div>
                        <div onClick={props.TảiỨngDụngClick} className={`sidebarMenu ${props.tảiỨngDụng ? "active" : ""}`}><img src={props.tảiỨngDụng ? ActiveSidebarIcon3 : InactiveSidebarIcon3} alt="Side Bar Icon" />{props.isEnglish ? "Download" : "Tải ứng dụng"} </div>
                        <div onClick={props.LiênHệChúngTôiClick} className={`sidebarMenu ${props.liênHệChúngTôi ? "active" : ""}`}><img src={props.liênHệChúngTôi ? ActiveSidebarIcon4 :InactiveSidebarIcon4} alt="Side Bar Icon" />{props.isEnglish ? "Contact Us" : "Liên hệ chúng tôi"} </div>
                        <div onClick={props.HủyTàiKhoảnClick} className={`sidebarMenu ${props.hủyTàiKhoản ? "active" : ""}`}><img src={props.hủyTàiKhoản ? ActiveSidebarIcon5 :InactiveSidebarIcon5} alt="Side Bar Icon" />{props.isEnglish ? "Account Cancellation" : "Hủy tài khoản"} </div>
                        <div className="sidebarMenu sidebarLanguageSelector" id="sidebarLanguageSelector" onClick={props.showSidebarLanguageSelectorClick} >
                            <img src={Globe} alt="Globe" />
                            {props.isEnglish ? "English" : "Tiếng Việt"}
                            <img className="sidebarArrowdown" src={ArrowDown} alt="Arrow Down" />
                        </div>
                    </div>
                    
                </div>
                <div onClick={props.hideSidebar} className={`blackBG ${props.sidebar ? "blackBGShow" : ""}`} id="blackBG"></div>
                <SidebarLanguageSelector 
                    showSidebarLanguageSelector={props.showSidebarLanguageSelector} 
                    sidebar={props.sidebar}
                    isEnglish={props.isEnglish}
                    changeLanguage={props.changeLanguage}
                />
            </div>
            
        </div>
    )
}

export default Sidebar