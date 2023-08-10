import React from 'react'
import Navbar from '../Navbar/Navbar'
import './levelStyle.css'


const Level2 = () => {
    return (
        <>
            <Navbar home="Home" profile="Profile" expenses="Expenses" />
            <div className="container w-50">
                <div className="row">


                    <h2>Since we talked about interests in the last level, why not get into depth?</h2>
                    <p className="levelParagraph">Interest is like a little extra bit of money that you get when you let someone borrow your money or when you keep your money in a special place. It's like a bonus for letting others use your money. If you lend your friend some money, they might give you a bit more money back as a thank you. Or if you keep your money in a bank, the bank might give you some extra money called "interest" for keeping it there. It's like a reward for sharing or keeping your money safe.
                        <br />
                        Suppose you have a magical money jar. When you put money in it, it grows over time, and that extra money is like a little gift. That's interest!
                        <br />
                        Now, there are two types of interest: Simple Interest and Compound Interest.
                    </p>
                    <div className="setup">
                        <ul>
                            <li><strong>Simple Interest:</strong> It's like getting a little present every year for the money you put in the jar. The gift is always the same, no matter how long your money stays in the jar. So, if you have more money in the jar, the gift will be bigger.</li>

                            <li><strong>Compound Interes:</strong>This is like getting a present not just on the money you put in but also on the presents you got before! So, each year, your gift gets bigger because it's like you're getting a present on your presents.
                            </li>
                        </ul>
                        <p className='levelParagraph'>In simple words, simple interest is when you only get a gift on your original money, and compound interest is when you get gifts on your original money and all the gifts you got before. It's like the magical jar giving you more and more gifts as time goes by!
                        </p>
                    </div>


                </div>

                <div className="row my-5">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/osrEYgE1mPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default Level2
