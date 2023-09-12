import "../Style/about.css"

const About = () => {
    return(
      <section className="about-intro">
        <h2>About Us</h2>
        <p>
          Welcome to our blog! We are passionate about sharing knowledge and
          experiences with our readers.
        </p>
        <p>
            It's not uncommon for many software developers to start their journey with
             a sense of uncertainty or even humor. The world of coding and development 
             can seem mysterious and daunting at first, but with determination and a passion 
             for problem-solving, it can lead to a fulfilling and rewarding career. 
             Your experience of it starting "like a joke" is something many developers 
             can relate to. Here's a short anecdote you can use to share your journey:
        </p>
        <div>
          <h3>From Jokes to Code: My Software Development Journey</h3>
          <h4 className="about">
          "My journey as a software developer started like a joke. I used to think coding 
          was a foreign language, and computers were mysterious black boxes.
          "The Jokester Phase:

          "In the beginning, I would crack jokes about how coding was just a bunch of random characters, like a secret code that only a chosen few could decipher. I'd laugh and say, 'Who needs to talk to computers anyway?'"
           The Curiosity Spark:

          "But one day, curiosity got the better of me. I decided to dip my toes into the world of coding. I began with simple online tutorials that promised to teach even a 'jokester' like me how to write code."
           The "Aha!" Moment:

         "To my surprise, I had my first 'aha!' moment. I realized that coding was like solving puzzles, and I
        </h4>
        <a href="/blog">See More</a>
        </div>
      </section>
    )
  }
  export default About;