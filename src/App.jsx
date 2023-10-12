import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
