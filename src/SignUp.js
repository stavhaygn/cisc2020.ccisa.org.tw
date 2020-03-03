import React from 'react';
import { Container, Row, Column } from './Utils';

const SignUp = () => (
  <Container title="活動報名">
    <Row>
      <Column title="線上報名">
        <div className="mb-4">
          <a className="btn btn-primary" href="#">
            線上報名
          </a>
          <font className="text-danger"> (建構中)</font>
        </div>
      </Column>
      <Column title="報名時程">
        <table className="table table-bordered col-md-3">
          <tbody>
            <tr>
              <td>早鳥繳費期限</td>
              <td>2020/05/05-2020/05/10</td>
            </tr>
            <tr>
              <td>一般繳費期限</td>
              <td>2020/05/11-2020/05/20</td>
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
      </Column>
    </Row>
  </Container>
);

export default SignUp;
