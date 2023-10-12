import React from "react";
import CampaignCard from "./CampaignCard";
import "./About.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import SwiperCompany from "./SwiperCompany";

const About = () => {
  return (
    <>
      <div className="about__section" id="campaigns">
        <div className="about__campaign">
          <h1 className="about__campaign--heading">Campaigns</h1>
          <p className="about__campaign--para">
            We aim to stop public funds siphoning off and we have a plan that
            will help. We are working at the national and EU levels to advance.
          </p>
          <div className="about__campaign--card cursor-pointer">
            <CampaignCard
              image={"/images/people.jpg"}
              heading={"Open Data Directive"}
              paragraph={
                "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
              }
            />
            <CampaignCard
              image={"/images/research.jpg"}
              heading={"Beneficial Ownership"}
              paragraph={
                " In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
              }
            />
            <CampaignCard
              image={"/images/money.jpg"}
              heading={"EU Recovery Transparency"}
              paragraph={
                "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
              }
            />
          </div>
        </div>

        <div className="about__whoweare" id="about">
          <div className="about__whoweare--desc">
            <h1 className="about__whoweare--desc__heading">Who we are</h1>
            <p className="about__whoweare--desc__para">
              We are a collaboration of Non Govt. and professionals working to
              ensure that government spending is done fairly, openly,
              efficiently, and creates the best value for money and best
              outcomes for Europe. We are working at the national and EU levels
              to advance the principles of openness in spending of funds,
              procurement, and company ownership within the EU.
            </p>
            <button className="about__whoweare--desc__button flex items-center gap-2">
              See more <AiOutlineArrowRight className="text-sm" />
            </button>
          </div>
          <div className="about__whoweare--image">
            <div className="about__whoweare--image__left">
              <div className="about__whoweare--img">
                <img src="/images/adriana.png" alt="ardiana" />
              </div>
              <h1>Ardiana Homolova</h1>
              <div className="about__whoweare--img">
                <img src="/images/karolis.png" alt="karolis" />
              </div>
              <h1>Karolis Granickas</h1>
            </div>
            <div className="about__whoweare--image__right">
              <div className="about__whoweare--img">
                <img src="/images/sandor.png" alt="sandor" />
              </div>
              <h1>Sandor Lederer</h1>
              <div className="about__whoweare--img">
                <img src="/images/zara.png" alt="zara" />
              </div>
              <h1>Zara Montgomery</h1>
            </div>
          </div>
        </div>

        <div className="about__companies">
          <SwiperCompany />
        </div>
      </div>
    </>
  );
};

export default About;
