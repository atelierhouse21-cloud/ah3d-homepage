// 홈페이지 문구·링크 데이터
//
// 화면에 나오는 글자와 버튼 연결은 이 파일에서 바꿉니다.
// 따옴표(") 안쪽 글자만 바꾸시고, 따옴표와 쉼표(,)는 지우지 마세요.

// 고객에게 노출되는 메인 브랜드명 — 항상 "AH3D"만 씁니다.
// "ATELIER HOUSE"는 법적 사업자명이라 Footer의 사업자 정보 영역에서만 씁니다.
export const BRAND_NAME = "AH3D";
export const BRAND_TAGLINE = "3D PRINTING · MODELING · ENGINEERING";

// 견적앱 주소 — 자동견적 버튼은 모두 이 주소로 연결됩니다.
export const QUOTE_URL = "https://auto-quote.ah3d.kr/";

// 문의 이메일 / 전화 — 실제 정보로 바꿔주세요.
export const EMAIL = "hello@ah3d.kr";
export const PHONE = "010-0000-0000";

// 사업자 정보 — 임시값입니다. 실제 값으로 바꿔주세요.
export const BUSINESS_NO = "000-00-00000";

// 문의 메일 링크 (제목이 미리 채워집니다)
export const mail = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

// 상단 메뉴 (Header / Footer 공통)
export const MENU: { label: string; href: string }[] = [
  { label: "3D 프린팅", href: "/#print" },
  { label: "모델링", href: "/#modeling" },
  { label: "설계·제작", href: "/#engineering" },
  { label: "포트폴리오", href: "/#works" },
  { label: "가이드", href: "/guide" },
];

// 첫 화면 아래 세 갈래 버튼
export const HERO_PATHS = [
  {
    icon: "cube",
    label: "3D 프린팅 견적",
    sub: "STL / 3MF 파일을 업로드하여 자동견적",
    href: QUOTE_URL,
  },
  {
    icon: "doc",
    label: "3D 모델링 의뢰",
    sub: "도면 / 스케치 / 사진을 바탕으로 모델링",
    href: mail("[3D 모델링 의뢰]"),
  },
  {
    icon: "gear",
    label: "부품·시제품 상담",
    sub: "필요한 부품이나 기능 검증용 시제품 상담",
    href: mail("[부품·시제품 상담]"),
  },
];

// 서비스 3개
export const SERVICES = [
  {
    id: "print",
    no: "01",
    name: "3D PRINTING",
    meta: "SLA · MSLA · FDM",
    lead: "파일이 있다면 바로 제작합니다.",
    items: ["세척 · 경화", "후가공", "소량 제작"],
    cta: { label: "자동 견적 받기 →", href: QUOTE_URL },
    // 사진 제목(public/portfolio 파일 이름에서 나온 이름). 다른 사진으로 바꾸려면 여기만 수정.
    image: { kind: "photo", ref: "로봇개 골격 제작", alt: "3D 프린팅 출력물" },
  },
  {
    id: "modeling",
    no: "02",
    name: "3D MODELING",
    meta: "도면 · 스케치 · 사진",
    lead: "파일이 없어도 제작할 수 있습니다.",
    items: ["3D 모델링", "역설계", "기존 부품 수정"],
    cta: { label: "모델링 의뢰하기 →", href: mail("[3D 모델링 의뢰]") },
    image: { kind: "cad", ref: "/hero/part-link.png", alt: "3D 모델링 CAD 모델" },
  },
  {
    id: "engineering",
    no: "03",
    name: "ENGINEERING",
    meta: "기계부품 · 지그 · 치구",
    lead: "필요한 부품의 구조부터 함께 설계합니다.",
    items: ["기계부품 설계", "지그 · 치구 설계", "기능 검증용 시제품"],
    cta: { label: "부품·시제품 상담하기 →", href: mail("[부품·시제품 상담]") },
    image: {
      kind: "photo",
      ref: "군산대학교 개발 실험용 프로파일 구조",
      alt: "실험용 프로파일 구조",
    },
  },
];

// 제작 부품 8종 (icon 이름은 components/home/icons.tsx 참고)
export const PARTS = [
  { icon: "frame", label: "장비부품" },
  { icon: "bracket", label: "브라켓" },
  { icon: "sensor", label: "센서 홀더" },
  { icon: "jig", label: "지그 · 치구" },
  { icon: "housing", label: "커버 · 하우징" },
  { icon: "plate", label: "테스트 부품" },
  { icon: "gear", label: "기존 부품 수정" },
  { icon: "proto", label: "기능 검증용 시제품" },
];

// SERVICE와 PORTFOLIO 사이 "어떤 단계에서든 의뢰할 수 있습니다" 섹션.
// 고객의 현재 상황 → 연결되는 서비스/행동.
export const HOW_TO_WORK = [
  { no: "01", cond: "파일이 있습니다.", target: "3D PRINTING", href: QUOTE_URL },
  { no: "02", cond: "파일이 없습니다.", target: "3D MODELING", href: mail("[3D 모델링 의뢰]") },
  {
    no: "03",
    cond: "부품 자체가 필요합니다.",
    target: "ENGINEERING",
    href: mail("[부품·시제품 상담]"),
  },
  {
    no: "04",
    cond: "어떤 방법이 필요한지 모르겠습니다.",
    target: "CONSULTATION",
    href: mail("[상담 문의]"),
  },
];
