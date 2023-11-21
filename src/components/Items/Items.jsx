import React from 'react';
import itemcss from '../../css/Items.module.css';
import BgItems from './BgItems';


export const Items = () => {
  return (
    <div className={itemcss.container}>
      <BgItems bg="#FFE2DE" title="Weight Lifting"></BgItems>
      <BgItems bg="#C4E769" title="Running  & Spinning"></BgItems>
      <BgItems bg="#62D0DF" title="Pumping Iron"></BgItems>
      <BgItems bg="#0052C1" title="Pumping Iron"></BgItems>
    </div>
  )
}

