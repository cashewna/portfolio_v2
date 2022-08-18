import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Programming Languages */}
        <div className="experience__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Programming Languages */}

        <div className="experience__techstacks">
          <h3>Tech Stacks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
