"use client";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { CASES } from "@/lib/cases";
import PortfolioCard from "@/components/home/PortfolioCard";

const FILTERS = ["전체", "3D Printing", "3D Modeling", "Mechanical", "Prototype"];

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
          const info = CASES[item.title];
          const match = active === "전체" || !!info?.tags.includes(active);
          return <PortfolioCard project={item} dim={!match} key={item.src} />;
        })}
      </div>
    </>
  );
}
