import React from "react";
import img4 from '../../assets/images/OvalCopy.png'
import img5 from '../../assets/images/Path2.png'
const What = () => {
  return (
    <div>
      <div className="wrapper-works">
        <div className="work">
          <p className="how">How it works</p>
          <div className="help-bro">
            <img width="31" height="31" src={img4} alt="" />
            <img width="350px" height="1" src={img5} alt="" />
            <img width="31" height="31" src={img4} alt="" />
            <img width="350px" height="1" src={img5} alt="" />
            <img width="31" height="31" src={img4} alt="" />
          </div>
          <div className="bros-helper">
            <div>
              <p className="numbers">01</p>
              <br />
              <p className="lux-version">
                Pick your <br />
                coffee
              </p>
              <br />
              <p className="lot">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div>
              <p className="numbers">02</p>
              <br />
              <p className="lux-version">
                Choose the <br />
                frequency
              </p>
              <br />
              <p className="lot">
                Customize your order frequency, <br />
                quantity, even your roast style and grind <br />
                type. Pause, skip or cancel your
                <br />
                subscription with no commitment <br />
                through our online portal.
              </p>
            </div>
            <div>
              <p className="numbers">03</p>
              <br />
              <p className="lux-version">
                Receive and <br />
                enjoy!
              </p>
              <br />
              <p className="lot">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
          </div>
          <button className="btn" id="helper">
            Create your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default What;
