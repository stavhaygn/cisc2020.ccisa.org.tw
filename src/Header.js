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
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div
          className="carousel-item active"
          style={{
            backgroundImage:
              "url('https://talk543.news/wp-content/uploads/2019/03/NSYSU-2188x1094.jpg')",
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h3>中山大學</h3>
            <p>This is a description for the first slide.</p>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/%E5%9C%8B%E7%AB%8B%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%B8%E9%9A%A7%E9%81%93%E5%8F%A3%E6%9D%B1%E7%AB%AF.jpg')",
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h3>一去不復返</h3>
            <p>This is a description for the second slide.</p>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url('https://www.khmice.org.tw/wp-content/uploads/2015/10/%E5%9C%8B%E7%AB%8B%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%B8.jpg')",
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h3>校門口啦</h3>
            <p>This is a description for the third slide.</p>
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
