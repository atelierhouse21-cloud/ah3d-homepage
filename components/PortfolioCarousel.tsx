"use client";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export default function PortfolioCarousel({ items }: { items: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // 양 끝에 도달했는지 확인해서 화살표를 흐리게 처리합니다.
  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [items.length]);

  function slide(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  if (items.length === 0) {
    return <p className="carousel-empty">등록된 작업물이 아직 없습니다.</p>;
  }

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef} onScroll={updateEdges}>
        {items.map((item) => (
          <article key={item.src}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <div>
              <p>AH3D PROJECT</p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel-btn prev"
        onClick={() => slide(-1)}
        disabled={atStart}
        aria-label="이전 작업물"
      >
        ‹
      </button>
      <button
        className="carousel-btn next"
        onClick={() => slide(1)}
        disabled={atEnd}
        aria-label="다음 작업물"
      >
        ›
      </button>
    </div>
  );
}
