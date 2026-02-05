import React from "react";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="wrapper-nav">
        <nav className="navbar">
          <img className="moba" src="/images/Group 5.svg" alt="" />
          <div className="navbar__list">
            <a className="navbar__link" href="#">
              HOME
            </a>
            <a className="navbar__link" href="#">
              ABOUT US
            </a>
            <a className="navbar__link" href="#">
              Create your plan
            </a>
          </div>
          <div className="burger">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </nav>
      </div>
      <div className="intro">
        <div
          className="wrapper-intro"
          style={{
            backgroundImage: `url("/images/BIt.png")`,
          }}
        >
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
          <img className="pic" src="/images/Group 13.png" alt="" />

          <div className="wrapper-box">
            <div className="box">
              <img src="/images/expresso.png" alt="" />
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
              <img src="/images/expresso.png" alt="" />
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
              <img src="/images/expresso.png" alt="" />
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
              <img src="/images/expresso.png" alt="" />
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
                <img src="/images/coffee-bean.svg" alt="" />
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
                <img src="/images/Combined Shape.svg" alt="" />
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
                <img src="/images/Combined Shape (1).svg" alt="" />
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
      <div className="wrapper-works">
        <div className="work">
          <p className="how">How it works</p>
          <div className="help-bro">
            <img width="31" height="31" src="/images/Oval Copy.png" alt="" />
            <img width="350px" height="1" src="/images/Path 2.png" alt="" />
            <img width="31" height="31" src="/images/Oval Copy.png" alt="" />
            <img width="350px" height="1" src="/images/Path 2.png" alt="" />
            <img width="31" height="31" src="/images/Oval Copy.png" alt="" />
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
      <div className="footer-wrapper">
        <div className="footer">
          <div className="mini-foter">
            <img width="236" height="26" src="/images/Group 5.png" alt="" />
            <div className="footer-text">
              <a className="link" href="#">
                HOME
              </a>
              <a className="link" href="#">
                ABOUT US
              </a>
              <a className="link" href="#">
                Create your plan
              </a>
              <a href=""></a>
            </div>
          </div>
          <div className="end">
            <img className="logo" src="/images/Path.svg" alt="" />
            <img className="logo" src="/images/Path (1).svg" alt="" />
            <img className="logo" src="/images/Shape.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
