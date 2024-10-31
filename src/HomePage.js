import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "./Logo.png";
import myImage from "./dashboard.png";
import myImage0 from "./home.png";
import myImage1 from "./location.png";
import myImage2 from "./new-email.png";
import myImage3 from "./mechanical-gears-.png";
import myImage4 from "./infographic.png";
import myImage5 from "./search.png";
import myImage6 from "./connections.png";
import myImage7 from "./idea.png";
import myImage8 from "./brokenIdea.png";

import "./Styles.css";

export default function HomePage() {
  const [searchVisible, setSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  useEffect(() => {
    if (searchVisible) {
      // Focus the search input when searchVisible becomes true
      searchInputRef.current.focus();
    }
  }, [searchVisible]);

  return (
    <div class="font-roboto">
      <div className={`nav-container ${searchVisible ? "search-open" : ""}`}>
        <div
          className={`nav-panel ${searchVisible ? "search-open" : ""}`}
          style={{
            width: searchVisible ? "200px" : "auto", // Adjust the width as needed
          }}
        >
          <div className="nav-item">
            <img src={Image} alt="" />
            DASHBOARD
          </div>
          <div
            className={`nav-item search-icon ${searchVisible ? "hidden" : ""}`}
            onClick={toggleSearch}
          >
            <img src={myImage5} alt="" />
          </div>
        </div>
        <div className={`search-panel ${searchVisible ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Searching..."
            id="search-input"
            onBlur={toggleSearch}
            ref={searchInputRef}
          />
        </div>
      </div>

      <div class="side-panel">
        <hr></hr>
        <div className="head">
          <div className="panels-item">
            <img src={myImage} alt="" />
            Control Panel
          </div>
        </div>
        <hr></hr>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage0} alt="" />
            DashBoard
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/map" className="panels-item">
            <img src={myImage1} alt="" />
            KeplerGL Map
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/stockchart" className="panels-item">
            <img src={myImage4} alt="" />
            Stats
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage2} alt="" />
            Notifications
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage3} alt="" />
            Settings
          </Link>
        </div>
      </div>

      <div className="content">
        <div>
          <div class="nav-card">
            <label>CITY</label>
            <select id="city">
              <option>All City</option>
              <option>Coimbatore</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Trivandrum</option>
              <option>Kochi</option>
            </select>
          </div>
          <div class="nav-card">
            <label>Zone</label>
            <select id="zone">
              <option>All Zone</option>
              <option>Alandurai</option>
              <option>Gandhipuram</option>
            </select>
          </div>
          <div class="nav-card">
            <label>SECTOR</label>
            <select id="sector">
              <option>All Sector</option>
              <option>Sector 1</option>
              <option>Sector 2</option>
              <option>Sector 3</option>
              <option>Sector 4</option>
              <option>Sector 5</option>
            </select>
          </div>
          <div class="nav-card">
            <label>CLUSTER</label>
            <select id="cluster">
              <option>All Cluster</option>
              <option>Cluster 1</option>
              <option>Cluster 2</option>
              <option>Cluster 3</option>
              <option>Cluster 4</option>
              <option>Cluster 5</option>
              <option>Cluster 6</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div>
          <div class="stats-card" id="cluster-card">
            <img src={myImage6} alt="" />
            No. of Clusters: 20
          </div>
          <div class="stats-card" id="light-card">
            <img src={myImage7} alt="" />
            Active Lights: 155
          </div>
          <div class="stats-card" id="faulty-card">
            <img src={myImage8} alt="" />
            Faulty Lights : 5
          </div>
        </div>
        <div class="chart-container">
          <iframe
            src="/stockchart"
            title="React Application"
            width="1480"
            height="450"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
