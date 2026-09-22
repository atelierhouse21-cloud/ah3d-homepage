import { PARTS } from "@/lib/home";
import type { Project } from "@/lib/projects";

// 실제 작업 사진 위에 부품 이름을 얇은 기술 라벨로 표시하고,
// 오른쪽에 제작 항목을 번호 목록으로 정리합니다. (아이콘 사용 안 함)
export default function PartsSection({ projects }: { projects: Project[] }) {
  const src = projects.find((p) => p.title === "SWP 노스트로 디카페인 설비(테스트 모델)")?.src
    ?? projects[0]?.src
    ?? "";

  return (
    <section className="band gray" id="parts">
      <div className="wrap parts-grid">
        <figure className="parts-fig">
          {src && <img src={src} alt="디카페인 설비 테스트 모델" loading="lazy" />}
          <span className="ann" style={{ left: "16%", top: "24%" }}>
            <i></i>
            <u></u>
            <b>BRACKET</b>
          </span>
          <span className="ann" style={{ left: "58%", top: "18%" }}>
            <i></i>
            <u></u>
            <b>FIXTURE</b>
          </span>
          <span className="ann" style={{ left: "30%", top: "64%" }}>
            <i></i>
            <u></u>
            <b>PART</b>
          </span>
          <span className="ann" style={{ left: "62%", top: "76%" }}>
            <i></i>
            <u></u>
            <b>TEST MODEL</b>
          </span>
        </figure>
        <div className="parts-text">
          <p className="tlabel">PARTS</p>
          <h2 className="h2">이런 부품을 제작합니다.</h2>
          <ol className="parts-list">
            {PARTS.map((p, i) => (
              <li key={p.label}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                {p.label}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
