import React from 'react';

const Travel = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">高雄旅遊資訊</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">高雄旅遊資訊</li>
    </ol>

    <div className="row">
      <div className="col-lg-12">
        <a href="https://khh.travel/">
          <img src="travel.png" className="img-fluid" alt="ResponsiveImage" />
        </a>
      </div>
    </div>
  </div>
);

export default Travel;
