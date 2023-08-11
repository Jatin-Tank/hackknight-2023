import React from 'react'
import Navbar from "../Navbar/Navbar"
import stocks from "../../stock.json"
import Stock from './Stock'
const StockCaller = () => {
    return (
        <>
            <Navbar home="Home" hindi="Hindi Quiz" english="English Quiz" />
            <div className="container">
                <div className="row">
                    {
                        stocks.map((ele) => {
                            return (<Stock key={ele.symbol} company={ele.company} description={ele.description} initial_price={ele.initial_price} price_2007={ele.price_2007} symbol={ele.symbol} />)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default StockCaller