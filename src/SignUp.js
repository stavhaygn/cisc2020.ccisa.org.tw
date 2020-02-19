import React from 'react';
import { Container, Row } from './Utils';

const SignUp = () => (
  <Container title="活動報名">
    <Row>
      <div className="col-lg-12 my-4">
        <h3 className="mb-3">線上報名</h3>

        <a className="btn btn-primary" href="#">
          線上報名
        </a>
      </div>

      <div className="col-lg-12 my-4">
        <h3 className="mb-3">報名時程</h3>
        <table className="table table-bordered col-md-3">
          <tbody>
            <tr>
              <td>早鳥繳費期限</td>
              <td>2020/5/10</td>
            </tr>
            <tr>
              <td>一般繳費期限</td>
              <td>2020/5/20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-lg-12 my-4">
        <h3 className="mb-3">報名費用</h3>
        <table className="table table-bordered col-md-3">
          <tbody>
            <tr>
              <td>學生早鳥票</td>
              <td>3000元</td>
            </tr>
            <tr>
              <td>一般早鳥票</td>
              <td>3500元</td>
            </tr>
            <tr>
              <td>非早鳥票</td>
              <td>4000元</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Row>
  </Container>
);

export default SignUp;
