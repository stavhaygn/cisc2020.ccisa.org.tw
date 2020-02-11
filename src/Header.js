import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Item = props => (
  <div
    className={props.active ? 'carousel-item active' : 'carousel-item'}
    style={{
      backgroundImage: props.src,
      backgroundPosition: `100% ${props.positionY}`,
    }}
  >
    <div className="carousel-caption d-none d-md-block">
      <h2>Cryptology and Information Security Conference 2020</h2>
      <h4>19-22 May, 2020</h4>
      <h4>National Sun Yat-sen University</h4>
    </div>
  </div>
);

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
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <Item active src="url('slide1.jpg')" positionY="60%" />
        <Item src="url('slide2.jpg')" positionY="80%" />
        <Item src="url('slide3.jpg')" positionY="55%" />
        <Item src="url('slide4.jpg')" positionY="20%" />
        <Item src="url('slide5.jpg')" positionY="50%" />
        <Item src="url('slide6.jpg')" positionY="0%" />
        <Item src="url('slide7.jpg')" positionY="80%" />
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
