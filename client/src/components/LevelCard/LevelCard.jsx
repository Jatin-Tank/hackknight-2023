import React from 'react'
import './LevelCard.css'

import { PiLightbulbFilamentBold } from 'react-icons/pi'
const LevelCard = () => {


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">


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
                                <p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Go somewhere</p>
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

                                <p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Go somewhere</p>
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

                                <p className="hover-btn btn btn-primary">  <PiLightbulbFilamentBold style={{ fontSize: "30px" }} /> Go somewhere</p>
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

                    <div className="col-6">


                    </div>







                </div>
            </div>


        </>
    )
}

export default LevelCard