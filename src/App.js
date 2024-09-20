import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FormProvider } from "./Common/Contex/ContexProvider";
import Sidebar from "./Common/Side Bar/Index";
import HomeEmail from "./Layouts/EmailHome/index.js";
import EmailSidebar from "./Layouts/EmailSidebar/index";
import HomePage from "./Layouts/Home/index";
import WelcomeHomePage from "./Layouts/HomePageEditing/index";
import Welcome from "./Layouts/WelcomeSidebar/index.js";
import NameSideBar from "./Layouts/NameSideBar/index.js";
import HomeName from "./Layouts/HomeName/index.js";

function App() {
  return (
    <Router>
      <FormProvider>
        <div className="col-12 d-flex flex-row">
          <div className="col-3 d-flex flex-row">
            <div className="col-12">
              <Routes>
                <Route path="/" element={<Sidebar />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/email" element={<EmailSidebar />} />
                <Route path="/name" element={<NameSideBar />} />
              </Routes>
            </div>
          </div>
          <div className="col-9 border border-2 rounded-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/welcome" element={<WelcomeHomePage />} />
              <Route path="/email" element={<HomeEmail />} />
              <Route path="/name" element={<HomeName />} />
            </Routes>
          </div>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
