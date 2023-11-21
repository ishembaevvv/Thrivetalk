import React from 'react'
import headercss from '../../css/Header.module.css';

export const Header = () => {
  return (
    <div className={headercss.Header}>
      <h1 className={headercss.logo}>Thrivetalk</h1>

      <nav className={headercss.item_list}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </nav>

      <button className={headercss.header_btn}>CONTACT US</button>
    </div>
  )
}

