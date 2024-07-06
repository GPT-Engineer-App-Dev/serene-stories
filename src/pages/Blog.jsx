import React from 'react';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    date: 'October 10, 2023',
    description: 'A deep dive into the world of React Hooks and how they can be used to manage state and side effects in functional components.'
  },
  {
    title: 'JavaScript ES2023 Features',
    date: 'September 25, 2023',
    description: 'An overview of the latest features introduced in JavaScript ES2023 and how they can improve your code.'
  },
  {
    title: 'CSS Grid vs. Flexbox',
    date: 'September 15, 2023',
    description: 'A comparison between CSS Grid and Flexbox, and when to use each layout module in your web design projects.'
  }
];

const Blog = () => {
  return (
    <div>
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