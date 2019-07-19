import React, { useContext, useEffect, useState } from 'react';
import Article1 from './Article1';
import Article2 from "./Article2";
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Ranking from "./Ranking";
import { ArticleContext } from '../contexts/ArticleContext';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import article1data from '../articleData/article1.json';
import article2data from '../articleData/article2.json';
import article3data from '../articleData/article3.json';
import article4data from '../articleData/article4.json';
import article5data from '../articleData/article5.json';

const Wrapper = styled.div`
  margin: 5rem;
  text-align: center;
`

const ArticleContainer = () => {
  const [articles] = useContext(ArticleContext);

  useEffect(() => {
    fetchData();
  }, [])

  const [articleData, setArticleData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://api.github.com/repos/bbc/news-coding-test-dataset/contents/data/article-1.json');
    const data = await res.json();
    JSON.stringify(data)
    // const data = article1data;
    setArticleData(data);
  }
  
  return(
    <Switch>
      <Wrapper>
        <Route exact path="/" render={props => <Article1 {...props} articleData={article1data}/>}/>
        <Route exact path="/article2" render={props => <Article2 {...props} articleData={article2data} />}/>
        <Route exact path="/article3" render={props => <Article3 {...props} articleData={article3data} />}/>
        <Route exact path="/article4" render={props => <Article4 {...props} articleData={article4data} />}/>
        <Route exact path="/article5" render={props => <Article5 {...props} articleData={article5data} />}/>
        <Route exact path="/ranking" render={props => <Ranking {...props} />}/>
      </Wrapper>
    </Switch>
  )
}

export default ArticleContainer;