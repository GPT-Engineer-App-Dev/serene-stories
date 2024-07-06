import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import AddBlogPost from "./pages/AddBlogPost.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Add Blog Post",
    to: "/add-blog-post",
    icon: <PlusCircle className="h-4 w-4" />,
  },
];

const App = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'Understanding React Hooks',
      date: '2023-10-10',
      description: 'A deep dive into the world of React Hooks and how they can be used to manage state and side effects in functional components.'
    },
    {
      title: 'JavaScript ES2023 Features',
      date: '2023-09-25',
      description: 'An overview of the latest features introduced in JavaScript ES2023 and how they can improve your code.'
    },
    {
      title: 'CSS Grid vs. Flexbox',
      date: '2023-09-15',
      description: 'A comparison between CSS Grid and Flexbox, and when to use each layout module in your web design projects.'
    }
  ]);

  const addBlogPost = (newPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index blogPosts={blogPosts} />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog blogPosts={blogPosts} />} />
              <Route path="contact" element={<Contact />} />
              <Route path="add-blog-post" element={<AddBlogPost addBlogPost={addBlogPost} />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;