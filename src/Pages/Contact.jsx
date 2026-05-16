import React from 'react'
import '../Style/Contact.css'
import map from '../assets/map.png'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../Component/Footer';
function Contact() {
  return (
    <div>
        <div className="our22">
        <div className="ser1">
          <h1 className="service1">Contact</h1>
          <hr className="hrr1"></hr>
          <hr className="hrr2"></hr>

          <p className="check1">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>
        </div>


<div className='map'>
  
  <div><img src={map} className='mapmap'/></div>
  <div>
  <div className='eumeum'>
    <div className='LOCATION'>
      <div className='dfs'><CiLocationOn /></div>
      <div>
      <h1 className='loca'>Location</h1>
      <p className='York'>8721 Broadway Avenue, New York, NY<br /> 10023</p>
      </div>
    </div>
    <div className='LOCATION'>
      <div className='dfs1'><TfiEmail /></div>
      <div>
      <h1 className='loca'>Email</h1>
      <p className='York'>info@examplecompany.com</p>
      </div>
    </div>   
    
  </div>
    <div className='eumeum'>
    <div className='LOCATION1'>
      <div className='dfs'><IoCallOutline /></div>
      <div>
      <h1 className='loca'>Call</h1>
      <p className='York'>+1 (212) 555-7890</p>
      </div>
    </div>
    <div className='LOCATION1'>
      <div className='dfs1'><MdOutlineWatchLater /></div>
      <div>
      <h1 className='loca'>Open Hours</h1>
      <p className='York'>Monday-Friday: 9AM - 6PM</p>
      </div>
    </div>   
    
  </div>
      <div className='eumeum1'>
      <div className='loca1'>
        <span className='spahr'></span> 
        <span className='calllll'>Get in Touch </span> 
        <p className='York1'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
           incididunt ut<br /> labore et dolore magna aliqua consectetur adipiscing.</p>
           </div>
     <input type="text" placeholder='Your Name' className='yourname'/>
     <input type="Your Email" placeholder='Your Email' className='yourname1'/>
          <input type="Your Email" placeholder='Your Email' className='yourname2'/>

     <textarea className='teatarea1'>
      Message
     </textarea>
<div className='birds'>
<div>       <button className='sendmess'>Send Message</button>
</div>
<div className='twiteer'>
  <TiSocialTwitter /><FaFacebook /><CiInstagram /><FaLinkedin />
</div>
</div>

  </div>
  </div>
  
</div>

<Footer />

    </div>
  )
}

export default Contact