// 출력 품질 사진 (PRINT QUALITY 섹션)
//
// 실제 SLA / MSLA 출력 사진이 준비되면:
//   1) 사진을 public/quality/ 폴더에 올리고
//   2) 아래 src 에 "/quality/사진이름.jpg" 를 적으면 자동으로 교체됩니다.
// src 를 빈 문자열("")로 두면 "사진 준비 중" 표시가 나옵니다.
// 권장: 가로 4 : 세로 3 비율, 1200px 내외, 300KB 이하

export type QualityItem = {
  no: string;
  en: string;
  ko: string;
  src: string;
  alt: string;
};

export const QUALITY: QualityItem[] = [
  { no: "01", en: "Detail", ko: "미세 형상", src: "", alt: "미세 형상 출력물" },
  { no: "02", en: "Surface", ko: "표면 품질", src: "", alt: "표면 품질 출력물" },
  { no: "03", en: "Small Parts", ko: "소형 부품", src: "", alt: "소형 부품 출력물" },
  { no: "04", en: "Functional Prototype", ko: "기능 검증용 부품", src: "", alt: "기능 검증용 부품 출력물" },
];
