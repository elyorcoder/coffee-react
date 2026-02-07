import React from "react";
import img6 from '../../assets/images/Group5.png'
import img7 from '../../assets/images/Path.svg'
import img8 from '../../assets/images/Path1.svg'
import img9 from '../../assets/images/Shape.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer">
          <div className="mini-foter">
            <img width="236" height="26" src={img6} alt="" />
            <div className="footer-text">
              <a className="link" href="/">
                HOME
              </a>
              <a className="link" href="/">
                ABOUT US
              </a>
              <a className="link" href="/">
                Create your plan
              </a>
            </div>
          </div>
          <div className="end">
            <img className="logo" src={img7} alt="" />
            <img className="logo" src={img8} alt="" />
            <img className="logo" src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
