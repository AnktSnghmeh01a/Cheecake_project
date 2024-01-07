import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Home from "./components/Home";

// Import Styles
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/About.scss";
import "./styles/Menu.scss";
import "./styles/Contact.scss";
import "./styles/MediaQuery.scss";
import "./styles/Footer.scss";



const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
