import React from 'react';
import { ItemTexts } from './ItemTexts';

const data = [
    {
        title: "Nutritional Plans",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
    {
        title: "Weight Loss",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
    {
        title: "Mental Peaces",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
    {
        title: "Home Training",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
    {
        title: "Work/Life Balance",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
    {
        title: "Cardio",
        par1: "Nutritional Facts on some shitty things that",
        par2: "you don’t care about and even we don’t , I",
        par3: "need to replace this copy.",
    },
];

const container = {
    marginTop: "22px",
    marginLeft: "40px",
    width: "90vw",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
}

export function DataBlocks() {
  return (
    <div style={container}>
      {
        data.map((item, id) => {
            return <ItemTexts 
            title={item.title}
            par={item.par1}
            par2={item.par2}
            par3={item.par3}
            />
        })
      }
    </div>
  )
}
