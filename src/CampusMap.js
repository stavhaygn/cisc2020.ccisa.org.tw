import React from 'react';

const CampusMap = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">校園地圖</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">校園地圖</li>
    </ol>

    <div className="row">
      <div className="col-lg-12">
        <p>活動地點在圖資大樓11樓</p>
      </div>
      <div className="col-lg-12 mb-4">
        <img src="/map.png" className="img-fluid" alt="ResponsiveImage" />
      </div>
    </div>
  </div>
);

export default CampusMap;
