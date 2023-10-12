import React from "react";
import NewsCard from "./NewsCard";
import "./News.css";
import { TbTool } from "react-icons/tb";
import { TbFileText } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const News = () => {
  return (
    <>
      <div className="news" id="news">
        <h1 className="news__heading">News</h1>
        <p className="news__para">
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
        <div className="news__container">
          <NewsCard
            image={"/images/flag.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
          <NewsCard
            image={"/images/house.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
          <NewsCard
            image={"/images/hands.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
          <NewsCard
            image={"/images/city.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
          <NewsCard
            image={"/images/instruction.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
          <NewsCard
            image={"/images/laptop.png"}
            heading={"Statement from the Catalogue Coalition..."}
            paragraph={
              "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..."
            }
          />
        </div>
        <button className="news__card--button py-[10px] px-[16px] ">
          View all news
        </button>
      </div>

      <div className="resources" id="resources">
        <h1 className="resources__heading">Resources</h1>
        <p className="resources__para">
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
        <div className="resources__container">
          <div className="resources__card">
            <div className="resources__card--icon">
              <div className="resources--icon1">
                <TbTool />
              </div>
              <h1>Tool</h1>
            </div>
            <div className="resources__card--text">
              <h2 className="resources__card--heading">Defence Elvis</h2>
              <p className="resources__card--para">
                It allows creating networks of public spending on goods services
                used in defense in 28 EU countries...
              </p>
              <button className="resources__card--button flex items-center gap-2">
                Learn More <AiOutlineArrowRight className="text-sm" />
              </button>
            </div>
          </div>
          <div className="resources__card">
            <div className="resources__card--icon">
              <div className="resources--icon2">
                <TbFileText />
              </div>
              <h1>Evidence</h1>
            </div>
            <div className="resources__card--text">
              <h2 className="resources__card--heading">Open Procurement</h2>
              <p className="resources__card--para">
                It allows creating networks of public spending on goods services
                used in defense in 28 EU countries...
              </p>
              <button className="resources__card--button flex items-center gap-2">
                Learn More <AiOutlineArrowRight className="text-sm" />
              </button>
            </div>
          </div>
          <div className="resources__card">
            <div className="resources__card--icon">
              <div className="resources--icon3">
                <BsCheckLg />
              </div>
              <h1>Best Practices</h1>
            </div>
            <div className="resources__card--text">
              <h2 className="resources__card--heading">Transparent Spending</h2>
              <p className="resources__card--para">
                It allows creating networks of public spending on goods services
                used in defense in 28 EU countries...
              </p>
              <button className="resources__card--button flex items-center gap-2">
                Learn More <AiOutlineArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
        <button className="resources__button">View all resources</button>
      </div>
    </>
  );
};

export default News;
