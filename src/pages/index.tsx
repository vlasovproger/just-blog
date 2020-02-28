import React from "react";
import BlogContent from "../components/blog-content";
import Header from "../components/header";
import Footer from "../components/footer";
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
};

export default HomePage;
