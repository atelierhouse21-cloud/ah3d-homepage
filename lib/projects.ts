// public/portfolio/ 폴더에 있는 사진을 자동으로 읽어옵니다.
//
// 사용법
//   1. 사진을 public/portfolio/ 폴더에 올립니다.
//   2. 배포가 끝나면 홈페이지 포트폴리오 섹션에 자동으로 나타납니다.
//
// 파일 이름 규칙
//   01_정밀 기계 부품.jpg   →  화면에 "정밀 기계 부품" 으로 표시
//   02_경량화 설계.jpg      →  화면에 "경량화 설계" 로 표시
//
//   맨 앞의 숫자는 순서를 정합니다. 화면에는 나오지 않습니다.
//   새 작업을 맨 앞에 두고 싶으면 00_ 으로 시작하세요.
//   숫자를 안 붙이셔도 되지만, 그러면 이름 순서대로 정렬됩니다.

import fs from "fs";
import path from "path";

export type Project = { src: string; title: string };

// 폴더가 비어 있을 때 임시로 보여줄 사진입니다.
// ⚠️ 이 사진들은 다른 회사 웹사이트의 이미지라 정식 공개 전에 반드시 지워야 합니다.
// public/portfolio/ 에 사진을 하나라도 올리시면 아래 목록은 무시됩니다.
const FALLBACK: Project[] = [
  { src: "https://pantex.energy.gov/sites/default/files/PPH-25-144505.jpg", title: "정밀 기계 부품" },
  { src: "https://www.jp-photo.com.tw/images/portfolio-jiepin/life/p_0001.jpg", title: "경량화 설계" },
  { src: "https://www.lwtsistemas.com.br/wp-content/uploads/2019/08/iStock-1042631772.jpg", title: "기능성 시제품" },
  { src: "https://etteplan.b-cdn.net/2024/02/upcast-reference.png?quality=60&width=750", title: "산업용 하우징" },
];

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

// 파일 이름에서 화면에 보일 제목을 뽑아냅니다.
function toTitle(filename: string): string {
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  const withoutOrder = withoutExt.replace(/^\d+[\s._-]*/, ""); // 앞의 숫자 제거
  return withoutOrder.replace(/[-_]+/g, " ").trim() || withoutExt;
}

export function getProjects(): Project[] {
  const dir = path.join(process.cwd(), "public", "portfolio");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return FALLBACK; // 폴더가 아예 없는 경우
  }

  const images = files
    .filter((name) => IMAGE_EXT.includes(path.extname(name).toLowerCase()))
    .filter((name) => !name.startsWith(".")) // 숨김 파일 제외
    .sort((a, b) => a.localeCompare(b, "ko"));

  if (images.length === 0) return FALLBACK;

  return images.map((name) => ({
    src: `/portfolio/${encodeURIComponent(name)}`,
    title: toTitle(name),
  }));
}
