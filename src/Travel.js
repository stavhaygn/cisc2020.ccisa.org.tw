import React from 'react';
import { Container, Row, Column, BlankA } from './Utils';

const Travel = () => (
  <Container title="旅遊資訊">
    <Row>
      <Column>
        <BlankA href="https://khh.travel/">
          <img src="/travel.png" className="img-fluid" alt="ResponsiveImage" />
        </BlankA>
      </Column>
    </Row>
  </Container>
);

export default Travel;
