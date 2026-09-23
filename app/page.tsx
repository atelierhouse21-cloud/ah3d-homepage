import TopBar from "@/components/TopBar";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import HowToWorkSection from "@/components/home/HowToWorkSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import QualitySection from "@/components/home/QualitySection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import { getProjects } from "@/lib/projects";

// 홈페이지 문구·링크는 lib/home.ts, 포트폴리오 설명은 lib/cases.ts,
// 출력 품질 사진은 lib/quality.ts 에서 바꿉니다.
export default function Home() {
  // public/portfolio/ 폴더의 사진을 자동으로 읽어옵니다.
  const projects = getProjects();

  return (
    <main>
      <TopBar />
      <HeroSection />
      <ServiceSection projects={projects} />
      <HowToWorkSection />
      <PortfolioSection projects={projects} />
      <QualitySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
