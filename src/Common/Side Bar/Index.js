import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPng from "../../Assets/box.svg";
import RightArrow from "../../Assets/chevron-right.svg";
import SettingIcon from "../../Assets/gear-fill.svg";
import ListIcon from "../../Assets/list.svg";
import PlusIcon from "../../Assets/plus-lg.svg";
import CloudIcon from "../../Assets/cloud-fill.svg"
import DeleteIcon from "../../Assets/trash.svg";
import X_Icon from "../../Assets/x.svg";
import ButtonSection from "../Button_Section/index";
import Popup from "../Pop up/index.js";
import "./SideBar.css";

export default function Sidebar() {
  const [showPopup, setShowPopup] = useState(false);
  const [buttons, setButtons] = useState([]);
  const navigate = useNavigate();
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleClose = () => {
    setShowPopup(false);
  };
  const addButton = (label) => {
    setButtons((prevButtons) => [...prevButtons, { label }]);
  };
  const addCloseButton = (index) => {
    setButtons((prevButtons) => {
      return prevButtons.filter((_, i) => i !== index);
    });
  };

  const handleButtonClick = (label) => {
    if (label === "Welcome Screen") {
      navigate("/welcome");
    }  if (label === "Enter Your Email") {
      navigate("/email");
    }if (label === "Enter Your Name") {
      navigate("/name");
    }
  };
  return (
    <div className="vh-100 d-flex flex-column col-12 p-4 gap-3">
      <div className="d-flex  col-12 flex-row mt-2 justify-content-between">
        <div className="d-flex col-10 flex-row gap-2">
          <img src={DashboardPng} alt="Dashboard" />
          <text>Dashboard</text>
          <img src={RightArrow} alt="RightArrow" />
          <text>Demo Form</text>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <img src={SettingIcon} alt="Dashboard" />
        </div>
      </div>
      <div className="">
        <ButtonSection />
      </div>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row align-items-center gap-2">
          <img src={ListIcon} alt="ListIcon" style={{ height: "20px" }} />
          <span className="stepsFont fw-bold">Steps</span>
        </div>
        <span className="discriptionText">
          The steps user will take to complete the form
        </span>
      </div>
      <div className="d-flex upperWrapper flex-column gap-2">
        <div
          type="button"
          onClick={() => handleButtonClick("Welcome Screen")}
          className="sideBar_Feilds rounded-2 d-flex justify-content-center align-items-center"
        >
          <div className="fs-6 text-center">Welcome Screen</div>
        </div>

        <div
          type="button"
          className="sideBar_Feilds rounded-2 d-flex justify-content-center align-items-center"
          onClick={() => handleButtonClick("Enter Your Name")}
        >
          <div className="fs-6  col-9 text-center">Enter Your Name</div>
          <div className="d-flex justify-content-center aign-items-center">
            <img type="button" src={X_Icon} alt="X_Icon" />
          </div>
        </div>

        <div
          type="button"
          onClick={() => handleButtonClick("Enter Your Email")}
          className="sideBar_Feilds rounded-2 d-flex justify-content-center align-items-center"
        >
          <div className="fs-6 col-9 text-center">Enter Your Email</div>
          <div className="d-flex justify-content-center align-items-center">
            <img type="button" src={X_Icon} alt="X_Icon" />
          </div>
        </div>
        
        
      
        {buttons.map((btn, index) => (
          <div
            key={index}
            className="sideBar_Feilds rounded-2 d-flex justify-content-center align-items-center"
          >
            <div className="fs-6 col-9 text-center">{btn.label}</div>
            <div className="d-flex justify-content-center aign-items-center">
              <img
                type="button"
                src={X_Icon}
                alt="X_Icon"
                onClick={() => addCloseButton(index)}
              />
            </div>
          </div>
        ))}
        <div className="mt-5">
        <div
          type="button"
          onClick={togglePopup}
          className="col-4 d-flex flex-row border rounded-3 justify-content-center align-items-center gap-2"
        >
          <img src={PlusIcon} alt="PlusIcon" />
          <span>Add Field</span>
        </div>
        <hr></hr>
        <div
          type="button"
          onClick={() => handleButtonClick("Welcome Screen")}
          className="sideBar_Feilds rounded-2 d-flex justify-content-center align-items-center"
        >
          <div className="fs-6 text-center">End Screen</div>
        </div>
      </div>

      </div>
      
      {showPopup && <Popup onClick={toggleClose} addButton={addButton} />}
     
        <div className="col-12 d-flex flex-row gap-3 justify-content-center">
        <div
          // onClick={handleSave}
          type="button"
          className="save_button  col-5 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
        >
          <img src={CloudIcon} alt="saveIcon" />
          
          <span className="fs-10 ">Save & Publish</span>
        </div>
        <div
          // onClick={handleDiscard}
          type="button"
          className="discard_button col-5 d-flex flex-row border-0 rounded-4 justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center col-12 flex-row gap-2 align-items-center "><img src={DeleteIcon} className="text-center" alt="PlusIcon" />
            <span className="fs-10  text-center text_style">Delete</span>
          </div>

          
          
          
        </div>
      </div>
    </div>
  );
}
