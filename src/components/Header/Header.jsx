import React from "react";
import NavigationBar from "../Navbar/NavigationBar";
import "./Header.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <NavigationBar />
        <section className="hero__section">
          <motion.div
            className="hero__container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="hero__container--heading"
            >
              Beautiful analytics to grow smarter
            </motion.h1>
            <motion.p variants={itemVariants} className="hero__container--para">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="hero__container--button"
            >
              Why Catalog? &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </motion.div>
        </section>
      </header>
    </>
  );
};

export default Header;
