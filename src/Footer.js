import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

const Footer = () => (
  <React.Fragment>
    <BrowserView>
      <div style={{ height: '8vh' }}></div>
      <footer
        className="py-5"
        id="footer"
        style={{ backgroundColor: '#224162' }}
      >
        <div className="container">
          <p className="m-0 text-center text-white">
            地址：80424高雄市鼓山區蓮海路70號 電資大樓EC-2017 | 電話：07-5250558
          </p>
          <p className="m-0 text-center text-white">
            信箱：cisc2020@ccisa.org.tw Copyright &copy; 2020{' '}
            <a className="text-info" href="https://www.ccisa.org.tw/">
              中華民國資訊安全學會
            </a>
          </p>
        </div>
      </footer>
    </BrowserView>
    <MobileView>
      <div style={{ height: '14vh' }}></div>
      <footer
        className="py-5"
        id="footer"
        style={{ backgroundColor: '#224162' }}
      >
        <div className="container">
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
        </div>
      </footer>
    </MobileView>
  </React.Fragment>
);
export default Footer;
