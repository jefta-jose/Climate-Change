import { useState } from "react";
import "./App.css";
import boreka from "./assets/logo.png";
import chevronleft from "./assets/chevron-down-svgrepo-com.png";
import volunteers from "./assets/Untitled.jpeg";
import arrow from "./assets/arrow-svgrepo-com.png";
import nature from "./assets/nature-svgrepo-com.png";
import user from "./assets/f48c6785744a603fadd4ae1e9339c1ed.jpg";
import linkedin from "./assets/linkedin icon.png";

function App() {
  return (
    <div className="main-page">
      <div className="navbar">
        <div className="left-nav">
          <button>Home</button>
          <button>Contribution</button>
          <button>Our Mission</button>
        </div>

        <div className="center-nav">
          <button>Kenya One</button>
        </div>

        <div className="right-nav">
          <button>Problems</button>
          <button>Projects</button>
          <button className="contact">Contact Us</button>
        </div>
      </div>

      <div className="home-page">
        <div className="left-home-page">
          <div className="left-home-page-img">
            <img src={boreka} alt="" />
            <p>Boreka Group</p>
          </div>
          <div className="left-home-page-text">
            Saving <img src={chevronleft} alt="" /> Nature & <br />
            Fighting Climate <br />
            Change Together.
          </div>
          <div className="left-home-page-form">
            <form action="">
              <input type="text" placeholder="Enter Your Email" />
              <input type="button" value="Subscribe" />
            </form>
          </div>

          <div className="left-home-page-members">
            <p>Members</p>
          </div>
        </div>
        <div className="right-home-page">
          <div className="volunteers">
            <div className="left-volunteers">
              <img src={volunteers} alt="" />
              <p>
                We && Our <br />
                Volunteers
              </p>
              <img src={arrow} alt="" />
            </div>
            <div className="right-volunteers">
              <img src={nature} alt="" />
            </div>
          </div>
          <div className="right-home-page-footer">
            <div className="right-home-page-footer-one">
              <img src={user} alt="" />
              <p>
                Join us in Fighting <br />
                environmental problems
              </p>
            </div>

            <div className="right-home-page-footer-two">
              <p>
                {" "}
                <img src={linkedin} alt="" /> Find Us On Our Social Networks{" "}
              </p>
              <p>
                We are an organization dedicated to <br />
                protetcting the enviroment & nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
