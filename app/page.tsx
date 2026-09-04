import TopBar from "@/components/TopBar";
import PortfolioGrid from "@/components/PortfolioGrid";
import { getProjects } from "@/lib/projects";

// 견적앱 주소 — 바꾸실 때는 이 한 줄과 components/TopBar.tsx 를 함께 수정하세요.
const QUOTE_URL = "https://auto-quote.ah3d.kr/";

// 연락처 — 실제 정보로 바꿔주세요.
const EMAIL = "hello@ah3d.kr";
const PHONE = "010-0000-0000";

// 히어로 아래를 흘러가는 키워드입니다. 자유롭게 추가·삭제하세요.
const KEYWORDS = ["FDM 출력", "SLA 출력", "기계 설계", "시제품 제작", "기구 부품", "후가공·도색", "소량 생산", "3D 스캔"];

function Ticker() {
  const line = (
    <span>
      {KEYWORDS.map((k) => (
        <span key={k}>
          {k}
          <b> ✦ </b>
        </span>
      ))}
    </span>
  );
  // 끊김 없이 이어지도록 같은 줄을 두 번 넣습니다.
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {line}
        {line}
      </div>
    </div>
  );
}

export default function Home() {
  // public/portfolio/ 폴더의 사진을 자동으로 읽어옵니다.
  const projects = getProjects();

  return (
    <main>
      <TopBar />

      <section className="hero" id="home">
        <div className="blueprint"></div>
        <div className="wrap hero-body">
          <p className="eyebrow">3D PRINTING STUDIO</p>
          <h1>
            견적은 더 빠르게,
            <br />
            <em>가격은 언제나 투명하게.</em>
          </h1>
          <p className="hero-lead">
            아틀리에 하우스는 3D 프린팅 출력과 기계 설계를 함께 다루는
            스튜디오입니다. 도면 한 장에서 시작해 시제품, 기구 부품, 소량
            생산까지 한 곳에서 진행합니다.
          </p>
          <div className="hero-actions">
            <a href={QUOTE_URL} className="fill">
              3D 프린팅 견적 요청
            </a>
            <a href="#works" className="quiet">
              작업물 보기 →
            </a>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="works" id="works">
        <div className="wrap">
          <p className="slabel">WORKS</p>
          <div className="works-head">
            <h2>정밀함이 만들어낸 결과물</h2>
            <p className="count">
              <b>{projects.length}</b>
              Projects
            </p>
          </div>
          <PortfolioGrid items={projects} />
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <p className="slabel">CONTACT</p>
          <h2>
            도면 한 장으로
            <br />
            시작해 보세요.
          </h2>
          <a href={`mailto:${EMAIL}`} className="mail">
            {EMAIL} →
          </a>
          <div className="cgrid">
            <div>
              <h4>INQUIRY</h4>
              <p>
                {EMAIL}
                <br />
                {PHONE}
              </p>
            </div>
            <div>
              <h4>HOURS</h4>
              <p>
                평일 09:00 — 18:00
                <br />
                주말·공휴일 휴무
              </p>
            </div>
            <div>
              <h4>SERVICES</h4>
              <p>
                3D 프린팅 · 기계 설계
                <br />
                시제품 제작 · 후가공
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-row">
          <span>© 2026 아틀리에 하우스 ATELIER HOUSE</span>
          <span>사업자등록번호 000-00-00000</span>
        </div>
      </footer>
    </main>
  );
}
