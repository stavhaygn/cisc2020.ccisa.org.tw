import React from 'react';

const Home = () => (
  <div className="container">
    <h1 className="my-4">最新訊息</h1>
    <div id="news_container">
      <div className="row">
        <div className="news">
          2019/11/20 議程準備中，請稍後
          <span role="img" aria-label="Construction">
            🚧
          </span>
        </div>
        <div className="news">2019/11/20 網站如常運行中</div>
        <div className="news">2019/11/10 經過會議討論過後，部分頁面需修改</div>
        <a
          href="/"
          style={{
            width: '100%',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          <div>More News</div>
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
    <h2>會議資料</h2>

    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">會議資訊</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit,
              repellat sequi itaque deserunt, dolores in, nesciunt, illum
              tempora ex quae? Nihil, dolorem!
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">大會組織</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">主辦單位</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              quisquam, error quod sed cumque, odio distinctio velit nostrum
              temporibus necessitatibus et facere atque iure perspiciatis
              mollitia recusandae vero vel quam!
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">活動內容</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">交通資訊</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="/">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">常見問題</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              earum nostrum suscipit ducimus nihil provident, perferendis rem
              illo, voluptate atque, sit eius in voluptates, nemo repellat
              fugiat excepturi! Nemo, esse.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default Home;
