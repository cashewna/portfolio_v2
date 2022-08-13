import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Ongoing | Bachelor of Computer Science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <ul>
                <li>
                  <small>
                    <a href="https://github.com/cashewna/marie">
                      Rock Paper Scissors | MARIE assembly language
                    </a>
                  </small>
                </li>

                <li>
                  <small>
                    <a href="https://github.com/cashewna/GenshinImpact-Decent-Artifacts-Average-Runs">
                      Genshin Impact Artifacts Calculator | Python
                    </a>
                  </small>
                </li>

                <li>
                  <small>
                    <a href="https://github.com/cashewna/portfolio">
                      Portfolio v1 | HTML5, CSS3, JavaScript
                    </a>
                  </small>
                </li>
              </ul>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Hobbies</h5>
              <small>Photography, Gaming, Music, Movie and TV</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis culpa, illo ratione, hic laboriosam et possimus aliquam
            eaque dicta inventore laborum fugit eveniet, corporis tenetur
            nesciunt qui est? Temporibus!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
