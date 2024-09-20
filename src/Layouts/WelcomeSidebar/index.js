import React from "react";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../../Assets/gear-fill.svg";
import Upload from "../../Assets/upload.svg";
import X_Icon from "../../Assets/x.svg";
import { useFormContext } from "../../Common/Contex/ContexProvider";
import "./welcome.css";
import Swal from 'sweetalert2';

export default function Welcome() {
  const { title, setTitle, description, setDescription, image, setImage } =
    useFormContext();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // const handleSave = () => {
  //   localStorage.setItem(
  //     "formData",
  //     JSON.stringify({ title, description, image })
  //   );
  //   alert("Data saved successfully!");
  // };

  // const handleDiscard = () => {
  //   setTitle("Welcome to our form");
  //   setDescription("This is the description of the form");
  //   setImage(null);
  //   alert("Changes discarded!");
  // };
  const handleSave = () => {
    localStorage.setItem(
      "formData",
      JSON.stringify({ title, description, image })
    );
  
    Swal.fire({
      title: 'Success!',
      text: 'Data saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });
  };
  
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
        setTitle("Welcome to our form");
        setDescription("This is the description of the form");
        setImage(null);
  
        Swal.fire(
          'Discarded!',
          'Your changes have been discarded.',
          'success'
        );
      }
    });
  };
  

  const handleRemoveImage = () => {
    setImage(null);
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
          <span className="fw-semibold">Title</span>
          <input
            type="text"
            className="inputFeild border rounded"
            placeholder="Welcome to our form"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column gap-1">
          <span className="fw-semibold">Description</span>
          <input
            type="text"
            className="inputFeild border rounded"
            placeholder="This is a description of the form"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="imageUpload"
          className="uploadButton col-4 d-flex flex-row border rounded-3 justify-content-center align-items-center gap-2"
        >
          <img type="button" src={Upload} alt="Upload" />
          <span className="fw-semibold">Upload</span>
        </label>
        <input
          type="file"
          className="inputUpload"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      {image && (
        <div className="col-12 mt-3 rounded-3 d-flex flex-column align-items-center gap-3">
          <img src={image} alt="Uploaded" className="img-fluid rounded-3" />
          <div
            type="button"
            onClick={handleRemoveImage}
            className="col-4 d-flex flex-row border rounded-3 justify-content-center align-items-center gap-2 mt-2"
          >
            <span className="uploadButton ">Remove Image</span>
          </div>
        </div>
      )}

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
          className="discard_button col-5 d-flex flex-row border-0 rounded-4 justify-content-center align-items-center gap-2"
        >
          <span className="fs-6 text_style">Discard</span>
        </div>
      </div>
    </div>
  );
}
