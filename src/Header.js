import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Slide = () => (
  <header>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
      </ol>
      <div className="carousel-inner" role="listbox">
        <div
          className="carousel-item active"
          style={{
            backgroundImage: "url('slide1.jpg')",
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h3>中山大學</h3>
            <p></p>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url('slide2.jpg')",
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h3>中山大學</h3>
            <p></p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>
);

const Header = () => (
  <Switch>
    <Route exact path="/" component={Slide} />
    <Route component={() => <div></div>} />
  </Switch>
);

export default Header;
