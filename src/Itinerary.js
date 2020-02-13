import React from 'react';

const Itinerary = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">參訪行程</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">參訪行程</li>
    </ol>

    <div className="row">
      <div className="col-md-8 my-4">
        <h3 className="mb-3">參訪活動A-柴山生態尋奇 </h3>
        <h5 className="mb-3">地點：柴山(近龍泉寺)</h5>
        <h5 className="mb-3">時間：約2.5小時</h5>
        <h5 className="mb-3">活動概述：</h5>
        <p>
          柴山是高雄的後花園，滿山盡是草木蔥綠花香處處，此區早年受到軍方管制，民眾不能隨意進入，故還能保有原始自然風貌，走著走著野生獼猴可能就從您身邊走過，或在路旁嬉戲，人猴之間完全沒有距離。此行將踏上規劃完善的步道，讓大家親身體驗秘境健走、與猴漫遊的驚喜之旅。
        </p>
        <h5 className="mb-3">活動須知：</h5>
        <ol>
          <li>本活動為全程步行，請穿著輕便服裝、平底鞋，自備飲水。</li>
          <li>身體不適(感冒、發燒、咳嗽...等等)請勿跟團。</li>
          <li>上山除非身體需求，盡量不要攜帶登山杖、木棍。</li>
          <li>食物不要外露，並勿攜帶提袋、塑膠袋等上山。</li>
          <li>上山時盡可能攜帶後背包，而非束口袋、皮包等。</li>
          <li>不要做出過大動作，或大聲喧嘩。</li>
          <li>不要輕易、隨意觸摸獼猴。</li>
          <li>在與獼猴共處時，請勿隨意拿出食物。</li>
        </ol>
      </div>
      <div className="col-md-4 my-4">
        <img src="a.png" className="img-fluid" alt="ResponsiveImage" />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-4 my-4">
        <img src="b.png" className="img-fluid" alt="ResponsiveImage" />
      </div>
      <div className="col-md-8 my-4">
        <h3 className="mb-3">參訪活動B-西子灣海域體驗規劃 </h3>
        <h5 className="mb-3">地點：中山大學海域活動中心</h5>
        <h5 className="mb-3">時間：約3小時</h5>
        <h5 className="mb-3">活動概述：</h5>
        <p>
          中山大學擁有依山傍海的絕佳美景，此次活動商請海域運動中心專業教練規劃雷射型帆船、獨木舟、趴板等難得的海上活動，不必會游泳，不需到渡假村，就能讓您徜徉西灣、揚帆碧海，期待大家追風逐浪的英姿倩影成為西子灣另一道美景！
        </p>
        <h5 className="mb-3">活動須知：</h5>
        <ol>
          <li>水上活動請著輕便、不吸水材質的服裝(勿著裙裝或牛仔褲等)。</li>
          <li>水上活動請攜帶盥洗及防曬衣物、哨子、毛巾、拖鞋/涼鞋。</li>
          <li>校內與海域運動中心有飲水機，請自備環保水瓶/杯。</li>
          <li>實作期間請全程穿著救生衣，並聽從教練及救生員指示。</li>
          <li>戴眼鏡者請加掛固定帶以防脫落，或配戴隱形眼鏡者尤佳。</li>
          <li>
            如遇活動因受天候（下雨、颱風或風浪過大）及人力不可抗拒之因素影響，活動則取消，參加者可再擇另項活動參加。
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default Itinerary;
