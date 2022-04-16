import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import HowItWorks from "./howdoesitwork";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Home()
{
  return(
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
