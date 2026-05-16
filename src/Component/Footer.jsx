import React from 'react'
import "../Style/Footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
<div className='black'>

<div className='Ashwini'>
  <div className='ash1'>
    <h1>Passion</h1>
    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna<br />
     derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
     <div className='instagram'>
      <div className='gram'><FaXTwitter /></div>
      <div className='gram'><FaFacebook /></div>
      <div className='gram'><CiInstagram /></div>
      <div className='gram'><FaLinkedin /></div>
     </div>
  </div>
  <div >
    <h4 className='ash2'>Useful Links</h4>
      <p className='ash22'>Home</p>
      <p className='ash22'>About us</p>
      <p className='ash22'>Services</p>
      <p className='ash22'>Terms of service</p>
      <p className='ash22'>Privacy policy</p>
  </div>
  <div>
       <h4 className='ash2'>Our Services</h4>
      <p className='ash22'>Web Design</p>
      <p className='ash22'>Web Development </p>
      <p className='ash22'>Product Management</p>
      <p className='ash22'>Marketing</p>
      <p className='ash22'>Graphic Design</p>
  </div>
  <div>
       <ul className='ash2' type="none">
             <li className='ash2'>Contact Us</li>
       <li className='ash2222'>A108 Adam Street</li>
      <li className='ash2211'>United States</li>
      <li className='ash2233'>New York, NY 535022</li>
      <li className='ash2244'><span className='phone11'>Phone:</span> +1 5589 55488 55</li>
      <li className='ash2255'><span className='phone11'>Email:</span> info@example.com</li>
</ul>
    
  </div>
</div>

<div className='greenbox'> 
     <p className='mywebAll'>© Copyright <span className='policy'>MyWebsite</span> All Rights Reserved</p>
     <p className='mywebAll1'>Designed by <span className='made1'>BootstrapMade</span></p>
</div>
</div>
    </>
  )
}

export default Footer