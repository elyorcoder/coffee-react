import React from "react";
import moba from '../../assets/images/Group5.svg'
const Navbar = () => {
  return (
    <div className="wrapper-nav">
      <nav className="navbar">
        <img className="moba" src = {moba} alt="" />
        <div className="navbar__list">
          <a className="navbar__link" href="#">HOME</a>
          <a className="navbar__link" href="#">ABOUT US</a>
          <a className="navbar__link" href="#">Create your plan</a>
        </div>
        <div className="burger">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div> 
      </nav>
    </div>
  );
};

export default Navbar;