import { SERVICES } from "@/lib/home";
import type { Project } from "@/lib/projects";

// 서비스 3개를 카드가 아니라, 이미지와 글이 번갈아 배치되는
// editorial section 3개로 보여줍니다. (섹션 사이는 얇은 구분선만 사용)
export default function ServiceSection({ projects }: { projects: Project[] }) {
  const photo = (title: string) => projects.find((p) => p.title === title)?.src ?? "";

  return (
    <section className="band white" id="services">
      <div className="wrap">
        <div className="svc-head">
          <p className="tlabel">SERVICE</p>
          <h2 className="h2">
            목적에 맞는 방식으로
            <br />
            제작해드립니다.
          </h2>
          <p className="desc">
            3D프린팅부터 모델링, 기계설계와 기능 검증까지 필요한 단계만 선택해서 의뢰할 수 있습니다.
          </p>
        </div>

        {SERVICES.map((s, i) => {
          const isCad = s.image.kind === "cad";
          const src = isCad ? s.image.ref : photo(s.image.ref);
          const rev = i === 1; // 02는 이미지가 왼쪽
          return (
            <article className={rev ? "svc-row rev" : "svc-row"} id={s.id} key={s.id}>
              <div className="svc-img-wrap">
                <div className={isCad ? "svc-img cad" : "svc-img"}>
                  {src && <img src={src} alt={s.image.alt} loading="lazy" />}
                </div>
              </div>
              <div className="svc-body">
                <p className="svc-no">{s.no}</p>
                <h3>{s.name}</h3>
                <p className="svc-meta">{s.meta}</p>
                <p className="svc-lead">{s.lead}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a href={s.cta.href} className="lcta">
                  {s.cta.label}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
