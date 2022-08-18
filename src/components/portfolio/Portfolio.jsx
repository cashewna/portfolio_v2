import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";

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
          <h3>Portfolio v1</h3>
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

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio v1 image" />
          </div>
          <h3>Genshin Impact Artifact Run Calculator</h3>
          <a
            href="https://github.com/cashewna/GenshinImpact-Decent-Artifacts-Average-Runs"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio v1 image" />
          </div>
          <h3>Rock Paper Scissors in Assembly</h3>
          <a
            href="https://github.com/cashewna/marie"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
