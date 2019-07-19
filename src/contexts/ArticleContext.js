import React, { useState, createContext, useEffect } from 'react';
import article1data from "../articleData/article1";
import article2data from "../articleData/article2";
import article3data from "../articleData/article3";
import article4data from "../articleData/article4";
import article5data from "../articleData/article5";

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
  // useEffect(() => {
  //   fetchData();
  // }, [])

  // const [articleData, setArticleData] = useState([]);

  // const fetchData = async () => {
  //   const res = await fetch('https://api.github.com/repos/bbc/news-coding-test-dataset/contents/data/article-1.json');
  //   const data  = await res.json();
  //   // const data = article1data;
  //   setArticleData(data);
  // }

  const [articles, setArticles] = useState([
    article1data,
    article2data,
    article3data,
    article4data,
    article5data
  ])

  return(
    <ArticleContext.Provider value={[articles, setArticles]}>
      {props.children}
    </ArticleContext.Provider>

  );
}

