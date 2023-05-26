import React from "react";
import Head from "next/head";
import { FaGitlab, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Terence Wong | Resume</title>
        <meta name="description" content="I’m a full-stack software engineer" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Terence Wong</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/terence-s-wong/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://gitlab.com/terencew17"
              target="_blank"
              rel="noreferrer"
            >
              <FaGitlab size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">Front End</span>
            <span className="px-2">|</span>DOM manipulation
            <span className="px-2">|</span>Websockets
            <span className="px-2">|</span>React
            <span className="px-2">|</span>React Hooks
            <span className="px-2">|</span>Redux Toolkit
          </p>
          <p className="py-2">
            <span className="font-bold">Back End</span>
            <span className="px-2">|</span>Django
            <span className="px-2">|</span>RabbitMQ
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>FastAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Programming Languages</span>
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>Javascript ES6+
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>HTML5
            <span className="px-2">|</span>CSS
          </p>
          <p className="py-2">
            <span className="font-bold">Skills/Tools</span>
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Microservices
            <span className="px-2">|</span>Domain-Driven Design
            <span className="px-2">|</span>Message Passing
            <span className="px-2">|</span>Event Sourcing
            <span className="px-2">|</span>Docker
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Application Development Experience
        </h5>
        {/* Experience */}
        <div className="py-3">
          <p className="italic">
            <span className="font-bold italic">To-Do List</span>
            <span className="px-2">|</span>2022
          </p>
          <p className="py-1 italic">Python, Django, CSS, HTML5</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented Django models and views to allow users to sign-up,
              create, edit, and delete tasks/projects
            </li>
            <li>MORE INFO HERE********************</li>
          </ul>
        </div>
        <div className="py-3">
          <p className="italic">
            <span className="font-bold italic">Conference GO!</span>
            <span className="px-2">|</span>2023
          </p>
          <p className="py-1 italic">Python, Django, Javascript, React</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a conference management application, adhering to the
              principles of Domain-Driven-Design, to establish a scalable and
              maintainable architecture with CRUD functionality
            </li>
            <li>
              Created a microservice that ultilized RabbitMQ for data retrieval
              and regular polling from the monolith
            </li>
            <li>
              Developed an anti-corruption layer, integrating third-party APIs:
              Pexels and OpenWeather
            </li>
          </ul>
        </div>
        <div className="py-3">
          <p className="italic">
            <span className="font-bold italic">Car Car</span>
            <span className="px-2">|</span>2023
          </p>
          <p className="py-1 italic">
            Python, Django, Javascript, React, Bootstrap
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a full stack application for dealerships consisting of
              three microservices to track inventory sales, services, and
              inventory
            </li>
            <li>
              Created RESTful APIs with Django for the sales and services
              microservice
            </li>
            <li>
              Integrated APIs from the microservices into a React single-page
              application for dynamic data presentation
            </li>
            <li>
              Implemented a poller implementation to enable communication
              between microservices
            </li>
          </ul>
        </div>
        <div className="py-3">
          <p className="italic">
            <span className="font-bold italic">Mooditor</span>
            <span className="px-2">|</span>2023
          </p>
          <p className="py-1 italic">
            Python, FastAPI, PostgreSQL, Javascript, React, TailwindCSS
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Utilized agile methodologies, including regular sprints and daily
              stand-up meetings, to ensure efficient development and effective
              collaboration within the team
            </li>
            <li>
              Designed and implemented the backend infrastructure using FastAPI,
              PostgreSQL and Docker, ensuring robustness, scalability and
              security of the application
            </li>
            <li>
              Developed RESTful APIs and database models for user
              authentication, mood and activity tracking
            </li>
            <li>
              Conducted thorough unit testing and debugging to identify and
              resolve issues, ensuring a high-quality and bug-free application
            </li>
            <li>
              Established GitLab-based continuous integration and deployment
              (CI/CD) pipelines to automate the processes of building, testing,
              and deploying
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-1">
          <p className="italic">
            <span className="font-bold">O'Reilly Auto Parts</span>
            <span className="px-2">|</span>Pleasant Hill, CA
          </p>
          <p className="py-1 italic">Manager (2019 – 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Successfully managed a 3 million dollar a-year store, overseeing
              two different departments and a team of 15 employees
            </li>
            <li>
              Maintained high levels of customer satisfaction by providing
              top-notch customer service and addressing concerns in a timely and
              professional manner
            </li>
            <li>
              Increased sales by 30% by implementing marketing strategies,
              improving store layout and merchandising, and offering promotions
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">United States Marine Corps</span>
          </p>
          <p className="py-1 italic">Sergeant (2015 – 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured mission readiness by training Marines on proper tactics
              and procedures
            </li>
            <li>
              Conducted and supervised Marines in various training exercises,
              including live-fire drills
            </li>
            <li>Maintained accurate records of personnel and equipment</li>
          </ul>
        </div>
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Education */}
        <div className="py-3">
          <p className="italic">
            <span className="font-bold">Hack Reactor</span>
            <span className="px-2">|</span>Advanced Software Engineering
            Certificate
            <span className="px-2">|</span>2023
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Over 1000 hours of coding in an Agile environment resulting in
              monolithic mastery and experience in microservice machinations and
              managed matters
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
