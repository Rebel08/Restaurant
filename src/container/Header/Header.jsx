import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
   <div className="app__wrapper_info">
     < SubHeading title="Chase The New Flavour" />
     <h1 className="app__header-h1">The Key To Fine Dinning</h1>
     <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus loboritis sed senectus vivamus molestie.
     Condimentum voutpat morbi facilisis quam sceleriisque sapien. Et. penatibus aliquam amet teelus</p>
     <button className="custom__button">Explor Menu</button>
   </div>
  <div className="app__wrapper_img">
  <img src={images.welcome} alt="header img" />
  </div>
  </div>
);

export default Header;
