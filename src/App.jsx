import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Changed to use navbar layout
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import AddBlogPost from "./pages/AddBlogPost.jsx";
import { useState, useEffect } from "react";
import { getTheme, setTheme } from "@/lib/utils";

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
    icon: <Home className="h-4 w-4" />,
  },
];

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [theme, setCurrentTheme] = useState(getTheme());

  const addBlogPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
              <Route index element={<Index />} />
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