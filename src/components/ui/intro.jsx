import React from "react";
import img from '../../assets/images/coffee-bean.svg'
import img2 from '../../assets/images/Combined Shape.svg'
import img3 from '../../assets/images/Combined Shape (1).svg'
const Intro = () => {
  return (
    <div>
      <div className="choose_wrapper">
        <div className="choose_son">
          <h2 className="choose_h2">Why choose us?</h2>
          <br />
          <p className="choose_par">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
          <div className="father_box">
            <div className="son_box">
              <div className="box-helper">
                <img src={img} alt="" />
                <br />
                <br />
                <br />
                <h4>Best quality</h4>
                <br />
                <p className="text">
                  Discover an endless variety of the world’s best artisan coffee
                  from each of our roasters.
                </p>
              </div>
            </div>
            <div className="son_box">
              <div className="box-helper">
                <img src={img2} alt="" />
                <br />
                <br />
                <br />
                <h4>Exclusive benefits</h4>
                <br />
                <p className="text">
                  Special offers and swag when you subscribe, including 30% off
                  your first shipment.
                </p>
              </div>
            </div>
            <div className="son_box">
              <div className="box-helper">
                <img src={img3} alt="" />
                <br />
                <br />
                <br />
                <h4>Free shipping</h4>
                <br />
                <p className="text">
                  We cover the cost and coffee is delivered fast. Peak
                  freshness: guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
