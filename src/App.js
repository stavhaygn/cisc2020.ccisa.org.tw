import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Header from './Header';
import Content from './Content';
import './style.css';

const MenuItem = props => (
  <li
    className="nav-item dropdown"
    data-toggle="collapse"
    data-target=".navbar-collapse.show"
  >
    <a
      className="nav-link dropdown-toggle"
      href="/"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {props.title}
    </a>
    <div
      className="dropdown-menu dropdown-menu-right"
      aria-labelledby="navbarDropdownPortfolio"
    >
      {props.links.map(([subtitle, link], key) => (
        <Link className="dropdown-item" to={link} key={key}>
          {subtitle}
        </Link>
      ))}
    </div>
  </li>
);

const NavItem = props => (
  <li
    className="nav-item"
    data-toggle="collapse"
    data-target=".navbar-collapse.show"
  >
    <Link className="nav-link" to={props.link}>
      {props.title}
    </Link>
  </li>
);

const App = () => (
  <React.Fragment>
    <Router>
      <div id="content-wrap">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/nsysu_logo.png" width="54" alt="Image" />
              第三十屆全國資訊安全會議
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <MenuItem
                  title="關於大會"
                  links={[
                    ['關於大會', '/ConferenceGoal'],
                    ['大會組織', '/Organization'],
                  ]}
                />
                <NavItem title="會議資訊" link="/Information" />
                <MenuItem
                  title="會議議程"
                  links={[
                    ['每日議程', '/ConferenceAgenda'],
                    ['參訪行程', '/Itinerary'],
                    ['論文發表場次', '/Session'],
                  ]}
                />
                <NavItem title="論文徵稿" link="/Paper" />
                <NavItem title="活動報名" link="/SignUp" />
                <NavItem title="CTF競賽" link="/CTF" />
                <NavItem title="海報徵選" link="/Poster" />
                <MenuItem
                  title="交通與住宿"
                  links={[
                    ['交通資訊', '/Traffic'],
                    ['住宿資訊', '/Accommodation'],
                  ]}
                />

                <NavItem title="合作夥伴" link="/Partner" />
              </ul>
            </div>
          </div>
        </nav>

        <Header />
        <Content />
        <BrowserView>
          <div style={{ height: '8vh' }}></div>
        </BrowserView>
        <MobileView>
          <div style={{ height: '14vh' }}></div>
        </MobileView>

        <footer
          className="py-5"
          id="footer"
          style={{ backgroundColor: '#224162' }}
        >
          <div className="container">
            <BrowserView>
              <p className="m-0 text-center text-white">
                地址：80424高雄市鼓山區蓮海路70號 電資大樓EC-2017 |
                電話：07-5250558
              </p>
              <p className="m-0 text-center text-white">
                信箱：cisc2020@ccisa.org.tw Copyright &copy; 2020{' '}
                <a className="text-info" href="https://www.ccisa.org.tw/">
                  中華民國資訊安全學會
                </a>
              </p>
            </BrowserView>
            <MobileView>
              <p className="m-0 text-center text-white">
                地址：80424高雄市鼓山區蓮海路70號
              </p>
              <p className="m-0 text-center text-white">
                電資大樓EC-2017 | 電話：07-5250558
              </p>
              <p className="m-0 text-center text-white">
                信箱：cisc2020@ccisa.org.tw
              </p>
              <p className="m-0 text-center text-white">
                Copyright &copy; 2020{' '}
                <a className="text-info" href="https://www.ccisa.org.tw/">
                  中華民國資訊安全學會
                </a>
              </p>
            </MobileView>
          </div>
        </footer>
      </div>
    </Router>
  </React.Fragment>
);

export default App;
