import React from 'react';

import './Section1.css';
import Link from 'next/link';
import Image from 'next/image'

const Section1 = ({items}) => {

  return (
    <div className="app__section1">
      
      <Link href={items[0].href} className="app__section1-card a1">
        <h1>{items[0].title}</h1>
        <div>{items[0].desc}<Image width={20} height={20} alt="go to arrow" src="/cardarrow.svg" /></div>
      </Link>

      <Link href={items[1].href} className="app__section1-card a2">
        <h1>{items[1].title}</h1>
        <div>{items[1].desc}<Image width={20} height={20} alt="go to arrow" src="/cardarrow.svg" /></div>
      </Link>

      <Link href={items[2].href} className="app__section1-card a3">
        <h1>{items[2].title}</h1>
        <div>{items[2].desc}<Image width={20} height={20} alt="go to arrow" src="/cardarrow.svg" /></div>
      </Link>

    </div>
)};

export default Section1;
