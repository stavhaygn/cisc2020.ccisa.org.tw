import React from 'react';
import { isBrowser } from 'react-device-detect';
import { Container, Row, Column } from './Utils';

const CampusMap = () => (
  <Container title="校園平面圖">
    <Row style={isBrowser ? { fontSize: '18px' } : {}}>
      <Column title="活動地點">
        <div className="mb-1">主會場在圖資大樓11樓</div>
        <div className="mb-1">晚宴會場在西子灣沙灘會館</div>
        <img src="/map.png" className="img-fluid" alt="ResponsiveImage" />
      </Column>
    </Row>
  </Container>
);

export default CampusMap;
