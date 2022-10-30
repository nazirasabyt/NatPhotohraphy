import React, { Fragment } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Clients from "../components/about/Clients";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Clients />
      <Footer />
    </Fragment>
  );
};

export default About;
