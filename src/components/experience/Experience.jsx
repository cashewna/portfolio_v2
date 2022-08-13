import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
            </article>
          </div>
        </div>

        <div className="experience__techstacks"></div>
      </div>
    </section>
  );
};

export default Experience;
