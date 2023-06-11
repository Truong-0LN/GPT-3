import React from "react";
import { IMAGE } from "../../assets";
import "./brand.css";
const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={IMAGE.GOOGLE} alt="google" />
            </div>
            <div>
                <img src={IMAGE.SLACK} alt="slack" />
            </div>
            <div>
                <img src={IMAGE.ATLASSIAN} alt="atlassian" />
            </div>
            <div>
                <img src={IMAGE.DROP_BOX} alt="dropbox" />
            </div>
            <div>
                <img src={IMAGE.SHOPIFY} alt="shopify" />
            </div>
        </div>
    );
};

export default Brand;
