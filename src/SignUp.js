import React from 'react';
import { Container, Row, Column } from './Utils';

const SignUp = () => (
  <Container title="會議報名">
    <Row>
      <Column title="線上報名">
        <a
          className="btn btn-primary mb-3"
          href="https://forms.gle/YSmk56Ks2fE6SuoA6"
        >
          線上報名
        </a>
        <br></br>
        <a href="/documents/CISC2020_paper_authorization.doc" download>
          <button type="button" className="btn btn-success">
            下載著論文授權書
          </button>
        </a>
      </Column>
      <Column title="報名時程">
        <table className="table table-bordered col-md-3">
          <tbody>
            <tr>
              <td>早鳥繳費期限</td>
              <td>2020/8/5-2020/8/10</td>
            </tr>
            <tr>
              <td>一般繳費期限</td>
              <td>2020/8/11-2020/9/2</td>
            </tr>
          </tbody>
        </table>
      </Column>
      <Column title="報名費用">
        <table className="table table-bordered col-md-3">
          <thead>
            <tr>
              <th scope="col">票種</th>
              <th scope="col">價格(新台幣)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>學生早鳥票</td>
              <td>3,000元</td>
            </tr>
            <tr>
              <td>一般早鳥票</td>
              <td>3,500元</td>
            </tr>
            <tr>
              <td>非早鳥票</td>
              <td>4,000元</td>
            </tr>
          </tbody>
        </table>
        <p>
          ※ 報名費內含晚宴乙人，若需攜伴，每人NT.800 元。 <br />※
          註冊費收據統一於大會報到時領取。 <br />※
          8/13(四)前每篇論文至少要有一人以「論文發表者」身分完成報名及繳費，逾期無法將論文收錄於論文集中。
        </p>
      </Column>
      <Column title="匯款資訊">
        <p>銀行匯款或ATM轉帳</p>
        <p>銀行：國泰世華銀行 東門分行(013)</p>
        <p>戶名：中華民國資訊安全學會 </p>
        <p>銀行帳號：032-50-831131-1</p>
      </Column>
    </Row>
  </Container>
);

export default SignUp;
