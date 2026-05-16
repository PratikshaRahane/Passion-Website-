import React from "react";
import "../Style/Team.css";
import person5 from "../assets/person5.webp";
import person9 from "../assets/person9.webp";
import person10 from "../assets/person10.webp";

import person12 from "../assets/person12.webp";

function Team() {
  return (
    <div>
      <div className="our121">
        <div className="ser1">
          <h1 className="service1">Team</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div className="fuga">
        <div className="fuga1">
          <img src={person5} className="perso5" />
          <h1 className="Sophia">Sophia Reynolds</h1>
          <span className="Reynolds">Product Designer</span>
          <p className="fugiat">
            Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.
          </p>
        </div>
        <div className="fuga2">
           <img src={person9} className="perso5" />
          <h1 className="Sophia">Sophia Reynolds</h1>
          <span className="Reynolds">Product Designer</span>
          <p className="fugiat">
            Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.
          </p>
        </div>
        <div className="fuga3">
           <img src={person10} className="perso5" />
          <h1 className="Sophia">Sophia Reynolds</h1>
          <span className="Reynolds">Product Designer</span>
          <p className="fugiat">
            Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.
          </p>
        </div>
        <div className="fuga4">
           <img src={person12} className="perso5" />
          <h1 className="Sophia">Sophia Reynolds</h1>
          <span className="Reynolds">Product Designer</span>
          <p className="fugiat">
            Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
