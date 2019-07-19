import React from 'react';

const Article1 = ({articleData}) => {
  const { title, body } = articleData;

  return(
    <div>
      <img src={body[2].model.url} alt={body[2].model.altText}></img>
      <h1>{title}</h1>

      {body.map((para, key) => (
        <p key={key}>{para.model.text}</p>
      ))}
    </div>
  )
}

export default Article1;
