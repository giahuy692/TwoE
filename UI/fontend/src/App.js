import React from "react";
import Menu from "./components/home/Home";
import Method from "./components/Method";
import Courses from './components/courses/Courses';
import Contact from "./components/Contact";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/index";
// import Footer from "./components/footer/index";
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
        </Routes>
      </Router>
      
      {/* <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Menu} exact>
            <Menu />
          </Route>
          <Route path="/method" component={Method} exact>
            <Method />
          </Route>
          <Route path="/courses" component={Courses} exact>
            <Courses />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/login" component={Login} exact>
            <Login />
          </Route>
        </Switch> */}

      {/* <Footer /> */}
      {/* </Router> */}


    </>
  );
}

export default App;
