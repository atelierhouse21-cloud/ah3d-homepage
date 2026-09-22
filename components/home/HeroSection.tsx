import { HERO_PATHS } from "@/lib/home";
import { PathIcon } from "./icons";

// 오른쪽 기술 도면 — 3D 부품 이미지 위에 치수선·상세도·PART No. 를 얹은 편집용 그래픽입니다.
// ⚠️ 숫자는 디자인 요소일 뿐 실제 제품 치수가 아닙니다.
// 부품 이미지는 public/hero/part-bracket.png 를 다른 이미지로 바꾸면 교체됩니다.
function HeroDrawing() {
  const mono = "ui-monospace,Menlo,Consolas,monospace";
  return (
    <svg className="hero-cad" viewBox="0 0 640 360" role="img" aria-label="기계 부품 CAD 도면">
      {/* 기준선 */}
      <g stroke="#cbd5e1" strokeWidth="0.8" fill="none">
        <path d="M46 84h404v196H46z" />
        <path d="M46 300h430M20 52v262" strokeDasharray="1 0" opacity=".6" />
      </g>
      {/* 구멍 표시 (십자선) */}
      <g stroke="#2463EB" strokeWidth="1" fill="none">
        <circle cx="66" cy="104" r="7" />
        <path d="M56 104h20M66 94v20" strokeWidth=".7" />
        <circle cx="440" cy="104" r="7" />
        <path d="M430 104h20M440 94v20" strokeWidth=".7" />
        <circle cx="74" cy="186" r="7" />
        <path d="M64 186h20M74 176v20" strokeWidth=".7" />
        <path d="M66 104 440 104" strokeDasharray="10 4 2 4" strokeWidth=".7" opacity=".7" />
      </g>
      {/* 치수선 */}
      <g stroke="#94a3b8" strokeWidth="1" fill="none">
        <path d="M46 60h404M46 53v14M450 53v14" />
        <path d="M22 84v196M15 84h14M15 280h14" />
        <path d="M140 322h236M140 315v14M376 315v14" />
      </g>
      {/* 3D 부품 */}
      <image href="/hero/part-bracket.png" x="92" y="64" width="330" height="285" preserveAspectRatio="xMidYMid meet" />
      {/* 상세도 A */}
      <g fill="none" strokeWidth="1">
        <path d="M368 176 470 236" stroke="#2463EB" strokeDasharray="3 3" />
        <circle cx="368" cy="176" r="12" stroke="#2463EB" strokeDasharray="3 3" />
        <circle cx="530" cy="262" r="54" fill="rgba(36,99,235,.05)" stroke="#2463EB" strokeWidth="1.3" />
        <circle cx="530" cy="262" r="40" stroke="#93b4f5" />
        <ellipse cx="530" cy="262" rx="26" ry="15" fill="#f4f6fa" stroke="#64748b" />
        <ellipse cx="530" cy="262" rx="15" ry="8" fill="#e5e9f0" stroke="#64748b" />
      </g>
      {/* 글자 */}
      <g fill="#64748b" fontSize="11" fontFamily={mono} letterSpacing=".5">
        <text x="248" y="46" textAnchor="middle">120.0</text>
        <text x="30" y="188" transform="rotate(-90 30 188)" textAnchor="middle">60.0</text>
        <text x="258" y="348" textAnchor="middle">72.0</text>
        <text x="462" y="100">4×Ø5.5</text>
        <text x="470" y="200" opacity=".55">Ø8.0</text>
        <text x="530" y="336" textAnchor="middle" fill="#334155">DETAIL A</text>
        <text x="530" y="350" textAnchor="middle">SCALE 2:1</text>
      </g>
      <g fontFamily={mono} fontSize="11" letterSpacing="1">
        <text x="520" y="26" fill="#111827" fontWeight="700">AH3D</text>
        <text x="520" y="40" fill="#64748b">ENGINEERING</text>
        <text x="520" y="54" fill="#64748b">PART No. 001</text>
      </g>
    </svg>
  );
}

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
          <HeroDrawing />
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
    </section>
  );
}
