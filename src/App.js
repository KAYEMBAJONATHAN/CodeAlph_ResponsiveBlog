import React from 'react';
import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Contact';
import Header from './Components/Header';
import BlogPost from './Components/BlogPost';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPost />
      <main>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
