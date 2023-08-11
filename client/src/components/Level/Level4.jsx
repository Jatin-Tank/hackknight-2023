import React from 'react'
import Navbar from '../Navbar/Navbar'
import './levelStyle.css'

const Level4 = () => {
  return (
    <>
           <Navbar home="Home" hindi="Hindi Quiz" english="English Quiz"/>

            <div className="container w-50">
                <div className="row">
                    <h1 className='levelHeading'>Crypto Currency</h1>
                    <p className="levelParagraph"> Imagine cryptocurrency as a special kind of digital money that's like tokens in a game you play on the computer. You can't touch it, but you can use it to buy things or trade with friends. It's not kept in a piggy bank but in a safe digital wallet. And just like how you collect different game tokens, there are many types of cryptocurrencies, each with its own rules!
                    </p>
                    <h1 className='levelHeading'>What is BLOCKCHAIN?</h1>
                    <p className="levelParagraph"> Think of a blockchain as a special chain of blocks, kind of like a necklace made of toy blocks. Each block has something important written on it, like a secret code. Once a block is added, it's locked and can't be changed. Everyone has a copy of this chain, and they all agree on what's written. It's like having a super secure treasure map that nobody can change without everyone knowing. People use this to keep track of things they want to remember, just like you remember your favorite toys.
                    </p>
                    <h1 className='levelHeading'>Types of Crypto-Coins</h1>

                    <div className="setup">
                        <ul>
                            <li><strong>Bitcoin (BTC):</strong>The first and most well-known cryptocurrency, often referred to as digital gold. It continues to be a dominant force in the market.
</li>

                            <li><strong>Ethereum (ETH):</strong>Beyond being a cryptocurrency, Ethereum's blockchain enables developers to build decentralized applications (smart contracts) and other tokens.
                            </li>

                            <li><strong>Binance Coin (BNB)</strong> Originally created for transactions on the Binance exchange, BNB has expanded to serve various purposes within the Binance ecosystem.
                            </li>

                            <li><strong>Cardano (ADA):</strong> Known for its focus on sustainability and scalability, Cardano aims to improve upon blockchain technologies with scientific research.
                            </li>

                            <li><strong>Solana (SOL): </strong>  Notably known for its high-speed blockchain and ability to handle decentralized applications and crypto projects with high demand.

                            </li>
                        </ul>
                    </div>


                </div>

                <div className="row my-5">

                <iframe width="900" height="506" src="https://www.youtube.com/embed/JZk6T1TmIrs" title="What is CryptoCurrency? | Everything About Bitcoin &amp; Cryptocurrencies Explained for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            </div>


        </>
  )
}

export default Level4