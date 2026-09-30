"use client";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import PortfolioCard from "@/components/home/PortfolioCard";

// 분류 버튼 — public/portfolio/ 사진 파일명의 "분류" 칸과 매칭됩니다.
// 예: "3D프린팅_로봇개 골격 제작.png" → 분류 "3D프린팅" → "3D프린팅" 버튼과 매칭
//     "설계제작_더치머신v1 .jpg"      → 분류 "설계제작" → "설계·제작" 버튼과 매칭 (표시용 가운뎃점은 무시하고 비교합니다)
const FILTERS = ["전체", "3D프린팅", "3D모델링", "설계·제작"];

// 필터 버튼과 파일명 분류를 비교할 때 가운뎃점·공백을 무시합니다.
const norm = (s: string) => s.replace(/[·\s]/g, "");

// /portfolio 페이지 전체 목록 — 분류 버튼으로 걸러 볼 수 있습니다.
export default function PortfolioGrid({ items }: { items: Project[] }) {
  const [active, setActive] = useState("전체");

  if (items.length === 0) {
    return <p className="works-empty">등록된 작업물이 아직 없습니다.</p>;
  }

  return (
    <>
      <div className="ptabs">
        {FILTERS.map((name) => (
          <button
            key={name}
            className={active === name ? "on" : ""}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="fgrid">
        {items.map((item) => {
          const match = active === "전체" || norm(item.category) === norm(active);
          return <PortfolioCard project={item} dim={!match} key={item.src} />;
        })}
      </div>
    </>
  );
}
