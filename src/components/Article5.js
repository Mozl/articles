import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Image = styled.img`
  padding: .5rem;
`

const Article5 = ({articleData}) => {
  const { title, body } = articleData;
  return(
    <div>
      <ImageContainer>
        <Image src={body[1].model.url} alt={body[1].model.altText}></Image>
        <Image src={body[2].model.url} alt={body[2].model.altText}></Image>
      </ImageContainer>
      <h1>{title}</h1>
      {body.map((para, key) => (
        <p key={key}>{para.model.text}</p>
      ))}
      <Link to="/ranking"><span role="img" aria-label="ranking">⭐️</span> Rank Articles</Link>
    </div>
  )
}

export default Article5;