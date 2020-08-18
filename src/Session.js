import React from 'react';
import { isBrowser } from 'react-device-detect';
import { Container, Row, Column } from './Utils';

const sessionA1 = [
  {
    index: 'A1-01',
    authors: '楊政興, 翁麒耀, 陳建宇',
    title: '以差值保留加密技術實現加密影像上的可逆式資訊隱藏',
  },
  {
    index: 'A1-02',
    authors: 'Tienho Chang, Chia-Mei Chen, Gu-Hsin Lai and Yu-Che Hu',
    title:
      'The Analysis of the Wireless Access Point password with GPU and Rules-Based Method',
  },
  {
    index: 'A1-03',
    authors: 'Sheng-Fu Chang, Shin-Ming Cheng and Hahn-Ming Lee',
    title: '利用查詢行為分析偵測黑箱對抗式攻擊',
  },
  {
    index: 'A1-04',
    authors: 'Shih-Ting Huang, Shin-Ming Cheng and Hahn-Ming Lee',
    title: '基於分析模型最後隱藏層神經元與輸出的木馬檢測器',
  },
  {
    index: 'A1-05',
    authors:
      'Yi-Hsuan Wu, Bing-Kai Hong, Shih-Hsiung Chang and Shin-Ming Cheng',
    title: '透過惡意基地台功能容器虛擬化來實現信令偽造攻擊平台',
  },
];

const sessionB1 = [
  {
    index: 'B1-01',
    authors:
      'Cheng-Feng Hung, Siao-Shan He, Wei-Xiang Wang and Shin-Ming Cheng',
    title: '具物聯網設備資安檢測功能之MEC實驗平台',
  },
  {
    index: 'B1-02',
    authors: 'Chien-Yuan Lan, Chia-Wei Tien and Chun-Ying Huang',
    title: 'androidPF : 一個在Android上可指定過濾封包規則的應用程式',
  },
  {
    index: 'B1-03',
    authors: 'Cheng Yu Tu and Chih Hung Wang',
    title:
      'A Novel CNN-LSTM Intrusion Detection with Filter Based Feature Selection and Focal Loss Mechanism',
  },
  {
    index: 'B1-04',
    authors: 'Bing-Cheng Ke and Ruei-Hau Hsu',
    title:
      'Decentralized Public Key Infrastructure for IoT Networks Based on Blockchain',
  },
  {
    index: 'B1-05',
    authors: 'Yu-Hsuan Huang, Chih-Kai Yang and Rong-Jaye Chen',
    title: 'Quadrangle Inequality Improvement for CSIDH Strategy',
  },
];

const sessionC1 = [
  {
    index: 'C1-01',
    authors: 'Chihui Feng, 王喻正, 郭泓志, 黎光智',
    title: 'AIoT大平台資安架構',
  },
  {
    index: 'C1-02',
    authors: 'Hung-Yu Chien, An-Tong Shih and Lo-Yao Yeh',
    title:
      'Security Analysis on Cumulative-Keyed-Hash-based Authentication for IoT Smart Home',
  },
  {
    index: 'C1-03',
    authors: '李佳璇, 張禮恩, 陳麒元',
    title: '基於區塊鏈技術之行動通訊SIM架構',
  },
  {
    index: 'C1-04',
    authors: 'Chia-Wei Chen and Hsiao-Rong Tyan',
    title: '在LoRa環境內之反應式干擾攻擊威脅安全風險評估',
  },
  {
    index: 'C1-05',
    authors: '李潔欣, 陳品朴, 游佳興, 廖宸頡, 吳介騫',
    title: '基於Wi-Fi漏洞之禁航區內無人機反制系統實作',
  },
];

const sessionA2 = [
  {
    index: 'A2-01',
    authors: 'Shin-Jia Hwang and Wei Chieh Hsu',
    title:
      'Self-Balanced Red Black Trees for Dynamic Public Auditing Protocols',
  },
  {
    index: 'A2-02',
    authors: 'Chinyang Henry Tseng, Woei-Jiunn Tsaur and Wei-Tsen Yeh',
    title:
      'Secure Attribute-based Searchable Encryption Mechanism for Medical Data over Blockchain',
  },
  {
    index: 'A2-03',
    authors: '洪兆賢, 吳大鈞',
    title: '以深度學習與資訊隱藏技術做視訊之人臉隱私保護',
  },
  {
    index: 'A2-04',
    authors: '黃正達, 翁浩宇, 翁麒耀',
    title: '植基於具多表達範圍的5-Cube之資訊隱藏技術器',
  },
  {
    index: 'A2-05',
    authors: 'Shin Yan Chiou and Ting Hao Hsu',
    title: '一種具私密保護的影像比對方法',
  },
  {
    index: 'A2-06',
    authors: 'Gong-Ming Yang, Ji-Hwei Horng and Chin-Chen Chang',
    title: 'A 3D Polyhedron Model for Image Steganography',
  },
  {
    index: 'A2-07',
    authors: '鍾程洋, 張彥成, 黃冠鈞, 陳昱圻',
    title: '基於RAPPOR之本地化差分隱私近鄰演算法',
  },
];

const sessionB2 = [
  {
    index: 'B2-01',
    authors: 'Tao-Ku Chang and Ting-Hao Wang',
    title:
      'An Authorizing Mechanism for Protecting Against Beacon Counterfeiting',
  },
  {
    index: 'B2-02',
    authors: 'Jun-Rui Wang, Xin Xie and Yu-Chi Chen',
    title:
      'Generic Construction of Designated Verifier Signature from Standard Cryptogtaphic Algorithms',
  },
  {
    index: 'B2-03',
    authors: '高婉瑄, 郭文中, 王軍証 ',
    title: '基於MD5之3D-Playfair加密訊息驗證技術',
  },
  {
    index: 'B2-04',
    authors: 'Chin Hao and Chi Po-Wen',
    title: 'Authenticated Zero Knowledge Range Proof',
  },
  {
    index: 'B2-05',
    authors: 'Ci-Jyun Lin and Jen-Chun Chang',
    title: 'Visual Secret Sharing for Multiple Images with Extra Parameters',
  },
  {
    index: 'B2-06',
    authors: '蔡家緯, 張宗諒, 簡柏誠, 張耀中',
    title: 'Lightweight Mediated Semi-Quantum Secret Sharing Protocol',
  },
];

const sessionC2 = [
  {
    index: 'C2-01',
    authors: 'Tzu-Ling Wan and Shin-Ming Cheng',
    title: '透過執行檔位元序列對物聯網惡意軟體進行辨識與家族分類',
  },
  {
    index: 'C2-02',
    authors: '李建賢, 孫沛靖, 吳介騫 ',
    title: '藉由智慧音箱仿造聲音之社交工程攻擊演示',
  },
  {
    index: 'C2-03',
    authors: '紀帛伸, 蔡國裕, 李榮三 ',
    title: '適用於IoT環境中具隱私保護之輕量化RFID協定之改進',
  },
  {
    index: 'C2-04',
    authors: 'An-Chi He, Kuo-Chung Chen and Yi-Ming Chen',
    title: '整合區塊特徵萃取與多頭注意力機制之Android惡意軟體偵測系統',
  },
  {
    index: 'C2-05',
    authors: 'Bo-Rui Chen and Shin-Ming Cheng',
    title: '物聯網上基於移動性的SEIRD惡意程式傳播模型',
  },
  {
    index: 'C2-06',
    authors: 'Hsuan-Yu Lin, Ching-Feng Wang, Guan-Yu Lai and Yang-Cheng Huang',
    title: '物聯網智慧應用服務場域之系統層級資安防護評估框架',
  },
];

const sessionA3 = [
  {
    index: 'A3-01',
    authors: '石翔尹, 江孟哲 and Shih-Hao Chang',
    title: '在智慧工廠環境中使用時間序列方式來偵測與防禦勒索病毒',
  },
  {
    index: 'A3-02',
    authors: 'Ting-Yao Kao and Hsiao-Rong Tyan',
    title: '動態配置記憶體之安全保護機制',
  },
  {
    index: 'A3-03',
    authors: '楊明軒, 鄒育庭, 林志達, 黃鼎傑, 李美玲, 毛志方, 吳宗成',
    title: '應用於分散式工控系統之異常控制行為偵測',
  },
  {
    index: 'A3-04',
    authors: '陳嘉玫, 賴谷鑫, 蔡政勳, 歐雅惠 ',
    title: '適用於快速資安事故回應之自動化數位鑑識系統',
  },
  {
    index: 'A3-05',
    authors: 'You-Yi Lin, Wen-Chiao Hsu and I-En Liao',
    title:
      '用於工業控制系統入侵偵測方法的堆疊集成模型Intrusion Detection for Industrial Control Systems Using Stacking Ensemble Model',
  },
  {
    index: 'A3-06',
    authors: '郭鐛塘, 吳宗成',
    title: '基於Q-Learning之紅藍隊網路攻防演練設計與實作',
  },
];

const sessionB3 = [
  {
    index: 'B3-01',
    authors: '黃映榕, 蔡國裕, 賀盛志 ',
    title: '適用於物聯網之輕量化雙因子身分鑑別與金鑰交換方法與實作',
  },
  {
    index: 'B3-02',
    authors: '蔡旻諺, 卓信宏, 陳麒元 ',
    title: '一個利用基因演算法的高隨機性金鑰產生器',
  },
  {
    index: 'B3-03',
    authors: 'Shin Yan Chiou and Yen Kai Cheng',
    title: '允許授權者搜尋並支援多國語言之加密檔名搜尋機制',
  },
  {
    index: 'B3-04',
    authors:
      'Shan-Hsin Lee, Kuan-Hsien Li, Chia-Hsuan Hu, Li-Ren Zhang, Wei-Gang Sun and Shiuhpyng Shieh',
    title: '開源加解密函式庫之輕量化及跨平台部署',
  },
  {
    index: 'B3-05',
    authors: '林煜宸, 吳宗成 ',
    title: '應用於雲端分享之具期間限制的代理重加密方法',
  },
];

const sessionC3 = [
  {
    index: 'C3-01',
    authors: 'Yen-Ting Lee and Shin-Ming Cheng',
    title: '透過可讀字串對物聯網惡意軟體進行跨平台家族分類',
  },
  {
    index: 'C3-02',
    authors: 'Sheng-Hao Ma and Shin-Ming Cheng',
    title: '基於程序模擬與詞嵌入之物聯網惡意程式的主動防禦',
  },
  {
    index: 'C3-03',
    authors: 'Hui-Tang Lin and 梁元議 ',
    title: '在物聯網中基於物理不可仿造功能之安全喚醒機制',
  },
  {
    index: 'C3-04',
    authors:
      'Jr-Wei Huang, Kai-Lin Zhang, Yi-Ching Lui, Shu-Ming Chang and Shin-Ming Cheng',
    title: '虛擬化物聯網設備之安全漏洞檢測技術的探討與分析',
  },
  {
    index: 'C3-05',
    authors: 'Wei-Xiang Wang and Shin-Ming Cheng',
    title: '具有實體與虛擬化設備的物聯網誘捕網路之設計與開發',
  },
];

const sessionA4 = [
  {
    index: 'A4-01',
    authors: '凃奕豪, 蘇家禹, 洪晟峯, 柯志亨 ',
    title: '利用 P4 Switch 阻擋 Nmap 五種 Port Scan 方法以提升網路的安全性',
  },
  {
    index: 'A4-02',
    authors: '陳嘉玫, 許智源, 賴谷鑫, 林俊吾, 官大智 ',
    title: '基於輪廓的內部伺服器網路異常偵測',
  },
  {
    index: 'A4-03',
    authors: '許竣凱, 林智群, 劉上宇, 黃冠龍, 許振銘 ',
    title: '網路攻擊鏈系統安全強化數位靶場',
  },
  {
    index: 'A4-04',
    authors: '程凱, 蔡啟營 ',
    title: 'WEP加密機制缺陷暨破解手法之剖析',
  },
  {
    index: 'A4-05',
    authors: 'Teck Shyan Eng, Chia-Wei Tien and Chun-Ying Huang. ',
    title: '針對 WiFi 基地台認證者的模糊測試機制',
  },
  {
    index: 'A4-06',
    authors: '陳熾宏, 謝欽旭, 林志學, 黃永霖, 繆德澤, 洪盟峰',
    title: '植基於深度學習與高斯混合模型之DDOS未知攻擊偵測',
  },
  {
    index: 'A4-07',
    authors: '蔡宜儒, 吳宗恩, 莊文勝',
    title: '基於CRISP-DM方法論之深度學習網路異常偵測系統',
  },
];

const sessionB4 = [
  {
    index: 'B4-01',
    authors: 'Narn-Yih Lee and Wei-Ting Wu',
    title: '基於權重式層級分析法之區塊鏈適用性評估技術',
  },
  {
    index: 'B4-02',
    authors: '林詠章, 林珈萱, 鍾韻茹 ',
    title: '區塊鏈技術在醫療數據上的保全與應用',
  },
  {
    index: 'B4-03',
    authors: 'Hsin-Te Wu, Shi-Yi Sun and Fan-Hsun Tseng',
    title: '以區塊鏈為基礎建構虛實整合系統',
  },
  {
    index: 'B4-04',
    authors: '鄭錦楸, 陳威陵, 王泓達, 賴煜賢 ',
    title: '基於區塊鏈之伺服器日誌保全系統',
  },
  {
    index: 'B4-05',
    authors: '吳宗成, 羅乃維, 查士朝, 藍袖瑛, 舒君達, 利文韡, 彭聖貿',
    title: '具跨領域存取控制之異質區塊鏈安全聯合框架',
  },
  {
    index: 'B4-06',
    authors: '劉威成, 廖心妤, 陳志誠 ',
    title: '會計突破性創新—區塊鏈會計',
  },
];

const sessionC4 = [
  {
    index: 'C4-01',
    authors: 'Tzung-Her Chen',
    title:
      '以Hyperledger Fabric建構一個適用於智慧微電網之可信任再生能源交易平台',
  },
  {
    index: 'C4-02',
    authors: 'Rong-Ching Chang and Chu-Hsing Lin',
    title:
      'Detecting Propaganda on Sentence Level During the COVID-19 Pandemic',
  },
  {
    index: 'C4-03',
    authors: 'Albert Guan. ',
    title: 'Secure Outsourcing of Solving Truth Assignment of Boolean Formula',
  },
  {
    index: 'C4-04',
    authors: '高璿智, 邱垂邦, 丁培毅, 林韓禹 ',
    title: '基於生成對抗網路之身份特徵擷取與生物識別',
  },
  {
    index: 'C4-05',
    authors:
      'Jia-Yo Jhan, Liang-Bo Ouyang, En Lee, Ming-Wai Tsang, Chi-Hsin Yang, Shin-Ming Cheng and Hahn-Ming Lee',
    title: '神經網路的後門防禦統整',
  },
  {
    index: 'C4-06',
    authors: 'Chi-Wei Lo, Shin-Ming Cheng and Hahn-Ming Lee',
    title:
      'Deepfake Detector based on Face Recognition Enhanced with Face Alignment',
  },
];

const sessionA5 = [
  {
    index: 'A5-01',
    authors: 'Yi-Hsiang Chen, Wen-Chiao Hsu and I-En Liao',
    title: '使用隨機森林與卷積神經網路之工業控制系統網路攻擊分類方法',
  },
  {
    index: 'A5-02',
    authors:
      'Chia-Chun Lai, I-Hsien Liu, Chi-Che Wu, Chuan-Gang Liu and Jung-Shian Li',
    title: '運用回應特徵的蜜網偵測機制',
  },
  {
    index: 'A5-03',
    authors: '黃啟軒, 林禮賢, 陳麒元 ',
    title: '基於人工智慧之行動裝置無線電身分識別系統',
  },
  {
    index: 'A5-04',
    authors: '李維 and Ming-Hung Wang',
    title: '運用混合神經網路模型之網路入侵檢測系統',
  },
  {
    index: 'A5-05',
    authors: 'Yu-Jie Lang, Hsu-Tung Chien, Chia-Wei Tien and Chun-Ying Huang',
    title: '癱瘓行動通訊網路：系統化的 EPC 模糊測試分析',
  },
  {
    index: 'A5-06',
    authors: '柯昊 and Hui-Tang Lin. ',
    title: '基於深度學習之入侵偵測系統',
  },
  {
    index: 'A5-07',
    authors: 'Yu-Xinag Lin, Xue-Yuan Gu and Shin-Ming Cheng',
    title: '利用惡意LTE基地台實現災防告警訊息偽造攻擊',
  },
];

const sessionB5 = [
  {
    index: 'B5-01',
    authors: 'Wei-Chen Wu',
    title: '以區塊鏈與智能合約建立安全與公平之跨區域市場代幣交易制度',
  },
  {
    index: 'B5-02',
    authors: 'Ming-Xiu Lee and Tian-Fu Lee',
    title:
      'A Lightweight Blockchain-based Data Control Mechanism for Drug Supply Chain Environment',
  },
  {
    index: 'B5-03',
    authors:
      'Wu Cheng-Han, Wu Wei-Chen, Tsai Kuo-Yu, Hung Wei-Che and Lee Jung-San',
    title: '基於區塊鏈與智能合約實現具隱密性之雙重隨意組合拍賣平台',
  },
  {
    index: 'B5-04',
    authors: '周悅鵬, 周永振',
    title: '結合多重雜湊與區塊鏈機制之影像內容驗證技術',
  },
  {
    index: 'B5-05',
    authors: 'Yeeda Lee, 陳柏宏, 陳品宏, 黃晏林, Er Shuo Zhuang and Chun-I Fan',
    title:
      '建構基於區塊鏈3.0的電子投票系統 E-Voting System Based on Blockchain 3.0',
  },
];

const sessionC5 = [
  {
    index: 'C5-01',
    authors: '賴友新, 魏銪志, 蘇海博, 顏郁文',
    title: '基於K-近鄰演算法運用於真實遊戲玩家惡意退款之偵測',
  },
  {
    index: 'C5-02',
    authors: '翁世杰, 陳彥宏 ',
    title: '使用線性鬆弛技術解恢復遺失事件',
  },
  {
    index: 'C5-03',
    authors: '陳韋佑, 黃超群, 朱振宏, 蔡季薇, 唐崇實, 余聲旺 ',
    title: '驗證碼防盜撥機制與CDR分析盜撥行為之研究',
  },
  {
    index: 'C5-04',
    authors: '鍾億錡, 劉其萱, 劉建志, 莫閔勛, Cheng-Han Shie and Chun-I Fan',
    title: '基於語者辨識的電子鎖系統',
  },
  {
    index: 'C5-05',
    authors: 'Tzu-Chi Hsiao, Yen-Hung Chen and Ta-Hsiung Hu',
    title: '針對非正面的人臉辨識改進權重方法之研究',
  },
  {
    index: 'C5-06',
    authors: 'Yi‐chieh Liao, Chia-Mu Yu and Pang-Chieh Wang',
    title:
      'Rhinoceros: Three‐Party Efficient and Secure Neural Network Training Architecture',
  },
];

const Table = ({ children }) => (
  <table
    className="table-bordered col-md-12 text-center"
    cellSpacing="0"
    cellPadding="0"
  >
    <tbody>
      <tr>
        <td width="10%">順序</td>
        <td width="50%">作者</td>
        <td width="40%"> 主題</td>
      </tr>
      <TableColumn>{children}</TableColumn>
    </tbody>
  </table>
);

const TableColumn = ({ children }) => (
  <React.Fragment>
    {children.map((row, key) => (
      <tr key={key}>
        <td className="py-2">{row.index}</td>
        <td>{row.authors}</td>
        <td>{row.title}</td>
      </tr>
    ))}
  </React.Fragment>
);

const Session = () => (
  <Container title="論文發表場次" path={['會議議程', '論文發表場次']}>
    <Row style={isBrowser ? { fontSize: '18px' } : {}}>
      <Column title="9/2 14:50-15:40">
        <h5>A1最佳論文獎</h5>
        <Table>{sessionA1}</Table>
        <br />
        <h5>B1最佳學生論文獎</h5>
        <Table>{sessionB1}</Table>
        <br />
        <h5>C1物聯網安全 I</h5>
        <Table>{sessionC1}</Table>
      </Column>
      <Column title="9/2 16:10-17:10">
        <h5>A2隱私保護</h5>
        <Table>{sessionA2}</Table>
        <br />
        <h5>B2密碼學與認證協定 I</h5>
        <Table>{sessionB2}</Table>
        <br />
        <h5>C2物聯網安全 II</h5>
        <Table>{sessionC2}</Table>
      </Column>
      <Column title="9/2 17:20-18:10">
        <h5>A3系統安全</h5>
        <Table>{sessionA3}</Table>
        <br />
        <h5>B3密碼學與認證協定 II</h5>
        <Table>{sessionB3}</Table>
        <br />
        <h5>C3物聯網安全 III</h5>
        <Table>{sessionC3}</Table>
      </Column>
      <Column title="9/3 13:40-14:50">
        <h5>A4網路與行動安全 I</h5>
        <Table>{sessionA4}</Table>
        <br />
        <h5>B4區塊鏈安全與應用 I</h5>
        <Table>{sessionB4}</Table>
        <br />
        <h5>C4應用服務安全 I</h5>
        <Table>{sessionC4}</Table>
      </Column>
      <Column title="9/3 15:10-16:20">
        <h5>A5網路與行動安全 II</h5>
        <Table>{sessionA5}</Table>
        <br />
        <h5>B5區塊鏈安全與應用 II</h5>
        <Table>{sessionB5}</Table>
        <br />
        <h5>C5應用服務安全 II</h5>
        <Table>{sessionC5}</Table>
        <br />
        <a href="/CISC2020_session_20200813REV.pdf" download>
          <button type="button" className="btn btn-success mr-3 mb-3">
            論文發表場次PDF下載
          </button>
        </a>
      </Column>
    </Row>
  </Container>
);

export default Session;
