import React from 'react';

const Traffic = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">交通資訊</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">交通資訊</li>
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3682.6809066223595!2d120.26254831491202!3d22.628387985154127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1571991467753!5m2!1szh-TW!2stw"
        ></iframe>
      </div>

      <div className="col-lg-12 mb-4">
        <h3>公車</h3>
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
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h3>捷運</h3>
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
        <h3>高鐵</h3>
        <ul>
          <li>
            高鐵左營站位於高雄市左營區高鐵路105號，左營站可連接高雄捷運，搭乘高雄捷運紅線至美麗島站，轉橘線至西子灣站，在2號出口站前搭乘接駁公車「橘1」即可到達中山大學。
          </li>
          <li>乘坐計程車約30分鐘路程，車資約250~300元左右。</li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h3>台鐵</h3>
        <ul>
          <li>
            高雄車站出站後可至火車站前的公車站搭乘248或50號公車即可到達中山大學隧道口。
          </li>
          <li>乘坐計程車約20分鐘路程，車資約200~250元左右。</li>
        </ul>
        <hr />
      </div>

      <div className="col-lg-12 mb-4">
        <h3>自行開車</h3>
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
        <h3>航空</h3>
        <ul>
          <li>
            至機場後可搭乘301號公車至火車站前，轉換248及50號公車至中山大學。
          </li>
          <li>乘坐計程車約20分鐘路程，車資約200~250元左右。</li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
);

export default Traffic;
