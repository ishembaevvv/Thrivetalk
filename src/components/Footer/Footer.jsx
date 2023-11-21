import React from 'react';
import footer from '../../css/Footer.module.css';
import { ImgFooter } from './ImgFooter/ImgFooter';
import { MainFooter } from './MainFooter/MainFooter';


const Footer = () => {
  return (
    <div className={footer.container}>
      <ImgFooter></ImgFooter>
      <MainFooter></MainFooter>
    </div>
  )
}

export default Footer
