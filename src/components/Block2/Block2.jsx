import React from "react";
import block2 from "../../css/Block2.module.css";
import img2 from "../../img/christopher-campbell-40367.png";

export function Block2() {
  return (
    <div className={block2.Block2}>
      <div className={block2.texts}>
        <h3 className={block2.title}>Why Thrive?</h3>

        <p className={block2.paragraph}>
          Want to improve your well-being from the comfort <br />
          of your own couch? Are you having trouble finding <br />
          the right therapist?{" "}
          <span>
            {" "}
            Here at ThriveTalk, our licensedbr <br />
            therapists provide the same quality care you would get in office{" "}
            <br />
            from anywhere you can access your laptop or mobile phone. <br />
            Become your best self with ThriveTalk. Start therapy now with a{" "}
            <br />
            licensed therapist!
          </span>
        </p>
      </div>

      <img src={img2} alt="" className={block2.img} />
    </div>
  );
}
