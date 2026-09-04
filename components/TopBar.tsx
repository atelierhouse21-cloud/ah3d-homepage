"use client";
import { useState } from "react";

const MENU: [string, string][] = [
  ["HOME", "#home"],
  ["WORKS", "#works"],
  ["CONTACT", "#contact"],
];

// 견적앱 주소 — 바꾸실 때는 app/page.tsx 위쪽의 QUOTE_URL 도 함께 확인하세요.
const QUOTE_URL = "https://auto-quote.ah3d.kr/";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <a href="#home" className="logo">
        {/* 로고 이미지가 준비되면 아래 한 줄을 이미지로 바꾸세요.
            예: <img src="/logo.svg" alt="아틀리에 하우스" height={20} /> */}
        ATELIER HOUSE
      </a>
      <nav className={open ? "links open" : "links"}>
        {MENU.map(([name, href]) => (
          <a href={href} onClick={() => setOpen(false)} key={name}>
            {name}
          </a>
        ))}
      </nav>
      <a className="inquiry" href={QUOTE_URL}>
        견적 요청
      </a>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="메뉴 열기"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
