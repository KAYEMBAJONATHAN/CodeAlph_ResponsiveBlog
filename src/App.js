import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import BlogPost from './Components/BlogPost';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BlogPost />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
