import React from 'react'
import itemcss from '../../css/Items.module.css';

export default function BgItems({title, bg}) {
  return (
    <div>
      <div className={itemcss.items} style={{background: bg}}>
        <div className={itemcss.line}></div>
        <h1 className={itemcss.title}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
  <circle cx="4.5" cy="4.75" r="4.5" fill="#E9B730"/>
</svg> {title}</h1>
      </div>
    </div>
  )
}
