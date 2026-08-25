import { siteContent } from "@/lib/content";
import styles from "./site.module.css";

export default function SiteFooter() {
  const { footer } = siteContent;

  return (
    <footer className={`${styles.root} ${styles.footer}`}>
      <div className={`${styles.inner} ${styles.footerRow}`}>
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  );
}
