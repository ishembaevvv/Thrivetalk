import React from 'react';
import { Items2 } from './Items2';
import pic from '../../img/item.png';


const data = [
    {
        title: "Physical Health",
        bg: '#22356F',
    },
    {
        title: "Mental Health",
        bg: '#0052C1',
    },
    {
        title: "Nutrition",
        bg: null,
        itemImg: pic,
    },
    {
        title: "Gymnastics",
        bg: '#62D0DF',
    },
    {
        title: "Crossfit",
        bg: '#DEE1FF',
    },
    {
        title: "Aerobics",
        bg: '#8F00FF',
    },
]

const container = {
    marginLeft: "40px",
    width: "90vw",
    display: "grid",
    gridTemplateColumns:" repeat(3, 1fr)",
    marginTop: "120px",
}

export default function DataItem() {
  return (
    <div style={container}>
      {
        data.map((el, id) => {
            return <Items2 
            title={el.title}
            bg={el.bg}
            itemImg={el.itemImg}
            />
        })
      }
    </div>
  )
}
