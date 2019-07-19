import React, { useState, createContext, useEffect } from 'react';

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
    {
      title: 'Article 1',
      body: 'Lorem ipsum of the first article',
      id: 0
    },
    {
      title: 'Article 2',
      body: 'Lorem ipsum of the second article',
      id: 1
    },
    {
      title: 'Article 3',
      body: 'Lorem ipsum  of the third article',
      id: 2
    },
    {
      title: 'Article 4',
      body: 'Lorem ipsum  of the fourth article',
      id: 3
    },
    {
      title: 'Article 5',
      body: 'Lorem ipsum  of the fifth article',
      id: 4
    }
  ])

  return(
    <ArticleContext.Provider value={[articles, setArticles]}>
      {props.children}
    </ArticleContext.Provider>

  );
}

