import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import './style.css';

const App = () => (
  <React.Fragment>
    <Router>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
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
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/News">
                  最新訊息
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownPortfolio"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  會議資訊
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownPortfolio"
                >
                  <Link className="dropdown-item" to="/ConferenceGoal">
                    會議緣起與目的
                  </Link>
                  <Link className="dropdown-item" to="/ConferenceAgenda">
                    會議議程
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Registration">
                  線上報名及上傳論文
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Organization">
                  大會組織
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Organizer">
                  主辦單位
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Activity">
                  活動內容
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Traffic">
                  交通資訊
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link className="nav-link" to="/Question">
                  問題反應
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Header />
      <Content />

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            地址：80424高雄市鼓山區蓮海路70號 總機電話：07-5252-000
          </p>
          <p className="m-0 text-center text-white">
            信箱: cisc2020@gmail.com Copyright &copy; 2020{' '}
            <a href="http://www.nsysu.edu.tw/index.php">國立中山大學</a>
          </p>
        </div>
      </footer>
    </Router>
  </React.Fragment>
);

export default App;
