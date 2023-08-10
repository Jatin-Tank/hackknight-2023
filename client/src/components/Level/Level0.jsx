import React from 'react'
import Navbar from '../Navbar/Navbar'
import './levelStyle.css'
const Level0 = () => {
    return (
        <>
            <Navbar home="Home" profile="Profile" expenses="Expenses" />


            <div className="container w-50">
                <div className="row">
                    <h1 className="levelHeading">What is finance ?</h1>
                    <p className="levelParagraph"> Imagine that you have a piggy bank. The piggy bank is like your money. You can put money in the piggy bank (by earning it or saving it), and you can take money out of the piggy bank (by spending it or investing it). <br />
                        The more money you have in your piggy bank, the more financial freedom you have. You can buy more things, go on more trips, and do more things that you enjoy. <br />
                        But you also have to be careful not to spend all of your money. You need to save some money for the future, and you also need to invest some money so that it can grow.
                    </p>

                    <h1 className="levelHeading">Investment ? What!</h1>
                    <p className="levelParagraph">
                        When you invest money, you are putting it into something that you think will make you more money in the future. <br />
                        For example, you could invest in stocks, which are shares of ownership in a company. If the company does well, the value of your stock may increase, and you can sell it for more money than you paid for it or you can simply buy Land and rent that land to generate income.
                    </p>

                    <h1 className="levelHeading">Why Invest ?</h1>
                    <p className="levelParagraph">
                        You put money in the piggy bank every week, and you never take any money out. After a few years, you have a lot of money in the piggy bank. But what if you need to use that money right now? You can't just break the piggy bank open! <br />
                        That's why you should invest your money. When you invest your money, you put it into something that will make you more money in the future. Then, when you need the money, you can sell the investment and get your money back.

                    </p>

                    <h1 className="levelHeading">What is UPI, How to setup UPI ?</h1>
                    <p className="levelParagraph">
                        Imagine you have a special magic wallet that lets you send and receive candies to and from your friends without using your hands. UPI, which stands for "Unified Payments Interface," is like a magic wallet for grown-ups in India. It helps them send and receive money from their friends, family, or even when they buy things.

                    </p>

                    <div className="setup">
                        <h2 className="levelHeading">SETUP</h2>
                        <ul>
                            <li><strong>Choose a UPI App:</strong> Download a UPI-enabled app from your smartphone's app store. Popular options in India include Google Pay, PhonePe, Paytm, and BHIM UPI.</li>

                            <li><strong>Install and Register:</strong> Install the app and open it. Follow the on-screen instructions to register your account. You'll need to provide your mobile number linked to your bank account. </li>

                            <li><strong>Select Your Bank:</strong> Choose your bank from the list provided in the app. Make sure the bank account linked to your mobile number is selected. </li>

                            <li><strong>Create UPI PIN:</strong> The app will send an SMS for verification. After that, you'll need to create a UPI PIN. This PIN will be required to authorize transactions. Set a secure PIN that only you know. </li>

                            <li><strong>Add Bank Account: </strong>Your bank account linked to the mobile number will be automatically detected. If you have multiple accounts in the same bank, you can choose which one to use. </li>

                            <li><strong>Verify Your Account: </strong>The app will guide you through verifying your account. This might involve receiving a small transaction in your bank account and entering the amount in the app for confirmation. </li>

                            <li><strong>Start Using UPI:</strong> Once your account is verified, you can start using UPI. You can send money to friends and family by entering their VPAs or scanning QR codes, pay bills, and even shop online.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Level0
