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
    </div>
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h3>帝豪飯店-愛河館</h3>
        <div className="mt-2">
          <ul>
            <li>地址：803高雄市鹽埕區新興街67號</li>
            <li>電話：07-972-3788</li>
            <li>訂房方式：電話訂房</li>
            <div className="mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">住宿專案</th>
                    <th scope="col">價格</th>
                    <th scope="col">格局</th>
                    <th scope="col">是否提供早點</th>
                    <th scope="col">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>標準雙人房</td>
                    <td>$1,480</td>
                    <td>8-9坪，兩小床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>標準三人房</td>
                    <td>$1.980</td>
                    <td>8-9坪，三小床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>標準四人房</td>
                    <td>$2,480</td>
                    <td>10-12坪，兩大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>房價已含稅及服務費</div>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h3>福容飯店</h3>
        <div className="mt-2">
          <ul>
            <li>地址：高雄市鹽埕區五福四路45號</li>
            <li>電話：(07)531-7777</li>
            <li>傳真：(07)521-1166</li>
            <li>Email：rsvn_KH@fullon-hotels.com.tw</li>
            <li>訂房預定單：下載預定單</li>
            <li>訂房方式：活動20天前回傳訂房單</li>
            <li>合作優惠：此優惠僅限與會貴賓活動當週入住</li>
            <div className="mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">住宿專案</th>
                    <th scope="col">價格</th>
                    <th scope="col">格局</th>
                    <th scope="col">是否提供早點</th>
                    <th scope="col">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>精緻客房</td>
                    <td>$2,000</td>
                    <td>10坪，兩小床或一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華雙床房</td>
                    <td>$2,000</td>
                    <td>10坪，市景兩中床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>景觀套房</td>
                    <td>$4,000</td>
                    <td>13坪，港景一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>行政客房</td>
                    <td>$3,000</td>
                    <td>10坪，市景兩小床或一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>行政客房</td>
                    <td>$3,400</td>
                    <td>10坪，港景兩小床或一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>免費健身房、三溫暖、游泳池</div>
            <div>免費停車(1房限1車)</div>
            <div>館內用餐9折</div>
            <div>收費自助洗衣</div>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h3>F商旅 愛河館</h3>
        <div className="mt-2">
          <ul>
            <li>地址：高雄市鹽埕區大智路129號</li>
            <li>電話：(07)532-3333</li>
            <div className="mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">住宿專案</th>
                    <th scope="col">價格</th>
                    <th scope="col">格局</th>
                    <th scope="col">是否提供早點</th>
                    <th scope="col">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>精緻二人房</td>
                    <td>$2,300</td>
                    <td>一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>雅緻二人房</td>
                    <td>$2,500</td>
                    <td>二小床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>雅緻三人房</td>
                    <td>$2,600</td>
                    <td>一大一小床或三小床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>溫馨四人房</td>
                    <td>$3,100</td>
                    <td>二大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>車位有限</div>
            <div>訂房時請說明中山大學配合方案</div>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h3>翰品酒店</h3>
        <div className="mt-2">
          <ul>
            <li>地址：高雄市鹽埕區大仁路43號</li>
            <li>電話：(07)521-3699</li>
            <li>傳真：(07)521-7128</li>
            <li>Email：kh-re@ldchotels.com</li>
            <li>訂房預定單：下載預定單</li>
            <li>訂房方式：回傳訂房單</li>
            <div className="mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">住宿專案</th>
                    <th scope="col">價格</th>
                    <th scope="col">格局</th>
                    <th scope="col">是否提供早點</th>
                    <th scope="col">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>雅緻一中床</td>
                    <td>$2,300</td>
                    <td>6-7坪，一中床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華一大床</td>
                    <td>$2,800</td>
                    <td>10坪，一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>雅緻兩小床</td>
                    <td>$2,600</td>
                    <td>6-7坪，兩小床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>雅緻家庭房</td>
                    <td>$3,000</td>
                    <td>10坪，兩中床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>訂房單之信用卡資料是保證訂房所使用，亦可到店付款</div>
            <div>免費健身房</div>
            <div>免費自助洗衣區（開放時間為早上07：00～晚上22：00）</div>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h3>香富大飯店</h3>
        <div className="mt-2">
          <ul>
            <li>地址：高雄市鹽埕區光榮街83號</li>
            <li>電話：(07)521-8770 轉訂房</li>
            <li>傳真：(07)521-8771</li>
            <li>Email：sf.hotel3@gmail.com</li>
            <div className="mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">住宿專案</th>
                    <th scope="col">價格</th>
                    <th scope="col">格局</th>
                    <th scope="col">是否提供早點</th>
                    <th scope="col">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>單人房</td>
                    <td>$1,600</td>
                    <td>7坪，一大床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>雙人房</td>
                    <td>$1,600</td>
                    <td>7坪，二單床</td>
                    <td>自助式早餐</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>飯店停車場有限、停滿時請停市立立體停車場。</div>
            <div>
              全頻道42吋液晶電視.個人保險箱.烏龍茶包.無聲冰箱.乾濕分離浴室.吹風機。
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Accommodation;
