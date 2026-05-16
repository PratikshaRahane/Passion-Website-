import React from "react";
import "../Style/Protfolio.css";
import port1 from "../assets/port1.webp";
import port2 from "../assets/port2.webp";
import port3 from "../assets/port3.webp";
import port4 from "../assets/port4.webp";
import port5 from "../assets/port5.webp";
import port6 from "../assets/port6.webp";
function Protfolio() {
  return (
    <>
      <div className="our1">
        <div className="ser1">
          <h1 className="service1">Portfolio</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="photo">
          <div>
            <button className="design1">All</button>
          </div>
          <div>
            <button className="design2">Photography</button>
          </div>
          <div>
            <button className="design">Design</button>
          </div>
          <div>
            <button className="design2">Automotive</button>
          </div>
          <div>
            <button className="design">Nature</button>
          </div>
        </div>

        <div>
          <div className="found11">
            <div>
              {" "}
              <img src={port1} alt="no found" className="por1" />{" "}
            </div>
            <div>
              <img src={port2} alt="no found" className="por2" />
            </div>
            <div>
              <img src={port3} alt="no found" className="por3" />
            </div>
          </div>
          <div className="found22">
            <div>
              {" "}
              <img src={port4} alt="no found" className="por4" />
            </div>
            <div>
              {" "}
              <img src={port5} alt="no found" className="por5" />
            </div>{" "}
            <div>
              <img src={port6} alt="no found" className="por6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Protfolio;
