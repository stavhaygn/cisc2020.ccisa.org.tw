import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Row, BlankA } from './Utils';

const Item = props => (
  <tr>
    <td style={{ color: '#FFC650' }}>
      <b>{props.date}</b>
    </td>
    <td>
      <a style={{ color: '#224162' }} href={props.href}>
        {props.children}
      </a>
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
                <Item date="2020/8/18" href="#">
                  提醒各位參加的貴賓，活動期間進入室內集會場所，請攜帶個人證件登記身分，務必全程配戴口罩，並注重個人清潔。
                </Item>
                <Item date="2020/8/13" href="/Agenda">
                  議程及論文發表順序已公告，請參考會議議程。
                </Item>
                <Item date="2020/4/10" href="#">
                  為維護各位貴賓的健康與安全，經理監事決議將第三十屆全國資訊安全會議延期至2020/9/1-9/4辦理。
                </Item>
                <Item date="2020/3/13" href="/CTF">
                  CTF及海報徵選已開放報名囉，名額有限，歡迎踴躍報名參加。
                </Item>
                <Item date="2020/3/13" href="#">
                  溫馨提醒-為配合政府防疫相關政策，會議期間進入圖資大樓務必配合進場時為每位貴賓量額溫，並以酒精消毒雙手。
                </Item>
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
                color: '#224162',
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
            <p>活動期間：2020/9/1-4 共4天</p>
            <p>活動地點：國立中山大學 圖資大樓11樓(高雄市鼓山區蓮海路70號)</p>
            <p>重要日期：</p>
            <ul>
              <li>
                <b>
                  論文投稿截止日：<strike>2020/6/30</strike>{' '}
                  <font color="red">2020/7/7</font>
                </b>
              </li>
              <li>論文通知接受日：2020/8/4</li>
              <li>論文完稿截稿日：2020/8/10</li>
              <li>早鳥繳費期限：2020/8/10</li>
              <li>一般繳費期限：2020/9/2</li>
              <li>資安會議舉辦日期：2020/9/1-4</li>
            </ul>
          </div>
        </div>
      </div>

      <BrowserView>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <BlankA href="https://forms.gle/7MoU6zBwcVJJ9Ld9A">
              <img
                src="/CISC2020_practice_web.jpg"
                className="img-fluid"
                loading="lazy"
                alt="ResponsiveImage"
              />
            </BlankA>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <BlankA href="https://forms.gle/7MoU6zBwcVJJ9Ld9A">
              <img
                src="/CISC2020_practice_web_m.jpg"
                className="img-fluid"
                loading="lazy"
                alt="ResponsiveImage"
              />
            </BlankA>
          </div>
        </div>
      </MobileView>
    </Row>
  </div>
);

export default Home;
