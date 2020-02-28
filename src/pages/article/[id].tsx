import React from "react";
import ArticleContent from "../../components/aricle-content";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { NextPage } from "next";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const  id  = router.query.id as string;

  return (
    <>
      <Header />
      <ArticleContent id={id} />
      <Footer />
    </>
  );
};

export default ArticlePage;
