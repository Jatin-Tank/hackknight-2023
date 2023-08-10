import React from 'react'
import './LevelCard.css'
import './LevelCardSaa.scss'
import { Link } from "react-router-dom";
import { PiLightbulbFilamentBold } from 'react-icons/pi'
const LevelCard = () => {

    const headingSize = {
        fontSize: "25px"
    }
    const descriptionSize = {
        fontSize: "18px"
    }
    const linkSize = {
        fontSize: "12px"
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 ">


                        {/* Card 0 */}
                        <div className="card area my-5">


                            <h1 className="card-header text-center" style={{
                                background: "linear-gradient(324deg, rgba(27,21,146,1) 0%, rgba(101,9,121,1) 35%, rgba(102,0,255,1) 100%)",
                                color: "var(--white)"
                            }}>Level 0 : Understanding Finance and UPI</h1>

                            <div className="card-body">
                                <h2 className="card-title">Finance Wisdom</h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>Think of finance like managing your piggy bank. You can save, spend, and grow money by investing.
                                </p>
                                <h2 className="card-title">Investing Power</h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>Investing is like planting money seeds to make more money. It helps your wealth grow over time.

                                </p>
                                <h2 className="card-title">UPI Enchantment </h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>UPI is like a digital wallet for adults, letting them share money effortlessly, just like you share treats with friends.</p>
                                <Link to="/levelZero"><p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Explore Now</p></Link>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>

                        {/* Card 1 */}
                        <div className="card area my-5">


                            <h1 className="card-header text-center" style={{
                                background: "linear-gradient(324deg, rgba(27,21,146,1) 0%, rgba(101,9,121,1) 35%, rgba(102,0,255,1) 100%)",
                                color: "var(--white)"
                            }}>Level 1 : Know about the banks</h1>

                            <div className="card-body">
                                <h2 className="card-title">Safe Place</h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>Banks are like magical places where people keep their money safe. They give special cards for taking out and putting in money, and they lend money to help people buy houses or do fun things. Banks earn money by collecting extra money and lending it to others who pay back more. They offer different accounts like savings, current, recurring deposit, fixed deposit, and Demat accounts for holding electronic shares.
                                </p>

                                <Link to="/levelOne"><p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Explore Now</p></Link>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="card area my-5">


                            <h1 className="card-header text-center" style={{
                                background: "linear-gradient(324deg, rgba(27,21,146,1) 0%, rgba(101,9,121,1) 35%, rgba(102,0,255,1) 100%)",
                                color: "var(--white)"
                            }}>Level 2 : Unveiling Interest's Depths - Simple vs. Compound</h1>

                            <div className="card-body">

                                <p className="card-text" style={{ fontSize: "16px" }}>Interest is like a bonus you get when you lend your money to someone or keep it in a special place like a bank. It's extra money that you receive as a thank you for sharing or keeping your money safe.
                                </p>

                                <Link to="/levelTwo"><p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Explore Now</p> </Link>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="card area my-5">


                            <h1 className="card-header text-center" style={{
                                background: "linear-gradient(324deg, rgba(27,21,146,1) 0%, rgba(101,9,121,1) 35%, rgba(102,0,255,1) 100%)",
                                color: "var(--white)"
                            }}>Level 3 : All about Stocks</h1>

                            <div className="card-body">
                                <h2 className="card-title">Stock Market</h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>The stock market lets people trade company pieces, similar to puzzle parts. Prices change based on company success. People trade for money or to share in company achievements.

                                </p>

                                <h2 className="card-title">Stock Exchange</h2>
                                <p className="card-text" style={{ fontSize: "16px" }}>A stock exchange is like a trading hub for these company puzzle pieces. Prices rise with demand and fall with less interest. People buy for potential success, sell if unsure – just like trading toys but with company pieces.

                                </p>

                                <Link to="/levelThree"><p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Explore Now</p></Link>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>

                        {/* Card 4 */}
                        <div className="card area my-5">


                            <h1 className="card-header text-center" style={{
                                background: "linear-gradient(324deg, rgba(27,21,146,1) 0%, rgba(101,9,121,1) 35%, rgba(102,0,255,1) 100%)",
                                color: "var(--white)"
                            }}>Level 4 : All about CryptoCurrency</h1>

                            <div className="card-body">
                                {/* <h2 className="card-title">Stock Market</h2> */}
                                <p className="card-text" style={{ fontSize: "16px" }}>The stock market lets people trade company pieces, similar to puzzle parts. Prices change based on company success. People trade for money or to share in company achievements.

                                </p>

                                <p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Explore Now</p>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>


                    </div>

                    <div className="col-4" style={{ marginLeft: "70px" }}>


                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="row ">
                                    <div className="column">
                                        <div className="card gr-3" style={{ height: "423px" }}>
                                            <div className="txt">
                                                <h1 style={headingSize}>UX/UI WEBsite <br />AND MOBILE app</h1>
                                                <p style={descriptionSize}>User Interface and User Experience Design.</p>
                                            </div>
                                            <a style={linkSize} href="/">more</a>
                                            <div className="ico-card">
                                                <i className="fa fa-empire"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="row ">
                                    <div className="column">
                                        <div className="card gr-3" style={{ height: "310px" }}>
                                            <div className="txt">
                                                <h1 style={headingSize}>UX/UI WEBsite <br />AND MOBILE app</h1>
                                                <p style={descriptionSize}>User Interface and User Experience Design.</p>
                                            </div>
                                            <a style={linkSize} href="/">more</a>
                                            <div className="ico-card">
                                                <i className="fa fa-empire"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="row ">
                                    <div className="column">
                                        <div className="card gr-3" style={{ height: "250px" }}>
                                            <div className="txt">
                                                <h1 style={headingSize}>UX/UI WEBsite <br />AND MOBILE app</h1>
                                                <p style={descriptionSize}>User Interface and User Experience Design.</p>
                                            </div>
                                            <a style={linkSize} href="/">more</a>
                                            <div className="ico-card">
                                                <i className="fa fa-empire"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="row ">
                                    <div className="column">
                                        <div className="card gr-3" style={{ height: "358px" }}>
                                            <div className="txt">
                                                <h1 style={headingSize}>UX/UI WEBsite <br />AND MOBILE app</h1>
                                                <p style={descriptionSize}>User Interface and User Experience Design.</p>
                                            </div>
                                            <a style={linkSize} href="/">more</a>
                                            <div className="ico-card">
                                                <i className="fa fa-empire"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="row ">
                                    <div className="column">
                                        <div className="card gr-3" style={{ height: "215px" }}>
                                            <div className="txt">
                                                <h1 style={headingSize}>UX/UI WEBsite <br />AND MOBILE app</h1>
                                                <p style={descriptionSize}>User Interface and User Experience Design.</p>
                                            </div>
                                            <a style={linkSize} href="/">more</a>
                                            <div className="ico-card">
                                                <i className="fa fa-empire"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>


        </>
    )
}

export default LevelCard
