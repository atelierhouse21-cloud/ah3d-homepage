// 문의 페이지(/inquiry) 관련 데이터.
//
// 문의 유형을 추가하거나 문구를 바꾸려면 아래 INQUIRY_TYPES 배열만 수정하면 됩니다.

export type InquiryType = "modeling" | "engineering" | "consultation";

export const INQUIRY_TYPES: {
  id: InquiryType;
  label: string;
  desc: string;
}[] = [
  {
    id: "modeling",
    label: "3D 모델링 의뢰",
    desc: "파일이 없어도 도면 · 스케치 · 사진을 바탕으로 모델링합니다.",
  },
  {
    id: "engineering",
    label: "부품 · 시제품 상담",
    desc: "필요한 부품의 구조 설계부터 함께 상담합니다.",
  },
  {
    id: "consultation",
    label: "상담 문의",
    desc: "어떤 방법이 필요한지 모르겠다면 편하게 문의해주세요.",
  },
];

export function isInquiryType(v: string | undefined): v is InquiryType {
  return !!v && INQUIRY_TYPES.some((t) => t.id === v);
}

// 홈페이지 버튼 등에서 문의 페이지로 연결할 때 씁니다.
// 예: inquiryHref("modeling") → "/inquiry?type=modeling"
export const inquiryHref = (type: InquiryType) => `/inquiry?type=${type}`;
