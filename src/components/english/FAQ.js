import Banner from "../../images/wenti_bg1@3x.webp"
import Profile1 from "../../images/wenti_tx1@3x.webp"
import Profile2 from "../../images/wenti_tx5@3x.webp"
import Profile3 from "../../images/wenti_tx2@3x.webp"
import Profile4 from "../../images/wenti_tx4@3x.webp"
import Profile5 from "../../images/wenti_tx6@3x.webp"
import Profile6 from "../../images/wenti_tx3@3x.webp"
import Profile7 from "../../images/wenti_tx7@3x.webp" 
import Run2RichesLogo from "../../images/wenti_logo@3x.webp"

import AppDescriptionE from "./AppDescriptionE"
import FooterE from "./FooterE"

import "../../styles/CâuHỏiThườngGặp.css"

function FAQ() {
    return (
        <div>
            <div className="initial">
                <div className="initialBanner">
                    <img className="initialBannerBG" src={Banner} alt="Banner" />
                    <div className="initialBannerContents">
                        <div className="IBCTop"><img src={Run2RichesLogo} alt="Run2Riches Logo" />Run2Riches</div>
                        <div className="IBCBottom">"Run2Riches" - Your Adventure Begins!</div>
                    </div>
                </div>
                <div className="initialSecondSection">
                    <div className="secondSectionTitle">
                        Frequently Asked Questions
                    </div>
                    <div className="instructions">
                        <div className="instruction">
                            <div className="instructionTitle">
                                How to Get Started with Run2Riches?
                            </div>
                            <div className="instructionDescription">
                                -Get Yourself a Pair of Shoes: Begin your journey by owning a pair of shoes and taking part in the walking challenge to track your steps and earn rewards.<br />
                                -Verify Your Real Name: To ensure authenticity and maintain a top-notch community, you'll need to verify your real name. Don't worry; it's a simple process!<br />
                                -Free First Pair of Shoes: Once you complete the verification, we'll reward you with your very first pair of shoes - absolutely free!<br />
                                -Start Walking and Earning: Walk a total of 800 steps daily, and you'll instantly receive 5 WCoin as your reward. Don't forget to click on the ""Claim Reward"" section to ensure you don't miss out on your well-deserved rewards!"<br />
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                How to Withdraw Your Earnings on Run2Riches?
                            </div>
                            <div className="instructionDescription">
                                The WCoin earned through completing walking tasks can be converted into VND (Vietnamese Dong) and easily withdrawn to your bank account.<br />
                                The minimum withdrawal amount is 50,000 VND.<br />
                                Step 1: Navigate to the "Trading Platform" section.<br />
                                Step 2: Click on the "Withdraw" or "Cash Out" option.<br />
                                Step 3: Select your linked bank account.<br />
                                Step 4: Enter the withdrawal amount, ensuring it meets the minimum requirement of 50,000 VND, and provide all necessary personal information accurately.<br />
                                Step 5: Confirm your withdrawal request and proceed with the "Face ID Scan."<br />
                                Note: Our withdrawal process is designed for convenience and efficiency. Transactions are typically processed within 3 to 5 minutes and are available 24/7, making it easy for you to access your earnings at any time."<br />
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Is Run2Riches compatible with computer usage?
                            </div>
                            <div className="instructionDescription">
                                Run2Riches is exclusively designed for mobile phones and cannot be used on a computer. If you wish to utilize the app to track your fitness and health data, it is essential to install the application on your personal mobile phone. If you are seeking a similar app for your computer, you may explore other available software options and ensure their compatibility with your computer's operating system.
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                How many levels of shoes are available in Run2Riches?
                            </div>
                            <div className="instructionDescription">
                                In Run2Riches, there are a total of 6 levels (LV0 - LV5), each corresponding to a different type of shoe. The first pair of shoes is provided for FREE, and you can acquire the subsequent pairs through the use of WCoin or by obtaining them as rewards through the "Check-in" feature.
                            </div>
                        </div>
                        <div class="instruction">
                            <div class="instructionTitle">
                                What does the 'Store' in Run2Riches have?
                            </div>
                            <div class="instructionDescription">
                                In the "Store" of Run2Riches, you will find enticing rewards and a lucky draw program where WCoin serves as the key to unlocking attractive prizes. Take a chance, place your bet, and brace yourself for the thrilling results that await you!
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                What rewards do you receive for introducing friends to the Run2Riches app?
                            </div>
                            <div className="instructionDescription">
                                When you introduce friends to use the app and they register an account with your referral code, verifying their real names, they become your direct referrals. As a result, your contribution value will increase. The more direct referrals you have, the higher your contribution value will be, leading to an increase in your level. Furthermore, if your direct referrals have shoes, your activity will also rise, boosting your daily income and reducing transaction fees. This incentivizes users to invite friends and build a thriving network within the Run2Riches community.
                            </div>
                        </div>
                        <div className="instruction">
                            <div className="instructionTitle">
                                Is the safety of transactions assured in Run2Riches?    
                            </div>
                            <div className="instructionDescription">
                                In Run2Riches, safety of transactions is of utmost importance, and the platform has taken several measures to ensure security. Encryption technology safeguards users' personal information and transaction data, while multi-factor authentication restricts access to authorized individuals only. Furthermore, user identification is verified to ensure that only authenticated users can perform transactions. While these precautions enhance safety, it's essential to remain cautious during online transactions and avoid sharing account and password information indiscriminately, as all online activities carry inherent risks.
                            </div>
                        </div>                        
                    </div>
                    <div className="thirdSection">
                        <div className="thirdSectionTitle">Customer feedback</div>
                        <div className="allTestimonials">
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Walking is an activity that we do every day, depending on each person's lifestyle habits. I find excitement and appeal in Run2Riches. What I want to say is that we all want to achieve the maximum number of steps per day, right? This is not only a simple way to earn extra income but also helps enhance physical activity. If you walk regularly every day, download Run2Riches now.
                                </div>
                                <div className="user">
                                    <img src={Profile1} alt="Profile" />daihung253
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    I have been using Run2Riches for quite a long time, and I must say that it has exceeded my expectations. One of the best things about this app is that it motivates you to be more active. Since using the app, I have been diligently walking every day and achieving my health goals. The app also offers interesting challenges and competitions.
                                </div>
                                <div className="user">
                                    <img src={Profile2} alt="Profile" />Võ Huyền Trang
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    In general, I recommend this app to anyone who wants to increase their income. It provides diverse opportunities to earn money, a secure payment system, and fast customer service. Experience it now, and you won't be disappointed!
                                </div>
                                <div className="user">
                                    <img src={Profile3} alt="Profile" />nguyenxiu1309
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    I have been using Run2Riches for a while, and I must say it's a fantastic experience. Not only is it user-friendly, but it also provides me with an easy way to earn extra income from the comfort of my home.
                                </div>
                                <div className="user">
                                    <img src={Profile4} alt="Profile" />Quê Hà Nội
                                </div>
                            </div>
                            <div className="testimonialsContainer">
                                <div className="testimonials">
                                    The idea of Run2Riches is quite creative and practical. It encourages users to walk more by turning steps into real rewards. Each of my steps accumulates points, which I can exchange for rewards. This not only helps improve my health but also adds fun motivation.
                                </div>
                                <div className="user">
                                    <img src={Profile5} alt="Profile" />longhoang7282
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Run2Riches is an essential app for those who want to maintain their fitness, find motivation, and receive valuable rewards. With a user-friendly interface, diverse reward options, exciting challenges, and a supportive community, the app becomes an excellent choice. Start walking towards a healthy lifestyle and reap the benefits with Run2Riches.
                                </div>
                                <div className="user">
                                    <img src={Profile6} alt="Profile" />phongvan
                                </div>
                            </div>
                            <div className="testimonialsContainer moveDown">
                                <div className="testimonials">
                                    Excellent customer care team. Quick response, helpful answers. It's surprising to have an app that cares about users and provides such great support.
                                </div>
                                <div className="user">
                                    <img src={Profile7} alt="Profile" />truclinh23082017
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppDescriptionE />
            <FooterE />
        </div>
    )
}

export default FAQ