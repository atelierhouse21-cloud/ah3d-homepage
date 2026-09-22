import { BUSINESS_NO, MENU } from "@/lib/home";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <p>
            <span className="lg-a">ATELIER HOUSE</span>
            <span className="lg-b">AH3D</span>
          </p>
          <small>3D Printing · Modeling · Engineering</small>
        </div>
        <nav className="foot-nav" aria-label="사이트 메뉴">
          {MENU.map((m) => (
            <a key={m.label} href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>
        <div className="foot-info">
          <span>© 2026 AH3D by ATELIER HOUSE (아틀리에 하우스)</span>
          <span>사업자등록번호 {BUSINESS_NO}</span>
        </div>
      </div>
    </footer>
  );
}
