import { useState } from "react";
import "./App.css";
import boreka from "./assets/logo.png";
import chevronleft from "./assets/chevron-down-svgrepo-com.png";
import volunteers from "./assets/Untitled.jpeg";
import nature from "./assets/nature-svgrepo-com.png";
import user from "./assets/f48c6785744a603fadd4ae1e9339c1ed.jpg";
import linkedin from "./assets/linkedin icon.png";
import tree from "./assets/f19e4012f58f2d9624355fc888054147.jpg";
import sky from "./assets/thomas-bennie-1jlJrr4XGkU-unsplash.jpg";
import cows from "./assets/stijn-te-strake-UdhpcfImQ9Y-unsplash.jpg";
import maize from "./assets/steven-weeks-DUPFowqI6oI-unsplash.jpg";
import arrowright from "./assets/arrow-right-svgrepo-com.png";
import logo from "./assets/logo-svgrepo-com.png";

function App() {
  return (
    <div className="main-page">
      <div className="navbar">
        <div className="left-nav">
          <button>Home</button>
          <button>Our Mission</button>
        </div>

        <div className="center-nav">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Kenya One</p>
          </div>
        </div>

        <div className="right-nav">
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
              <input className="subscribe" type="text" value="Subscribe  >>" />
            </form>
          </div>
        </div>
        <div className="right-home-page">
          <div className="volunteers">
            <div className="left-volunteers">
              <img src={volunteers} alt="" />
              <p>
                We & Our <br />
                Volunteers
              </p>
            </div>
            <div className="right-volunteers">
              <img src={nature} alt="" />
            </div>
          </div>
          <div className="right-home-page-footer">
            <div className="right-home-page-footer-one">
              <img className="user-img" src={user} alt="" />
              <p>
                Join us in Fighting <br />
                environmental problems
              </p>
            </div>

            <div className="right-home-page-footer-two">
              <div className="socials">
                <img src={linkedin} alt="" />
                <p>Find Us On Our Social Networks</p>
              </div>
              <p>
                We are an organization dedicated to <br />
                protetcting the enviroment & nature.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="first-image">
          <img src={tree} alt="" />
          <img className="sky" src={sky} alt="" />
        </div>

        <div className="center-text">
          <h2>Let's Make Our World </h2>
          <h3>Greener & Cleaner !</h3>
          <p>
            We work wih partners and communities to ensure <br />
            that nature thrives and climate chnage is reversed.
          </p>

          <div className="btns">
            <button>View Projects</button>
            <button className="learn"> Learn More </button>
          </div>
        </div>

        <div className="first-image">
          <img src={cows} alt="" />
          <img src={maize} alt="" />
        </div>
      </div>

      <div className="protection">
        <div className="we">
          <p>We</p>
        </div>
        <div className="protect">
          <p>Protect</p>
        </div>
        <div className="nature">
          <p>Nature</p>
        </div>
        <div className="arr">
          <img src={arrowright} alt="" />
        </div>
      </div>

      <div className="initiatives">
        <div className="initiative-header">
          <h2>Our Initiatives for 2024</h2>
          <h4>
            find out what projects we are implementing <br />
            to protect our nature
          </h4>
        </div>

        <table>
          <thead>
            <tr>
              <td className="title">Title</td>
              <td>Tags</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Renewable Energy Adoption</td>
              <td className="tags">Energy, Environment</td>
              <td>2024</td>
              <td>
                <img src={chevronleft} alt="" />
              </td>
            </tr>

            <tr>
              <td>Ocean Conservation</td>
              <td className="tags">Environment, Marine Life</td>
              <td>2024</td>
              <td>
                <img src={chevronleft} alt="" />
              </td>
            </tr>

            <tr>
              <td>Sustainable Agriculture</td>
              <td className="tags"> Food Security, Environment</td>
              <td>2024</td>
              <td>
                <img src={chevronleft} alt="" />
              </td>
            </tr>

            <tr>
              <td>Community Recycling Programs</td>
              <td className="tags">Waste Management, Community Engagement</td>
              <td>2024</td>
              <td>
                <img src={chevronleft} alt="" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="table-images">
          <div className="ocean">
            <div className="header">
              <div className="he-texter">
                <p>Ocean Conservation</p>
                <p>Pollution Issues</p>
              </div>
              <img src={chevronleft} alt="" />
            </div>
            <div className="he-footer">
              <p>Ocean Conservation</p>
              <p>
                This initiative focuses on safeguarding marine ecosystems
                through measures like establishing marine protected
                areas........
              </p>
              <button>Explore the Program</button>
            </div>
          </div>

          <div className="energy">
            <div className="header">
              <div className="he-texter">
                <img src={chevronleft} alt="" />
              </div>
            </div>
            <div className="he-footer">
              <p>Renewable Energy Adoption</p>
              <p>
                This initiative advocates for transitioning to sustainable
                energy sources like solar, wind, and hydroelectric power, aiming
                .......
              </p>
              <button>Explore the Program</button>
            </div>
          </div>

          <div className="agriculture">
            <div className="header">
              <div className="he-texter">
                <img src={chevronleft} alt="" />
              </div>
            </div>
            <div className="he-footer">
              <p>Sustainable Agriculture</p>
              <p>
                This initiative encompasses practices that promote soil health,
                conserve water, reduce chemical inputs, and support........
              </p>
              <button>Explore the Program</button>
            </div>
          </div>

          <div className="recycling">
            <div className="header">
              <div className="he-texter">
                <img src={chevronleft} alt="" />
              </div>
            </div>
            <div className="he-footer">
              <p>Community Recycling Programs</p>
              <p>
                This initiative involves organizing local initiatives to promote
                recycling practices, facilitate waste reduction, and
                foster.......
              </p>
              <button>Explore the Program</button>
            </div>
          </div>
        </div>
      </div>

      <div className="news-letter">
        <div className="news">
          <h2>newsletter</h2>
        </div>
        <div className="subscribe">
          <p>
            Subcsribe to our newsletter to get the latest updates on
            missions,projects & initiatives.
          </p>

          <form action="">
            <input type="text" placeholder="Email Address |" className="mail" />
            <input type="text" placeholder="Subscribe" className="sub" />
          </form>
        </div>
      </div>

      <div className="homepage-footer">
        <p>© 2024 Climate Change Awareness</p>
        <div className="logo">
          <img src={logo} alt="" />
          <p>Kenya One</p>
        </div>

        <div className="footer-btns">
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default App;
