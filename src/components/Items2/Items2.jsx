import React from 'react';
import items2 from '../../css/Items2.module.css';

export const Items2 = ({title, bg, itemImg}) => {
  return (
    <div className={items2.container}>
        {
          bg ?
          <div className={items2.item} style={{background: bg}}>
          <div className={items2.line}></div>
          <h1 className={items2.title}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
          <circle cx="4.5" cy="4.75" r="4.5" fill="#E9B730"/>
          </svg> {title}</h1>
        </div>
        :
        <div className={items2.item} style={{backgroundImage: `url(${itemImg})`}}>
          <div className={items2.line}></div>
          <h1 className={items2.title}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
          <circle cx="4.5" cy="4.75" r="4.5" fill="#E9B730"/>
          </svg> {title}</h1>
        </div>
        }
    </div>
  )
}