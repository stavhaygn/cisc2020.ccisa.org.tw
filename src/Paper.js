import React from 'react';
import { Container, Row, Column } from './Utils';

const Paper = () => (
  <Container title="論文徵稿">
    <Row>
      <Column title="線上投稿">
        <p>
          本大會採用EasyChair作為投稿系統，請投稿者至EasyChair註冊並進行投稿。
        </p>
        <a
          className="btn btn-primary"
          href="https://easychair.org/conferences/?conf=cisc2020"
        >
          EasyChair投稿系統
        </a>
      </Column>
      <Column title="投稿時程">
        <table className="table table-bordered col-md-3">
          <tbody>
            <tr>
              <td>論文投稿截止日</td>
              <td>
                <strike>2020/6/30</strike> <font color="red">2020/7/7</font>
              </td>
            </tr>
            <tr>
              <td>論文通知接受日</td>
              <td>2020/8/4</td>
            </tr>
            <tr>
              <td>論文完稿截稿日</td>
              <td>2020/8/10</td>
            </tr>
          </tbody>
        </table>
      </Column>
      <Column title="徵稿主題">
        <p>
          全國資安會議所發表之論文，將採公開方式徵求稿件，並經一定之審稿制度審核。研討會論文內容包含（但不限於）下列主題，歡迎各位先進踴躍投稿。
        </p>
        <table className="table table-bordered col-md-6">
          <tbody>
            <tr>
              <td>1. 密碼學與認證協定</td>
              <td>10. 資料庫安全</td>
            </tr>
            <tr>
              <td>2. 5G / B5G安全</td>
              <td>11. 入侵行為偵測</td>
            </tr>
            <tr>
              <td>3. 物聯網安全</td>
              <td>12. 工控安全</td>
            </tr>
            <tr>
              <td>4. 網路與行動安全</td>
              <td>13. 電子商務安全</td>
            </tr>
            <tr>
              <td>5. 數位鑑識與惡意程式分析</td>
              <td>14. 關鍵資訊基礎設施安全</td>
            </tr>
            <tr>
              <td>6. 持續性滲透攻擊</td>
              <td>15. 應用程式安全</td>
            </tr>
            <tr>
              <td>7. 系統安全</td>
              <td>16. 身分認證及生物辨識</td>
            </tr>
            <tr>
              <td>8. 網路管理</td>
              <td>17. 隱私保護</td>
            </tr>
            <tr>
              <td>9. 資料隱藏</td>
              <td>18. AI安全</td>
            </tr>
          </tbody>
        </table>
      </Column>
      <Column title="論文格式">
        論文得以中文或英文撰寫，格式為：A4大小，四邊各留 25
        mm，單行間距，雙欄文章，無須列印頁碼，每篇論文以 12 頁為限，英文字體
        Times New Roman 10點，中文字體標楷體 10
        點。請將論文全文存檔為PDF檔案於投稿截止日期前上傳至本會議網站，詳細傳送方式請參考下方投稿教學。
        <ul>
          <li>
            <p className="my-1">
              XeLaTeX範例的詳細使用方式請參考
              <a href="https://github.com/lindawan/cisc-latex/blob/master/README.md">
                README
              </a>
              。(提供來源：鄭欣明教授及萬子綾同學)
            </p>
          </li>
          <li>
            <p className="my-1">
              pdfTex範例亦可使用Overleaf線上編輯器，請參考
              <a href="https://www.overleaf.com/project/5ef9cc9c552c8f00015388b3">
                線上範例
              </a>
              。(提供來源：陳昱圻教授)
            </p>
          </li>
        </ul>
        <a href="/CISC2020_format-0121rev.doc" download>
          <button type="button" className="btn btn-success mr-3 mb-3">
            論文格式範例下載 Word
          </button>
        </a>
        <a href="/CISC2020_format_XeLaTex.tex" download>
          <button type="button" className="btn btn-success mr-3 mb-3">
            論文格式範例下載 XeLaTeX
          </button>
        </a>
        <a href="/CISC2020_format_pdfTex.tex" download>
          <button type="button" className="btn btn-success mr-3 mb-3">
            論文格式範例下載 pdfTeX
          </button>
        </a>
      </Column>
      <Column title="審查機制">
        <p>
          論文審查以匿名方式進行，審查結果將於論文接受通知日，通知各論文的聯絡人。被接受的論文必須將修正後的版本於註冊截止日以前寄回。論文的修正，參照審查意見修改，並製作成PDF格式檔案傳送至本會議的網站。
        </p>
      </Column>
      <Column title="論文出版計畫">
        <p>
          為增加全國資訊安全會議之國際化，我們擬推薦優秀論文至 Future Internet
          (EI Journal)、Journal of Electronic Science and Technology
          (INSPEC)、Security and Communication Networks (SCIE)或同等級之期刊。
        </p>
      </Column>
      <Column title="定稿/投稿教學">
        <a href="EasyChair-tutorial-Chinese-CISC2020.pdf" download>
          <button type="button" className="btn btn-success">
            開啟教學手冊PDF檔
          </button>
        </a>
      </Column>
      <Column title="論文定稿上傳教學影片">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Easychair tutorial"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/zYS2cYTADig"
            allowFullScreen
          ></iframe>
        </div>
      </Column>
    </Row>
  </Container>
);

export default Paper;
