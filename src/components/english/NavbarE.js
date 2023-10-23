import React from "react"
import NavbarLogoImg from "../../images/home_logo1@3x.webp"
import Globe from "../../images/home_yuyan@3x.webp"
import ArrowDown from "../../images/home_sanjiao@3x.webp"
import Menu from "../../images/menu.webp"

import '../../styles/Navbar.css';
import "../../styles/english/NavbarE.css"

import LanguageSelectorE from "./LanguageSelectorE";

function NavbarE(props) {
    return(
        <div>
            <div className="navbar navbarE">
                <div onClick={props.showSidebar} className="menu" id="menu"><img src={Menu} alt="Menu" /></div>
                <div className="navbarLogo">
                    <img src={NavbarLogoImg} alt="Navbar Logo"/>
                    <div className="mobileTop"><strong>Run2Riches</strong></div>
                </div>
                <div className="navbarMenuE">
                    <h1 onClick={props.GiớiThiệuSảnPhẩmClick}><strong>Home</strong></h1>
                    <h1 onClick={props.CâuHỏiThườngGặpClick}><strong>FAQ</strong></h1>
                    <h1 onClick={props.TảiỨngDụngClick}><strong>Download</strong></h1>
                    <h1 onClick={props.LiênHệChúngTôiClick}><strong>Contact us</strong></h1>
                    <h1 onClick={props.HủyTàiKhoảnClick}><strong>Account cancellation</strong></h1>
                </div>
                <div id="languageSelectorButton" className="navbarRight" onClick={props.showLanguageSelectorClick} >
                    <img src={Globe} alt="Globe"/>
                    <h1><strong>English</strong></h1>
                    <img src={ArrowDown} alt="Arrow Down" />
                </div>
            </div>
            <LanguageSelectorE 
                showLanguageSelector={props.showLanguageSelector} 
                changeLanguage={props.changeLanguage}
            />
        </div>
    )
}

export default NavbarE