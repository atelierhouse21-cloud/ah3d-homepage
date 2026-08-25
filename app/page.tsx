"use client";
import { useState } from "react";

const services = [["♜","3D 프린팅","FDM / SLA / SLS 등\n전문 설비를 이용한 3D 프린팅 서비스"],["⚙","기계 설계","제품 설계, 도면 제작, 구조 해석 등\n전문 설계 솔루션 제공"],["♙","시제품 제작","빠르고 정확한 시제품 제작으로\n아이디어를 현실로"],["✥","기술 개발 지원","제품 개발 전 과정의 기술 자문 및\n맞춤형 지원"]];
const projects = [["https://pantex.energy.gov/sites/default/files/PPH-25-144505.jpg","정밀 기계 부품"],["https://www.jp-photo.com.tw/images/portfolio-jiepin/life/p_0001.jpg","경량화 설계"],["https://www.lwtsistemas.com.br/wp-content/uploads/2019/08/iStock-1042631772.jpg","기능성 시제품"],["https://etteplan.b-cdn.net/2024/02/upcast-reference.png?quality=60&width=750","산업용 하우징"]];

export default function Home() {
 const [open,setOpen]=useState(false);
 return <main>
  <header className="topbar"><a href="#home" className="logo">AH<span>3D</span></a><nav className={open?"links open":"links"}>{[["HOME","#home"],["ABOUT","#about"],["SERVICE","#service"],["PORTFOLIO","#portfolio"],["EQUIPMENT","#equipment"],["BLOG","#blog"],["CONTACT","#contact"]].map(([name,href])=><a href={href} onClick={()=>setOpen(false)} key={name}>{name}</a>)}</nav><a className="inquiry" href="#contact">문의하기</a><button className="hamburger" onClick={()=>setOpen(!open)} aria-label="메뉴 열기"><span></span><span></span></button></header>
  <section className="hero" id="home"><div className="blueprint"></div><div className="hero-photo"></div><div className="hero-shade"></div><div className="hero-copy"><h1>아이디어를 설계하고,<br /><strong>기술</strong>로 현실을 만듭니다.</h1><p>3D 프린팅과 기계 설계를 기반으로<br />정밀한 제품 개발과 맞춤형 솔루션을 제공합니다.</p><div className="hero-actions"><a href="#service" className="fill">서비스 보기</a><a href="#portfolio" className="outline">포트폴리오 보기</a></div></div></section>
  <section className="service-strip" id="service">{services.map(([symbol,title,text])=><article key={title}><div className="service-symbol">{symbol}</div><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
  <section className="portfolio" id="portfolio"><div className="portfolio-head"><div><p>PORTFOLIO</p><h2>정밀함이 만들어낸 결과물</h2></div><a href="#contact">더보기 〉</a></div><div className="project-list">{projects.map(([image,name])=><article key={name}><img src={image} alt="" /><div><p>AH3D PROJECT</p><h3>{name}</h3></div></article>)}</div></section>
  <section className="about" id="about"><p>AH3D ENGINEERING</p><h2>설계에서 제작까지,<br />한 단계씩 정확하게.</h2><a href="#contact" className="outline">AH3D 소개 보기</a></section><section className="contact" id="contact"><p>PROJECT INQUIRY</p><h2>새로운 프로젝트를<br /><strong>시작해 보세요.</strong></h2><a href="mailto:hello@ah3d.co.kr" className="fill">프로젝트 문의하기</a></section><footer><a className="logo" href="#home">AH<span>3D</span></a><p>3D PRINTING · MECHANICAL DESIGN · PROTOTYPING</p><a href="mailto:hello@ah3d.co.kr">hello@ah3d.co.kr</a><small>© 2026 AH3D. ALL RIGHTS RESERVED.</small></footer>
 </main>;
}
