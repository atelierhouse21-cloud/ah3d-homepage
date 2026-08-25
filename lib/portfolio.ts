// 작업물(포트폴리오) 목록
//
// 사진 넣는 방법
//   1. 사진 파일을 public/portfolio/ 폴더에 넣으세요.
//   2. 아래 image 항목에 "/portfolio/파일이름.jpg" 형태로 적으세요.
//   3. image를 빈 문자열("")로 두면 회색 자리표시자가 나옵니다.
//
// 항목을 추가하려면 { } 묶음 하나를 통째로 복사해서 아래에 붙여넣고
// 내용만 바꾸시면 됩니다. id는 서로 겹치지 않게 지어주세요.

export type PortfolioItem = {
  id: string;
  title: string;
  method: string; // 출력 방식
  material: string; // 재질
  image: string;
  description?: string; // 없으면 생략 가능
  featured?: boolean; // 메인 화면에 보일 항목이면 true
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "sample-1",
    title: "시제품 하우징",
    method: "SLA",
    material: "레진",
    image: "",
    description: "전자 기기 외장 시제품. 조립 확인용으로 제작했습니다.",
    featured: true,
  },
  {
    id: "sample-2",
    title: "기구 부품",
    method: "FDM",
    material: "ABS",
    image: "",
    description: "설비에 들어가는 교체 부품. 내열성을 고려해 ABS로 출력했습니다.",
    featured: true,
  },
  {
    id: "sample-3",
    title: "피규어 원형",
    method: "SLA",
    material: "레진",
    image: "",
    description: "도색 전 원형. 표면 연마까지 진행했습니다.",
    featured: true,
  },
];

// 메인 화면에 보여줄 항목 (최대 6개)
export const featuredItems = portfolioItems
  .filter((item) => item.featured)
  .slice(0, 6);
