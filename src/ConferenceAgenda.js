import React from 'react';

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
        <tr>
          <td bgcolor="#000000" colSpan="4" style={{ width: '100%' }}>
            <p align="center" style={{ color: 'white' }}>
              <span></span>
            </p>
            <h4 style={{ color: 'white', textAlign: 'center' }}>
              2020年5月19日（星期二）
            </h4>
            <p align="center" style={{ color: 'white' }}></p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>時間</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>內容</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>地點</h5>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>14:00-17:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>報到註冊</h5>
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
              <h5 style={{ color: 'black' }}>15:00-17:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>閉門會議</h5>
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
              <h5 style={{ color: 'black' }}>17:30-20:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>Welcome Dinner</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>
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
        <tr>
          <td bgcolor="#000000" colSpan="4" style={{ width: '100%' }}>
            <p align="center" style={{ color: 'white' }}>
              <span>
                <h4 style={{ color: 'white', textAlign: 'center' }}>
                  2020年5月20日（星期三）
                </h4>
              </span>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>時間</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>內容</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>地點</h5>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>08:30-09:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>報到</h5>
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
              <h5 style={{ color: 'black' }}>09:00-09:20</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>開幕致詞：</h5>
              <h5 style={{ color: 'black' }}>鄭英耀 / 校長 (國立中山大學)</h5>
              <h5 style={{ color: 'black' }}>范俊逸 / 理事長 (資訊安全學會)</h5>
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
              <h5 style={{ color: 'black' }}>09:20-10:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>Keynote 演講(一)</h5>
              <h5 style={{ color: 'black' }}>
                主講人： 簡宏偉 / 處長 (行政院資通安全處)
              </h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 范俊逸 理事長</h5>
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
              <h5 style={{ color: 'black' }}>10:10-10:30</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>茶會</h5>
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
              <h5 style={{ color: 'black' }}>10:30-11:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>資安專題演講（一）</h5>
              <h5 style={{ color: 'black' }}>主講人： 待定</h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 待定</h5>
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
              <h5 style={{ color: 'black' }}>11:10-12:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>全國資訊安全學會會員大會</h5>
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

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>13:10-14:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>
                賴溪松教授論文獎暨論文成果發表會
              </h5>
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
              <h5 style={{ color: 'black' }}>14:00-14:50</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>產業趨勢演講（一）</h5>
              <h5 style={{ color: 'black' }}>主講人： 待定</h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 待定</h5>
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
              <h5 style={{ color: 'black' }}>未定</h5>
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
              <h5 style={{ color: 'black' }}>16:10-16:30</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>茶會</h5>
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
              <h5 style={{ color: 'black' }}>未定</h5>
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
              <h5 style={{ color: 'black' }}>17:50-20:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>晚宴</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>
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
        <tr>
          <td bgcolor="#000000" colSpan="4" style={{ width: '100%' }}>
            <p align="center" style={{ color: 'white' }}>
              <span>
                <h4 style={{ color: 'white', textAlign: 'center' }}>
                  2020年5月21日（星期四）
                </h4>
              </span>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>時間</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>內容</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>地點</h5>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>08:30-09:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>報到</h5>
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
              <h5 style={{ color: 'black' }}>09:00-09:50</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>Keynote 演講（二）</h5>
              <h5 style={{ color: 'black' }}>
                主講人： 雷欽隆 / 教授 (國立台灣大學)
              </h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人：待定</h5>
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
              <h5 style={{ color: 'black' }}>09:50-10:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>休息</h5>
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
              <h5 style={{ color: 'black' }}>10:10-11:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>資安專題演講（二）</h5>
              <h5 style={{ color: 'black' }}>主講人： 待定</h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 待定</h5>
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
              <h5 style={{ color: 'black' }}>11:10-11:30</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>茶會</h5>
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
              <h5 style={{ color: 'black' }}>11:30-12:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>產業趨勢座談會</h5>
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
              <h5 style={{ color: 'black' }}>12:00-13:20</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>午餐</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>待定</h5>
            </p>
          </td>
        </tr>
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
        <tr>
          <td bgcolor="#000000" colSpan="4" style={{ width: '100%' }}>
            <p align="center" style={{ color: 'white' }}>
              <span>
                <div style={{ color: 'white', textAlign: 'center' }}>
                  2020年5月22日（星期五）
                </div>
              </span>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>時間</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>內容</h5>
            </p>
          </td>
          <td style={{ width: '30%' }}>
            <p>
              <h5 style={{ color: 'black' }}>地點</h5>
            </p>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #DCDCDC', textAlign: 'center' }}>
          <td style={{ width: '20%' }}>
            <p>
              <h5 style={{ color: 'black' }}>08:30-09:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>報到</h5>
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
              <h5 style={{ color: 'black' }}>09:00-09:50</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>產業趨勢演講（二）</h5>
              <h5 style={{ color: 'black' }}>主講人： 待定</h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 待定</h5>
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
              <h5 style={{ color: 'black' }}>09:50-10:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>休息</h5>
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
              <h5 style={{ color: 'black' }}>10:10-11:10</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>產業趨勢演講（三）</h5>
              <h5 style={{ color: 'black' }}>主講人： 待定</h5>
              <h5 style={{ color: 'black' }}>演講題目：待定</h5>
              <h5 style={{ color: 'black' }}>主持人： 待定</h5>
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
              <h5 style={{ color: 'black' }}>11:10-12:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>TWISC@NSYSU 成果展示</h5>
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
              <h5 style={{ color: 'black' }}>12:00-13:00</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>午餐</h5>
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
              <h5 style={{ color: 'black' }}>13:00-13:30</h5>
            </p>
          </td>
          <td style={{ width: '50%' }}>
            <p>
              <h5 style={{ color: 'black' }}>頒發最佳論文獎</h5>
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
              <h5 style={{ color: 'black' }}>未定</h5>
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
              <h5 style={{ color: 'black' }}>未定</h5>
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
