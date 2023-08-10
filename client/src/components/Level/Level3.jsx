import React from 'react'
import Navbar from '../Navbar/Navbar'
import './levelStyle.css'

const Level3 = () => {
    return (
        <>
            <Navbar home="Home" profile="Profile" expenses="Expenses" />


            <div className="container w-50">
                <div className="row">
                    <h1 className='levelHeading'>Stock Market</h1>
                    <p className="levelParagraph"> Imagine the stock market like a big store where people can buy and sell tiny pieces of special companies. Do you know how you can have a piece of a puzzle? Well, in the stock market, you can have a tiny piece of a company. When the company does well and lots of people want its pieces, the price goes up. And if the company isn't doing so well, the price might go down. People can trade these pieces and try to make more money or share in the company's success. Just like how you trade stickers with your friends.
                    </p>
                    <h1 className='levelHeading'>Stock Exchange</h1>
                    <p className="levelParagraph"> Imagine you have puzzle pieces of your favorite picture, and someone else has pieces too. You can go to the exchange and trade your pieces with theirs. When lots of people want those pieces of a company, the price goes up, just like when a toy is really popular. And if not many people want them, the price might go down.
                        People go to the stock exchange to buy these puzzle pieces when they think the company will do well, and they sell them when they think it might not do well. Just like when you trade toys with your friends, these puzzle pieces are about companies!

                    </p>



                </div>

                <div className="row my-5">

                    <iframe width="900" height="506" src="https://www.youtube.com/embed/3UF0ymVdYLA" title="Stock Market For Beginners | How can Beginners Start Investing in Share Market | Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            </div>


        </>
    )
}

export default Level3
