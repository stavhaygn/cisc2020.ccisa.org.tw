import React from 'react';

const Activity = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">活動內容</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">活動內容</li>
    </ol>

    <div
      className="mb-4"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <div className="card">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              活動介紹
            </a>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="headingOne"
        >
          <div className="card-body">
            本次會議建議以密碼學、5G安全、系統安全、數位鑑識及惡意程式分析、電子商務安全、網路與行動安全、隱私保護、入侵行為偵測等相關領域論文發表為主，舉凡和資訊安全相關議題皆在討論之列。
            <p>會議內容建議分為下列幾個主軸：</p>
            <ul>
              <li>主題演講(Keynote Speech)</li>
              <p>
                將邀請國內外知名學者及產業界專家，經由大會演講方式，提供與會人士交流學習的機會。
              </p>

              <li>學術論文發表</li>
              <p>包含口頭發表和海報發表 (含邀請及徵稿部分)</p>

              <li>第30屆全國資訊安全會議 (CISC2020) 最佳學生論文/最佳論文獎</li>
              <p>
                將選出本次會議中最佳學生論文/最佳論文獎，榮獲最佳學生論文獎或最佳論文獎之學會會員，資訊安全學會將補助其參加資訊安全相關國際會議之機票與註冊費用。
              </p>
              <p>— 主要聯繫資訊 —</p>
              <ul>
                <li>聯絡人：郭信男、施宇澤、莊額碩、謝承翰、范湘絃</li>
                <li>聯絡電話：07-525-4346</li>
                <li>
                  聯絡地址：國立中山大學資訊工程學系(804 高雄市鼓山區蓮海路70號
                  國立中山大學資訊工程學系)
                </li>
              </ul>
              <p></p>

              <li>資訊安全交流座談會(資安廠商產品展示及徵才)</li>
              <p>
                舉行資安相關技術產品成果展、成果展示、技術說明或技術宣傳等，著重在產學合作交流之成果或人才培育。邀請資安相關廠商展示產品，讓與會人士可以了解目前業界實際運作方式。
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" role="tab" id="headingTwo">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              徵求論文
            </a>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="headingTwo"
        >
          <div className="card-body">
            <p>
              在本研討會所發表之論文，將採公開方式徵求稿件，並經一定之審稿制度審核。研討會論文內容包含（但不限於）下列主題：
            </p>
            <ul>
              <li>密碼學與認證協定</li>
              <li>5G安全</li>
              <li>物聯網安全</li>
              <li>網路與行動安全</li>
              <li>數位鑑識與惡意程式分析</li>
              <li>持續性滲透攻擊</li>
              <li>系統安全</li>
              <li>網路管理</li>
              <li>資料隱藏</li>
              <li>資料庫安全</li>
              <li>入侵行為偵測</li>
              <li>工控安全</li>
              <li>電子商務安全</li>
              <li>關鍵資訊基礎設施安全</li>
              <li>應用程式安全</li>
              <li>身分認證及生物辨識</li>
              <li>隱私保護</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" role="tab" id="headingThree">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              徵稿方式
            </a>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="headingThree"
        >
          <div className="card-body">
            <ul>
              <li>
                <p>
                  在徵求論文及論文審查機制方面，歡迎各界人士投稿，其投稿稿件必須具有原創性且未曾發表之學術論文。會議主題包含密碼學及資訊安全相關領域的理論、應用、實務及經驗。
                </p>
              </li>

              <li>
                <p>
                  投稿之論文可用中文或英文撰寫，格式為：A4大小，四邊各留 25
                  mm，單行間距，雙欄文章，無須列印頁碼，每篇論文以 12
                  頁為限，英文字體 Times New Roman 10點，中文字體標楷體 10 點
                  (詳細格式請見論文參考格式)。請將論文全文存檔為PDF檔案於投稿截止日期前上傳至本會議網站，詳細傳送方式請參考大會網站說明。為確保論文正確送達，若於一週內未收到電子郵件回覆，請逕與承辦單位進行聯繫確認。
                </p>
              </li>

              <li>
                <p>
                  審稿機制：大會將建置論文投稿系統，透過系統收齊論文後，擬邀請國內資訊安全相關領域學者/專家，共同擔任審查委員。其中每篇論文審稿將透過匿名方式進行審查。
                </p>
              </li>

              <li>
                <p>
                  論文出版計畫：為增加全國資訊安全會議之國際化，我們擬推薦優秀論文至
                  Future Internet (EI Journal)、Journal of Electronic Science
                  and Technology (INSPEC)、Security and Communication Networks
                  (SCIE)或同等級之期刊。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingFour">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              重要時程
            </a>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="headingFour"
        >
          <div className="card-body">
            <p>活動期間：2020年05月19~22日 共4天</p>
            <p>活動地點：國立中山大學 (高雄市鼓山區蓮海路70號)</p>

            <p>重要日期：</p>

            <ul>
              <li>論文投稿截止日期：2020年04月16日</li>
              <li>通知接受日期：2020年05月04日</li>
              <li>論文完稿截稿日期：2020年05月04日至05月09日</li>
              <li>早鳥繳費期限日期：2020年05月04日至05月10日</li>
              <li>一般繳費期限日期：2020年05月11日至05月15日</li>
              <li>資安會議舉辦日期：2020年05月19日至05月22日</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Activity;
