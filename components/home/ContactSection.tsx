import { EMAIL, QUOTE_URL, mail } from "@/lib/home";

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
            <a href={mail("[설계·제작 문의]")} className="btn primary">설계·제작 문의</a>
            <a href={mail("[3D 모델링 의뢰]")} className="btn">3D 모델링 의뢰</a>
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
