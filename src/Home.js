import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Row } from './Utils';

const Item = props => (
  <tr>
    <td style={{ color: '#FFC650' }}>
      <b>{props.date}</b>
    </td>
    <td>
      <a href={props.href}>{props.children}</a>
    </td>
  </tr>
);

const Home = () => (
  <div className="container">
    <Row>
      <div className="col-md-6 mb-5">
        <h1 className="my-4">最新訊息</h1>
        <div className="card" style={{ backgroundColor: '#F7F7F7' }}>
          <div className="card-body">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">日期</th>
                  <th scope="col">標題</th>
                </tr>
              </thead>
              <tbody>
                <Item date="2020/1/16" href="/Paper">
                  論文投稿已開始，歡迎大家踴躍投稿。
                </Item>
                <Item date="2020/1/16" href="/CTF">
                  今年新增CTF及海報徵選活動，豐富獎項等您來拿。
                </Item>
                <Item date="2020/1/16" href="/Itinerary">
                  報名即可免費參加高雄半日遊，千萬別錯過。
                </Item>
              </tbody>
            </table>
            <a
              href="/News"
              style={{
                width: '100%',
                fontSize: '20px',
                textAlign: 'center',
              }}
            >
              <div>更多訊息</div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <h1 className="my-4">重要時程</h1>
        <div className="card" style={{ backgroundColor: '#F7F7F7' }}>
          <div className="card-body">
            <p>活動期間：2020/5/19-22 共4天</p>
            <p>活動地點：國立中山大學 圖資大樓11樓(高雄市鼓山區蓮海路70號)</p>
            <p>重要日期：</p>
            <ul>
              <li>
                <b>論文投稿截止日：2020/4/6</b>
              </li>
              <li>論文通知接受日：2020/5/4</li>
              <li>論文完稿截稿日：2020/5/10</li>
              <li>早鳥繳費期限：2020/5/10</li>
              <li>一般繳費期限：2020/5/20</li>
              <li>資安會議舉辦日期：2020/5/19-22</li>
            </ul>
          </div>
        </div>
      </div>

      <BrowserView>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src="/cfp.jpg"
              className="img-fluid"
              loading="lazy"
              alt="ResponsiveImage"
            />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src="/mcfp.jpg"
              className="img-fluid"
              loading="lazy"
              alt="ResponsiveImage"
            />
          </div>
        </div>
      </MobileView>
    </Row>
  </div>
);

export default Home;
