import type { Project } from "@/lib/projects";
import { CASES } from "@/lib/cases";

// /portfolio 전체 목록 페이지에서 쓰는 카드 (홈 화면은 PortfolioSection 이 따로 그립니다)
export default function PortfolioCard({
  project,
  dim = false,
}: {
  project: Project;
  dim?: boolean;
}) {
  const info = CASES[project.title];
  const label = (info?.tags[0] ?? project.category) || "AH3D";
  return (
    <article className={dim ? "fcard dim" : "fcard"}>
      <div className="fcard-img">
        <img src={project.src} alt={info?.name ?? project.title} loading="lazy" />
        <span className="ptag">{label}</span>
      </div>
      <h3>{info?.name ?? project.title}</h3>
      {info && <p>{info.desc}</p>}
    </article>
  );
}
