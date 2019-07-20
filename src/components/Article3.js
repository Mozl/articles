import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  text-align: left;
  margin: 0 5rem 0 5rem;
`

const Article3 = ({articleData}) => {
  const { title, body } = articleData;
  return(
    <div>
      <img src={body[2].model.url} alt={body[2].model.altText}></img>
      <h1>{title}</h1>
      <Body>
        {body.map((para, key) => (
          <p key={key}>{para.model.text}</p>
        ))}
      </Body>
    </div>
  )
}

export default Article3;
