import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Item = props => (
  <div
    className={props.active ? 'carousel-item active' : 'carousel-item'}
    style={{
      backgroundImage: props.src,
      backgroundPosition: `100% ${props.positionY}`,
      height: '42vh',
    }}
  >
    <div className="carousel-caption d-none d-md-block">
      <h2>Cryptology and Information Security Conference 2020</h2>
      <h4>1-4 September, 2020</h4>
      <h4>National Sun Yat-sen University</h4>
    </div>
  </div>
);

const Slide = () => (
  <header>
    <BrowserView>
      <link rel="preload" href="/slides/slide1.jpg" as="image" />
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
        </ol>
        <div className="carousel-inner" role="listbox">
          <Item active src="url('/slides/slide1.jpg')" positionY="65%" />
          <Item src="url('/slides/slide2.jpg')" positionY="80%" />
          <Item src="url('/slides/slide3.jpg')" positionY="70%" />
          <Item src="url('/slides/slide4.jpg')" positionY="60%" />
          <Item src="url('/slides/slide5.jpg')" positionY="60%" />
          <Item src="url('/slides/slide6.jpg')" positionY="80%" />
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </BrowserView>
    <MobileView>
      <link rel="preload" href="/mheader.jpg" as="image" />
      <img
        src="/slides/m_slide.jpg"
        className="img-fluid"
        alt="ResponsiveImage"
      />
    </MobileView>
  </header>
);

const Header = () => (
  <Switch>
    <Route exact path="/" component={Slide} />
    <Route component={() => <div></div>} />
  </Switch>
);

export default Header;
