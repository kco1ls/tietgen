import React from 'react';
import './Section2.css';

const Section2 = ({items}) => {
  return (
    <div className="app__section2">

      <div className="app__section2-side">
        <h1>{items[0]}</h1>
      </div>

      <div className="app__section2-side">
        <p>{items[1]}</p>
      </div>
    
    </div>
  );
}

export default Section2;
