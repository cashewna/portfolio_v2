import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";

{
  /* Generate portfolio items from array using map method */
}
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio v1",
    github: "https://github.com/cashewna/portfolio",
    demo: "https://cashewna.github.io/portfolio/",
  },
  {
    id: 2,
    image: IMG2,
    title: "GI Artifacts Calculator",
    github:
      "https://github.com/cashewna/GenshinImpact-Decent-Artifacts-Average-Runs",
    demo:
      "https://github.com/cashewna/GenshinImpact-Decent-Artifacts-Average-Runs",
  },
  {
    id: 3,
    image: IMG3,
    title: "Assembly Rock Paper Scissors",
    github: "https://github.com/cashewna/marie",
    demo: "https://github.com/cashewna/marie",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
