import React from 'react';

const News = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">最新訊息</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">最新訊息</li>
    </ol>
    <h4>
      訊息產生中...
      <span role="img" aria-label="Message">
        💬
      </span>
    </h4>
    <hr />
  </div>
);

export default News;
