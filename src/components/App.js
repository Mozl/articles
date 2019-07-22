import React from 'react';
import Nav from './Nav';
import ArticleContainer from './ArticleContainer';
import { ArticleProvider } from '../contexts/ArticleContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const slowConnection = window.setTimeout(() => {
    alert("the page is taking its sweet time loading");
  }, 5000);

  window.addEventListener('load', () => {
      window.clearTimeout(slowConnection);
  }, false);
  const offlineWarning = () => {
    alert("No network connection")
  }
  window.addEventListener('offline', offlineWarning);
  return (
    <ArticleProvider>
      <Router>
        <div className="App">
          <Nav />
          <ArticleContainer as={ArticleContainer} />
        </div>
      </Router>
    </ArticleProvider>
  );
}

export default App;
