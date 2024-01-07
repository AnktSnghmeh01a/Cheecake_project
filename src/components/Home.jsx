import React from "react";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import { HashLink } from "react-router-hash-link";
import HomeImg from "../asserts/Main Image (Home).png";
const Home = () => {
  return (
    <>
      <div className="homePart" id="home" >
        <div className="leftDiv">
          <div className="textPortion">
            <div className="headingPortion">
              <h1>Bite The World of</h1>
              <h1>Cheesecake Wonders</h1>
            </div>

            <div className="paraPortion">
              <p>We always make our customer happy by providing</p>
              <p>as many choices as possible .</p>
            </div>

            <div className="button-part">
              <HashLink href="/home">
                <button className="getStarted">Get started</button>
              </HashLink>
              <HashLink href="/home">
                <button className="watchDemo">Watch Demo</button>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="rightDiv">
          <img src={HomeImg} alt="home-img" />
        </div>
      </div>
     
      <About/>
      <Menu/>
      <Contact/>
    </>
  );
};

export default Home;
