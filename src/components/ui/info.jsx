import React from "react";
import mob from '../../assets/images/Group13.png'
import pic from '../../assets/images/expresso.png'
const Info = () => {
  return (
    <div>
      <div className="intro">
        <div className="wrapper-intro">
          <div className="helper">
            <h1 className="h1">
              Great coffee <br />
              made simple.
            </h1>
            <br />
            <br />
            <p className="par">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <br />
            <br />
            <button className="btn">Create your plan</button>
          </div>
        </div>
      </div>
      <div className="wrapper-our">
        <div className="collection">
          <img className="pic" src={mob} alt="" />

          <div className="wrapper-box">
            <div className="box">
              <img src={pic} alt="" />
              <br />
              <br />
              <p className="big">Gran Espresso</p>
              <br />
              <p className="small">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </div>
            <div className="box">
              <img src={pic} alt="" />
              <br />
              <br />
              <p className="big">Planalto</p>
              <br />
              <p className="small">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </p>
            </div>
            <div className="box">
              <img src={pic} alt="" />
              <br />
              <br />
              <p className="big">Piccollo</p>
              <br />
              <p className="small">
                Mild and smooth blend featuring notes of toasted almond and
                dried
                <br />
                cherry.
              </p>
            </div>
            <div className="box">
              <img src={pic} alt="" />
              <br />
              <br />
              <p className="big">Danche</p>
              <br />
              <p className="small">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                <br />
                notes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
