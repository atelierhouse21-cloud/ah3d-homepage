import TopBar from "@/components/TopBar";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { getProjects } from "@/lib/projects";

// 견적앱 주소 — 바꾸실 때는 이 한 줄만 수정하세요.
const QUOTE_URL = "https://auto-quote.ah3d.kr/";

const services = [["♜","3D 프린팅","FDM / SLA / SLS 등\n전문 설비를 이용한 3D 프린팅 서비스"],["⚙","기계 설계","제품 설계, 도면 제작, 구조 해석 등\n전문 설계 솔루션 제공"],["♙","시제품 제작","빠르고 정확한 시제품 제작으로\n아이디어를 현실로"],["✥","기술 개발 지원","제품 개발 전 과정의 기술 자문 및\n맞춤형 지원"]];

export default function Home() {
 // public/portfolio/ 폴더의 사진을 자동으로 읽어옵니다.
 const projects = getProjects();

 return <main>
  <TopBar />
  <section className="hero" id="home"><div className="blueprint"></div><div className="hero-photo"></div><div className="hero-shade"></div><div className="hero-copy"><h1>견적은 더 빠르게,<br />가격은 언제나 <strong>투명하게.</strong></h1><p>파일만 올리면, 언제든 바로 확인하는<br />
3D프린팅 자동 견적 서비스.</p><div className="hero-actions"><a href={QUOTE_URL} className="fill">3D 프린팅 견적 요청</a></div></div></section>
  <section className="service-strip" id="service">{services.map(([symbol,title,text])=><article key={title}><div className="service-symbol">{symbol}</div><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
  <section className="portfolio" id="portfolio"><div className="portfolio-head"><div><p>PORTFOLIO</p><h2>정밀함이 만들어낸 결과물</h2></div><a href="#contact">더보기 〉</a></div><PortfolioCarousel items={projects} /></section>
  <section className="about" id="about"><p>AH3D ENGINEERING</p><h2>설계에서 제작까지,<br />한 단계씩 정확하게.</h2><a href="#contact" className="outline">AH3D 소개 보기</a></section><section className="contact" id="contact"><p>PROJECT INQUIRY</p><h2>새로운 프로젝트를<br /><strong>시작해 보세요.</strong></h2><a href="mailto:hello@ah3d.co.kr" className="fill">프로젝트 문의하기</a></section><footer><a className="logo" href="#home">AH<span>3D</span></a><p>3D PRINTING · MECHANICAL DESIGN · PROTOTYPING</p><a href="mailto:hello@ah3d.co.kr">hello@ah3d.co.kr</a><small>© 2026 AH3D. ALL RIGHTS RESERVED.</small></footer>
 </main>;
}
