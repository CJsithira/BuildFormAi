import React from "react";
import CheckIcon from "../../Assets/check-lg.svg";
import DropdownIcon from "../../Assets/chevron-down.svg";
import MailIcon from "../../Assets/envelope.svg";
import ExclamationIcon from "../../Assets/exclamation-circle.svg";
import FileIcon from "../../Assets/file.svg";
import GlobleIcon from "../../Assets/globe2.svg";
import PenIcon from "../../Assets/pen.svg";
import SectionIcon from "../../Assets/pencil-square_1.svg";
import PhoneIcon from "../../Assets/telephone.svg";
import CloseIcon from "../../Assets/x-lg.svg";
import Swal from 'sweetalert2'; 
import "./PopUp.css";

export default function Popup({ onClick, addButton }) {
  const handleClose = () => {
    onClick();
  };

  const handleButtonClick = (label) => {
    addButton(label);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${label} field added!`,
      showConfirmButton: false,
      timer: 1500,
    });
    onClick(); // Close the popup after adding the button
  };

  return (
    <div className="col-12 popup-overlay d-flex justify-content-center">
      <div className="col-7 popup-content d-flex flex-column gap-4">
        <div className="col-12 d-flex flex-row justify-content-between">
          <span className="popupHeader fw-bold fs-5">Add New Field</span>
          <div type="button" onClick={handleClose} className="me-1">
            <img src={CloseIcon} alt="CloseIcon" />
          </div>
        </div>
        <div className="d-flex flex-column gap-4 ps-3 pe-3">
          <div className="col-12 d-flex flex-row gap-3">
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Multiple Choice")}
            >
              <img src={CheckIcon} alt="Check" />
              <span className="fw-semibold">Multiple Choice</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Short Text")}
            >
              <img src={PenIcon} alt="Pen" />
              <span className="fw-semibold">Short Text</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Email")}
            >
              <img src={MailIcon} alt="Mail" />
              <span className="fw-semibold">Email</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Dropdown")}
            >
              <img src={DropdownIcon} alt="Dropdown" />
              <span className="fw-semibold">Dropdown</span>
            </div>
          </div>

          <div className="col-12 d-flex flex-row gap-3">
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Phone Number")}
            >
              <img src={PhoneIcon} alt="Phone" />
              <span className="fw-semibold">Phone Number</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Section")}
            >
              <img src={SectionIcon} alt="Section" />
              <span className="fw-semibold">Section</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Contact Information")}
            >
              <img src={ExclamationIcon} alt="i" />
              <span className="fw-semibold">Contact Information</span>
            </div>
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Legal")}
            >
              <img src={FileIcon} alt="File" />
              <span className="fw-semibold">Legal</span>
            </div>
          </div>
          <div className="col-12 d-flex flex-row gap-1">
            <div
              type="button"
              className="col-3 d-flex flex-row align-items-center gap-2"
              onClick={() => handleButtonClick("Globle")}
            >
              <img src={GlobleIcon} alt="Globle" />
              <span className="fw-semibold">Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
