import React, { useContext } from 'react';
import Article1 from './Article1';
import Article2 from "./Article2";
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import { ArticleContext } from '../contexts/ArticleContext';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import article1data from '../articleData/article1.json';


const Wrapper = styled.div`
  margin: 5rem;
  text-align: center;
`


const ArticleContainer = () => {
  const [articles] = useContext(ArticleContext);
  console.log(article1data)

  return(
    <Switch>
      <Wrapper>
        <Route exact path="/" render={props => <Article1 {...props} articleData={article1data} />}/>
        <Route exact path="/article2" render={props => <Article2 {...props} articleData={article1data} />}/>
        <Route exact path="/article3" render={props => <Article3 {...props} articleData={article1data} />}/>
        <Route exact path="/article4" render={props => <Article4 {...props} articleData={article1data} />}/>
        <Route exact path="/article5" render={props => <Article5 {...props} articleData={article1data} />}/>
      </Wrapper>
    </Switch>
  )
}

export default ArticleContainer;