import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio v1 image" />
          </div>
          <h3>Portfolio_v1</h3>
          <a
            href="https://github.com/cashewna/portfolio"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://cashewna.github.io/portfolio/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
