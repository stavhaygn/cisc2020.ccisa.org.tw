import React from 'react';
import { Container } from './Utils';

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

const News = () => (
  <Container title="最新訊息">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">日期</th>
          <th scope="col">標題</th>
        </tr>
      </thead>
      <tbody>
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
  </Container>
);

export default News;
