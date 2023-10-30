import React from 'react';
import Heading from './Heading';

const Blog = () => {
  return (
    <section className='container mx-auto py-10 px-4' id="blog">
      <div className="ml-10 mr-10">
        <Heading title='Blogs' />
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-5">My Blog</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Web Developer</h2>
                <p className="text-gray-500 mb-4">Published on October 30, 2023</p>
                <p>
                  Being a web developer means having the skills and knowledge to create websites and web applications. Web developers work with various programming languages, frameworks, and tools to build functional and visually appealing websites that meet the needs of clients or users.
                  <br /><br />
                  Here are some key aspects of being a web developer:
                  <br /><br />
                  Front-end Development: Front-end developers focus on the client-side of web development, which involves creating the user interface and user experience. They work with HTML, CSS, and JavaScript to design and develop the visual elements of a website or web application.
                  <br /><br />
                  Back-end Development: Back-end developers handle the server-side of web development. They work with programming languages like Python, Ruby, PHP, or JavaScript (with frameworks like Node.js) to build the logic and functionality behind a website. They deal with databases, server management, and APIs to handle data and server-side processes.
                  <br /><br />
                </p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">IS</h2>
                <p className="text-gray-500 mb-4">Published on October 30, 2023</p>
                <p>
                  An information system (IS) is a set of interconnected components that work together to collect, store, process, and distribute information within an organization. It combines people, processes, data, and technology to support business operations, decision-making, and strategic planning.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">CS</h2>
                <p className="text-gray-500 mb-4">Published on October 30, 2023</p>
                <p>
                Certainly! Computer Science (CS) is the study of computers and computational systems, including their design, development, and application. It encompasses a wide range of topics, including algorithms, data structures, programming languages, software development, computer architecture, operating systems, artificial intelligence, databases, networking, and more.

Computer Science involves both theoretical and practical aspects. Theoretical Computer Science focuses on understanding fundamental concepts and principles, such as algorithmic complexity, computability, and formal languages.                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;