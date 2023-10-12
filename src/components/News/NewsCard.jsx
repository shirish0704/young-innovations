import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const NewsCard = ({ image, heading, paragraph }) => {
  return (
    <>
      <div className="news__card">
        <div className="news__card--image">
          <img src={image} alt="image" />
        </div>
        <div className="news__card--text">
          <h2 className="text--heading">{heading}</h2>
          <p className="text--para">{paragraph}</p>
          <button className="text--button flex items-center gap-2">
            Learn More <AiOutlineArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
