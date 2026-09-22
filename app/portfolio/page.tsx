import TopBar from "@/components/TopBar";
import Footer from "@/components/home/Footer";
import ContactSection from "@/components/home/ContactSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "포트폴리오",
  description: "설계부터 제작까지 진행한 실제 작업을 소개합니다.",
};

export default function PortfolioPage() {
  // public/portfolio/ 폴더의 사진을 자동으로 읽어옵니다.
  const projects = getProjects();
  return (
    <main>
      <TopBar />
      <section className="band white page-head">
        <div className="wrap">
          <p className="tlabel">PORTFOLIO</p>
          <h1 className="h2 big">실제 제작 사례</h1>
          <p className="desc">
            설계부터 제작까지 진행한 실제 작업을 소개합니다.
          </p>
          <PortfolioGrid items={projects} />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
