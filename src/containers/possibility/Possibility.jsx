import React from "react";
import "./possibility.css";
import { IMAGE } from "../../assets";
const Possility = () => {
    return (
        <div className="gpt3__possility section__padding">
            <div className="gpt3__possility-image">
                <img src={IMAGE.POSSIBILITY} alt="possility" />
            </div>
            <div className="gpt3__possility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Possility;
