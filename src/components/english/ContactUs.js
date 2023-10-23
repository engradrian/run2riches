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

import AppDescriptionE from "./AppDescriptionE"
import FooterE from "./FooterE"

import "../../styles/LiênHệChúngTôi.css"


function ContactUs() {
    return(
        <div class="introduction">
            <img class="aboutImg" src={ImgBanner} alt="Banner" />
            <img class="aboutImgPhone" src={ImgBannerMobile} alt="Banner" />
            <div class="bannerContents">
                <div class="h15">About Run2Riches</div>
                <div class="h16">Leading Technology and Services.</div>
            </div>
            <div class="introSecondSection">
                <div class="h17">About Us</div>
                <div class="h18">
                    <p class="pWeb">"Run2Riches" is a mobile application that encourages users to walk and engage in physical activities while providing rewards for their efforts.</p>
                    <p class="pWeb">The goal of "Run2Riches" is to promote a healthy lifestyle by inspiring people to exercise and improve their daily habits. Based on the recorded steps, "Run2Riches" rewards its users, and they can use these rewards to play games within the app and earn even more rewards.</p>
                    <p class="pWeb">Additionally, "Run2Riches" focuses on social interaction, allowing users to connect with friends, participate in communities, and share their experiences. Social interaction creates motivation and a supportive environment for users to maintain healthy habits.</p>
                    <p class="pWeb">"Run2Riches" aims to promote physical activity, improve health, and motivate users to prioritize walking in their daily routines. For a healthy and prosperous future, take action now!</p>
                    <p class="pPhone">Run2Riches is an advanced technology company and the largest trading platform in Vietnam. Since its establishment in 2015, the company has served millions of users, creating a safe and exciting trading environment that integrates sports and digital currencies for its users.</p>
                </div>
                <div class="introContactDetails">
                    <div class="contactTitle">Cooperation Consultation</div>
                    <div class="contactContainer">
                        <div class="leftContact"><img src={PhoneIcon} alt="Phone Icon" /></div>
                        <div class="rightContact">
                            <div class="h26">Business cooperation</div>
                            <div class="h27">Tel：+84 819049690</div>
                        </div>
                    </div>
                    <div class="contactContainer">
                        <div class="leftContact"><img src={EmailIcon} alt="Email Icon" /></div>
                        <div class="rightContact">
                            <div class="h26">Product consultation</div>
                            <div class="h27">Mail：Support@run2riches.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introThirdSection">
                <div class="h19">Contact us</div>
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
                <div class="h21">Customer service</div>
                <div class="h22">No matter who you are, our customer service team is always ready to serve.</div>
                <div class="fourthContainer">
                    <div class="fourthLeft">
                        <img src={Person} alt="Person" />
                    </div>
                    <div class="fourthRight">
                        <div class="h23">Help and support</div>
                        <div class="h24">If during the usage, you encounter anything you don't understand or have any questions that need answers, please access the link below for us to support you.</div>
                        <div class="h25">Customer service</div>
                    </div>
                </div>
            </div>
            <AppDescriptionE />
            <FooterE />
        </div>
    )
}

export default ContactUs