import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Activities></Activities>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
