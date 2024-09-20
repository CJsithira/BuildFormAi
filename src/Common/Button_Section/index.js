import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonSection.css";

export default function ButtonSection() {
  const [clickedButton, setclickedButton] = useState("Content");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setclickedButton(buttonName);

    if (buttonName === "Content") {
      navigate("/");
    }
  };

  return (
    <div className="mainWrapper col-12 d-flex flex-row border-0 rounded-1  justify-content-center align-items-center ps-1 pe-1">
      <div
        type="button"
        className={`col-3 d-flex justify-content-center align-items-center button ${
          clickedButton === "Content" ? "active" : "buttonWrapper"
        }`}
        onClick={() => handleButtonClick("Content")}
      >
        <span>Content</span>
      </div>
      <div
        type="button"
        className={`col-3 d-flex justify-content-center align-items-center button ${
          clickedButton === "Design" ? "active" : "buttonWrapper"
        }`}
        onClick={() => handleButtonClick("Design")}
      >
        <span>Design</span>
      </div>
      <div
        type="button"
        className={`col-3 d-flex justify-content-center align-items-center button ${
          clickedButton === "Share" ? "active" : "buttonWrapper"
        }`}
        onClick={() => handleButtonClick("Share")}
      >
        <span>Share</span>
      </div>
      <div
        type="button"
        className={`col-3 d-flex justify-content-center align-items-center button ${
          clickedButton === "Replies" ? "active" : "buttonWrapper"
        }`}
        onClick={() => handleButtonClick("Replies")}
      >
        <span>Replies</span>
      </div>
    </div>
  );
}