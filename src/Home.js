import React from 'react';

const Home = () => (
  <div className="container">
    <h1 className="my-4">最新訊息</h1>
    <div id="news_container">
      <div className="row">
        <table className="table table-borderless news">
          <thead>
            <tr>
              <th scope="col">日期</th>
              <th scope="col">標題</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: '#F8C651' }}>
                <b>2020/1/6</b>
              </td>

              <td>
                <a href="/News/1">論文投稿已開始，歡迎大家踴躍投稿。</a>
              </td>
            </tr>
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
    <h1 className="my-4">重要時程</h1>
    <div id="news_container">
      <div className="row">
        <div className="card-body news">
          <p>活動期間：2020/5/19-22 共4天</p>
          <p>活動地點：國立中山大學 (高雄市鼓山區蓮海路70號)</p>
          <p>重要日期：</p>
          <ul>
            <li>論文投稿截止日：2020/4/6</li>
            <li>通知接受日：2020/5/4</li>
            <li>論文完稿截稿日：2020/5/10</li>
            <li>早鳥繳費期限：2020/5/10</li>
            <li>一般繳費期限：2020/5/20</li>
            <li>資安會議舉辦日期：2020/5/19-22</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center mb-3">
      <img src="cfp.png"></img>
    </div>
  </div>
);

export default Home;
