import { HOW_TO_WORK } from "@/lib/home";

// SERVICE/PARTS와 PORTFOLIO 사이 — 고객의 현재 상황별로 바로 연결되는
// 작은 안내 섹션입니다. 카드가 아니라 얇은 구분선으로 나눈 스펙 그리드로 표현합니다.
export default function HowToWorkSection() {
  return (
    <section className="band white" id="how">
      <div className="wrap">
        <div className="how-head">
          <p className="tlabel">HOW TO WORK</p>
          <h2 className="h2">어떤 단계에서든 의뢰할 수 있습니다.</h2>
        </div>
        <div className="how-grid">
          {HOW_TO_WORK.map((h) => (
            <a href={h.href} className="how-item" key={h.no}>
              <span className="how-no">{h.no}</span>
              <span className="how-cond">{h.cond}</span>
              <span className="how-arrow">
                → <b>{h.target}</b>
              </span>
            </a>
          ))}
        </div>
        <p className="how-note">도면이나 사진이 없어도 상담할 수 있습니다.</p>
      </div>
    </section>
  );
}
