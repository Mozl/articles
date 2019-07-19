import React from 'react';

const Article4 = ({articleData}) => {
  const { title, body } = articleData;
  return(
    <div>
      <h1>{title}</h1>
      {body.map((para, key) => (
        <p key={key}>{para.model.text}</p>
      ))}
    </div>
  )
}

export default Article4;