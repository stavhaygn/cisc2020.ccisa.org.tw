import React from 'react';
import { Container } from './Utils';

const DateColumn = ({ children }) => (
  <tr>
    <td bgcolor="#343A40" colSpan="4" style={{ width: '100%' }}>
      <p></p>
      <div style={{ color: 'white', textAlign: 'center' }}>{children}</div>
      <p></p>
    </td>
  </tr>
);

const NormalColumn = ({ time, content, place }) => (
  <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
    <td style={{ width: '20%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{time}</div>
      <p></p>
    </td>
    <td style={{ width: '50%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{content}</div>
      <p></p>
    </td>
    <td style={{ width: '30%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{place}</div>
      <p></p>
    </td>
  </tr>
);

const RestColumn = ({ time, content, place }) => (
  <tr
    style={{
      borderTop: '1px solid #DCDCDC',
      backgroundColor: '#F0F8FF',
      textAlign: 'center',
    }}
  >
    <td style={{ width: '20%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{time}</div>
      <p></p>
    </td>
    <td style={{ width: '50%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{content}</div>
      <p></p>
    </td>
    <td style={{ width: '30%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{place}</div>
      <p></p>
    </td>
  </tr>
);

const MultipleLinesColumn = ({ time, content, place }) => (
  <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
    <td style={{ width: '20%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{time}</div>
      <p></p>
    </td>
    <td style={{ width: '50%' }}>
      <p></p>
      {content.map((line, key) => (
        <div key={key} style={{ color: 'black' }}>
          {line}
        </div>
      ))}
      <p></p>
    </td>
    <td style={{ width: '30%' }}>
      <p></p>
      <div style={{ color: 'black' }}>{place}</div>
      <p></p>
    </td>
  </tr>
);

const ConferenceAgenda = () => (
  <Container title="每日議程" path={['會議議程', '每日議程']}>
    <h4>
      議程準備中，請稍後
      <span role="img" aria-label="Construction">
        🚧
      </span>
    </h4>
    <hr />
  </Container>
);

export default ConferenceAgenda;
