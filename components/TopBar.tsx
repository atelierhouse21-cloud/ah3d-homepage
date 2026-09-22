"use client";
import { useState } from "react";
import { MENU } from "@/lib/home";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <a href="/#home" className="logo" aria-label="ATELIER HOUSE AH3D">
        {/* 로고 이미지가 준비되면 아래 두 줄을 이미지로 바꾸세요.
            예: <img src="/logo.svg" alt="ATELIER HOUSE AH3D" height={20} /> */}
        <span className="lg-a">ATELIER HOUSE</span>
        <span className="lg-b">AH3D</span>
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
