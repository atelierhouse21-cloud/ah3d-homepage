import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Hero, Stats, Works, CtaBand } from "@/components/site/HomeSections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Works />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
