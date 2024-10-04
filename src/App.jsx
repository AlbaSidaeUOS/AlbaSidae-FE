import React from "react";
import Header from "./components/Header";
import JobList from "./pages/JobList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUpSelection from "./pages/SignUpSelection";
import PersonalSignUp from "./pages/PersonalSignUp";
import CompanySignUp from "./pages/CompanySignUp";
import Job from "./pages/Job";
import Resume from "./pages/Resume";
import RegistNotice from "./pages/RegistNotice";
import RegistResume from "./pages/RegistResume";

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="App">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpSelection />} />
        <Route path="/signup/personal" element={<PersonalSignUp />} />
        <Route path="/signup/company" element={<CompanySignUp />} />
        <Route path="/job" element={<Job />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/RegistResume" element={<RegistResume />} />
        <Route path="/RegistNotice" element={<RegistNotice />} />
      </Routes>
    </div>
  );
}

export default App;
