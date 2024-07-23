import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookedSessions from "./components/BookedSessions";
import FindTherapists from "./components/FindCounselors";

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
      </Routes>
    </Router>
  );
};

export default App;
