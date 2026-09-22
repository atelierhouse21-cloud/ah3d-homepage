import { QUALITY } from "@/lib/quality";

export default function QualitySection() {
  return (
    <section className="band white" id="quality">
      <div className="wrap split">
        <div className="side">
          <p className="tlabel">QUALITY</p>
          <h2 className="h2">
            실제 출력물로
            <br />
            확인하세요.
          </h2>
          <p className="desc">사진보다 실제 출력 결과를 보여드립니다.</p>
          <a href="/guide" className="more">
            출력 품질 더 보기 →
          </a>
        </div>
        <div className="qrow">
          {QUALITY.map((q) => (
            <figure key={q.en}>
              <div className="qimg">
                {q.src ? (
                  <img src={q.src} alt={q.alt} loading="lazy" />
                ) : (
                  <span>사진 준비 중</span>
                )}
              </div>
              <figcaption>
                <em>{q.no}</em>
                <b>{q.en}</b>
                <small>{q.ko}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
