import { EMAIL, QUOTE_URL } from "@/lib/home";
import { inquiryHref } from "@/lib/inquiry";

export default function ContactSection() {
  return (
    <section className="band white contact-band" id="contact">
      <div className="wrap split">
        <div className="side">
          <p className="tlabel">CONTACT</p>
          <h2 className="h2">만들어야 할 것이 있으신가요?</h2>
          <p className="desc">
            도면이나 사진이 있다면 보내주세요.
            <br />
            파일이 없어도 상담할 수 있습니다.
          </p>
        </div>
        <div className="contact-right">
          <div className="contact-btns">
            <a href={inquiryHref("engineering")} className="btn primary">부품·시제품 상담</a>
            <a href={inquiryHref("modeling")} className="btn">3D 모델링 의뢰</a>
            <a href={QUOTE_URL} className="btn">3D 프린팅 견적</a>
          </div>
          <a href={`mailto:${EMAIL}`} className="mail-link">
            {EMAIL} →
          </a>
        </div>
      </div>
    </section>
  );
}
