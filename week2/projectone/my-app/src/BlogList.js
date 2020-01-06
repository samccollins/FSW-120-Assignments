import React from "react";
import blogData from "./blogData";
import BlogPost from "./BlogPost";

  
    function BlogList(props) {

        const blogComponents = blogData.map(blog => 
        <BlogPost key = {blog.id} title = {blog.title} subTitle = {blog.subTitle} author = {blog.author} date = {blog.date} />);

        return (
            <div className="blogcontainer">
                <div className="blogposts">
                    <div className="blogtext">
                        {blogComponents}
                        <a href="#" className="olderbtn">Older Posts →</a>
                    </div>
                </div>
            </div>
        )
    }


  export default BlogList;