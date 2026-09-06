import TopBar from "@/components/TopBar";
import { GUIDES, type GuideSection } from "@/lib/guides";

export const metadata = {
  title: "모델링 가이드",
  description: "출력 방식별 3D 프린팅 설계 기준 요약",
};

const QUOTE_URL = "https://auto-quote.ah3d.kr/";

function Section({ s }: { s: GuideSection }) {
  return (
    <section className="gsec">
      <h3>{s.title}</h3>
      {s.body && <p>{s.body}</p>}

      {s.table && (
        <table className="gtable">
          <thead>
            <tr>
              <th>{s.table.head[0]}</th>
              <th>{s.table.head[1]}</th>
            </tr>
          </thead>
          <tbody>
            {s.table.rows.map((r) => (
              <tr key={r[0]}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {s.list && (
        <ul className="glist">
          {s.list.map((r) => (
            <li key={r[0]}>
              <span>{r[0]}</span>
              <b>{r[1]}</b>
            </li>
          ))}
        </ul>
      )}

      {s.bullets && (
        <ul className="gbullets">
          {s.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {s.note && <p className="gnote">{s.note}</p>}
    </section>
  );
}

export default function GuidePage() {
  return (
    <main>
      <TopBar />

      <section className="guide-head">
        <div className="wrap">
          <p className="eyebrow">DESIGN GUIDE</p>
          <h1 className="guide-title">모델링 가이드</h1>
          <p className="guide-lead">
            출력 실패와 재작업을 줄이려면 설계 단계에서 몇 가지 기준을 지키는
            것이 좋습니다. 출력 방식마다 기준이 다르니 아래에서 해당하는 방식을
            선택해 확인해 주세요.
          </p>
        </div>
      </section>

      <div className="wrap guide-body">
        {/* 토글 목록 — 제목을 누르면 내용이 펼쳐집니다.
            처음 항목만 open 이 붙어 있어 기본으로 열려 있습니다. */}
        {GUIDES.map((g, i) => (
          <details className="gtoggle" key={g.id} open={i === 0}>
            <summary>
              <span className="gt-name">{g.name}</span>
              <span className="gt-tag">{g.tag}</span>
              <span className="gt-mark" aria-hidden="true"></span>
            </summary>
            <div className="gt-body">
              <p className="gt-intro">{g.intro}</p>
              {g.sections.map((s) => (
                <Section s={s} key={s.title} />
              ))}
            </div>
          </details>
        ))}

        <section className="gsec gsec-common">
          <h3>파일 준비 — 모든 방식 공통</h3>
          <ul className="gbullets">
            <li>STL 형식으로 보내주세요. 단위는 mm 기준입니다.</li>
            <li>
              한 파일에 하나의 몸체만 담아주세요. 여러 개가 섞여 있으면 견적
              계산이 되지 않습니다. 부품이 여러 개면 파일을 나눠서 올려주시면
              됩니다.
            </li>
            <li>
              면이 뚫려 있거나 뒤집힌 모델은 출력이 되지 않습니다. 내보내기 전
              모델링 도구에서 오류 검사를 한 번 돌려보세요.
            </li>
          </ul>
        </section>

        <section className="guide-cta">
          <h2>준비되셨나요?</h2>
          <p>파일을 올리시면 재질과 수량에 따른 금액이 바로 계산됩니다.</p>
          <a href={QUOTE_URL} className="fill">
            3D 프린팅 견적 요청
          </a>
        </section>

        <p className="gdisclaimer">
          위 수치는 일반적인 기준값입니다. 장비와 재질, 형상에 따라 달라질 수
          있으니 판단이 어려우신 경우 문의해 주시면 검토해 드리겠습니다.
        </p>
      </div>

      <footer>
        <div className="wrap footer-row">
          <span>© 2026 아틀리에 하우스 ATELIER HOUSE</span>
          <span>사업자등록번호 000-00-00000</span>
        </div>
      </footer>
    </main>
  );
}
