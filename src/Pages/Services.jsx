import React from "react";
import "../Style/Services.css";
import { FaCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { LiaStarSolid } from "react-icons/lia";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import illu1 from "../assets/illu1.webp";
import { BsLightningCharge } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import person9 from "../assets/person9.webp";
import person5 from "../assets/person5.webp";
import person12 from "../assets/person12.webp";

function Services() {
  return (
    <>
      <div className="our">
        <div className="ser">
          <h1 className="service">Services</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check">CHECK OUR SERVICES</p>
        </div>
        <div className="sayali">
          <div className="say1">
            <h1 className="code">
              <FaCode />
            </h1>
            <h1 className="web">Web Development</h1>
            <p className="morbi">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis
              <br /> egestas. Donec rutrum congue leo eget malesuada.
            </p>
            <div className="most">
              {" "}
              <button className="pop">MOST POPULAR</button>
              <span className="at">Starting at $2,999</span>
            </div>
            <button className="det">
              Get Started <FaArrowRight />
            </button>
          </div>
          <div className="say2">
            <h1 className="code">
              <IoColorPaletteOutline />
            </h1>
            <h1 className="web">UI/UX Design</h1>
            <p className="morbi">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Mauris <br />
              blandit aliquet elit, eget tincidunt nibh pulvinar.
            </p>
            <div className="most">
              {" "}
              <span className="at1">Starting at $2,999</span>
            </div>
            <button className="det">
              Learn More <FaArrowRight />
            </button>{" "}
          </div>
        </div>

        <div className="shinde">
          <div className="say3">
            <h1 className="code1">
              <BsGraphUpArrow />
            </h1>
            <h2 className="web1">Digital Marketing</h2>
            <p className="morbi">
              Donec rutrum congue leo eget malesuada. Curabitur
              <br /> non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            {/* <div className="most">
              {" "}
              <span className="at1">Starting at $2,999</span>
            </div> */}
            <button className="det1">
              Explore <FaArrowRight />
            </button>{" "}
          </div>
          <div className="say4">
            <h1 className="code1">
              <IoShieldCheckmarkOutline />
            </h1>
            <h2 className="web2">Security Solutions</h2>
            <p className="morbi">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              <br /> vel. Sed porttitor lectus nibh vestibulum ac diam sit.
            </p>
            {/* <div className="most">
              {" "}
              <span className="at1">Starting at $2,999</span>
            </div> */}
            <button className="det1">
              Discover <FaArrowRight />
            </button>{" "}
          </div>
          <div className="say5">
            <h1 className="code1">
              <IoCloudUploadOutline />
            </h1>
            <h2 className="web3">Cloud Services</h2>
            <p className="morbi">
              Pellentesque in ipsum id orci porta dapibus.
              <br /> Vestibulum ante ipsum primis in faucibus orci luctus
              <br /> et ultrices.
            </p>
            {/* <div className="most">
              {" "}
              <span className="at1">Starting at $2,999</span>
            </div> */}
            <button className="det1">
              Get Quote <FaArrowRight />
            </button>{" "}
          </div>
        </div>

        <div className="project">
          <div className="pro1">
            <h1 className="c1">500+</h1>
            <span className="c2">Projects Completed</span>
          </div>
          <div>
            <h1 className="c1">98%</h1>
            <span className="c2">Client Satisfaction</span>
          </div>
          <div>
            <h1 className="c1">24/7</h1>
            <span className="c2">Support Available</span>
          </div>
          <div>
            <h1 className="c1">5+</h1>
            <span className="c2">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="our11">
        <div className="ser1">
          <h1 className="service1">Pricing</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="Standard">
          <div className="dard1">
            <h1 className="month">
              <FaRegStar />
            </h1>
            <h2 className="tandard">Standard</h2>
            <h1 className="Dollar">
              <FaDollarSign />9<span className="spmo">/month</span>
            </h1>
            <p className="elit">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Sed do eiusmod tempor.
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline1" />
              <span className="elit1">Vestibulum ante ipsum primis</span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Fusce vulputate eleifend</span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Nullam ac tortor vitae</span>
            </p>
            <button className="buy">Buy Now</button>
          </div>
          <div className="dard2">
            <button className="Recommended">Recommended</button>
            <h1 className="month1">
              <BsStars />{" "}
            </h1>
            <h2 className="tandard">Professional</h2>
            <h1 className="Dollar">
              <FaDollarSign />
              29<span className="spmo">/month</span>
            </h1>
            <p className="elit">
              Maecenas tempus tellus eget condimentum
              <br /> rhoncus semper.
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline1" />
              <span className="elit1">Donec quam felis ultricies</span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Aenean massa imperdiet</span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Cras dapibus vivamus</span>
            </p>
            <button className="buy1">Buy Now</button>
          </div>
          <div className="dard3">
            <h1 className="month">
              <LiaStarSolid />
            </h1>
            <h2 className="tandard">Ultimate</h2>
            <h1 className="Dollar">
              <FaDollarSign />
              49<span className="spmo">/month</span>
            </h1>
            <p className="elit">
              Etiam rhoncus maecenas tempus tellus eget
              <br /> condimentum.
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline1" />
              <span className="elit1">
                Phasellus viverra nullaVestibulum ante ipsum primis
              </span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Quisque rutrum aenean</span>
            </p>
            <p>
              <IoCheckmarkOutline className="kOutline" />
              <span className="elit1">Etiam ultricies nisi vel</span>
            </p>
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="our11">
        <div className="ser1">
          <h1 className="service1">Frequently Asked Questions</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div>
        <div className="Mauris">
          <button className="aaa">
            <CiCircleQuestion className="que" />
          </button>
          <span className="bbb">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar?
          </span>
          <button className="ccc">
            <IoIosAdd className="que" />
          </button>
        </div>
        <div className="Mauris">
          <button className="aaa">
            <CiCircleQuestion className="que" />
          </button>
          <span className="bbb">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem?
          </span>
          <button className="ccc2">
            <IoIosAdd className="que" />
          </button>
        </div>
        <div className="Mauris">
          <button className="aaa">
            <CiCircleQuestion className="que" />
          </button>
          <span className="bbb">
            Vestibulum ante ipsum primis in faucibus orci luctus?
          </span>
          <button className="ccc">
            <IoIosAdd className="que" />
          </button>
        </div>
        <div className="Mauris">
          <button className="aaa">
            <CiCircleQuestion className="que" />
          </button>
          <span className="bbb">
            Nulla facilisi morbi tempus iaculis urna id volutpat?
          </span>
          <button className="ccc">
            <IoIosAdd className="que" />
          </button>
        </div>
        <div className="Mauris">
          <button className="aaa">
            <CiCircleQuestion className="que" />
          </button>
          <span className="bbb">
            Praesent sapien massa, convallis a pellentesque nec?
          </span>
          <button className="ccc">
            <IoIosAdd className="que" />
          </button>
        </div>
      </div>

      <div className="Solution">
        <div className="Solu1">
          <button className="buyy">PREMIUM OFFER</button>
          <h1 className="With1">
            Transform Your Experience With Our
            <br /> Solution
          </h1>
          <p className="tempor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
          <div className="sanika">
            <div>
              {" "}
              <button className="Quick">
                <BsLightningCharge className="ma1" />
              </button>
              <span className="With2">Quick Setup</span>
              <p className="lo">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <button className="Quick">
                <IoShieldCheckmarkOutline className="ma1" />
              </button>
              <span className="With2">Quick Setup</span>
              <p className="lo">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <button className="buyy5">Start Now</button>
          <button className="buuyy55">Learn More</button>
        </div>
        <div className="Solu2">
          <img src={illu1} className="illu" />
        </div>
      </div>

      <div className="Red">
        <div className="re1">
          <p className="re11">
            <FaQuoteLeft className="faq" /> Proin iaculis purus consequat sem
            cure digni
            <br /> ssim donec porttitora entum suscipit rhoncus.
            <br /> Accusantium quam, ultricies eget id, aliquam eget <br />
            nibh et. Maecen aliquam, risus at semper.{" "}
            <FaQuoteRight className="faq" />
          </p>
          <img src={person9} alt="no" className="person1" />
          <h3 className="sara">Saul Goodman</h3>
          <span className="ceo1">Ceo and Founder</span>
        </div>
        <div className="re1">
          <p className="re11">
            <FaQuoteLeft className="faq" /> Proin iaculis purus consequat sem
            cure digni
            <br /> ssim donec porttitora entum suscipit rhoncus.
            <br /> Accusantium quam, ultricies eget id, aliquam eget <br />
            nibh et. Maecen aliquam, risus at semper.{" "}
            <FaQuoteRight className="faq" />
          </p>
          <img src={person5} alt="no" className="person1" />
          <h3 className="sara">Sara Wilson</h3>
          <span className="ceo">Designer</span>
        </div>
        <div className="re1">
          <p className="re11">
            <FaQuoteLeft className="faq" /> Proin iaculis purus consequat sem
            cure digni
            <br /> ssim donec porttitora entum suscipit rhoncus.
            <br /> Accusantium quam, ultricies eget id, aliquam eget <br />
            nibh et. Maecen aliquam, risus at semper.{" "}
            <FaQuoteRight className="faq" />
          </p>
          <img src={person12} alt="no" className="person1" />
          <h3 className="sara">Matt Brandon</h3>
          <span className="ceo">Freelancer</span>
        </div>
      </div>
    </>
  );
}

export default Services;
