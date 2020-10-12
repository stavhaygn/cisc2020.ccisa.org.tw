import React from 'react';
import { isBrowser } from 'react-device-detect';
import { Container, Row, Column } from './Utils';

const DateColumn = ({ children }) => (
  <tr>
    <td className="bg-dark" colSpan="4">
      <div className="text-white py-3">{children}</div>
    </td>
  </tr>
);

const TableRow = ({ children, bg }) => (
  <tr
    style={{
      backgroundColor: bg ? '#E9ECEF' : '',
    }}
  >
    {children}
  </tr>
);

const TableColumn = ({ time, place, children, bg }) => (
  <TableRow bg={bg}>
    <td style={{ width: '20%' }}>
      <OneLine>{time}</OneLine>
    </td>
    <td style={{ width: '55%' }}>{children}</td>
    <td style={{ width: '25%' }}>
      <OneLine>{place}</OneLine>
    </td>
  </TableRow>
);

const Table = ({ children }) => (
  <table
    className="table-bordered col-md-12 text-center"
    cellSpacing="0"
    cellPadding="0"
  >
    <tbody>{children}</tbody>
  </table>
);

const OneLine = ({ children }) => <div className="py-3">{children}</div>;

const MultipleLines = ({ children }) => (
  <React.Fragment>
    <div className="py-3">
      {children.map((line, key) => (
        <div key={key}>{line}</div>
      ))}
    </div>
  </React.Fragment>
);

const Agenda = () => (
  <Container title="會議議程">
    <Row style={isBrowser ? { fontSize: '18px' } : {}}>
      <Column title="論文發表規則">
        <p>
          每人發表時間<font color="red">10</font>分鐘 、
          <font color="red">7</font>
          分鐘舉牌提醒、<font color="red">8</font>分鐘按鈴提醒、
          <font color="red">2</font>分鐘由主持人提問。
        </p>
      </Column>
      <Column title="會議議程表">
        <Table>
          <DateColumn>2020年9月1日（星期二）</DateColumn>
          <TableColumn time="時間" place="地點" bg>
            <OneLine>內容</OneLine>
          </TableColumn>
          <TableColumn time="14:00-17:00" place="博士廳">
            <MultipleLines>
              {[
                <strong key>資安專題演練</strong>,
                '主講人：MacacaHub (國立中山大學 資訊工程學系)',
                '題目：基礎網頁安全演練',
              ]}
            </MultipleLines>
          </TableColumn>
        </Table>
        <br />
        <Table>
          <DateColumn>2020 年9月2日（星期三）</DateColumn>
          <TableColumn time="時間" place="地點" bg>
            <OneLine>內容</OneLine>
          </TableColumn>
          <TableColumn time="09:00-09:30" place="國際會議廳">
            <OneLine>報到</OneLine>
          </TableColumn>
          <TableColumn time="09:30-09:50" place="國際會議廳">
            <MultipleLines>
              {[
                <strong key>開幕致詞</strong>,
                '鄭英耀 校長 （國立中山大學）',
                '范俊逸 理事長（資訊安全學會）',
              ]}
            </MultipleLines>
          </TableColumn>
          <TableColumn time="09:50-10:30" place="國際會議廳">
            <MultipleLines>
              {[
                <strong key>Keynote 演講（一）</strong>,
                '主講人：楊伯因 研究員(中央研究院)',
                '演講題目：後量子密碼學與美國國家標準局 (NIST) 的競賽',
                '主持人：范俊逸 理事長',
              ]}
            </MultipleLines>
          </TableColumn>
          <TableColumn time="10:30-11:00" place="圖資處十一樓" bg>
            <OneLine>茶會</OneLine>
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>11:10-12:00</OneLine>
              </td>
              <td>
                <OneLine>全國資訊安全學會會員大會</OneLine>
              </td>
              <td>
                <OneLine>國際會議廳</OneLine>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>產業攤位展示</OneLine>
              </td>
              <td>
                <OneLine>圖資處十一樓</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <TableColumn time="12:00-13:10" place="圖資處十一樓" bg>
            <MultipleLines>
              {['午餐', '中華民國資訊安全學會理監事聯席會議']}
            </MultipleLines>
          </TableColumn>
          <TableColumn time="13:10-14:10" place="國際會議廳">
            <OneLine>
              <strong>賴溪松教授論文獎暨論文成果發表會</strong>
            </OneLine>
          </TableColumn>
          <TableColumn time="14:10-14:40" place="國際會議廳">
            <MultipleLines>
              {[
                <strong key>資安專題演講（一）</strong>,
                '主講人：鄭欣明 教授',
                '演講題目：惡意基地台攻擊： 4G/5G的資安危機與轉機',
                '主持人:王智弘 教授',
              ]}
            </MultipleLines>
          </TableColumn>
          <TableColumn time="14:40-14:50" place="圖資處十一樓" bg>
            <OneLine>休息</OneLine>
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>14:50-15:40</OneLine>
              </td>
              <td>
                <Table>
                  <TableRow>
                    <td colSpan="4">
                      <OneLine>論文發表（一）</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>Session A1</OneLine>
                    </td>
                    <td>
                      <OneLine>Session B1</OneLine>
                    </td>
                    <td>
                      <OneLine>Session C1</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>最佳論文獎</OneLine>
                    </td>
                    <td>
                      <OneLine>學生論文獎</OneLine>
                    </td>
                    <td>
                      <OneLine>物聯網安全I</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>黃俊穎 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>羅乃維 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>鄭欣明 教授</OneLine>
                    </td>
                  </TableRow>
                </Table>
              </td>
              <td>
                <MultipleLines>
                  {['A1→中信廳', 'B1→1108', 'C1→1109']}
                </MultipleLines>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>產學技術研討(主持人：左瑞麟 教授)</OneLine>
              </td>
              <td>
                <OneLine>博士廳</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <TableColumn time="15:40-16:10" place="圖資處十一樓" bg>
            <OneLine>茶會(16:20海報徵選投票截止)</OneLine>
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>16:10-17:10</OneLine>
              </td>
              <td>
                <Table>
                  <TableRow>
                    <td colSpan="4">
                      <OneLine>論文發表（二）</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>Session A2</OneLine>
                    </td>
                    <td>
                      <OneLine>Session B2</OneLine>
                    </td>
                    <td>
                      <OneLine>Session C2</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>隱私保護</OneLine>
                    </td>
                    <td>
                      <OneLine>密碼學與認證協定I</OneLine>
                    </td>
                    <td>
                      <OneLine>物聯網安全II</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>黃正達 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>紀博文 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>陳麒元 教授</OneLine>
                    </td>
                  </TableRow>
                </Table>
              </td>
              <td>
                <MultipleLines>
                  {['A2→中信廳', 'B2→1108', 'C2→1109']}
                </MultipleLines>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>產學技術研討(主持人：孫宏民 教授)</OneLine>
              </td>
              <td>
                <OneLine>博士廳</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <TableColumn time="17:10-17:20" place="圖資處十一樓" bg>
            <OneLine>休息</OneLine>
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>17:20-18:10</OneLine>
              </td>
              <td>
                <Table>
                  <TableRow>
                    <td colSpan="4">
                      <OneLine>論文發表（三）</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>Session A3</OneLine>
                    </td>
                    <td>
                      <OneLine>Session B3</OneLine>
                    </td>
                    <td>
                      <OneLine>Session C3</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>系統安全</OneLine>
                    </td>
                    <td>
                      <OneLine>密碼學與認證協定II</OneLine>
                    </td>
                    <td>
                      <OneLine>物聯網安全III</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>張世豪 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>曾一凡 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>鄭伯炤 教授</OneLine>
                    </td>
                  </TableRow>
                </Table>
              </td>
              <td>
                <MultipleLines>
                  {['A3→中信廳', 'B3→1108', 'C3→1109']}
                </MultipleLines>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>產學技術研討(主持人：左瑞麟 教授)</OneLine>
              </td>
              <td>
                <OneLine>博士廳</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <TableRow>
            <td>
              <OneLine>18:30-20:00</OneLine>
            </td>
            <td colSpan="5">
              <OneLine>晚宴(西子灣沙灘會館)</OneLine>
            </td>
          </TableRow>
        </Table>
        <br />
        <Table>
          <DateColumn>2020 年9月3日（星期四）</DateColumn>
          <TableColumn time="時間" place="地點" bg>
            <OneLine>內容</OneLine>
          </TableColumn>
          <TableColumn time="09:00-09:30" place="1101 國際會議廳">
            <OneLine>報到</OneLine>
          </TableColumn>
        </Table>
        <Table>
          <TableRow>
            <td width="20%">
              <OneLine>09:30-10:10</OneLine>
            </td>
            <td width="40%">
              <MultipleLines>
                {[
                  <strong key>Keynote 演講（二）</strong>,
                  '主講人：陳振楠 會長(行動應用資安聯盟)',
                  '演講題目：ISO/IEC 62443之初探!',
                  '主持人：范俊逸 理事長',
                ]}
              </MultipleLines>
            </td>
            <td rowSpan="5" width="15%">
              <OneLine>CTF競賽</OneLine>
            </td>
            <td rowSpan="5" width="25%">
              <MultipleLines>
                {[
                  <strong key>演講</strong>,
                  '國際會議廳',
                  <br key />,
                  <strong key>CTF競賽</strong>,
                  '博士廳',
                ]}
              </MultipleLines>
            </td>
          </TableRow>
          <TableRow bg>
            <td>
              <OneLine>10:10-10:40</OneLine>
            </td>
            <td>
              <OneLine>茶會</OneLine>
            </td>
          </TableRow>
          <TableRow>
            <td>
              <OneLine>10:40-11:10</OneLine>
            </td>
            <td>
              <MultipleLines>
                {[
                  <strong key>資安專題演講（二）</strong>,
                  '主講人：紀博文 教授',
                  '演講題目：Do not ask me what I am looking for',
                  '主持人:王銘宏 教授',
                ]}
              </MultipleLines>
            </td>
          </TableRow>
          <TableRow bg>
            <td>
              <OneLine>11:10-11:30</OneLine>
            </td>
            <td>
              <OneLine>休息</OneLine>
            </td>
          </TableRow>
          <TableRow>
            <td>
              <OneLine>11:30-12:00</OneLine>
            </td>
            <td>
              <MultipleLines>
                {[
                  '產業趨勢演講',
                  '主講人：張士龍 資安產品經理(臺灣微軟股份有限公司)',
                  '演講題目：透過AI找出潛藏的攻擊信號-分享產業真實案例',
                  '主持人：陳嘉玫 教授',
                ]}
              </MultipleLines>
            </td>
          </TableRow>
        </Table>
        <Table>
          <TableColumn time="12:00-13:10" place="圖資處十一樓">
            <OneLine>午餐</OneLine>
          </TableColumn>
          <TableColumn time="13:10-13:40" place="中信廳">
            <MultipleLines>
              {[
                <strong key>資安專題演講（三）</strong>,
                '主講人：克拉迪 教授',
                '演講題目：Securing the Edge Computing: Current Cryptographic Practices and Challenges',
                '主持人: 徐瑞壕 教授',
              ]}
            </MultipleLines>
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td>
                <OneLine>13:40-14:50</OneLine>
              </td>
              <td>
                <Table>
                  <TableRow>
                    <td colSpan="4">
                      <OneLine>論文發表（四）</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>Session A4</OneLine>
                    </td>
                    <td>
                      <OneLine>Session B4</OneLine>
                    </td>
                    <td>
                      <OneLine>Session C4</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>網路與行動安全I</OneLine>
                    </td>
                    <td>
                      <OneLine>區塊鏈安全與應用I</OneLine>
                    </td>
                    <td>
                      <OneLine>應用服務安全I</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>莊文勝 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>李南逸 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>陳宗和 教授</OneLine>
                    </td>
                  </TableRow>
                </Table>
              </td>
              <td>
                <MultipleLines>
                  {['A4→中信廳', 'B4→1108', 'C4→1109']}
                </MultipleLines>
              </td>
            </TableRow>
          </React.Fragment>
          <TableColumn time="14:50-15:10" place="圖資處十一樓" bg>
            休息
          </TableColumn>
          <React.Fragment>
            <TableRow>
              <td>
                <OneLine>15:10-16:20</OneLine>
              </td>
              <td>
                <Table>
                  <TableRow>
                    <td colSpan="4">
                      <OneLine>論文發表（五）</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>Session A5</OneLine>
                    </td>
                    <td>
                      <OneLine>Session B5</OneLine>
                    </td>
                    <td>
                      <OneLine>Session C5</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>網路與行動安全II</OneLine>
                    </td>
                    <td>
                      <OneLine>區塊鏈安全與應用II</OneLine>
                    </td>
                    <td>
                      <OneLine>應用服務安全II</OneLine>
                    </td>
                  </TableRow>
                  <TableRow>
                    <td>
                      <OneLine>黃政嘉 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>陳以德 教授</OneLine>
                    </td>
                    <td>
                      <OneLine>楊政興 教授</OneLine>
                    </td>
                  </TableRow>
                </Table>
              </td>
              <td>
                <MultipleLines>
                  {['A5→中信廳', 'B5→1108', 'C5→1109']}
                </MultipleLines>
              </td>
            </TableRow>
          </React.Fragment>
        </Table>
        <br />
        <Table>
          <DateColumn>2020 年 9 月 4 日（星期五）</DateColumn>
          <TableColumn time="時間" place="地點" bg>
            內容
          </TableColumn>
          <TableColumn time="08:30-09:00" place="圖資大樓一樓">
            報到
          </TableColumn>
        </Table>
        <Table>
          <TableRow>
            <td width="20%">
              <OneLine>09:00-12:00</OneLine>
            </td>

            <td width="27.5%">
              <OneLine>參訪活動A-柴山生態尋奇</OneLine>
            </td>
            <td width="27.5%">
              <OneLine>參訪活動B-西子灣海域體驗</OneLine>
            </td>

            <td width="25%">
              <MultipleLines>
                {['A→柴山(近龍泉寺)', 'B→中山大學海域活動中心']}
              </MultipleLines>
            </td>
          </TableRow>
          <TableRow>
            <td colSpan="4">
              <OneLine>賦歸</OneLine>
            </td>
          </TableRow>
        </Table>
        <br />
      </Column>
      <Column title="產學技術研討議程">
        <Table>
          <TableRow bg>
            <td width="25%">
              <OneLine>時間</OneLine>
            </td>
            <td>
              <OneLine>單位</OneLine>
            </td>
            <td>
              <OneLine>演講主題</OneLine>
            </td>
          </TableRow>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>14:50-15:15</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>數聯資安股份有限公司</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>次世代資安監控中心實務探討</OneLine>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>周哲賢 資深技術顧問</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <React.Fragment>
            <TableRow bg>
              <td rowSpan="2">
                <OneLine>15:15-15:40</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>中央研究院資訊科技創新研究中心</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>AI in Security and Security in AI</OneLine>
              </td>
            </TableRow>
            <TableRow bg>
              <td>
                <OneLine>李育杰 研究員 兼任專題中心執行長</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <TableRow>
            <td>
              <OneLine>15:40-16:10</OneLine>
            </td>
            <td colSpan="4">
              <OneLine>休息</OneLine>
            </td>
          </TableRow>
          <React.Fragment>
            <TableRow bg>
              <td rowSpan="2">
                <OneLine>16:10-16:25</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>財團法人電信技術中心</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>5G世代．萬物聯網．資安威脅與風險</OneLine>
              </td>
            </TableRow>
            <TableRow bg>
              <td>
                <OneLine>林高裕 主任</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>16:25-16:40</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>安華聯網科技股份有限公司</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>物聯網產品資安解決方案</OneLine>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>李育杰 產品開發處/處長</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <React.Fragment>
            <TableRow bg>
              <td rowSpan="2">
                <OneLine>16:40-16:55</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>中華資安國際股份有限公司</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>工控資安攻擊手法與防護</OneLine>
              </td>
            </TableRow>
            <TableRow bg>
              <td>
                <OneLine>林澤宇 資安工程師</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
          <React.Fragment>
            <TableRow>
              <td rowSpan="2">
                <OneLine>16:55-17:10</OneLine>
              </td>
              <td>
                <OneLine>
                  <strong>中華電信股份有限公司數據通信分公司資訊處</strong>
                </OneLine>
              </td>
              <td rowSpan="2">
                <OneLine>安全電子郵件及電子文件未來趨勢</OneLine>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <OneLine>郭宗閔 博士</OneLine>
              </td>
            </TableRow>
          </React.Fragment>
        </Table>
        <br />
        <a href="/CISC2020_industry_agenda_20200817.pdf" download>
          <button type="button" className="btn btn-success mr-3 mb-3">
            產學技術研討議程表PDF下載
          </button>
        </a>
      </Column>
    </Row>
  </Container>
);

export default Agenda;
