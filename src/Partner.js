import React from 'react';
import { Container, Row, BlankA, Column } from './Utils';

const Card = props => (
  <div className="col-md-3 mb-3">
    <div className="card border-light ">
      <BlankA href={props.href}>
        <img className="card-img-top " src={props.src} alt="CardImageCap" />
        {/* <div className="card-body">
          <h5 className="card-text text-center">{props.children}</h5>
        </div> */}
      </BlankA>
    </div>
  </div>
);

const Partner = () => (
  <Container title="合作夥伴">
    <div className="row justify-content-center">
      <Column title="指導單位">
        <Row>
          <Card href="https://www.edu.tw/" src="/parners/moe.png">
            教育部
          </Card>

          <Card href="https://www.most.gov.tw/" src="/parners/most.png">
            科技部
          </Card>
        </Row>
      </Column>
      <Column title="主辦單位">
        <Row>
          <Card href="https://www.nsysu.edu.tw/" src="/parners/nsysu.png">
            國立中山大學
          </Card>

          <Card href="https://ccisa.org.tw/" src="/parners/ccisa.png">
            中華民國資訊安全學會
          </Card>
        </Row>
      </Column>
      <Column title="協辦單位">
        <Row>
          <Card
            href="https://www.ncc.gov.tw/chinese/index.aspx"
            src="/parners/ncc.png"
          >
            國家通訊傳播委員會
          </Card>
          <Card href="https://www.citi.sinica.edu.tw" src="/parners/citi.png">
            中央研究院資訊科技創新研究中心
          </Card>
          <Card
            href="https://www.facebook.com/citc.itri.tw"
            src="/parners/itri.png"
          >
            工研院巨量資訊科技中心
          </Card>
          <Card href="https://nicst.ey.gov.tw" src="/parners/dcs.png">
            行政院資通安全處
          </Card>
          <Card href="https://www.ttc.org.tw/eng.php" src="/parners/ttc.png">
            財團法人電信技術中心
          </Card>
          <Card href="https://www.iii.org.tw/" src="/parners/iii.png">
            財團法人資訊工業策進會
          </Card>
          <Card href="https://isrc.nsysu.edu.tw/" src="/parners/nsysu_isrc.png">
            國立中山大學 資訊安全研究中心
          </Card>
        </Row>
      </Column>
      <Column title="贊助廠商">
        <Row>
          <Card
            href="https://www.microsoft.com/zh-tw/"
            src="/parners/microsoft.png"
          >
            微軟
          </Card>
          <Card href="https://www.issdu.com.tw/" src="/parners/issdu.png">
            數聯資安
          </Card>
          <Card href="https://www.acercsi.com/" src="/parners/abe.png">
            安碁資訊
          </Card>
          <Card
            href="https://www.jcic.org.tw/main_ch/index.aspx"
            src="/parners/jcic.png"
          >
            財團法人金融聯合徵信中心
          </Card>
          <Card href="https://www.chtsecurity.com/" src="/parners/chts.png">
            中華資安國際
          </Card>
          <Card href="http://www.chttl.com.tw/ch/index/" src="/parners/cht.png">
            中華電信股份有限公司電信研究院
          </Card>
          <Card
            href="https://www.onwardsecurity.com/"
            src="/parners/onward.png"
          >
            安華聯網科技
          </Card>
          <Card
            href="https://www.ciphertech.com.tw/"
            src="/parners/ciphertech.png"
          >
            亞利安科技
          </Card>
          <Card href="https://www.nchc.org.tw/" src="/parners/nchc.png">
            財團法人國家實驗研究院國家高速網路與計算中心
          </Card>
          <Card href="https://www.twca.com.tw/" src="/parners/twca.png">
            台灣網路認證
          </Card>
          <Card
            href="http://www.paysecure.com.tw/"
            src="/parners/paysecure.png"
          >
            聯宏科技
          </Card>
          <Card
            href="https://www.trendmicro.com/zh_tw/business.html"
            src="/parners/trendmicro.png"
          >
            趨勢科技
          </Card>
          <Card
            href="https://www.fisc.com.tw/TC/Default.aspx"
            src="/parners/fisc.png"
          >
            財金資訊
          </Card>
          <Card href="https://ecolux.tech/" src="/parners/ecolux.png">
            尚承科技
          </Card>
          <Card
            href="http://www.provision.com.tw/"
            src="/parners/provision.png"
          >
            普鴻資訊
          </Card>
          <Card href="http://www.hwacom.com/" src="/parners/hwacom.png">
            華電聯網
          </Card>
          <Card href="https://www.twnic.net.tw/" src="/parners/twnic.png">
            財團法人台灣網路資訊中心
          </Card>
          <Card
            href="https://www.twcert.org.tw/tw/mp-1.html"
            src="/parners/twcert.png"
          >
            台灣電腦網路危機處理暨協調中心
          </Card>
          <Card
            href="https://innoserve.tca.org.tw/advertise_EDUSE.htm"
            src="/parners/tca.png"
          >
            大專校院資訊應用服務創新競賽
          </Card>
        </Row>
      </Column>
    </div>
  </Container>
);

export default Partner;
