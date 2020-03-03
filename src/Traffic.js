import React from 'react';
import { Container, Row, BlankA } from './Utils';

const Traffic = () => (
  <Container title="交通資訊" path={['交通與住宿', '交通資訊']}>
    <Row>
      <div className="col-lg-12 mb-4">
        <div className="embed-responsive embed-responsive-21by9 mt-3">
          <iframe
            title="tutorial"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3096.744599856512!2d120.26546076636278!3d22.628768504738463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04059155b987%3A0xe149e10185f1be63!2sNational%20Sun%20Yat-Sen%20University%20Library!5e0!3m2!1sen!2stw!4v1579670997032!5m2!1sen!2stw"
          ></iframe>
        </div>
      </div>

      <div className="col-lg-12 mb-4">
        <h4>公車</h4>
        <ul>
          <li>
            學校隧道口至高雄火車站有248路公車可搭乘，車程約20分鐘，票價12元，班距約15~20分鐘。
          </li>
          <li>
            學校隧道口至大立伊勢丹、新堀江及文化中心有50路公車可搭乘，票價12元，班距約15~20分鐘。
          </li>
          <li>
            若需自學校搭乘公車至機場，可搭乘248路公車至高雄車站轉乘機場幹線或301路公車；亦可搭乘50路公車至中山路口轉乘機場幹線或301路公車至機場。
          </li>
          <li>
            公車路線查詢：高雄市公共車船管理處（高雄市公車語音查詢電話749-7100）
          </li>
          <li>
            <BlankA href="https://ibus.tbkc.gov.tw/bus/">高雄市公車資訊</BlankA>
          </li>
          <li>
            <BlankA href="https://safety-oga.nsysu.edu.tw/p/406-1296-204069,r11.php?Lang=zh-tw">
              校園公車資訊
            </BlankA>
          </li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h4>捷運</h4>
        <ul>
          <li>
            於西子灣站下車，請由2號出口(鼓山一路)出站，下車後：轉乘公車橘1，至本校行政大樓下車。(每30分鐘一班車,橘1時刻表)
          </li>
          <li>
            從高醫至中山：於後驛站搭乘捷運，至美麗島站轉乘，至西子灣站下車，沿臨海二路向西步行，至路底即為中山大學隧道，通過隧道後即至中山大學。
          </li>
          <li>
            從中山至高醫：於西子灣站搭乘捷運，至美麗島站轉乘，至後驛站下車，沿察哈爾一街向東步行至自由一路向南行即至高雄醫學大學。
          </li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h4>高鐵</h4>
        <ul>
          <li>
            高鐵左營站位於高雄市左營區高鐵路105號，左營站可連接高雄捷運，搭乘高雄捷運紅線至美麗島站，轉橘線至西子灣站，在2號出口站前搭乘接駁公車「橘1」即可到達中山大學。
          </li>
          <li>乘坐計程車約30分鐘路程，車資約250~300元左右。</li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h4>台鐵</h4>
        <ul>
          <li>
            高雄車站出站後可至火車站前的公車站搭乘248或50號公車即可到達中山大學隧道口。
          </li>
          <li>乘坐計程車約20分鐘路程，車資約200~250元左右。</li>
        </ul>
        <hr />
      </div>
      <div className="col-lg-12 mb-4">
        <h4>大眾運輸</h4>
        <ul>
          <li>
            高雄車站週邊有多家客運業者提供客運服務，路線遍及各縣市。
            路線及票價查詢：
          </li>
          <li>
            <a
              href="http://www.kingbus.com.tw/"
              title="國光客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              國光客運
            </a>
            （台北、桃園、新竹、台中、嘉義、台南、屏東等）
          </li>
          <li>
            <a
              href="http://www.ubus.com.tw/"
              title="統聯客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              統聯客運
            </a>
            （台北、桃園、新竹、台中、嘉義、台南、屏東等）
          </li>
          <li>
            <a
              href="https://www.aloha168.com.tw/"
              title="阿囉哈客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              阿囉哈客運
            </a>
            （台北、桃園、新竹、台中、嘉義、台南、屏東等）
          </li>
          <li>
            <a
              href="http://www.ebus.com.tw/"
              title="和欣客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              和欣客運
            </a>
            （台北、桃園、新竹、台中、嘉義、台南等）
          </li>
          <li>
            <a
              href="http://yoyonet.biz/egoing/bus/kaopin/chunan.htm"
              title="中南客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              中南客運
            </a>
            （墾丁、鵝鑾鼻）
          </li>
          <li>
            <a
              href="http://www.ksbus.com.tw/"
              title="高雄客運"
              style={{
                color: '#212529',
                outline: 'none',
                textDecoration: 'none',
              }}
            >
              高雄客運
            </a>
            （台中、大高雄地區、墾丁）
          </li>
          <li>
            註 :
            客運之終點站往往在高雄火車站或其鄰近地區，到達後可至火車站前的公車站搭乘248或50號公車即可到達學校隧道口。
          </li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h4>自行開車</h4>
        <ul>
          <li>
            本校位置位於高雄市鼓山區連海路70號，由於本校為著名景點西子灣，因此指標相當明顯，在高雄市區只需跟隨西子灣、鼓山渡輪站或是英國領事館的路標即可至本校。
          </li>
          <li>
            若由外縣市而來，可由中山高速公路中正路交流道下，沿中正路接五福路直行到底→左轉鼓山路→右轉臨海二路直行到底→左轉哨船街之後直行，即可到達本校。
          </li>
        </ul>

        <ul>
          <h5>— 停車資訊 —</h5>
          <li>
            汽車：請停放於海景餐廳旁的的收費停車場，以次計費，大客車：100元/輛；小客車：60元/輛。
          </li>
          <li>機車：請停放於海景餐廳旁的免費機車停車場。</li>
          <li>其它校內停車場均須停車證方可停放，違停者將進行拖吊與罰款。</li>
        </ul>

        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h4>航空</h4>
        <ul>
          <li>
            至機場後可搭乘301號公車至火車站前，轉換248及50號公車至中山大學。
          </li>
          <li>乘坐計程車約20分鐘路程，車資約200~250元左右。</li>
        </ul>
      </div>
    </Row>
  </Container>
);

export default Traffic;
