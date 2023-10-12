import React from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer__top">
        <div className="footer__left">
          <a href="/">
            <div className="flex items-center cursor-pointer">
              <img
                alt="Catelog Logo"
                className="mr-3 h-6 sm:h-10"
                src="/src/assets/images/logo.png"
              />
              <span className="self-center whitespace-nowrap text-3xl text-white font-semibold max-[576px]:text-xl">
                Catalog
              </span>
            </div>
          </a>
          <div
            className="footer__left--para mt-[23px] mb-[24px]
          max-[576px]:mt-[15px] max-[576px]:mb-[16px]"
          >
            <p className="text-white text-[14px] font-400">
              We are a collaboration of non-government organisation and
              professionals working to ensure that government spending.
            </p>
          </div>
          <div className="footer__left--icons flex gap-[16px]">
            <div className="icons__icon flex items-center justify-center cursor-pointer">
              <BsTwitter />
            </div>
            <div className="icons__icon flex items-center justify-center cursor-pointer">
              <GrLinkedinOption />
            </div>
            <div className="icons__icon flex items-center justify-center cursor-pointer">
              <AiFillYoutube />
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right--links">
            <h1>Links</h1>
            <h2>
              <a href="#campaigns">Campaigns</a>
            </h2>
            <h2>
              <a href="#resources">Resources</a>
            </h2>
            <h2>
              <a href="#news">News</a>
            </h2>
            <h2>
              <a href="#about">About Us</a>
            </h2>
          </div>
          <div className="footer__right--links">
            <h1>Resources</h1>
            <h2>Transparency Toolkit</h2>
            <h2>Evidence</h2>
            <h2>Best Practices</h2>
          </div>
          <div className="footer__right--links">
            <h1>Work With Us</h1>
            <h2>
              <a href="#contact">Contact</a>
            </h2>
            <h2>Join Us</h2>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--conditions">
          <h2>Terms and Conditions</h2>
        </div>
        <div className="footer__bottom--logo">
          <img src="/src/assets/images/cclogo.png" alt="" />
          <div className="footer__bottom--logo__icon">
            <a href="#header">
              <AiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
