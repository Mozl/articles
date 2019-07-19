import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  text-align: left;
  margin: 0 5rem 0 5rem;
`

const Article1 = ({articleData}) => {
  const { title, body } = articleData;

  return(
    <div>
      <img className="image" src={body[2].model.url} alt={body[2].model.altText} aria-label="Random hero image"></img>
      <h1 className="heading" aria-label="Article title">{title}</h1>
      <Body className="body-paragraph" aria-label="Article body">
      {body.map((para, key) => (
        <p key={key}>{para.model.text}</p>
      ))}
      </Body>
    </div>
  )
}

export default Article1;
