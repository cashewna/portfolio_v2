import React from "react";
import "./quotes.css";

const Quotes = () => {
  return (
    <section id="quotes">
      <h5>Snippets</h5>
      <h2>Quotes</h2>

      <div className="container quotes__container">
        <article className="quote">
          <div className="author">
            <h5 className="author__name">Master Oogway</h5>
            <small className="speech">
              If you only do what you can do, you will never be more than you
              are now.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Quotes;
