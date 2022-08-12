import React from "react";

import Nav from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App () {
    return(
        <div>
            <Nav />
            <Hero />
            <Card />
            <Main />
            <Footer />
        </div>
    )
}