"use client";

import { useState } from "react";

const services = [
  { no: "01", title: "3D 프린팅", text: "산업용 장비와 소재 선택을 바탕으로, 아이디어를 정밀한 실물로 완성합니다.", icon: "◌" },
  { no: "02", title: "기계 설계", text: "제조 환경과 사용성을 고려한 구조 설계로 제품의 가능성을 넓힙니다.", icon: "⌗" },
  { no: "03", title: "시제품 제작", text: "검증과 개선이 빠르게 이어지는 프로토타입 제작 프로세스를 제공합니다.", icon: "◇" },
  { no: "04", title: "기술개발 지원", text: "설계 검토부터 개발 파트너 연결까지, 실행 가능한 기술 해법을 찾습니다.", icon: "↗" },
];

const projects = [
  { tag: "MECHANICAL DESIGN", title: "Precision Drive Unit", kind: "project-one" },
  { tag: "PROTOTYPING", title: "Functional Housing", kind: "project-two" },
  { tag: "3D PRINTING", title: "Industrial Fixture", kind: "project-three" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <main>
    <header className="header">
      <a className="logo" href="#top" onClick={close}>AH<span>3D</span></a>
      <nav className={open ? "nav open" : "nav"} aria-label="주요 메뉴">
        <a href="#about" onClick={close}>ABOUT</a><a href="#services" onClick={close}>SERVICES</a><a href="#portfolio" onClick={close}>PORTFOLIO</a><a href="#contact" onClick={close}>CONTACT</a>
      </nav>
      <a className="header-contact" href="#contact">프로젝트 문의 <span>↗</span></a>
      <button className="menu-button" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid"></div><div className="hero-glow"></div>
      <div className="hero-copy">
        <p className="eyebrow">PRECISION ENGINEERING STUDIO</p>
        <h1>IDEAS<br /><em>BUILT</em> <span>WITH</span><br />PRECISION.</h1>
        <p className="hero-text">정밀한 설계와 디지털 제조 기술로<br />당신의 아이디어를 현실로 만듭니다.</p>
        <a className="button gold" href="#contact">프로젝트 시작하기 <b>↗</b></a>
      </div>
      <div className="hero-object" aria-hidden="true"><div className="ring ring-a"></div><div className="ring ring-b"></div><div className="core"></div><div className="line l1"></div><div className="line l2"></div></div>
      <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="intro section" id="about"><p className="eyebrow gold-text">WHAT WE DO</p><div><h2>복잡한 문제를<br /><em>정교한 결과물</em>로.</h2><p>AH3D는 제조와 디자인 사이의 간극을 줄입니다. 3D 프린팅, 기계 설계, 시제품 제작까지 — 경험과 기술을 연결해 더 나은 제품의 출발을 만듭니다.</p></div></section>

    <section className="services section" id="services"><div className="section-heading"><div><p className="eyebrow gold-text">CAPABILITIES</p><h2>OUR <em>SERVICES</em></h2></div><p>아이디어의 초기 단계부터<br />제조 가능한 완성까지 함께합니다.</p></div><div className="service-grid">{services.map((item) => <article className="service-card" key={item.no}><span className="service-no">{item.no}</span><span className="service-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`${item.title} 문의`}>자세히 보기 <b>↗</b></a></article>)}</div></section>

    <section className="portfolio section" id="portfolio"><div className="section-heading"><div><p className="eyebrow gold-text">SELECTED WORK</p><h2>MADE TO <em>PERFORM.</em></h2></div><a className="text-link" href="#contact">전체 프로젝트 보기 <b>↗</b></a></div><div className="project-grid">{projects.map((project) => <article className={`project ${project.kind}`} key={project.title}><div className="project-visual"><div className="object-shape"></div></div><div className="project-info"><p>{project.tag}</p><h3>{project.title}</h3><span>VIEW CASE STUDY ↗</span></div></article>)}</div></section>

    <section className="cta" id="contact"><p className="eyebrow gold-text">LET&apos;S MAKE IT REAL</p><h2>다음 아이디어를<br /><em>함께 만들까요?</em></h2><p>프로젝트의 목표와 필요한 기술을 알려주세요.<br />AH3D가 가장 현실적인 방법을 제안합니다.</p><a className="button gold" href="mailto:hello@ah3d.co.kr">프로젝트 문의하기 <b>↗</b></a></section>

    <footer><a className="logo" href="#top">AH<span>3D</span></a><div><p>3D PRINTING · MECHANICAL DESIGN<br />PROTOTYPING · TECHNICAL DEVELOPMENT</p><a href="mailto:hello@ah3d.co.kr">hello@ah3d.co.kr</a></div><p className="copyright">© 2026 AH3D. ALL RIGHTS RESERVED.</p></footer>
  </main>;
}
