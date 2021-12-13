import React from 'react'
import { useHistory } from "react-router";

export default function Landing() {
  const { push } = useHistory();

  const onClick = () => {
    push('/projects')
  }
  return (
    <div className='landing-bg'>
      <div className='landing-container'>
        <h1 className='landing-words floating'>Christine Nguyen's Portfolio</h1>
        <button className='landing-btn' onClick={onClick}>Enter</button>
      </div>
    </div>
  );
};