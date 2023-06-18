import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";
import { FEATURES } from "../../service/fakeData";
const Features = () => {
    return (
        <div className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h1>
                <p className="gradient__text">
                    Request Early Access to Get Started
                </p>
            </div>
            <div className="gpt3__features-blank" />
            <div className="gpt3__features-container__feature">
                {FEATURES.map((item, index) => {
                    return (
                        <Feature
                            key={index}
                            title={item.title}
                            text={item.content}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
