import React, { Fragment } from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  margin: 2rem 5rem 2rem 5rem;
  text-align: left;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
`

const Heading = styled.h1`
  text-align: left;
`

const Article = ({ body }) => (
  <Fragment>
    <BodyWrapper>
      {body.map((element, key) => {
        if(element.type === "paragraph") {
          return <p id={`body-paragraph-${key}`} key={key}>{element.model.text}</p>
        } else if (element.type === "image") {
          return <ImageWrapper key={key}><img src={element.model.url} alt={element.model.altText} id={`image-${key}`}/></ImageWrapper>
        } else if (element.type === "list") {
          return element.model.items.map((item, key) => (<li key={key}>{item}</li>))
        }
        return <HeadingWrapper key={key}><Heading id="heading">{element.model.text}</Heading></HeadingWrapper>
      })}
    </BodyWrapper>
  </Fragment>
)

export default Article;