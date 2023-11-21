import React from 'react';
import block1 from '../../css/Content.module.css';
import { Header } from '../Header/Header';
import img1 from '../../img/bg.png';

export const Content = () => {
  return (
    <div className={block1.Content}>
      <Header></Header>

      <div className={block1.content_box}>
        <div className={block1.texts}>
          <h3 className={block1.logo}>Thrivetalk</h3>
        
          <h1 className={block1.title}>HELPING YOU THRIVE <br /> 
          IN ALL AREAS OF LIFE</h1>

          <p className={block1.paragraph}>Our highly talented therapists can help you <br /> 
          with a range of issues including relationships, <br /> 
          sex, PTSD, depression, social anxiety, or even <br /> 
          just caring for yourself more.</p>

          <br />

          <button className={block1.btn + " " + block1.btn_gold}>WHO AM I</button>
          <button className={block1.btn + " " + block1.btn_white}>WHAT DO I DO</button>
        </div>

        <img src={img1} alt="" className={block1.img_content} />
      </div>
    </div>
  )
}
