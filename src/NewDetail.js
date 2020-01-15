import React from 'react';

const allNews = [
  {
    date: '2020/1/6',
    title: '論文投稿已開始，歡迎大家踴躍投稿。',
    content: '論文投稿已開始，歡迎大家踴躍投稿。',
  },
];

const NewsDetail = ({ match }) => {
  let number = match.params.number;
  if (number >= allNews.length - 1) number = 0;
  const news = allNews[number];

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">訊息内容</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">訊息内容</li>
      </ol>
      <div className="card mb-3">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">{news.title}</h5>
        </div>
        <div>
          <div className="card-body">{news.content}内容</div>
          <div className="card-footer">發佈日期：{news.date}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
