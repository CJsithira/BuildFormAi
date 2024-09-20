import React, { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [title, setTitle] = useState(() => localStorage.getItem("title") || "");
  const [description, setDescription] = useState(
    () => localStorage.getItem("description") || ""
  );
  const [image, setImage] = useState(
    () => localStorage.getItem("image") || null
  );

  const [titleEmail, setTitleEmail] = useState(
    () => localStorage.getItem("titleEmail") || ""
  );
  const [desEmail, setDesEmail] = useState(
    () => localStorage.getItem("desEmail") || ""
  );

  const [titleName, setTitleName] = useState(
    () => localStorage.getItem("titleName") || ""
  );
  const [desName, setDesName] = useState(
    () => localStorage.getItem("desName") || ""
  );

  useEffect(() => {
    if (title) {
      localStorage.setItem("title", title);
    }
    if (description) {
      localStorage.setItem("description", description);
    }
    if (image) {
      localStorage.setItem("image", image);
    }
    if (titleEmail) {
      localStorage.setItem("titleEmail", titleEmail);
    }
    if (desEmail) {
      localStorage.setItem("desEmail", desEmail);
    } if (titleName) {
      localStorage.setItem("titleName", titleName);
    }
    if (desName) {
      localStorage.setItem("desName", desName);
    }
  }, [title, description, image, titleEmail, desEmail,titleName,desName]);

  return (
    <FormContext.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        image,
        setImage,
        titleEmail,
        setTitleEmail,
        desEmail,
        setDesEmail,
        titleName,
        setTitleName,
        desName,
        setDesName
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
