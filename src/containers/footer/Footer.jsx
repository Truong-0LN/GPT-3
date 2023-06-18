import React from "react";
import "./footer.css";
import { IMAGE } from "../../assets";
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-button">
                <button>Request Early Access</button>
            </div>
            <div className="gpt3__footer-info">
                <div className="gpt3__footer-info__content">
                    <img src={IMAGE.GPT_3} alt="logo gpt - 3" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className="gpt3__footer-info__content">
                    <h4>Links</h4>
                    <ul>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="gpt3__footer-info__content">
                    <h4>Company</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="gpt3__footer-info__content">
                    <h4>Get in touch</h4>
                    <ul>
                        <li>Crechterwoord K12 182 DK Alknjkcb</li>
                        <li>085-132567</li>
                        <li>info@payme.net</li>
                    </ul>
                </div>
            </div>
            <div className="gpt3__footer-ending">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
