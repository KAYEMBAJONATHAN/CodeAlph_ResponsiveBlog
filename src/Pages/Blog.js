import React from "react";
import computer from '../Assets/computer.jpg';
import Developer from '../Assets/Developer-.jpg';
import Machine from '../Assets/Machine-.jpg';
import Background from '../Assets/Background.jpg';
import Markdown from '../Assets/Markdown-.jpg'
import Linkedin from '../Assets/Linkedin.jpeg'
import code from '../Assets/code.jpg';
import github from '../Assets/github.png'
import "../Style/blog.css";

const Blog = () => {
    return(
      <section className="social-media">
       <div>
      <h2>Connect With Us</h2>
       <img 
          src={computer} className="computer" alt="#"
       />
        <img 
          
          src={Developer} className="computer" alt="#"
       />
       <img 
          
          src={Machine} className="computer" alt="#"
       />
        <img 
          
          src={Background} className="computer" alt="#"
       />
       <img 
          
          src={Markdown} className="computer" alt="#"
       />
       <img 
          
          src={code} className="computer" alt="#"
       />
       </div> 
      <ul>
        <li>
        <a href="https://www.linkedin.com/in/cimena-kayemba/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <img src={Linkedin} className="link" alt="" />
        </li>
        <li>
        <a href="https://github.com/KAYEMBAJONATHAN" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        <img src={github} className="link" alt="" />
        </li>
      </ul>
      <a href="/contact">See More</a>
    </section>
    
    )
  }
  
  export default Blog;