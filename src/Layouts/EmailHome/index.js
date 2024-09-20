import React from "react";
import { useFormContext } from "../../Common/Contex/ContexProvider.js";
import "./emailHome.css";

export default function EmailHome() {
  const { titleEmail, desEmail } = useFormContext();

  return (
    <div className="col-12 d-flex flex-row align-items-center justify-content-center main_Wrapper gap-5">
      <div className=" col-8 d-flex flex-column gap-3 ">
      
        <span className="fs-2">{titleEmail || "Enter Your Email Here"}</span>
        <span className="fs-5">
          {desEmail || "This will be used to contact you for the next steps."}
        </span>
        <input placeholder="Type Here" className="col-9 input_Email" />
      </div>
    </div>
  );
}
