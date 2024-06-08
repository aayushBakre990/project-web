import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {

    const [gif, setGif] = useState("./images/card/netflixLogoStatic.gif");

    function mouseEnter() {
        setGif("./images/card/netflixLogo.gif");
    }

    function mouseLeave() {
        setGif("./images/card/netflixLogoStatic.gif");
    }

    return (
        <>
            <ul className="nav-list x-list" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <li><img src={gif} /></li>
            </ul>
        </>
    );
}