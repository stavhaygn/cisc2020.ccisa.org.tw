import React from 'react';

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
  <div className="container">
    <h1 className="mt-4 mb-3">會議議程</h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">會議議程</li>
    </ol>

    <table
      id="keywords"
      cellSpacing="0"
      cellPadding="0"
      style={{ width: '100%' }}
    >
      <tbody>
        <DateColumn>2020年5月19日（星期二）</DateColumn>
        <NormalColumn time="時間" content="內容" place="地點"></NormalColumn>
        <NormalColumn
          time="14:00-17:00"
          content="報到註冊"
          place="待定"
        ></NormalColumn>
        <NormalColumn
          time="15:00-17:00"
          content="閉門會議"
          place="待定"
        ></NormalColumn>
        <RestColumn
          time="17:30-20:00"
          content="Welcome Dinner"
          place="待定"
        ></RestColumn>
      </tbody>
    </table>

    <hr />
    <table
      id="keywords"
      cellSpacing="0"
      cellPadding="0"
      style={{ width: '100%' }}
    >
      <tbody>
        <DateColumn>2020年5月20日（星期三）</DateColumn>

        <NormalColumn time="時間" content="內容" place="地點"></NormalColumn>

        <NormalColumn
          time="08:30-09:00"
          content="報到"
          place="待定"
        ></NormalColumn>
        <MultipleLinesColumn
          time="09:00-09:20"
          content={[
            '開幕致詞：',
            '鄭英耀 / 校長 (國立中山大學)',
            '范俊逸 / 理事長 (資訊安全學會)',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <MultipleLinesColumn
          time="09:20-10:10"
          content={[
            'Keynote 演講(一)',
            '主講人： 簡宏偉 / 處長 (行政院資通安全處)',
            '演講題目：待定',
            '主持人： 范俊逸 理事長',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <RestColumn time="10:10-10:30" content="茶會" place="待定"></RestColumn>
        <MultipleLinesColumn
          time="10:30-11:10"
          content={[
            '資安專題演講（一）',
            '主講人： 待定',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <NormalColumn
          time="11:10-12:10"
          content="全國資訊安全學會會員大會"
          place="待定"
        ></NormalColumn>

        <tr
          style={{
            borderTop: '1px solid #DCDCDC',
            backgroundColor: '#F0F8FF',
            textAlign: 'center',
          }}
        >
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>12:00-13:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>午餐</h5>
              <h5 style={{ color: 'black' }}>
                中華民國資訊安全學會/理監事聯席會議
              </h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>
        <NormalColumn
          time="13:10-14:00"
          content="賴溪松教授論文獎暨論文成果發表會"
          place="待定"
        ></NormalColumn>

        <MultipleLinesColumn
          time="14:00-14:50"
          content={[
            '產業趨勢演講（一）',
            '主講人： 待定',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>14:50-16:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black', textAlign: 'center' }}>
                論文發表(一)
              </h5>
            </p>

            <p>
              <table style={{ width: '100%', textAlign: 'center' }}>
                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session A3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session B3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session C3</h5>
                    </p>
                  </td>
                </tr>

                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>
              </table>
            </p>
          </td>

          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>

        <RestColumn time="16:10-16:30" content="茶會" place="待定"></RestColumn>
        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>16:30-17:50</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black', textAlign: 'center' }}>
                論文發表(二)
              </h5>
            </p>

            <p>
              <table style={{ width: '100%', textAlign: 'center' }}>
                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session A3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session B3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session C3</h5>
                    </p>
                  </td>
                </tr>

                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>
              </table>
            </p>
          </td>

          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>

        <RestColumn time="17:50-20:00" content="晚宴" place="待定"></RestColumn>
      </tbody>
    </table>

    <hr />

    <table
      id="keywords"
      cellSpacing="0"
      cellPadding="0"
      style={{ width: '100%' }}
    >
      <tbody>
        <DateColumn>2020年5月21日（星期四）</DateColumn>
        <NormalColumn time="時間" content="內容" place="地點"></NormalColumn>
        <NormalColumn
          time="08:30-09:00"
          content="報到"
          place="待定"
        ></NormalColumn>

        <MultipleLinesColumn
          time="09:00-09:50"
          content={[
            'Keynote 演講（二）',
            '主講人： 雷欽隆 / 教授 (國立台灣大學)',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <RestColumn time="09:50-10:10" content="休息" place="待定"></RestColumn>

        <MultipleLinesColumn
          time="10:10-11:10"
          content={[
            '資安專題演講（二）',
            '主講人： 待定',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <RestColumn time="11:10-11:30" content="茶會" place="待定"></RestColumn>
        <NormalColumn
          time="11:30-12:00"
          content="產業趨勢座談會"
          place="待定"
        ></NormalColumn>
        <RestColumn time="12:00-13:20" content="午餐" place="待定"></RestColumn>
      </tbody>
    </table>
    <hr />
    <table
      id="keywords"
      cellSpacing="0"
      cellPadding="0"
      style={{ width: '100%' }}
    >
      <tbody>
        <DateColumn>2020年5月22日（星期五）</DateColumn>
        <NormalColumn time="時間" content="內容" place="地點"></NormalColumn>
        <NormalColumn
          time="08:30-09:00"
          content="報到"
          place="待定"
        ></NormalColumn>
        <MultipleLinesColumn
          time="09:00-09:50"
          content={[
            '產業趨勢演講（二）',
            '主講人： 待定',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <RestColumn time="09:50-10:10" content="休息" place="待定"></RestColumn>
        <MultipleLinesColumn
          time="10:10-11:10"
          content={[
            '產業趨勢演講（三）',
            '主講人： 待定',
            '演講題目：待定',
            '主持人： 待定',
          ]}
          place="待定"
        ></MultipleLinesColumn>
        <NormalColumn
          time="11:10-12:00"
          content="TWISC@NSYSU 成果展示"
          place="待定"
        ></NormalColumn>
        <RestColumn time="12:00-13:00" content="午餐" place="待定"></RestColumn>
        <NormalColumn
          time="13:00-13:30"
          content="頒發最佳論文獎"
          place="待定"
        ></NormalColumn>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>13:30-14:50</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black', textAlign: 'center' }}>
                論文發表(三)
              </h5>
            </p>

            <p>
              <table style={{ width: '100%', textAlign: 'center' }}>
                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session A3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session B3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session C3</h5>
                    </p>
                  </td>
                </tr>

                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>
              </table>
            </p>
          </td>

          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>14:50-16:30</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black', textAlign: 'center' }}>
                論文發表(四)
              </h5>
            </p>

            <p>
              <table style={{ width: '100%', textAlign: 'center' }}>
                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session A3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session B3</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>Session C3</h5>
                    </p>
                  </td>
                </tr>

                <tr
                  style={{
                    borderBottom: '1px solid #D3D3D3',
                    textAlign: 'center',
                  }}
                >
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    bgcolor="#DFEBF6"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#FBE4D5"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                  <td
                    bgcolor="#E1EED7"
                    style={{ paddingLeft: '0px', textAlign: 'center' }}
                  >
                    <p>
                      <h5 style={{ color: 'black' }}>待定</h5>
                    </p>
                  </td>
                </tr>
              </table>
            </p>
          </td>

          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>

        <tr
          style={{
            borderTop: '1px solid #DCDCDC',
            backgroundColor: '#F0F8FF',
            textAlign: 'center',
          }}
        >
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>16:30-16:40</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>閉幕</h5>
            </p>
            <p>
              <h5 style={{ color: 'black' }}>范俊逸 / 理事長 (資訊安全學會)</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <div style={{ color: 'black' }}>待定</div>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>
);

export default ConferenceAgenda;
