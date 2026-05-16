import React from "react";
import "../Style/About.css";
import img2 from "../assets/img2.webp";
import { BsAward } from "react-icons/bs";
import { SiHsbc } from "react-icons/si";
import { SiWalmart } from "react-icons/si";
import { FaHandsWash } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import service1 from "../assets/service1.webp";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsHouseHeart } from "react-icons/bs";
import { BsPersonHeart } from "react-icons/bs";
import { IoBagRemoveSharp } from "react-icons/io5";
import pra3 from "../assets/pra3.webp";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function About() {
  return (
    <>
      <div className="a11">
        <div>
          <h1 className="about">
            Transforming Ideas Into Reality
            <br /> Since 2015
          </h1>
          <p className="p1">
            We are a passionate team of innovators dedicated to creating
            <br /> exceptional digital experiences that drive meaningful results
            for
            <br /> businesses worldwide.
          </p>
          <p className="p2">
            Our journey began with a simple vision: to bridge the gap between
            cutting-edge
            <br /> technology and human-centered design. Today, we've grown into
            a trusted partner for
            <br /> companies seeking to transform their digital presence and
            accelerate their growth.
          </p>
          <p className="p2">
            Through collaborative partnerships and innovative solutions, we've
            helped hundreds of
            <br /> organizations achieve their goals while building lasting
            relationships founded on trust,
            <br /> transparency, and exceptional results.
          </p>
          <hr className="hr1"></hr>
          <div className="dis11">
            <div>
              <h1 className="p11">8+</h1>
              <span className="p22">Years Experience</span>
            </div>
            <div>
              <h1 className="p11">450+</h1>
              <span className="p22">Projects Completed</span>
            </div>
            <div>
              <h1 className="p11">25+</h1>
              <span className="p22">Team Members</span>
            </div>
          </div>
          <hr className="hr1"></hr>
          <div className="display1">
            <div>
              <button className="btn1">DISCOVER OUR WORK</button>
            </div>
            <div>
              <button className="btn2">MEET OUR TEAM</button>
            </div>
          </div>
        </div>
        <div>
          <img src={img2} alt="no" className="img22" />
          <div className="boxx1">
            <h1 className="bs">
              <BsAward className="bsaw" />
              <span className="ea">
                Excellence Award{" "}
                <span className="di">Digital Innovation 2023</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="div1">
        <div className="di111">
          HSBC <SiHsbc />
        </div>
        <div className="di11">LEAXMARK</div>
        <div className="di11">
          <SiWalmart size={70} />
        </div>
        <div className="di11">
          signify health
          <BsFire />
        </div>
        <div className="di11">
          TOMTOM
          <FaHandsWash />
        </div>
        <div className="di11">LitaLia</div>
      </div>

      <div className="our1">
        <div className="ser1">
          <h1 className="service1">Featured Services</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">Featured Srvices</p>
        </div>

        <div className="pratiksah">
          <div>
            <button className="PROFESSONAL">PROFESSONAL SERVICES</button>
            <h1 className="Elevating">
              Elevating Business Performance
              <br /> Through Strategic Solutions
            </h1>
            <p className="dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius risus
              <br /> sed pellentesque auctor. Phasellus gravida magna at tortor
              cursus, sit amet
              <br /> suscipit tortor malesuada.
            </p>
            <button className="Request">
              Request a Consultation <FaArrowRight />
            </button>
          </div>
          <div>
            <img src={service1} className="service112" />
          </div>
        </div>

        <div className="shinde">
          <div className="say3">
            <h1 className="code11">
              <VscGraph />
            </h1>
            <h2 className="web1">Digital Marketing</h2>
            <p className="morbi1">
              Donec rutrum congue leo eget malesuada. Curabitur non nulla sit
              amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo
              eget malesuada. Curabitur
              <br /> non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>

            <hr className="ac"></hr>
          </div>
          <div className="say4">
            <h1 className="code11">
              <BsGraphUp />
            </h1>
            <h2 className="web2">Security Solutions</h2>
            <p className="morbi1">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              <br /> vel. Sed porttitor lectus nibh vestibulum ac diam sit.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              <br /> vel. Sed porttitor lectus nibh vestibulum ac diam sit.
            </p>

            <hr className="ac"></hr>
          </div>
          <div className="say5">
            <h1 className="code11">
              <IoShieldCheckmarkOutline />
            </h1>
            <h2 className="web3">Cloud Services</h2>
            <p className="morbi1">
              Pellentesque in ipsum id orci porta dapibus.
              <br /> Vestibulum ante ipsum primis in faucibus orci luctus
              Pellentesque in ipsum id orci porta dapibus.
              <br /> Vestibulum ante ipsum primis in faucibus orci luctus
              <br /> et ultrices.
            </p>

            <hr className="ac"></hr>
          </div>
        </div>
      </div>

      <div className="our11">
        <div className="ser1">
          <h1 className="service1">How We Work</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div className="Research ">
        <div className="Re">
          <h1 className="and">
            <CiSearch />
          </h1>
          <button className="step">Step1</button>
          <h1 className="ing">Research & Planning</h1>
          <p className="Nulla">
            Nulla facilisi morbi tempus iaculis
            <br /> urna id. Vestibulum ante ipsum
            <br /> primis in faucibus orci luctus et
            <br /> ultrices posuere.
          </p>
        </div>
        <div className="Re">
          <h1 className="and">
            <FaRegLightbulb />
          </h1>
          <button className="step">Step2</button>
          <h1 className="ing">Creative Solutions</h1>
          <p className="Nulla">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="Re">
          <h1 className="and">
            <IoSettingsOutline />
          </h1>
          <button className="step">Step3</button>
          <h1 className="ing">Development</h1>
          <p className="Nulla">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="Re">
          <h1 className="and">
            <IoRocketOutline />
          </h1>
          <button className="step">Step4</button>
          <h1 className="ing">Launch & Support</h1>
          <p className="Nulla">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque.
          </p>
        </div>
      </div>

      <div className="Nullam">
        <div>
          <div className="ipsum11">
            <div>
              <h1 className="qui">
                <FaUserFriends className="friends1" />
              </h1>
            </div>
            <div>
              {" "}
              <span className="ante1">Vestibulum ante ipsum</span>
              <p className="Proin1">Proin iaculis purus consequat</p>
            </div>
          </div>

          <div className="ipsum">
            <div>
              <h1 className="qui">
                <CiHeart className="friends" />
              </h1>
            </div>
            <div>
              {" "}
              <span className="ante">Curabitur aliquet quam</span>
              <p className="Proin">Nulla quis lorem ut libero</p>
            </div>
          </div>

          <div className="ipsum">
            <div>
              <h1 className="qui">
                <BsHouseHeart className="friends" />
              </h1>
            </div>
            <div>
              {" "}
              <span className="ante">Luna stride flared</span>
              <p className="Proin">Sed ut perspiciatis unde omnis</p>
            </div>
          </div>

          <div className="ipsum">
            <div>
              <h1 className="qui">
                <BsPersonHeart className="friends" />
              </h1>
            </div>
            <div>
              {" "}
              <span className="ante">Quisque Velit Nisi</span>
              <p className="Proin">Duis aute irure dolor in</p>
            </div>
          </div>

          <div className="ipsum">
            <div>
              <h1 className="qui">
                <IoBagRemoveSharp className="friends" />
              </h1>
            </div>
            <div>
              {" "}
              <span className="ante">Curabitur Aliquet</span>
              <p className="Proin">Excepteur sint occaecat cupidatat</p>
            </div>
          </div>
        </div>
        <div className="Lacinia">
          <div>
            <h1 className="Vest">Vestibulum Ante Ipsum</h1>
            <hr className="om"></hr>
            <p className="id">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <p className="sed">
              Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit
              amet quam vehicula elementum sed sit amet dui.
            </p>
            <h3>
              <IoMdCheckmarkCircleOutline className="IoMd" />{" "}
              <span className="Vivamus">
                Vivamus suscipit tortor eget felis
              </span>
            </h3>
            <h3>
              <IoMdCheckmarkCircleOutline className="IoMd" />{" "}
              <span className="Vivamus">Curabitur aliquet quam id dui</span>
            </h3>
            <h3>
              <IoMdCheckmarkCircleOutline className="IoMd" />{" "}
              <span className="Vivamus">Nulla quis lorem ut libero</span>
            </h3>
            <h3>
              <IoMdCheckmarkCircleOutline className="IoMd" />{" "}
              <span className="Vivamus">Vestibulum ac diam sit amet</span>
            </h3>
          </div>
          <div>
            <img src={pra3} className="pra" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
