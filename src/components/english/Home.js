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

import AppDescriptionE from "./AppDescriptionE"
import FooterE from "./FooterE"

import "../../styles/GiớiThiệuSảnPhẩm.css"

function Home() {
    return (
        <div>
            <div className="downloadSection">
                <img className="phoneBG" src={PhoneBG} alt="Phone Background" />
                <img className="downloadBanner" src={Banner} alt="Banner" />
                <div className="downloadTexts">
                    <h2>Embark on an Incredible Journey with Us</h2>
                    <h3>Make Money While Walking - Receive Rewards - Limitless Play!</h3>
                    <h4>Embark on an exhilarating journey of earning money by walking alongside a community of over 1 million users.</h4>
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
                    <h6>User's choice/preference</h6>
                </div>
                <div className="middleCounter">
                    <h5>14125979+</h5>
                    <h6>24-hour trading</h6>
                </div>
                <div className="rightCounter">
                    <h5>12+</h5>
                    <h6 className="widthReducer">Endorsed by major media outlets</h6>
                </div>
            </div>
            {/* <div className="cryptoPrices">
                <div className="titleCrypto">Trading</div>
                <div className="mainCrypto">
                    <table className="cryptoTable">
                        <tr>
                            <th className="firstColumn">Token</th>
                            <th className="secondColumn" >Latest price (VND)</th>
                            <th className="thirdColumn"  >Change</th>
                            <th className="fourthColumn fourthColumnHeader">5 days chart</th>
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
                    <div className="step1"><img src={HomeIcon1} alt="Home Icon" />Download</div>
                    <div className="stepLine"><img src={HomeLine} alt="Line" /></div>
                    <div className="step2"><img src={HomeIcon2} alt="Home Icon" />Start walking</div>
                    <div className="stepLine"><img src={HomeLine} alt="Line" /></div>
                    <div className="step3"><img src={HomeIcon3} alt="Home Icon" />Earn money</div>
                </div>
                <a href="https://vnfilesbk1.s3.amazonaws.com/app/demo/run2Riches-release-1%287%29.apk" download><div className="downloadButton">Download</div></a>
            </div> 
            <div className="appDescription">
                <img className="appDescriptionBGOne" src={Background2} alt="Background" />
                <img className="appDescriptionBGTwo" src={Background} alt="Background" />
                <div className="appDescriptionContents">
                    <div className="appLeft"><img src={WCoinScreenshot} alt="WCoin Screenshot" /></div>
                    <div className="appRight">
                        <h7>Run2Riches - A fitness app that encourages exercise and motivates users to improve their health.</h7>
                    </div>
                </div>
            </div>
            <div className="socialMediaLinks">
                <div className="socialLeft">
                    <h9>Join our social media community today!</h9>
                    <h10>Receive our latest news</h10>
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
                        Our Core Functions Include:
                    </div>
                    <div className="h12">
                        <img src={Core1} alt="Core Icon" />
                        Check-in for Coin Rewards
                    </div>
                    <div className="h13">
                        <img src={Core2} alt="Core Icon" />
                        Real-time Trading
                    </div>
                    <div className="h14">
                        <img src={Core3} alt="Core Icon" />
                        Rich and Diverse Games
                    </div>
                </div>
            </div>
            <div className="benefits">
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon1} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Assets Are Guaranteed</div>
                    <div className="benefitsDescription">The app ensures account security through password and facial recognition setup, and further enhances protection with multi-layer security measures, including identity verification. Your safety is our top priority!</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon2} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">24/7 Customer Service</div>
                    <div className="benefitsDescription">We offer round-the-clock customer service to assist with all your needs and promptly address any inquiries you may have. Your satisfaction is our priority!</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon3} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Safe And Reliable</div>
                    <div className="benefitsDescription">The app employs robust measures to safeguard users' personal information and crucial data, ensuring protection against unauthorized access and data leaks.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon4} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Infinite Possibilities</div>
                    <div className="benefitsDescription">Achieve your income goals, complete tasks, and earn rewards, all while experiencing the freedom and autonomy of the app.</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon5} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Exciting Games</div>
                    <div className="benefitsDescription">Enjoy a diverse range of entertainment content, interact with fellow users, and share memorable moments for a truly enjoyable experience. Let the fun begin!</div>
                </div>
                <div className="benefitsContainer">
                    <div className="benefitsIcon"><img src={BenefitsIcon6} alt="Benefits Icon" /></div>
                    <div className="benefitsTitle">Real-time Market Data</div>
                    <div className="benefitsDescription">Run2Riches provides real market data, constantly updating the best prices and quantities for buying and selling based on actual market conditions. This data reflects the trading readiness and depth from buyers and sellers, aiding in assessing support and resistance levels for more informed decisions.</div>
                </div>
            </div>
            <AppDescriptionE />
            <FooterE />
        </div>
    )
}

export default Home