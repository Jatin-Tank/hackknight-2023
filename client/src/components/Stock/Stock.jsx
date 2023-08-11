import React from 'react'
import './Stock.css'

const Stock = (props) => {
    return (
        <>


            <div className=" blackquote quote-box">
                <p className="quotation-mark">
                    “
                </p>
                <p className="quote-text">
                    {props.description}
                </p>
                <hr />
                <p style={{ fontSize: "25px", margin: "50px 0px" }} className="quote-text">
                    Initial Price : {props.initial_price}
                </p>
                <hr />
                <p className="quote-text">
                    Current Price : {props.price_2007}
                </p>
                <hr />
                <div className="blog-post-actions">
                    <p style={{ fontSize: "25px" }} class="blog-post-bottom pull-left">
                        {props.company}
                    </p>
                    <p className="blog-post-bottom pull-right">
                        <span style={{ fontSize: "25px" }} class="badge quote-badge">{props.symbol}</span>
                    </p>
                </div>
            </div>

        </>
    )


}

export default Stock
