"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

export default function PortfolioGrid({ items }: { items: Project[] }) {
  // 파일 이름에 분류가 들어 있으면 분류 버튼을 자동으로 만듭니다.
  const categories = useMemo(() => {
    const found: string[] = [];
    items.forEach((it) => {
      if (it.category && !found.includes(it.category)) found.push(it.category);
    });
    return found;
  }, [items]);

  const [active, setActive] = useState("전체");

  const shown =
    active === "전체" ? items : items.filter((it) => it.category === active);

  if (items.length === 0) {
    return <p className="works-empty">등록된 작업물이 아직 없습니다.</p>;
  }

  return (
    <>
      {categories.length > 0 && (
        <div className="tabs">
          {["전체", ...categories].map((name) => (
            <button
              key={name}
              className={active === name ? "tab on" : "tab"}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <div className="work-grid">
        {shown.map((item) => (
          <article className="work-item" key={item.src}>
            <div className="work-thumb">
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
            <div className="work-text">
              <h3>{item.title}</h3>
              <p>{item.category || "ATELIER HOUSE"}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
