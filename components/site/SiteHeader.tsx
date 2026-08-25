import Link from "next/link";
import { siteContent } from "@/lib/content";
import styles from "./site.module.css";

export default function SiteHeader() {
  const { brand, nav, navCta } = siteContent;

  return (
    <header className={`${styles.root} ${styles.header}`}>
      <div className={`${styles.inner} ${styles.headerRow}`}>
        <Link href="/" className={styles.logo}>
          {/* 로고 이미지가 준비되면 아래 한 줄을 이미지로 바꾸세요.
              예: <img src="/logo.svg" alt="아틀리에 하우스" height={20} /> */}
          {brand.nameEn}
        </Link>

        {/* 모바일 메뉴 — 자바스크립트 없이 체크박스로 열고 닫습니다 */}
        <input type="checkbox" id="ah-menu" className={styles.menuToggle} />
        <label htmlFor="ah-menu" className={styles.menuButton} aria-label="메뉴">
          ☰
        </label>

        <nav className={styles.nav}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <a href={navCta.href} className={styles.navCta}>
            {navCta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
