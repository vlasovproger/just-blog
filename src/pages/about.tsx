import React from "react";
import AboutContent from "../components/about-content";
import Header from "../components/header";
import Footer from "../components/footer";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
};

export default AboutPage;
