const Index = ({ blogPosts }) => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <section className="hero text-center py-10 bg-blue-500 text-white">
        <h1 className="text-5xl mb-4">Welcome to Our Website</h1>
        <p className="text-xl">Discover amazing content and stay updated with our latest blog posts.</p>
      </section>
      <section className="recent-posts py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-6">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <div key={index} className="post bg-white p-4 shadow-md">
                <h3 className="text-2xl mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2"><em>{post.date}</em></p>
                <p className="text-gray-700">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;