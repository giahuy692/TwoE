import React from "react";
import Menu from "./components/home/Home";
import Method from "./components/Method";
import Courses from './components/courses/Courses';
import Contact from "./components/Contact";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/index";
import Register from "./components/register";
// import Footer from "./components/footer/index";
// import Dashboard from "./components/dashboard/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} exact />
          <Route path="/method" element={<Method />} exact />
          <Route path="/courses" element={<Courses />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
