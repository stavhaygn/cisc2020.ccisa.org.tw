import React from 'react';
import { Container } from './Utils';

const News = () => (
  <Container>
    <h1 className="mt-4 mb-3">最新訊息</h1>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">最新訊息</li>
    </ol>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">日期</th>
          <th scope="col">標題</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: '#F8C651' }}>
            <b>2020/1/16</b>
          </td>
          <td>
            <a href="/Paper">論文投稿已開始，歡迎大家踴躍投稿。</a>
          </td>
        </tr>
        <tr>
          <td style={{ color: '#F8C651' }}>
            <b>2020/1/16</b>
          </td>
          <td>
            <a href="/CTF">今年新增CTF及海報徵選活動，豐富獎項等您來拿。</a>
          </td>
        </tr>
        <tr>
          <td style={{ color: '#F8C651' }}>
            <b>2020/1/16</b>
          </td>
          <td>
            <a href="/Itinerary">報名即可免費參加高雄半日遊，千萬別錯過。</a>
          </td>
        </tr>
      </tbody>
    </table>
  </Container>
);

export default News;
