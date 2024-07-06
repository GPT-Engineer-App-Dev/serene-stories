import React from 'react';

import { Link } from 'react-router-dom';

const Blog = ({ blogPosts }) => {
  return (
    <div>
      <Link to="/add-post">Add Blog Post</Link>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post, index) => (
        <li key={index}>
            <h2>{post.title}</h2>
            <p><em>{post.date}</em></p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;