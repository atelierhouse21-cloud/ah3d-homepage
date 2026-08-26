"use client";
import { useState } from "react";

const MENU: [string, string][] = [
  ["HOME", "#home"],
  ["PORTFOLIO", "#portfolio"],
  ["3D PRINTING", "#service"],
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <a href="#home" className="logo">
        AH<span>3D</span>
      </a>
      <nav className={open ? "links open" : "links"}>
        {MENU.map(([name, href]) => (
          <a href={href} onClick={() => setOpen(false)} key={name}>
            {name}
          </a>
        ))}
      </nav>
      <a className="inquiry" href="#contact">
        CONTACT
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
