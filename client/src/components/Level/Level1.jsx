import React from 'react'
import Navbar from '../Navbar/Navbar'
import './levelStyle.css'


const Level1 = () => {
    return (
        <>
            <Navbar home="Home" hindi="Hindi Quiz" english="English Quiz" />


            <div className="container w-50">
                <div className="row">


                    <h1 className="levelHeading">Banks</h1>
                    <p className="levelParagraph">Imagine a bank as a magical place where people keep their money safe. The bank keep the money safe and gives them a special card to use when they want to take some money out or put more in. The bank also lends money to people who need it, like when someone wants to buy a new house or start a fun project. So, a bank is like a friendly helper for money!
                    </p>
                    <h2 className="levelHeading">Functions of Bank</h2>
                    <div className="setup">
                        <ul>
                            <li><strong>Keeping Money Safe:</strong> Banks are like super-safe treasure chests where people can store their money. It won't get lost, and they can take it out whenever they want.</li>

                            <li><strong>Giving Money Cards</strong> Banks give out special cards that let people take out money or buy things without using real cash. It's like magic money!
                            </li>

                            <li><strong>Lending Money</strong> Sometimes, people need extra money to buy important things like houses or cars. Banks can lend them that money, and the person can pay it back over time.
                            </li>

                            <li><strong>Savings and Earning</strong> Banks pay a little extra money called interest to people who keep their money in the bank. So, money can grow a bit by just staying in the bank!</li>

                            <li><strong>Helping with payments</strong>Banks help pay bills and buy things online. They also let people send money to friends and family easily.
                            </li>
                        </ul>
                    </div>

                    <h1 className="levelHeading">How Banks Earn Money</h1>

                    <p className="levelParagraph"> Imagine a bank is like a big sharing place. People give their extra money to the bank to keep it safe. The bank takes a little bit of that money and lends it to others who need it, like when someone wants to buy a house or start a business. Those people pay back a bit more money, called "interest," because the bank helped them. So, the bank earns money by being a helpful middle friend and sharing!
                    </p>

                    <h2 className="levelHeading">Types of Accounts banks offers</h2>
                    <div className="setup">
                        <ul>
                            <li><strong>Savings Account:</strong> A savings account is a basic type of account that is designed for everyday banking needs. Savings accounts typically offer low interest rates, but they are insured by the government up to ₹5 lakh.
                            </li>

                            <li><strong>Current Account:</strong> A current account is a type of account that is designed for businesses and professionals. Current accounts typically offer higher interest rates than savings accounts, but they may charge fees for things like ATM withdrawals and check writing.
                            </li>

                            <li><strong>Recurring Deposit Account:</strong> A recurring deposit account is a type of savings account where you deposit a fixed amount of money each month. Recurring deposit accounts typically offer higher interest rates than savings accounts, but they may have penalties for early withdrawals.
                            </li>

                            <li><strong>Fixed Deposit Account:</strong> A fixed deposit account is a type of savings account where you deposit a lump sum of money for a fixed period of time. Fixed deposit accounts typically offer higher interest rates than savings accounts, but you cannot withdraw your money until the end of the term.
                            </li>

                            <li><strong>Certificate of Deposit (CD): </strong> A certificate of deposit (CD) is a type of investment that offers a fixed interest rate for a fixed period of time. CDs typically have minimum balance requirements and may charge fees for early withdrawals.
                            </li>

                            <li><strong>Demat Account: </strong>A Demat account is a type of account that is used to hold shares and other securities in electronic form. It is a physical document-less account that facilitates the buying, selling, and holding of securities. Demat stands for a dematerialized account.</li>

                        </ul>
                    </div>
                    <iframe width="900" height="506" src="https://www.youtube.com/embed/leIiFgI79Ek" title="How Banks Earn Money? | Business Model of Banks | Dhruv Rathee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

        </>
    )
}

export default Level1
