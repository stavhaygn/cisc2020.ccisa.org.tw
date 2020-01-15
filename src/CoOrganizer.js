import React from 'react';

const CoOrganizer = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">協辦單位</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">協辦單位</li>
    </ol>

    <div className="row">
      <div className="col-md-12">
        <h3 className="my-3">指導單位</h3>
        <ul>
          <td>
            <div className="col-md-10">
              <a href="https://www.edu.tw/">
                <img className="img-fluid" src="moe.png" alt="" width="100%" />
              </a>
            </div>
          </td>
          <td>
            <div className="col-md-10">
              <a href="https://www.most.gov.tw/">
                <img className="img-fluid" src="most.png" alt="" width="100%" />
              </a>
            </div>
          </td>
        </ul>
      </div>
    </div>
  </div>
);

export default CoOrganizer;
