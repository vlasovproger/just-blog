import React from "react";
import ErrorContent from "../components/error-content";
import Header from "../components/header";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <>
      <Header />
      <ErrorContent />
    </>
  );
};

export default ErrorPage;
