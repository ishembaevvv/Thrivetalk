import React from 'react';
import block6 from '../../css/Block6.module.css';
import img4 from '../../img/charles-etoroma-390119.png';

export const Block6 = () => {
  return (
    <div className={block6.container}>
        <div className={block6.texts}>
        <p className={block6.title}>CONTACT US</p>

        <h1 className={block6.name}>Ready. Set. Smile</h1>

        <h2 className={block6.text}>
        Take the free online assessment to <br /> 
        see if you are a candidate and get <br /> 
        started on your journey.
        </h2>

        <p className={block6.mini}>GET HELP NOW</p>
        </div>

        <img src={img4} alt="" className={block6.img} />
    </div>
  )
}

