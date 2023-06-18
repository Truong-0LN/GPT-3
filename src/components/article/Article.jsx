import React from "react";
import "./article.css";
const Article = ({ title, date, image }) => {
    return (
        <div className="gpt3__article">
            <div className="gpt3__article-image">
                <img src={image} alt="article" />
            </div>
            <div className="gpt3__article-content">
                <div>
                    <h5>{date}</h5>
                    <h2>{title}</h2>
                </div>
                <p>Read full Article</p>
            </div>
        </div>
    );
};

export default Article;
