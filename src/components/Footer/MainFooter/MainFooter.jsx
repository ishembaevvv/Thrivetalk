import React from 'react'
import mainfooter from '../../../css/MainFooter.module.css';

export const MainFooter = () => {
  return (
    <div className={mainfooter.wrapper}>
      <table>
  <tbody>
    <tr className={mainfooter.title}>
      <td>SOME INFO</td>
      <td>ENFOLD HEALTH</td>
      <td>OFFICE HOURS</td>
    </tr>
    <tr> 
      <td>
      Lorem ipsum dolor sit amet,<br /> 
      consectetuer adipiscing elit. <br /> 
      Aenean commodo ligula.
      </td>
      <td>
      Main Street 1, Olcott <br />
    Buffalo, United States <br />
    +555 283 784 333 <br />
   <span>office@enfold-health.com </span>
      </td>
      <td>
      Mo-Fr: 8:00-19:00 <br />
    Sa: 8:00-14:00 <br />
    Su: closed
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

