// 작은 line icon 모음 — 섹션 안에서 이름(icon)으로 불러 씁니다.

type P = { name: string; size?: number };

const BLUE = "#2463EB";
const GRAY = "#64748b";

export function PartIcon({ name, size = 44 }: P) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: GRAY,
    strokeWidth: 1.3,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "frame": // 장비부품 — 프레임
      return (
        <svg {...common}>
          <path d="M8 16 24 8l16 8v18l-16 8-16-8z" />
          <path d="M8 16l16 8 16-8M24 24v18" />
          <path d="M16 12v18M32 12v18" stroke={BLUE} />
        </svg>
      );
    case "bracket": // 브라켓
      return (
        <svg {...common}>
          <path d="M8 30 26 38l14-6V20l-8-3v12l-6 2.6L14 25z" />
          <path d="M8 30v-8l6 3M26 38v-8" />
          <circle cx="33" cy="24" r="1.8" stroke={BLUE} />
          <path d="M14 25l12-6 6-2" />
        </svg>
      );
    case "sensor": // 센서 홀더
      return (
        <svg {...common}>
          <ellipse cx="22" cy="14" rx="9" ry="4" />
          <path d="M13 14v12c0 2.2 4 4 9 4s9-1.8 9-4V14" />
          <path d="M31 22h8v14l-10 5-14-6" />
          <circle cx="22" cy="14" r="2" stroke={BLUE} />
        </svg>
      );
    case "jig": // 지그·치구
      return (
        <svg {...common}>
          <path d="M6 32l18-8 18 8-18 9z" />
          <path d="M6 32v3l18 9 18-9v-3" />
          <path d="M15 27l6-2.6v-7l-6 2.6zM27 23l6 2.6v-7L27 16z" />
          <circle cx="24" cy="33" r="1.8" stroke={BLUE} />
        </svg>
      );
    case "housing": // 커버·하우징
      return (
        <svg {...common}>
          <path d="M8 18 24 10l16 8v14l-16 8-16-8z" />
          <path d="M8 18l16 8 16-8M24 26v14" />
          <path d="M14 21.5v-3l10-5 10 5v3" stroke={BLUE} />
        </svg>
      );
    case "plate": // 테스트 부품 — 판
      return (
        <svg {...common}>
          <path d="M6 28l12-12 24 4-12 12z" />
          <path d="M6 28v4l24 4 12-12v-4" />
          <path d="M30 36V32" />
          <circle cx="19" cy="24" r="1.7" stroke={BLUE} />
          <circle cx="30" cy="24" r="1.7" stroke={BLUE} />
        </svg>
      );
    case "gear": // 기존 부품 수정 — 기어
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="8" />
          <circle cx="24" cy="24" r="3" stroke={BLUE} />
          <path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.7 12.7l3.5 3.5M31.8 31.8l3.5 3.5M35.3 12.7l-3.5 3.5M16.2 31.8l-3.5 3.5" />
        </svg>
      );
    case "proto": // 기능 검증용 시제품
      return (
        <svg {...common}>
          <path d="M9 30l8-5 6 3 10-6" />
          <path d="M9 30v6l14 6 16-9v-6l-6-2" />
          <circle cx="17" cy="25" r="4" />
          <circle cx="33" cy="22" r="4" stroke={BLUE} />
          <path d="M23 28v14" />
        </svg>
      );
    default:
      return null;
  }
}

// 첫 화면 CTA 카드용 아이콘 (파란색)
export function PathIcon({ name, size = 30 }: P) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: BLUE,
    strokeWidth: 1.5,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
    "aria-hidden": true,
  };
  if (name === "cube")
    return (
      <svg {...common}>
        <path d="M16 4 27 10v12l-11 6L5 22V10z" />
        <path d="M5 10l11 6 11-6M16 16v12" />
      </svg>
    );
  if (name === "doc")
    return (
      <svg {...common}>
        <path d="M8 4h11l6 6v18H8z" />
        <path d="M19 4v6h6M12 16h9M12 20h9M12 24h5" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 3.5v4M16 24.5v4M3.5 16h4M24.5 16h4M7.2 7.2l2.8 2.8M22 22l2.8 2.8M24.8 7.2 22 10M10 22l-2.8 2.8" />
    </svg>
  );
}
