import React from 'react';

const Registration = () => (
  <div className="container">
    <h1 className="mt-4 mb-3">論文投稿</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">論文投稿</li>
    </ol>
    <div className="row">
      <div className="col-lg-12 my-b">
        <h3 className="mb-3">論文主題</h3>
        <p>
          全國資安會議所發表之論文，將採公開方式徵求稿件，並經一定之審稿制度審核。研討會論文內容包含（但不限於）下列主題，歡迎各位先進踴躍投稿。
        </p>
        <table className="table col-md-6">
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
      </div>
      <div className="col-lg-12 mb-4">
        <h3 className="mb-3">論文格式</h3>
        <p>
          論文得以中文或英文撰寫，格式為：A4大小，四邊各留 25
          mm，單行間距，雙欄文章，無須列印頁碼，每篇論文以 12 頁為限，英文字體
          Times New Roman 10點，中文字體標楷體 10
          點。請將論文全文存檔為PDF檔案於投稿截止日期前上傳至本會議網站，詳細傳送方式請參考大會網站說明。
          <a href="CISC2020_format-0121rev.doc">論文格式範例</a>
        </p>
      </div>
      <div className="col-lg-12 mb-4">
        <h3 className="mb-3">審查機制</h3>
        <p>
          論文審查以匿名方式進行，審查結果將於論文接受通知日，通知各論文的聯絡人。被接受的論文必須將修正後的版本於註冊截止日以前寄回。論文的修正，參照審查意見修改，並製作成PDF格式檔案傳送至本會議的網站。
        </p>
      </div>

      <div className="col-lg-12 mb-4">
        <h3 className="mb-3">上傳教學</h3>
        <a href="https://easychair.org/conferences/?conf=apri2018">
          論文上傳連结
        </a>
        <div className="embed-responsive embed-responsive-1by1 mt-3">
          <iframe
            title="tutorial"
            className="embed-responsive-item"
            src="EasyChair-tutorial-Chinese-CISC2020.pdf"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Registration;
