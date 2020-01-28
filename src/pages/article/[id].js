import React from "react";
import ArticleContent from "../../components/aricle-content";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <ArticleContent id={id} />
      <Footer />
    </>
  );
};

export default ArticlePage;
