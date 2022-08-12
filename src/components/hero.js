import React from "react";
import heroimg from '../images/hero-img.png'

export default function Hero() {
    return(
        <section className="hero">
            <img src={heroimg} alt="" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>

        </section>
    )
}