import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ArticleContext } from '../contexts/ArticleContext';

const SubmitButton = styled.input`
  cursor: pointer;
	background-color: rgb(28, 81, 214);
	color: white;
	border-radius: 5px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
  margin: 1rem;
  &:hover{
    background-color: rgb(59, 103, 212);
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

const Ranking = () => {
  const [articles] = useContext(ArticleContext);
  const { value:first, bind:bindFirst, reset:resetFirst } = useInput('');
  const { value:second, bind:bindSecond, reset:resetSecond } = useInput('');
  const { value:third, bind:bindThird, reset:resetThird } = useInput('');
  const { value:fourth, bind:bindFourth, reset:resetFourth } = useInput('');
  const { value:fifth, bind:bindFifth, reset:resetFifth } = useInput('');
  
  const handleSubmit = async (evt) => {
    var url = 'https://localhost:3000/rankings';
    const data = {
      first,
      second,
      third,
      fourth,
      fifth
    }
    evt.preventDefault();
    try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const dataSent = await res.json();
    
    console.log('Successfully submitted rankings:', JSON.stringify(dataSent))
    } catch (error) {
      console.error('Error in submitting ranking data:', error)
    }
    resetFirst();
    resetSecond();
    resetThird();
    resetFourth();
    resetFifth();
  }

  return(
    <div>
      <h1>Rank the articles</h1>
      <form aria-label="ranking-form" id="ranking-form" onSubmit={handleSubmit}>
      <InputWrapper>
        <label id="article-1">
          Article 1 (1-5):
          <input type="text" {...bindFirst} aria-labelledby="ranking-form article-1"/>
        </label>
        <label id="article-2">
          Article 2 (1-5):
          <input type="text" {...bindSecond} aria-labelledby="ranking-form article-2"/>
        </label>
        <label id="article-3">
          Article 3 (1-5):
          <input type="text" {...bindThird} aria-labelledby="ranking-form article-3"/>
        </label>
        <label id="article-4">
          Article 4 (1-5):
          <input type="text" {...bindFourth} aria-labelledby="ranking-form article-4"/>
        </label>
        <label id="article-5">
          Article 5 (1-5):
          <input type="text" {...bindFifth} aria-labelledby="ranking-form article-5"/>
        </label>
      </InputWrapper>  
      <SubmitButton type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default Ranking;