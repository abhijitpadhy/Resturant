import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden" id="home">
    <div className="flex-1 w-full flex items-start justify-center flex-col">
      <SubHeading title="Chase the new flavour" />
      <h1 className="headtext__cormorant font-bold mb-4">The Key To Fine Dining</h1>
      <p className="p__opensans mb-4">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">Explore Menu</button>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"  class="bounce-image" />
    </div>
  </div>
);

export default Header;
