import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function WelcomeHomePage() {

  const navigate = useNavigate();
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState(
    "This is the description of the form."
  );
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedTitle = localStorage.getItem("title");
    const storedDescription = localStorage.getItem("description");
    const storedImage = localStorage.getItem("image");

    // Update state with retrieved values
    if (storedTitle) setTitle(storedTitle);
    if (storedDescription) setDescription(storedDescription);
    if (storedImage) setImage(storedImage);
  }, []);

  const onClickStart = () => {
    navigate("/name");
  };
  

  return (
    <div className="col-12 d-flex flex-row align-items-center main_Wrapper ms-5 gap-5">
      <div className="col-4 d-flex flex-column gap-3">
        <span className="fs-1 fw-bold">{title}</span>
        <span className="fs-5 fw-semibold">{description}</span>
        <div>
          <div
            type="button"
            className="save_button col-4 d-flex flex-row border rounded-4 justify-content-center align-items-center gap-2"
          >
            <span className="fs-5" onClick={onClickStart}>Start</span>
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
