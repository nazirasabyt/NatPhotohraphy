import React from "react";
import { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Intro from "../components/home/Intro";
import Services from "../components/home/Services";
import Form from "../components/home/Form";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <Services />
      <Form />
      <Footer />
    </Fragment>
  );
};

export default Home;
