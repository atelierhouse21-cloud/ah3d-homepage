import TopBar from "@/components/TopBar";
import Footer from "@/components/home/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import { INQUIRY_TYPES, isInquiryType } from "@/lib/inquiry";

export const metadata = {
  title: "작업 문의",
  description: "부품·시제품 상담, 3D 모델링 의뢰, 기타 문의를 남겨주세요.",
};

export default function InquiryPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const initialType = isInquiryType(searchParams.type)
    ? searchParams.type
    : INQUIRY_TYPES[0].id;

  return (
    <main>
      <TopBar />
      <section className="band white page-head">
        <div className="wrap">
          <p className="tlabel">INQUIRY</p>
          <h1 className="h2 big">작업 문의</h1>
          <p className="desc">
            도면이나 사진이 없어도 괜찮습니다. 아래 내용을 남겨주시면
            검토 후 회신드립니다.
          </p>
          <InquiryForm initialType={initialType} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
