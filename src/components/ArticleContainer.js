import React, { useContext } from 'react';
import Article1 from './Article1';
import Article2 from "./Article2";
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Ranking from "./Ranking";
import { ArticleContext } from '../contexts/ArticleContext';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 5rem;
  text-align: center;
`

const ArticleContainer = () => {
  const [articles] = useContext(ArticleContext);
  return(
    <Switch>
      <Wrapper>
        <Route exact path="/" render={props => <Article1 {...props} articleData={articles[0]}/>}/>
        <Route exact path="/article2" render={props => <Article2 {...props} articleData={articles[1]} />}/>
        <Route exact path="/article3" render={props => <Article3 {...props} articleData={articles[2]} />}/>
        <Route exact path="/article4" render={props => <Article4 {...props} articleData={articles[3]} />}/>
        <Route exact path="/article5" render={props => <Article5 {...props} articleData={articles[4]} />}/>
        <Route exact path="/ranking" render={props => <Ranking {...props} />}/>
      </Wrapper>
    </Switch>
  )
}

export default ArticleContainer;