import React from "react";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../../Assets/gear-fill.svg";
import X_Icon from "../../Assets/x.svg";
import { useFormContext } from "../../Common/Contex/ContexProvider";
import Swal from 'sweetalert2';

export default function Name() {
  const { titleName, setTitleName, desName, setDesName } = useFormContext();
  
  const navigate = useNavigate();

  // const handleSave = () => {
    
  //   localStorage.setItem(
  //     "formDataName",
  //     JSON.stringify({ titleName, desName })
  //   );
  //   alert("Data saved successfully!");
  //   console.log("Form data:",titleName,desName)
  // };
  const handleSave = () => {
    localStorage.setItem(
      "formDataName",
      JSON.stringify({ titleName, desName })
    );
  
    Swal.fire({
      title: 'Success!',
      text: 'Data saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });
  
    // Keep the console.log for debugging purposes
    console.log("Form data:", titleName, desName);
  };

  // const handleDiscard = () => {
  //   setTitleName("Enter your Name");
  //   setDesName("This will be used to contact you for the next steps.");
  //   alert("Changes discarded!");
  // };
  const handleDiscard = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'All changes will be discarded!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, discard it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        setTitleName('Enter your Name');
        setDesName('This will be used to contact you for the next steps.');
  
        Swal.fire(
          'Discarded!',
          'Your changes have been discarded.',
          'success'
        );
      }
    });
  };
  

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="vh-100 d-flex flex-column col-12 p-4 gap-3">
      <div className="d-flex flex-row mt-2 justify-content-between">
        <div className="d-flex flex-row gap-2">
          <img src={SettingIcon} alt="Dashboard" />
          <span className="fw-bold fs-5">Setting</span>
        </div>
        <div
          onClick={handleClose}
          className="col-1 d-flex justify-content-center align-items-center border border-3 rounded"
        >
          <img type="button" src={X_Icon} alt="X_Icon" />
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <div className="d-flex flex-column gap-1">
          <span className="fw-semibold">First Name</span>
          <input
            
            className="inputFeild border rounded"
              
            placeholder="Enter your Name"
            value={titleName}
            onChange={(e) => setTitleName(e.target.value)}
          />
          
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column gap-1">
          <span className="fw-semibold">Second Name</span>
          <input
            type="text"
            className="inputFeild border rounded"
            placeholder="Enter your second name"
            value={desName}
            onChange={(e) => setDesName(e.target.value)}
          />
        </div>
      </div>

      <div className="col-12 d-flex flex-row gap-3 justify-content-center">
        <div
          onClick={handleSave}
          type="button"
          className="save_button col-5 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
        >
          <span className="fs-6 ">Save</span>
        </div>
        <div
          onClick={handleDiscard}
          type="button"
          className="discard_button col-5 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
        >
          <span className="fs-6 text_style">Discard</span>
        </div>
      </div>
    </div>
  );
}
