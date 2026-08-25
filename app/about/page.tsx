import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { CtaBand } from "@/components/site/HomeSections";
import { siteContent } from "@/lib/content";
import styles from "@/components/site/site.module.css";

export const metadata = { title: siteContent.about.pageTitle };

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <SiteHeader />
      <main className={`${styles.root} ${styles.page}`}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>{about.pageTitle}</h1>

          <div className={styles.prose}>
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className={styles.contactList}>
            {about.contact.map((row) => (
              <div key={row.label} className={styles.contactRow}>
                <span className={styles.contactLabel}>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
