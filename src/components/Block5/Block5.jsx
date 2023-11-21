import React from 'react';
import block5 from '../../css/Block5.module.css';
import img3 from '../../img/linkedin-sales-navigator-402831.png';

export const Block5 = () => {
  return (
    <div className={block5.container}>
      <img src={img3} alt="" className={block5.img} />

      <div className={block5.texts}>
        <p className={block5.title}>YOU SHOULD ALSO KNOW</p>

        <h1 className={block5.text}>
        MDD affects more than 16.1 million <br /> 
        American adults, or about 6.7%of the U.S. <br /> 
        population age 18 and older in a given year. <br /> 
        We at <span>ThriveTalk</span> can help you.
        </h1>

        <p className={block5.mini}>GET HELP NOW</p>
      </div>
    </div>
  )
}

