import React from 'react';

const Article = (props) => (
  <article className='article'>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </article>
);

export default Article;
