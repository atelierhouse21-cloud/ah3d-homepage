import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { CtaBand } from "@/components/site/HomeSections";
import { siteContent } from "@/lib/content";
import { portfolioItems } from "@/lib/portfolio";
import styles from "@/components/site/site.module.css";

export const metadata = { title: siteContent.portfolio.pageTitle };

export default function PortfolioPage() {
  const { portfolio } = siteContent;

  return (
    <>
      <SiteHeader />
      <main className={`${styles.root} ${styles.page}`}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>{portfolio.pageTitle}</h1>
          <p className={styles.pageBody}>{portfolio.pageBody}</p>

          {portfolioItems.length === 0 ? (
            <p className={styles.empty}>등록된 작업물이 아직 없습니다.</p>
          ) : (
            <div className={styles.lightGrid}>
              {portfolioItems.map((item) => (
                <article key={item.id}>
                  <div className={styles.lightThumb}>
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <span>사진 준비 중</span>
                    )}
                  </div>
                  <h2 className={styles.lightTitle}>{item.title}</h2>
                  <p className={styles.lightMeta}>
                    {item.method} · {item.material}
                  </p>
                  {item.description && (
                    <p className={styles.lightDesc}>{item.description}</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
