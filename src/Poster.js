import React from 'react';
import { isBrowser } from 'react-device-detect';
import { Container, Row, Column, OrderList, Emphasis } from './Utils';

const Poster = () => (
  <Container title="海報徵選">
    <Row style={isBrowser ? { fontSize: '18px' } : {}}>
      <Column title="活動目的">
        <p>
          為拉近資安與民眾距離，藉此提升全民對於資安的重視，藉由本次2020資安會議舉辦以資安為主題的海報徵選，鼓勵參加徵選者以繪圖方式呈現資訊安全的對於民眾生活的重要性並藉此提升民眾對於資安的意識。
        </p>
      </Column>
      <Column title="參加資格">
        <p>對資安競賽有興趣且25歲(含)以下本國籍在學學生。</p>
      </Column>
      <Column title="報名日期與報名方式">
        <OrderList cjk>
          {[
            <Emphasis key="key">
              報名日期:自109年03月13日起至報名人數額滿為止。
            </Emphasis>,
            <React.Fragment key="key">
              <p>報名方式</p>
              <p>
                本活動採網路報名，
                <Emphasis>無須繳交競賽報名費用</Emphasis>，有意參賽者
                <Emphasis highlight>
                  請在109年05月10日前完成報名資料填寫，並同時將作品上傳，每位參賽者限制10（含）件作品參賽。
                </Emphasis>
              </p>
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/1T8vNsNA60muxwQMM-UL0GL2fA5-idq-fQINyohSM3pw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                點我報名
              </a>
            </React.Fragment>,
            <React.Fragment key="key">
              <p>報名識別編號(E-Mail)</p>
              <p>
                報名所填寫之電子郵件地址為報名識別編號，報名後，後續程序如需填寫報名識別編號，請提供報名時所填寫之電子郵件地址。
              </p>
            </React.Fragment>,
            <React.Fragment key="key">
              <p>報名注意事項</p>
              <OrderList>
                {[
                  '網站填寫之報名表內容需完整及正確填寫，俾利聯絡活動相關事宜。',
                  <React.Fragment key="key">
                    經審核後符合參賽資格者，
                    <Emphasis highlight>
                      將會於109年05月15日寄發E-MAIL通知，始表示完成參賽手續。
                    </Emphasis>
                  </React.Fragment>,
                ]}
              </OrderList>
            </React.Fragment>,
          ]}
        </OrderList>
      </Column>
      <Column title="競賽說明">
        <OrderList cjk>
          {[
            <Emphasis key="key">競賽日期:109年09月02日09:00-17:00</Emphasis>,
            <Emphasis key="key">
              競賽地點:國立中山大學圖書資訊大樓11樓
            </Emphasis>,
            <React.Fragment key="key">
              <p>競賽方式：</p>
              <OrderList>
                {[
                  '資格審核：將由主辦單位審核作品是否符合徵選辦法，並依照主辦方寄信通知初審結果。',
                  <React.Fragment key="key">
                    <p>競賽：</p>
                    <p>
                      資格審核通過者，在會議前將輸出作品依本辦法最後的聯絡地址寄送到主辦單位，或於競賽前一日繳交輸出作品，以協助張貼海報等作業，如逾期未張貼海報者，將視為放棄徵選。
                      繳交方式可分為下方兩種：
                    </p>
                    <OrderList>
                      {[
                        '於會議開幕當天繳交至服務處，並由工作人員協助張貼海報。',
                        '於會議前五天（不含星期六、日與國定假日）寄送至主辦單位提供至聯絡地址。如遇寄送途中信件遺失、拋棄、損毀等非主辦方疏失，主辦方恕不負責。寄送地址請參考本文最下方聯絡方式，並請註明報名識別號碼。',
                      ]}
                    </OrderList>
                    <p>上述繳交方式均需於海報後方標注：</p>
                    <OrderList>
                      {[
                        '報名識別編號（報名時所填寫之E-mail）',
                        '參賽者姓名',
                        '作品編號（1~10，請與當初上傳編號相同）',
                        '作品名稱 （請與當初上傳作品名稱相同）',
                      ]}
                    </OrderList>
                  </React.Fragment>,
                ]}
              </OrderList>
            </React.Fragment>,
            <React.Fragment key="key">
              <p>評審方式</p>
              <p>評審方式為競賽期間讓與會貴賓以投票方式表決。</p>
              <OrderList>
                {[
                  '一人一票，票數採累計加總，得獎參賽者依票數高低排序。',
                  '比賽成績若未臻理想則依據評審之決議，得以從缺辦理。',
                ]}
              </OrderList>
            </React.Fragment>,
          ]}
        </OrderList>
      </Column>
      <Column title="作品繳交規格">
        <p>作品上傳規格 （資格審核）：</p>
        <OrderList none>
          {[
            '尺寸：A4電腦繪圖',
            '解析度：96dpi（含）以上，色彩模式為RGB',
            '檔案格式：JPEG或PNG檔',
            '檔案大小：10MB內',
          ]}
        </OrderList>
        <p>作品輸出規格（競賽）：</p>
        <OrderList none>
          {[
            '海報尺寸：A2（594mm x 420mm，含出血）',
            '創作理念尺寸：A6 （148mm x 105mm），文字大小須大於	14（含）',
            '解析度：300dpi（含）以上，CMYK四色印刷模式',
            <React.Fragment key="key">
              <img src="/poster.png" loading="lazy" alt="ResponsiveImage" />
            </React.Fragment>,
          ]}
        </OrderList>
      </Column>
      <Column title="序位說明與競賽獎勵">
        <p>第1名：頒發個人獎狀與新台幣3,000元禮卷。</p>
        <p>第2名：頒發個人獎狀與新台幣2,000元禮卷。</p>
        <p>第3名：頒發個人獎狀與新台幣1,000元禮卷。</p>
        <p>佳作：頒發個人獎狀與新台幣500元禮卷。</p>
        <OrderList>
          {[
            '得獎參賽者成績不得為0票，主辦單位可視競賽後成績調整得獎名次，  必要時得從缺或增加。',
            '若相同票數者，則依序以其獲得第1名、第2名…之票數多寡決定是否入選資格。',
            '佳作最多10名。',
            '參加者可獲得參加證明。',
            '頒獎典禮：於決賽結束後舉行',
          ]}
        </OrderList>
        <p>
          <b>
            備註:請得獎人經主辦單位通知得獎後七個工作日內簽署並繳交「著作權授權同意書」，逾期者視同放棄得獎資格，由後面名次得獎人遞補。
          </b>
        </p>
        <a href="CISC2020_poster_copyright_auth.doc" download>
          <button type="button" className="btn btn-success">
            下載著作權授權同意書
          </button>
        </a>
      </Column>
      <Column title="注意事項">
        <OrderList cjk>
          {[
            '參賽者務必填寫正確資料，如經審核資料不完整時者，或違反徵選規範或資格不符合者，主辦單位將有條件取消該名參賽者之參選資格，如有獲獎將追回其所有獎狀及獎金。',
            '參加徵選作品內容應避免涉及任何影響善良風俗或法律（包含色情、暴力、猥褻、毀謗等），違反者主辦單位有權取消該名徵選資格及追回獎項，且違反者須自負所有的法律責任。',
            '參賽作品如引用他人著作商標，參賽者應取得該商標所有者的同意並於報名時於備註中註明，若作品衍生智慧財產權之糾紛，由參賽者自行處理與其法律責任，主辦單位也將有權取消該名參賽者之參選資格，如有獲獎將追回其所有獎狀及獎金。',
            '參選作品須為未經公開發表之原創作品，且不得為市面上所發行之產品等商業行為之創作，亦不得抄襲他人作品或代勞之情事，若經人檢舉或告發，主辦方審議後將有權取消該名參賽者之參賽資格，如有獲獎將追回其所有獎狀及獎金，並須自負其所有法律責任。',
            '參賽者應自行保留其作品原稿，且交付之參選作品也不予退件。入主辦方遇不可抗力之因素，造成交付作品損毀，主辦方會另行通知參賽者交付備份作品，對損毀之作品恕不負賠償責任。',
            '徵選結果將於活動結束當天於主辦方與網站公佈，請得獎人提供證件（如身分證、駕照、健保卡）給予主辦方核對身份後發給予獎項；若當天無法到達者，主辦單位會依照報名時所填寫之聯絡資訊將獎狀或是禮券寄送給得獎者，若得獎者需更改獎狀與禮卷寄送地址，請事先聯絡主辦方修改寄送地址。',
            '如獎狀或禮券在寄達簽收後遺失或是盜領等情事發生，或是提供錯誤匯款資訊給予主辦方導致無法領取到獎金，主辦方將恕不負責補發。',
            '若參賽者參與徵選後視為同意上述規範，違反規則或經主辦方審議其資格不符者，主辦方將有權取消該名參賽者之參賽資格，如有獲獎將追回其所有獎狀及獎金。若有未盡事宜或是有任何疑問，歡迎利用下方聯絡方式聯繫主辦方，也請隨時注意網站公佈消息。',
          ]}
        </OrderList>
      </Column>
      <Column title="作品歸屬">
        <OrderList>
          {[
            '所有得獎之作者須與主辦單位簽訂權利義務合約書。',
            '所有得獎作品著作財產權歸主辦單位所有，在印製海報或相關刊物發表時，不另支稿費及版稅。',
            '所有得獎作品之作者將義務配合大會調整修改作品相關內容，並同意主辦單位將得獎作品結合大會活動，設計系列文宣品、廣告品，展示於展覽會場、媒體通路、報章雜誌、各相關網站等提供多元化的宣傳管道。',
            '主辦單位具有出版或公開展覽所有參賽作品之一切權利。',
          ]}
        </OrderList>
      </Column>
      <Column title="活動時程">
        <table className="table table-bordered col-md-6">
          <thead>
            <tr>
              <th scope="col">項目</th>
              <th scope="col">日期</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">報名</th>
              <td>2020/3/13-2020/5/10前(名額有限，額滿止)</td>
            </tr>
            <tr>
              <th scope="row">E-mail通知符合參賽資格者</th>
              <td>2020/5/15</td>
            </tr>
            <tr>
              <th scope="row">競賽</th>
              <td>2020/5/20 09:00-17:00</td>
            </tr>
          </tbody>
        </table>
      </Column>
      <Column title="聯絡方式">
        <p>TEL: (07)5250558</p>
        <p>E-MAIL: cisc2020@ccisa.org.tw</p>
        <p>聯絡人：中華民國資訊安全學會 陳秘書</p>
        <p>聯絡地址：80499高雄郵政59-26號信箱</p>
      </Column>
    </Row>
  </Container>
);

export default Poster;
