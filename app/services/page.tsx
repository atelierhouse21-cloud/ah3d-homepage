import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { CtaBand } from "@/components/site/HomeSections";
import { siteContent } from "@/lib/content";
import styles from "@/components/site/site.module.css";

export const metadata = { title: siteContent.services.pageTitle };

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      <SiteHeader />
      <main className={`${styles.root} ${styles.page}`}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>{services.pageTitle}</h1>
          <p className={styles.pageBody}>{services.pageBody}</p>

          <div className={styles.cardList}>
            {services.items.map((item) => (
              <article key={item.title} className={styles.card}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardBody}>{item.body}</p>
                <p className={styles.cardMeta}>{item.materials}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
