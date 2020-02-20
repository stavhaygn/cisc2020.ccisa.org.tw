import React from 'react';

const Organizer = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">主辦單位</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">主辦單位</li>
    </ol>

    <div className="row">
      <div className="col-md-8">
        <h3 className="my-3">中華民國資訊安全學會</h3>
        <hr />

        <h4 className="my-3">學會宗旨</h4>
        <p>
          從事資訊安全之研究,推廣資訊安全之應用與發展,促進國內外資訊安全之研究與發展。
        </p>

        <h4 className="my-3">主要任務</h4>
        <ul>
          <li>舉辦與資訊安全相關之學術會議。</li>
          <li>
            舉行有關資訊安全之學術研究、講習、訓練
            、討論、訪問、觀摩等活動事項。
          </li>
          <li>收集國內外有關資訊安全之圖書與資料。</li>
          <li>發行有關資訊 安全之學術刊物、論文集、新知簡訊及書籍。</li>
          <li>研訂有關資訊安全之專用名稱、術語及符號。</li>
          <li>國際資訊安全學術機構聯系事項。</li>
          <li>其他有關資訊安全發展事項。</li>
        </ul>
        <hr />
      </div>

      <div className="col-md-4">
        <img
          src="/ccisa.png"
          className="img-fluid"
          alt="ResponsiveImage"
          width="100%"
        />
        <p style={{ textAlign: 'center' }}>
          http://www.ccisa.org.tw/index.html
        </p>
      </div>
    </div>
  </div>
);

export default Organizer;
