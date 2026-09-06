import TopBar from "@/components/TopBar";

export const metadata = {
  title: "FDM 모델링 가이드",
  description: "FDM 방식 3D 프린팅을 위한 설계 기준 요약",
};

// ⚠️ 아래 수치는 FDM 방식의 일반적인 업계 기준입니다.
// 아틀리에 하우스 장비와 재질에 맞는 값으로 검토·수정한 뒤 공개하세요.

const SIZE = [
  ["ABS · PA12-CF", "580 × 480 × 480 mm"],
  ["PLA · ASA · TPU", "250 × 250 × 300 mm"],
  ["최소 크기", "30 × 30 × 10 mm"],
];

const WALL = [
  ["50 × 50 mm 이하", "1.6 mm"],
  ["100 × 100 mm", "2.0 mm"],
  ["200 × 200 mm", "2.5 mm"],
];

const HOLE = [
  ["Ø 1.5 mm", "1.5 — 4.5 mm"],
  ["Ø 2.0 mm", "2.0 — 6.0 mm"],
];

const COLUMN = [
  ["Ø 2.0 mm", "2 — 4 mm"],
  ["Ø 3.0 mm", "3 — 6 mm"],
];

function Table({
  head,
  rows,
}: {
  head: [string, string];
  rows: string[][];
}) {
  return (
    <table className="gtable">
      <thead>
        <tr>
          <th>{head[0]}</th>
          <th>{head[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function GuidePage() {
  return (
    <main>
      <TopBar />

      <section className="guide-head">
        <div className="wrap">
          <p className="eyebrow">DESIGN GUIDE</p>
          <h1 className="guide-title">
            FDM 모델링 가이드
          </h1>
          <p className="guide-lead">
            출력 실패와 재작업을 줄이려면 설계 단계에서 몇 가지 기준을 지키는
            것이 좋습니다. FDM 방식으로 출력할 모델을 만드실 때 참고하세요.
          </p>
        </div>
      </section>

      <div className="wrap guide-body">
        <section className="gsec">
          <h2>1. 출력 가능 크기</h2>
          <p>
            재질에 따라 출력할 수 있는 최대 크기가 다릅니다. 이보다 큰 모델은
            나누어 출력한 뒤 접합하는 방식으로 진행합니다.
          </p>
          <Table head={["재질", "최대 크기 (가로 × 세로 × 높이)"]} rows={SIZE} />
        </section>

        <section className="gsec">
          <h2>2. 벽 두께</h2>
          <p>
            가장 중요한 항목입니다. 벽이 얇으면 출력 중 무너지거나, 서포트를
            제거하는 과정에서 파손됩니다. <strong>모델이 커질수록 벽도 함께
            두꺼워져야 합니다.</strong>
          </p>
          <Table head={["모델 크기", "최소 벽 두께"]} rows={WALL} />
          <p className="gnote">
            돌출부, 위치 결정용 구조, 스냅 체결부처럼 힘을 받는 부분은 크기와
            관계없이 1.5 mm 이상으로 설계하세요.
          </p>
        </section>

        <section className="gsec">
          <h2>3. 치수 공차</h2>
          <p>
            FDM은 정밀 가공이 아닙니다. 아래 범위의 오차를 감안해 설계하셔야
            조립이 됩니다.
          </p>
          <ul className="glist">
            <li>
              <span>100 mm 이내</span>
              <b>± 0.3 mm</b>
            </li>
            <li>
              <span>100 mm 초과</span>
              <b>± 0.4 %</b>
            </li>
            <li>
              <span>구멍</span>
              <b>± 0.4 mm</b>
            </li>
          </ul>
          <p className="gnote">
            구멍은 대체로 설계값보다 작게 나옵니다. 정확한 치수가 필요하면
            작게 출력한 뒤 직접 다듬거나 탭 가공을 하시는 편이 확실합니다.
          </p>
        </section>

        <section className="gsec">
          <h2>4. 구멍과 기둥</h2>
          <p>
            지름이 작을수록 깊게 뚫거나 높게 세울 수 없습니다. 아래 범위를
            벗어나면 막히거나 부러집니다.
          </p>
          <div className="gcols">
            <div>
              <h3>구멍 — 지름과 깊이</h3>
              <Table head={["지름", "가능한 깊이"]} rows={HOLE} />
            </div>
            <div>
              <h3>기둥 — 지름과 높이</h3>
              <Table head={["지름", "가능한 높이"]} rows={COLUMN} />
            </div>
          </div>
          <p className="gnote">
            지름 1 mm 이하의 구멍과 기둥은 FDM으로 안정적인 출력이 어렵습니다.
            더 미세한 형상이 필요하면 SLA 방식을 검토해 주세요.
          </p>
        </section>

        <section className="gsec">
          <h2>5. 조립 간격</h2>
          <p>
            부품끼리 끼워 맞추거나 움직이는 구조라면 반드시 틈을 두셔야 합니다.
            틈이 없으면 붙어버려 조립되지 않습니다.
          </p>
          <ul className="glist">
            <li>
              <span>끼워 맞추는 부품</span>
              <b>0.5 mm 이상</b>
            </li>
            <li>
              <span>움직이는 부품</span>
              <b>0.5 mm 이상</b>
            </li>
          </ul>
          <p className="gnote">
            단순한 구조 기준입니다. 접촉 면적이 넓거나 형상이 복잡하면 더 넉넉히
            잡으세요.
          </p>
        </section>

        <section className="gsec">
          <h2>6. 글자와 무늬</h2>
          <p>
            모델 표면에 새기는 글자나 로고는 너무 얕거나 가늘면 뭉개집니다.
            <strong> 튀어나온 형태와 파인 형태 모두 깊이 1.0 mm, 폭 1.0 mm
            이상</strong>으로 설계하세요.
          </p>
          <p className="gnote">
            세로로 세워 출력하면 글자가 더 뭉개집니다. 글자면이 바닥이나
            천장을 향하도록 배치하는 편이 선명합니다.
          </p>
        </section>

        <section className="gsec">
          <h2>7. 속이 빈 모델</h2>
          <p>
            내부가 비어 있는 모델은 안쪽 재료가 빠져나올 구멍이 필요합니다.
            구멍이 없으면 내부에 재료가 갇혀 시간이 지난 뒤 갈라질 수 있습니다.
          </p>
          <ul className="glist">
            <li>
              <span>배출 구멍 최소 지름</span>
              <b>2.5 mm</b>
            </li>
            <li>
              <span>지름 3 mm 미만인 경우</span>
              <b>2개 이상</b>
            </li>
          </ul>
        </section>

        <section className="gsec">
          <h2>8. 출력 방향과 서포트</h2>
          <p>
            FDM은 재료를 아래에서 위로 한 겹씩 쌓습니다. 그래서 방향에 따라
            결과가 달라집니다.
          </p>
          <ul className="gbullets">
            <li>
              층과 층 사이가 가장 약합니다. <strong>힘을 받는 방향과 쌓이는
              방향이 겹치지 않도록</strong> 배치하는 것이 좋습니다.
            </li>
            <li>
              바닥에서 45도보다 완만하게 튀어나온 부분은 서포트가 필요합니다.
              서포트가 닿았던 면은 자국이 남습니다.
            </li>
            <li>
              곡면에는 층 결이 보입니다. FDM의 특성이며 완전히 없앨 수는
              없습니다. 매끄러운 표면이 필요하면 후가공이나 SLA를 검토해 주세요.
            </li>
          </ul>
        </section>

        <section className="gsec">
          <h2>9. 파일 준비</h2>
          <ul className="gbullets">
            <li>
              <strong>STL 형식</strong>으로 보내주세요. 단위는 mm 기준입니다.
            </li>
            <li>
              <strong>한 파일에 하나의 몸체만</strong> 담아주세요. 여러 개가
              섞여 있으면 견적 계산이 되지 않습니다. 부품이 여러 개면 파일을
              나눠서 올려주시면 됩니다.
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
          <a href="https://auto-quote.ah3d.kr/" className="fill">
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
