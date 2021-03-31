import React from 'react';
import { Container } from './Utils';

const Item = props => (
  <tr>
    <td style={{ color: '#224162' }}>
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
  </Container>
);

export default News;
