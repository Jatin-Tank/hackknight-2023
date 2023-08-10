import React from "react"
import "./LandingPage.scss"
import { Link } from "react-router-dom"

import aboutUs from "../../assets/images/about-us.svg"

import mainRocket from "../../assets/images/rocket-main.svg"
import smallRocket from "../../assets/images/rocket-small.svg"
import websiteBackGround from "../../assets/images/website-wave.svg"
import websiteBottomWave from "../../assets/images/website-wave-bottom.svg"

const LandingPage = () => {
    return (
        <div className={"website"}>
            <div className={"home"}>
                <div className="wave">
                    <img src={websiteBackGround} alt={"wave background"} />
                    <img className={"main-rocket"} src={mainRocket} alt={"main rocket"} />
                    <img className={"small-rocket"} src={smallRocket} alt={"small rocket"} />
                </div>

                <div className={"text"}>
                    <h1><span>Finova</span><br />  A world where everyone has the financial freedom to live their best life.</h1>
                    <p>To empower everyone with the financial knowledge they need to make
                        informed decisions about their money.
                    </p>
                    <div className={"button"}>
                        <Link to={"/signup"}>

                            <button style={{
                                background: "none",
                                border: "none",
                                color: "white",
                                display: "block",
                                margin: "auto",
                                marginTop: "8px"
                            }}>Get Started</button>
                        </Link>

                    </div>

                    <div className={"button"} style={{ marginLeft: "30px" }}>
                        <Link to={"/login"}>

                            <button style={{
                                background: "none",
                                border: "none",
                                color: "white",
                                display: "block",
                                margin: "auto",
                                marginTop: "8px",
                            }}>Log In</button>
                        </Link>

                    </div>

                </div>
            </div>


            {/*-----------------------------------------ABOUT US-----------------------------------------------------------*/}
            <div id={"about"} className={"about-us"}>
                <div className="wave">
                    <img src={websiteBottomWave} alt={"bottom-wave"} />
                </div>
                <h1>About Us</h1>
                <div className={"about-us-details"}>
                    <img src={aboutUs} alt={"about-us"} />

                    <p>We believe that everyone deserves access to financial education, regardless of their background or income level. That's why we created FINOVA, a fintech learning platform that makes financial education accessible and affordable to everyone.
                        <br />Our platform offers a wide range of financial education resources, including:
                        <li>Online tutorials</li>
                        <li>Interactive simulations</li>
                        <li>Financial calculators</li>
                        <li>Articles and blog posts</li>

                    </p>


                </div>

            </div>
        </div>
    )
}

export default LandingPage;