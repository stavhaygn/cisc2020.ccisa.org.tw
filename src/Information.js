import React from 'react';
import { Container } from './Utils';

const Information = () => (
  <Container title="會議資訊">
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
              會議介紹
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
                <li>聯絡人：郭信男</li>
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
    </div>
  </Container>
);

export default Information;
