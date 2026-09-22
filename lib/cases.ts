// 포트폴리오 작업 정보 (분류 · 작업명 · 한 줄 설명)
//
// public/portfolio/ 사진의 "제목"(파일 이름에서 나온 이름)을 key 로 적으면
// 해당 작업 카드에 정보가 표시됩니다. 여기에 없는 작업은 사진과 제목만 나옵니다.
// tags 는 분류 라벨과 필터 버튼에 사용됩니다. 첫 번째가 사진 위 라벨로 표시됩니다:
//   "3D Printing" | "3D Modeling" | "Mechanical" | "Prototype"
//
// ⚠️ 아래 내용은 파일 이름에서 추정한 임시 내용입니다. 실제 내용으로 고쳐주세요.

export type CaseInfo = {
  tags: string[];
  name?: string; // 카드에 표시할 작업명 (없으면 사진 제목)
  desc: string; // 카드에 나오는 한 줄 설명
};

export const CASES: Record<string, CaseInfo> = {
  "군산대학교 개발 실험용 프로파일 구조": {
    name: "실험용 프로파일 구조",
    tags: ["Mechanical"],
    desc: "실험용 장비 프레임 제작",
  },
  "V0.1": { name: "더치머신 V0.1", tags: ["Mechanical", "Prototype"], desc: "1차 시제품 제작" },
  "V0.3": { name: "더치머신 V0.3", tags: ["Mechanical", "Prototype"], desc: "구조 개선 및 설계" },
  "2차": {
    name: "롤러형 도구 2차",
    tags: ["3D Printing", "Prototype"],
    desc: "증거 채취용 롤러형 도구 제작",
  },
  "SWP 노스트로 디카페인 설비(테스트 모델)": {
    name: "디카페인 설비 테스트 모델",
    tags: ["Mechanical", "Prototype"],
    desc: "설비 검증용 테스트 모델",
  },
  "로봇개 골격 제작": {
    name: "로봇개 골격",
    tags: ["3D Printing", "3D Modeling"],
    desc: "출력·조립 테스트 부품",
  },
};
