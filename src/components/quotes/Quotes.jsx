import React from "react";
import "./quotes.css";
import AUTHOR1 from "../../assets/author1.webp";
import AUTHOR2 from "../../assets/author2.webp";
import AUTHOR3 from "../../assets/author3.webp";
import AUTHOR4 from "../../assets/author4.webp";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AUTHOR1,
    name: "Master Oogway",
    quote: "If you only do what you can do, you will never be more than you are now.",
  },
  {
    avatar: AUTHOR2,
    name: "Bruce Lee",
    quote:
      "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    avatar: AUTHOR3,
    name: "Terry Pratchett",
    quote: "Build a man a fire, he is warm for a night. Set a man on fire, he is warm for the rest of his life.",
  },
  {
    avatar: AUTHOR4,
    name: "Abraham Lincoln",
    quote: "I am a slow walker, but I never walk back.",
  },
];

const Quotes = () => {
  return (
    <section id="quotes">
      <h5>Snippets</h5>
      <h2>Quotes</h2>

      <Swiper
        className="container quotes__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, quote }, index) => {
          return (
            <SwiperSlide key={index} className="quote">
              <div className="author__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="author__name">{name}</h5>
              <small className="author__quote">{quote}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quotes;
