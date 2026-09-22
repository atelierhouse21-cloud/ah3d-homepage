import type { Project } from "@/lib/projects";
import { CASES } from "@/lib/cases";

// 실험용 프로파일 구조를 대표 프로젝트로 크게 두고,
// 나머지는 작게 배치하는 편집형(asymmetric) 그리드입니다.
export default function PortfolioSection({ projects }: { projects: Project[] }) {
  const shown = projects.slice(0, 6);

  return (
    <section className="band white" id="works">
      <div className="wrap">
        <div className="works-head">
          <div>
            <p className="tlabel">PORTFOLIO</p>
            <h2 className="h2">실제 제작 사례</h2>
            <p className="desc">
              설계부터 제작까지 진행한 실제 작업을 소개합니다.
            </p>
          </div>
          <a href="/portfolio" className="more">
            포트폴리오 더 보기 →
          </a>
        </div>

        <div className="pgrid">
          {shown.map((p, i) => {
            const info = CASES[p.title];
            const label = (info?.tags[0] ?? p.category) || "AH3D";
            return (
              <figure className={`pitem p${i}`} key={p.src}>
                <div className="pimg">
                  <img src={p.src} alt={info?.name ?? p.title} loading="lazy" />
                  <span className="ptag">{label}</span>
                </div>
                <figcaption>
                  <h3>{info?.name ?? p.title}</h3>
                  {info && <p>{info.desc}</p>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
