import React, { useState } from "react";
import logo from "../../assets/GPT-3.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
    return (
        <>
            <p>
                <a href="#">Home</a>
            </p>
            <p>
                <a href="#">What is GPT?</a>
            </p>
            <p>
                <a href="#">Open AI</a>
            </p>
            <p>
                <a href="#">Case Studies</a>
            </p>
            <p>
                <a href="#">Library</a>
            </p>
        </>
    );
};
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(!toggleMenu)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(!toggleMenu)}
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
