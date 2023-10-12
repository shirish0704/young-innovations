import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const CampaignCard = ({ image, heading, paragraph }) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={image} alt="image" />
        </div>
        <div className="card__text">
          <h2 className="card__text--heading">{heading}</h2>
          <p className="card__text--para">{paragraph}</p>
          <button className="card__text--button flex items-center gap-2">
            Learn More <AiOutlineArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </>
  );
};
export default CampaignCard;
