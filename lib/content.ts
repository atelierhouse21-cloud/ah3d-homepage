// 아틀리에 하우스 홈페이지 문구
//
// 사이트에 나오는 모든 글자가 이 파일 하나에 들어 있습니다.
// 따옴표(") 안쪽 글자만 바꾸시고, 따옴표와 쉼표(,)는 지우지 마세요.

// 견적앱 주소 — 견적 관련 버튼은 모두 이 주소로 연결됩니다.
export const QUOTE_URL = "https://quote.ah3d.kr";

export const siteContent = {
  brand: {
    name: "아틀리에 하우스",
    nameEn: "ATELIER HOUSE",
    tagline: "3D 프린팅 스튜디오",
  },

  nav: [
    { label: "작업물", href: "/portfolio" },
    { label: "서비스", href: "/services" },
    { label: "회사소개", href: "/about" },
  ],
  navCta: { label: "견적 요청", href: QUOTE_URL },

  hero: {
    eyebrow: "3D PRINTING STUDIO",
    title: "만들고 싶은 걸\n만들어 드립니다",
    body: "STL 파일 업로드부터 견적 확인까지 3분.",
    primary: { label: "견적 요청하기", href: QUOTE_URL },
    secondary: { label: "작업물 보기", href: "/portfolio" },
    // 대표 사진 경로. public/ 폴더 기준입니다.
    // 예: 사진을 public/hero.jpg 에 넣었다면 "/hero.jpg"
    // 빈 문자열("")로 두면 노란 배경만 나옵니다.
    image: "",
    imageAlt: "아틀리에 하우스 대표 출력물",
  },

  // ⚠️ 아래 숫자는 임시값입니다. 실제 수치로 바꿔주세요.
  // 내세울 수치가 없으면 대괄호 안을 통째로 비우세요:  stats: [],
  stats: [
    { value: "1,200+", label: "누적 출력 건수" },
    { value: "24시간", label: "평균 견적 회신" },
    { value: "12종", label: "취급 재질" },
  ],

  portfolio: {
    title: "작업물",
    moreLabel: "전체 보기",
    moreHref: "/portfolio",
    pageTitle: "작업물",
    pageBody: "그동안 진행한 출력 작업들입니다.",
  },

  cta: {
    title: "파일만 있으면 됩니다",
    body: "평일 기준 24시간 내 회신드립니다.",
    button: { label: "견적 요청하기", href: QUOTE_URL },
  },

  services: {
    pageTitle: "서비스",
    pageBody: "취급하는 출력 방식과 재질입니다.",
    items: [
      {
        title: "FDM 출력",
        body: "필라멘트를 녹여 쌓아 올리는 방식입니다. 기구 부품, 지그, 대형 출력물에 적합합니다.",
        materials: "PLA · ABS · PETG · TPU",
      },
      {
        title: "SLA 출력",
        body: "레진을 빛으로 굳히는 방식입니다. 표면이 매끄러워 시제품과 피규어 원형에 적합합니다.",
        materials: "표준 레진 · 투명 레진 · 고강도 레진",
      },
      {
        title: "후가공",
        body: "서포트 제거, 사포 작업, 도색까지 필요에 맞춰 진행합니다.",
        materials: "서포트 제거 · 표면 연마 · 도색",
      },
    ],
  },

  about: {
    pageTitle: "회사소개",
    // 문단을 나누려면 빈 줄 없이 항목을 추가하세요.
    paragraphs: [
      "아틀리에 하우스는 3D 프린팅 출력 전문 스튜디오입니다.",
      "시제품 제작부터 소량 생산까지, 도면 하나로 시작해 실물로 만들어 드립니다.",
      "문의는 견적 요청 페이지를 통해 접수해 주시면 평일 기준 24시간 내에 회신드립니다.",
    ],
    // 연락처 — 실제 정보로 바꿔주세요.
    contact: [
      { label: "이메일", value: "atelierhouse21@gmail.com" },
      { label: "운영 시간", value: "평일 09:00 – 18:00" },
    ],
  },

  // ⚠️ 실제 정보로 바꿔주세요.
  footer: {
    left: "아틀리에 하우스",
    right: "사업자등록번호 000-00-00000",
  },
};

export type SiteContent = typeof siteContent;
