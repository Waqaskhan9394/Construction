import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// All Pages Import
import { Home } from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Element from './pages/Element';

import ProjectDetails from './pages/ProjectDetails';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Projects from './pages/Projects';
import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails/>} />

        {/* Pages/Dropdown Routes */}
        <Route path="/element" element={<Element />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/services-details" element={<ServicesDetails />} />

        {/* 404 Route */}
        <Route path="*" element={<div className="pt-40 text-center text-white text-2xl">404 - Page Not Found</div>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;