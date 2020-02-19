import React from 'react';
import { Container, Row, BlankA } from './Utils';

const Card = props => (
  <div className="card">
    <BlankA href={props.href}>
      <img className="card-img-top " src={props.src} alt="CardImageCap" />
      <div className="card-body">
        <p className="card-text text-center">{props.children}</p>
      </div>
    </BlankA>
  </div>
);

const Partner = () => (
  <Container title="合作夥伴">
    <Row>
      <div className="col-md-12">
        <h3 className="my-3">指導單位</h3>
      </div>
      <div className="col-md-2 pr-0">
        <Card href="https://www.edu.tw/" src="moe.png">
          教育部
        </Card>
      </div>
      <div className="col-md-2 pl-0">
        <Card href="https://www.most.gov.tw/" src="most.png">
          科技部
        </Card>
      </div>

      <div className="col-md-12">
        <h3 className="my-3">主辦單位</h3>
      </div>
      <div className="col-md-2 pr-0">
        <Card href="https://www.nsysu.edu.tw/" src="nsysu.png">
          國立中山大學
        </Card>
      </div>
      <div className="col-md-2 pl-0">
        <Card href="https://ccisa.org.tw/" src="ccisa.png">
          中華民國資訊安全學會
        </Card>
      </div>

      <div className="col-md-12">
        <h3 className="my-3">協辦單位</h3>
      </div>

      <div className="col-md-12">
        <h3 className="my-3">贊助廠商</h3>
      </div>
    </Row>
  </Container>
);

export default Partner;
