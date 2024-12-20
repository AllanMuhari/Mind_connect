import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookedSessions from "./components/BookedSessions";
import FindTherapists from "./components/FindCounselors";
import WaitingApproval from "./components/WaitingApproval";
import Admin from "./components/Admin";
import AdminCreateResource from "./components/AdminCreateResource";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booked-sessions" component={BookedSessions} />
        <Route path="/counsellors" component={FindTherapists} />
        <Route path="/waiting-approval" element={<WaitingApproval />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/resources" element={<AdminCreateResource />} />
      </Routes>
    </Router>
  );
};

export default App;
