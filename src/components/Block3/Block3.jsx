import React from "react";
import block3 from "../../css/Block3.module.css";

export const Block3 = () => {
  return (
    <div className={block3.container}>
      <p className={block3.title}>ABOUT US</p>

      <p className={block3.paragraph}>
        We want to help you thrive! Whether you are just <br />
        looking for someone to talk to, or are struggling with a <br />
        mental wellness issue we’re here to help. Our highly <br />
        talented therapists can help you with a range of issues <br />
        including relationships, sex, PTSD, depression, social <br />
        anxiety, or even just caring for yourself more.
      </p>
    </div>
  );
};
