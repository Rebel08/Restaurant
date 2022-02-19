import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd Sarojani Nagar, Delhi 10019 India</p>
        <p className="p__opensans">+91 5698745635 </p>
        <p className="p__opensans">+91 8745231691</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am-11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved</p>
      <p className="p__opensans">Created with <span style={{color:"red"}}><BsFillHeartFill /></span> by <span style={{color:"#DCCA87"}}>Piyush Anand</span></p>
    </div>
  </div>

);

export default Footer;
