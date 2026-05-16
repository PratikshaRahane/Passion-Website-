import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <>
      <div>
        <ul className="box" type="none">
            <li><h6 className="h6">Passion</h6></li>
          <li>
            <Link to={"/"} className="l1">Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="l2">About</Link>
          </li>
          <li>
            <Link to={"/services"} className="l3">Services</Link>
          </li>
          <li>
            <Link to={"/protfolio"} className="l4">Protfiler</Link>
          </li>
          <li>
            <Link to={"/team"} className="l5">Team</Link>
          </li>
          <li>
            <Link to={"/dropdown"} className="l6">
              <select className="drop1">
                <option className="drop">Dropdown</option>
                <option  className="drop">Dropdown</option>
              </select>
            </Link>
          </li>
          <li>
            <Link to={"/megamenu"} className="l7">
              <select className="mega1">
                <option className="">Megamenu</option>
                <option>Megamenu</option>
              </select>
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="l8">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
