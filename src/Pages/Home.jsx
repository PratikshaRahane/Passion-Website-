import React from "react";
import "../Style/Home.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="div">
        <button className="inn">INNOVATIVE SOLUTIONS</button>
        <h1 className="tran">
          Transform Your Business
          <br /> with Modern Technology
        </h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Sed do eiusmod tempor incididunt ut labore et dolore
          <br /> magna aliqua. Ut enim ad minim veniam quis nostrud.
        </p>
        <div className="d11">
          {" "}
          <button className="ex1">Explore Services </button>
          <h6 className="demo">
            <MdOutlineSlowMotionVideo className="icon1" />
            <span className="wat">Watch Demo</span>
          </h6>
        </div>
        <div className="main">
          <div className="m1"><h1 className="m11">500+</h1><span className="m22">PROJECTS COMPLETED</span></div>
          <div className="m2"><h1 className="m11">98%</h1><span className="m22">CLIENT SATISFACTION</span></div>
          <div className="m3"><h1 className="m11">24/7</h1><span className="m22">SUPPORT AVILABLE</span></div>
        </div>
        <div className="root11">
          <div className="g1"><h1><IoShieldCheckmarkOutline className="IO"/></h1><span>Secure & Reliable</span></div>
          <div className="g11"><h1><IoSpeedometerOutline  className="IO"/></h1><span>High Performance</span></div>
        </div>
         <div className="root22">
          <div className="g2"><h1><FaUserFriends className="IO2"/></h1><span>Expert Team</span></div>
          <div className="g22"><h1><FaAward  className="IO2"/></h1><span>Award Winning</span></div>
        </div>
      </div>
    </>
  );
}

export default Home;

// import React from "react";
// import "../Style/Home.css";
// import { MdOutlineSlowMotionVideo } from "react-icons/md";

// function Home() {
//   return (
//     <>
//       <div className="div">
//         <div className="root">
//           <div>
//             {" "}
//             <button className="inn">INNOVATIVE SOLUTIONS</button>
//             <h1 className="tran">
//               Transform Your Business
//               <br /> with Modern Technology
//             </h1>
//             <p className="para">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               <br /> Sed do eiusmod tempor incididunt ut labore et dolore
//               <br /> magna aliqua. Ut enim ad minim veniam quis nostrud.
//             </p>
//             <div className="d11">
//               {" "}
//               <button className="ex1">Explore Services </button>
//               <h6 className="demo">
//                 <MdOutlineSlowMotionVideo className="icon1" />
//                 <span className="wat">Watch Demo</span>
//               </h6>
//             </div>
//             <div className="main">
//               <div className="m1">
//                 <h1 className="m11">500+</h1>
//                 <span className="m22">PROJECTS COMPLETED</span>
//               </div>
//               <div className="m2">
//                 <h1 className="m11">98%</h1>
//                 <span className="m22">CLIENT SATISFACTION</span>
//               </div>
//               <div className="m3">
//                 <h1 className="m11">24/7</h1>
//                 <span className="m22">SUPPORT AVILABLE</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="root11">
//               <div>fdg</div>
//               <div>dgd</div>
//             </div>
//             <div className="root11">
//               <div>dgd</div>
//               <div>gdfg</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
