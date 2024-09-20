import React from "react";
import { useFormContext } from "../../Common/Contex/ContexProvider.js";
import "./welcomeHome.css";
import { useNavigate } from "react-router-dom";

export default function WelcomeHomePage() {
  const { title, description, image } = useFormContext();
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate("/name");
  };
  

  return (
    <div className="col-12 d-flex flex-row align-items-center main_Wrapper ms-5 gap-5">
      <div className="col-4 d-flex flex-column gap-3 ">
        <span className="fs-1 fw-bold">{title || "Welcome to our form"}</span>
        <span className="fs-5 fw-semibold">
          {description || "This is the description of the form."}
        </span>
       <div>
          <div onClick={onClickStart}
            type="button"
            className="save_button col-4 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
          >
            <span className="fs-5" >Start</span>
          </div>
        </div>
      </div>
      <div className="col-8 ms-5">
        {image && (
          <div className="col-12">
            <img
              src={image}
              alt="Uploaded"
              className="rounded-3"
              style={{ width: "500px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
