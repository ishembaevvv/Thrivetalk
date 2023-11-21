import React from 'react';
import itText from '../../css/ItemTexts.module.css';

export const ItemTexts = ({title, par, par2, par3}) => {
  return (
    <div className={itText.container}>
      <div className={itText.item}>
        <h2 className={itText.title}>{title}</h2>
        <p className={itText.par}>{par} <br /> {par2}<br />{par3}</p>
      </div>
    </div>
  )
}