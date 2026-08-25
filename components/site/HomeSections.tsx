import Link from "next/link";
import { siteContent } from "@/lib/content";
import { featuredItems } from "@/lib/portfolio";
import styles from "./site.module.css";

/* ---------- 첫 화면 ---------- */

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className={`${styles.root} ${styles.hero}`}>
      <div className={`${styles.inner} ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroBody}>{hero.body}</p>
          <div className={styles.buttonRow}>
            <a href={hero.primary.href} className={styles.buttonPrimary}>
              {hero.primary.label}
            </a>
            <Link href={hero.secondary.href} className={styles.buttonSecondary}>
              {hero.secondary.label}
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          {hero.image ? (
            <img src={hero.image} alt={hero.imageAlt} />
          ) : (
            <span className={styles.heroImagePlaceholder}>대표 작업물 사진</span>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- 숫자 ---------- */

export function Stats() {
  const { stats } = siteContent;
  if (stats.length === 0) return null;

  return (
    <section className={`${styles.root} ${styles.stats}`}>
      <div className={`${styles.inner} ${styles.statsRow}`}>
        {stats.map((item, index) => (
          <div key={item.label} style={{ display: "contents" }}>
            {index > 0 && <span className={styles.statDivider} />}
            <div className={styles.stat}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 작업물 ---------- */

export function Works() {
  const { portfolio } = siteContent;
  if (featuredItems.length === 0) return null;

  return (
    <section className={`${styles.root} ${styles.works}`}>
      <div className={styles.inner}>
        <div className={styles.worksHead}>
          <h2 className={styles.worksTitle}>{portfolio.title}</h2>
          <Link href={portfolio.moreHref} className={styles.worksMore}>
            {portfolio.moreLabel}
          </Link>
        </div>

        <div className={styles.worksGrid}>
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href={portfolio.moreHref}
              className={styles.workCard}
            >
              <div className={styles.workThumb}>
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <span className={styles.workThumbEmpty}>사진 준비 중</span>
                )}
              </div>
              <p className={styles.workTitle}>{item.title}</p>
              <p className={styles.workMeta}>
                {item.method} · {item.material}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 하단 견적 유도 ---------- */

export function CtaBand() {
  const { cta } = siteContent;

  return (
    <section className={`${styles.root} ${styles.cta}`}>
      <div className={styles.inner}>
        <h2 className={styles.ctaTitle}>{cta.title}</h2>
        <p className={styles.ctaBody}>{cta.body}</p>
        <a href={cta.button.href} className={styles.buttonYellow}>
          {cta.button.label}
        </a>
      </div>
    </section>
  );
}
