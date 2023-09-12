import React from 'react';
import "../Style/home.css"

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Home Pages</h1>
        <span>My Name is :<p>Cimena Kayemba Jonathan</p></span>
        <a href="/blog" className="btn">Explore Blog</a>
      </section>

      <section className="featured-posts">
        <h2>Featured Posts</h2>
         <p>I am a Software Developer</p>
        <div className="post">
          <h3>Post 1</h3>
          <p>There's no “one-size-fits-all” answer to the question
             of how to become a software developer. Everyone is different,
              and everyone starts at a different level, which is great news 
              because it means there are various paths you can take to reach 
              the same destination.
          </p>
        </div>
        <div className="post">
          <h3>Post 2</h3>
          <p>Some people start with a foundation of technical skills or a little 
            knowledge of coding. Others start from scratch. No matter where you start, 
            there are several ways you can gain the required skills and knowledge you'll 
            need for a career in software development — and we'll show you how. But first, 
            you need to know what kind of software developer you want to be.</p>
        </div>
        <div className="post">
          <h3>Post 3</h3>
          <p>There are many different types of software developers, 
            and each has its own specific skills and responsibilities. 
            For example, front-end developers require a different tech stack 
            than back-end developers — but more on that later. Once you figure out 
            what kind of software developer you want to be, you can assess the gap between 
            your current skill set and the skill set you'll need for the role.
          </p>
        </div>
        <div className="post">
          <h3>Post 4</h3>
          Soft skills:
          <p>
             Software developers also need to have softer skills 
             that will come in handy when working with their team 
             and writing code. These skills can include
             </p>
             <p>Excellent communication</p>
             <p>Methodical commenting within code and documentation outside of programs</p>
             <p>Creativity when developing new apps and websites</p>
            <p>problem-solving abilities both for debugging and for solving business problems with code</p>
          <a href="/about">See More</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
