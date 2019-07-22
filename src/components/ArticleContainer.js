import React, { useContext } from 'react';
import Article from './Article';
import Ranking from "./Ranking";
import { ArticleContext } from '../contexts/ArticleContext';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 2rem 5rem 2rem 5rem;
  text-align: center;
`

const ArticleContainer = () => {
  const [articles] = useContext(ArticleContext);
  return(
    <Switch>
      <Wrapper>
        {articles.map((article, key) => (
          <Route key={key} exact path={`/article${key+1}`} render={props => <Article {...props} {...article}/>} />
        ))}
        <Route exact path="/ranking" render={props => <Ranking {...props} />}/>
      </Wrapper>
    </Switch>
  )
}

export default ArticleContainer;