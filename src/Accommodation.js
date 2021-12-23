import React from 'react';
import { Container, Row } from './Utils';

const BlankA = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const Accommodation = () => (
  <Container title="住宿資訊" path={['交通與住宿', '住宿資訊']}>
    <Row>
      <div className="col-lg-12 mb-3">
        <iframe
          title="map"
          width="100%"
          height="400px"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/d/embed?mid=1YJ9B-Xxz2XebQyIpnKIkOltzF_tPgl7N"
        ></iframe>
      </div>

      <div className="col-lg-12 mb-3">
        <BlankA href="https://www.loveriverhotel.com.tw/">
          <h3>帝豪飯店-愛河館</h3>
        </BlankA>
        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/mfUAqf8mYwGzKxUs6">
                803高雄市鹽埕區新興街67號
              </BlankA>
            </li>
            <li>電話：07-972-3788</li>
            <li>訂房方式：電話訂房</li>
            <div className="mt-4">
              <table className="table table-bordered">
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

      <div className="col-lg-12 mb-3">
        <BlankA href="https://www.fullon-hotels.com.tw/kh/">
          <h3>福容飯店</h3>
        </BlankA>

        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/vwxst8bfcopR4xMo9">
                高雄市鹽埕區五福四路45號
              </BlankA>
            </li>
            <li>電話：(07)531-7777</li>
            <li>傳真：(07)521-1166</li>
            <li>
              Email：
              <a href="mailto:rsvn_KH@fullon-hotels.com.tw">
                rsvn_KH@fullon-hotels.com.tw
              </a>
            </li>
            <li>訂房預定單：下載預定單</li>
            <li>訂房方式：活動20天前回傳訂房單</li>
            <li>合作優惠：此優惠僅限與會貴賓活動當週入住</li>
            <div className="mt-4">
              <table className="table table-bordered">
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
                    <td>$2,800</td>
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

      <div className="col-lg-12 mb-3">
        <BlankA href="http://kaohsiung.fhotels.com.tw/">
          <h3>F商旅 愛河館</h3>
        </BlankA>
        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/gXME4QYhSwyNjzeYA">
                高雄市鹽埕區大智路129號
              </BlankA>
            </li>
            <li>電話：(07)532-3333</li>
            <div className="mt-4">
              <table className="table table-bordered">
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

      <div className="col-lg-12 mb-3">
        <BlankA href="https://kaohsiung.chateaudechine.com/tw/index">
          <h3>翰品酒店</h3>
        </BlankA>
        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/MUzJ5AbrjVjb8dCu7">
                高雄市鹽埕區大仁路43號
              </BlankA>
            </li>
            <li>電話：(07)521-3699</li>
            <li>傳真：(07)521-7128</li>
            <li>
              Email：
              <a href="mailto:kh-re@ldchotels.com">kh-re@ldchotels.com</a>
            </li>
            <li>訂房預定單：下載預定單</li>
            <li>訂房方式：回傳訂房單</li>
            <div className="mt-4">
              <table className="table table-bordered">
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
        <hr />
      </div>

      <div className="col-lg-12 mb-3">
        <BlankA href="http://www.cf-hotel.com/kh/">
          <h3>香富大飯店</h3>
        </BlankA>
        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/6jnt3xk7TosdmtaGA">
                高雄市鹽埕區光榮街83號
              </BlankA>
            </li>
            <li>電話：(07)521-8770 轉訂房</li>
            <li>傳真：(07)521-8771</li>
            <li>
              Email：
              <a href="mailto:sf.hotel3@gmail.com">sf.hotel3@gmail.com</a>
            </li>
            <div className="mt-4">
              <table className="table table-bordered">
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
        <hr />
      </div>

      <div className="col-lg-12 mb-3">
        <BlankA href="https://www.ambassador-hotels.com/tc/kaohsiung">
          <h3>高雄國賓大飯店</h3>
        </BlankA>
        <div className="mt-2">
          <ul>
            <li>
              地址：
              <BlankA href="https://goo.gl/maps/sUQsDBBrDxtpeymKA">
                高雄市前金區民生二路202號
              </BlankA>
            </li>
            <li>電話：(07)211-5211ext. 2215~2218</li>
            <li>傳真：(07)201-0348</li>
            <li>
              Email：
              <a href="mailto:resv.kh@ambassador-hotels.com">
                resv.kh@ambassador-hotels.com
              </a>
            </li>
            <li>
              訂房預定單：
              <a
                href="/documents/CISC2020_booking(English and Chinese).doc"
                download
              >
                下載預定單
              </a>
            </li>
            <li>訂房方式：回傳訂房單</li>
            <li>合作優惠：8/31-9/5當週入住</li>
            <div className="mt-4">
              <table className="table table-bordered">
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
                    <td>$2,300</td>
                    <td>8坪，一中床</td>
                    <td>早餐-1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華客房(一床)</td>
                    <td>$2,900</td>
                    <td>10坪，一大床</td>
                    <td>早餐-1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華港景房(一床)</td>
                    <td>$3,200</td>
                    <td>10坪，一大床</td>
                    <td>早餐-1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華客房(二床)</td>
                    <td>$3,300</td>
                    <td>10坪，兩中床</td>
                    <td>早餐-2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>豪華港景房(二床)</td>
                    <td>$3,600</td>
                    <td>10坪，兩中床</td>
                    <td>早餐-2</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ul>
        </div>
      </div>
    </Row>
  </Container>
);

export default Accommodation;
