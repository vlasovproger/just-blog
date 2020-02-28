import React from "react";
import ContactContent from "../components/contact-content";
import Header from "../components/header";
import Footer from "../components/footer";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
};

export default ContactPage;