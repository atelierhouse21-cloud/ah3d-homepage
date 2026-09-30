import { HERO_PATHS } from "@/lib/home";
import { PathIcon } from "./icons";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="hero-top">
          <div className="hero-text">
            <p className="tlabel">3D PRINTING · MODELING · ENGINEERING</p>
            <h1>
              설계하고,
              <br />
              출력하고,
              <br />
              <em>검증합니다.</em>
            </h1>
            <p className="hero-lead">
              3D프린팅과 기계설계를 이용해
              <br />
              필요한 부품과 기능 검증용 시제품을 제작합니다.
            </p>
          </div>

          <nav className="hero-paths" aria-label="문의 선택">
            {HERO_PATHS.map((p) => (
              <a key={p.label} href={p.href} className="hpath">
                <PathIcon name={p.icon} />
                <span className="hpath-text">
                  <b>{p.label}</b>
                  <small>{p.sub}</small>
                </span>
                <i>→</i>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
