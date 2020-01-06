import React from "react";

function BlogPost(props) {

    return(
        <div className="blogpost">
            <a href="#">
                <span className="title">{props.title}</span>
                <br/>
                <span style={{display: !props.subTitle && "none"}}><span className="subtitle">{props.subTitle}</span>
                </span>
            </a>
            <br/>
            <p className="byline">Posted by <a href="#" className="author">{props.author}</a> on {props.date} </p>
            <hr/>
        </div>
    )

}

export default BlogPost