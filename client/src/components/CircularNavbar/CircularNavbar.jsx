import React from 'react'
import './CircularNavbar.css'

const CircularNavbar = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="logo">
                            <a href="/">logo</a>
                        </div>
                        <input type="checkbox" id="nav-check" />
                        <label htmlFor="nav-check" className="nav-toggler">
                            <span></span>
                        </label>
                        <nav className="nav">
                            <ul>
                                <li><a href="/" className="active">home</a></li>
                                <li><a href="/">about</a></li>
                                <li><a href="/">services</a></li>
                                <li><a href="/">portfolio</a></li>
                                <li><a href="/">testimonials</a></li>
                                <li><a href="/">contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}

export default CircularNavbar
