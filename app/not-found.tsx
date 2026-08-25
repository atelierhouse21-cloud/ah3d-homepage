import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import styles from "@/components/site/site.module.css";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={`${styles.root} ${styles.page}`}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>페이지를 찾을 수 없습니다</h1>
          <p className={styles.pageBody}>
            주소가 바뀌었거나 삭제된 페이지입니다.
          </p>
          <Link href="/" className={styles.buttonPrimary}>
            첫 화면으로
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
