import React from "react"
import airbnblogo from "../images/airbnb-logo.png"

export default function Nav () {
    return (
        <div>
            <nav className="navbar">
                <img 
                src={airbnblogo}
                alt=""
                />
            </nav>

        </div>
    )
}