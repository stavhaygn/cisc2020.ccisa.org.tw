import React from 'react';

const Accommodation = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">住宿資訊</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">住宿資訊</li>
    </ol>

    <div className="row">
      <div className="col-lg-12 mb-4">
        <iframe
          title="map"
          width="100%"
          height="400px"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/d/u/0/embed?mid=1YJ9B-Xxz2XebQyIpnKIkOltzF_tPgl7N"
        ></iframe>
      </div>

      <div className="col-lg-12 mb-4">
        <h3>福容大飯店</h3>
        <ul>
          <li>地址：高雄市鹽埕區五福四路45號</li>
          <li>電話：(07)531-7777</li>
          <li>傳真：(07)521-1166</li>
          <li>Email：rsvn_KH@fullon-hotels.com.tw</li>
        </ul>
        <hr />
      </div>
      <div className="col-lg-12 mb-4">
        <h3>華王大飯店</h3>
        <ul>
          <li>地址：高雄市鹽埕區五福四路42號</li>
          <li>電話：(07)551-1515</li>
          <li>傳真：(07)551-0403</li>
          <li> Email：service@hotelkingdom.com.tw</li>
        </ul>
        <hr />
      </div>
      <div className="col-lg-12 mb-4">
        <h3>城市商旅高雄真愛館</h3>
        <ul>
          <li>地址：高雄市鹽埕區大義街1號</li>
          <li>電話：(07)521-5116</li>
        </ul>
        <hr />
      </div>
      <div className="col-lg-12 mb-4">
        <h3>城市商旅駁二館</h3>
        <ul>
          <li>地址：高雄市鹽埕區公園二路83號</li>
          <li>電話：(07)532-2777</li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
);

export default Accommodation;
