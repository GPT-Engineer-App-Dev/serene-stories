import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blogPosts }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <Link to="/add-blog-post" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block">
        Add New Blog Post
      </Link>
      <ul className="space-y-6">
        {blogPosts.map((post, index) => (
          <li key={index} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600"><em>{post.date}</em></p>
            <p className="mt-2">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;