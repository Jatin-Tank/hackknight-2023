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
                    <h1><span>Finova</span><br /> A leading Fintech Web Application</h1>
                    <p>Streamline your business operations with our powerful and user-friendly app. Boost efficiency and
                        simplify invoicing today! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id libero doloremque voluptate fuga delectus eligendi, ipsam nihil aliquam eaque minima quas voluptas distinctio ducimus?</p>
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

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet soluta, possimus distinctio maiores laborum, ducimus ab nisi eligendi recusandae atque alias pariatur. Soluta porro recusandae veniam dolores reprehenderit. Quaerat fugit nesciunt, aut voluptatum fuga quidem atque suscipit nam doloremque id reiciendis debitis, eos incidunt aperiam pariatur vero quia eveniet ea odit ab nostrum! Unde ab quas tenetur officiis voluptas reiciendis impedit saepe architecto temporibus aspernatur! Ex neque debitis laudantium porro.</p>

                </div>

            </div>
        </div>
    )
}

export default LandingPage;