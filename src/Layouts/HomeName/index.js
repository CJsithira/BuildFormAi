import React from "react";
import { useFormContext } from "../../Common/Contex/ContexProvider.js";
import "./HomeName.css";
import { useNavigate } from "react-router-dom";

export default function HomeName() {
  const { titleName, desName } = useFormContext();
  const navigate = useNavigate();
  const onClickStart = () => {
    navigate("/email");
  };

  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center main_Wrapper gap-5">
      <div className=" col-8 d-flex flex-row align-items-center gap-3 ">
        <span className="fs-1 fw-bold">Hey, </span>
        <span className="fs-2">"{titleName }</span>
        <span className="fs-2">
          {desName }"
        </span>
      </div>
      <div className="col-8">
          <div
            type="button"
            className="save_button col-2 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
          >
            <span className="fs-5" onClick={onClickStart}>Next</span>
          </div>
        </div>
    </div>
  );
}
