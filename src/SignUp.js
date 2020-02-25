import React from 'react';
import { Container, Row } from './Utils';

const SignUp = () => (
  <Container title="活動報名">
    <Row>
      <div className="col-lg-12 mt-4">
        <h3 className="mb-3" style={{ float: 'left' }}>
          線上報名
        </h3>
        <div className="text-danger"> (建構中)</div>
      </div>
      <div className="col-lg-12 mb-4">
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
              <td>2020/05/05-2020/05/10</td>
            </tr>
            <tr>
              <td>一般繳費期限</td>
              <td>2020/05/11-2020/05/20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-lg-12 mt-4">
        <h3 className="mb-3" style={{ float: 'left' }}>
          報名費用
        </h3>
        <div className="text-danger"> (新台幣)</div>
      </div>
      <div className="col-lg-12 mb-4">
        <table className="table table-bordered col-md-3">
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
      </div>
    </Row>
  </Container>
);

export default SignUp;
