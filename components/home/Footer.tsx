import { BRAND_NAME, BRAND_TAGLINE, BUSINESS_NO, MENU } from "@/lib/home";

// Footer는 "ATELIER HOUSE"(사업자명)를 노출하는 유일한 영역입니다.
// 그 외 화면(헤더·히어로·서비스·포트폴리오·버튼 등)은 AH3D만 씁니다.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <p>
            <span className="lg-b">{BRAND_NAME}</span>
          </p>
          <small>{BRAND_TAGLINE}</small>
        </div>
        <nav className="foot-nav" aria-label="사이트 메뉴">
          {MENU.map((m) => (
            <a key={m.label} href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>
        <div className="foot-info">
          <span>
            © 2026 {BRAND_NAME} by ATELIER HOUSE
            <br />
            아틀리에 하우스
          </span>
          <span>사업자등록번호 {BUSINESS_NO}</span>
        </div>
      </div>
    </footer>
  );
}
