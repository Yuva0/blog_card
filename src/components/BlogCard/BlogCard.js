import React from "react";
import blogImage from "../../assets/blogImage.jpg";

import "./BlogCard.css";

const BlogCard = () => {
  const disabled = false;
  return (
    <div className="blog-card">
      <img src={blogImage} className="blog-card-image" alt="Blog" />
      <div className="blog-card-content">
        <div className="blog-card-badge">Interior</div>
        <div className="blog-card-title">Top 5 Living Room Inspirations</div>
        <div className="blog-card-description">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </div>
        <div className={`blog-card-read-more ${disabled ? "blog-card-read-more-disabled" : ""}`} tabIndex={0}>
          Read more
          <svg
            style={{ marginLeft: "8px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
