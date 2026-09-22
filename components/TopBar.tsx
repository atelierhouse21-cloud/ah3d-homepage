"use client";
import { useState } from "react";
import { BRAND_NAME, MENU } from "@/lib/home";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      {/* 고객에게 보이는 메인 브랜드는 AH3D만 씁니다.
          ATELIER HOUSE(사업자명)는 Footer의 사업자 정보에서만 노출됩니다.
          로고 이미지가 준비되면 아래 줄을 이미지로 바꾸세요.
          예: <img src="/logo.svg" alt="AH3D" height={20} /> */}
      <a href="/#home" className="logo" aria-label={BRAND_NAME}>
        <span className="lg-b">{BRAND_NAME}</span>
      </a>
      <nav className={open ? "links open" : "links"}>
        {MENU.map((m) => (
          <a href={m.href} onClick={() => setOpen(false)} key={m.label}>
            {m.label}
          </a>
        ))}
      </nav>
      <a className="inquiry" href="/#contact">
        견적 문의
      </a>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="메뉴 열기"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
