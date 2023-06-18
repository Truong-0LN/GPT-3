import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { BLOGS } from "../../service/fakeData";
import { IMAGE } from "../../assets";
const Blog = () => {
    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article
                        image={IMAGE.BLOG01}
                        title={
                            "GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        }
                        date={"Sep 26, 2021"}
                    />
                </div>
                <div className="gpt3__blog-container__groupB">
                    <Article
                        image={IMAGE.BLOG02}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        image={IMAGE.BLOG03}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        image={IMAGE.BLOG04}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        image={IMAGE.BLOG05}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
