// public/portfolio/ 폴더에 있는 사진을 자동으로 읽어옵니다.
//
// 파일 이름 규칙
//   01_정밀 기계 부품.jpg              →  제목: 정밀 기계 부품
//   01_기구 부품_정밀 브라켓.jpg        →  분류: 기구 부품 / 제목: 정밀 브라켓
//
//   맨 앞 숫자는 표시 순서를 정하며 화면에는 나오지 않습니다.
//   밑줄(_)로 나눈 칸이 세 개면 가운데가 분류가 됩니다.
//   분류를 하나라도 넣으면 작업물 위에 분류 버튼이 자동으로 생깁니다.

import fs from "fs";
import path from "path";

export type Project = { src: string; title: string; category: string };

// 폴더가 비어 있을 때만 임시로 보여줄 사진입니다.
// ⚠️ 다른 회사 웹사이트의 이미지라 정식 공개 전에 반드시 지워야 합니다.
// public/portfolio/ 에 사진을 하나라도 올리시면 아래 목록은 무시됩니다.
const FALLBACK: Project[] = [
  { src: "https://pantex.energy.gov/sites/default/files/PPH-25-144505.jpg", title: "정밀 기계 부품", category: "" },
  { src: "https://www.jp-photo.com.tw/images/portfolio-jiepin/life/p_0001.jpg", title: "경량화 설계", category: "" },
  { src: "https://www.lwtsistemas.com.br/wp-content/uploads/2019/08/iStock-1042631772.jpg", title: "기능성 시제품", category: "" },
  { src: "https://etteplan.b-cdn.net/2024/02/upcast-reference.png?quality=60&width=750", title: "산업용 하우징", category: "" },
];

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function parseName(filename: string): { title: string; category: string } {
  const base = filename.replace(/\.[^.]+$/, "");
  const parts = base.split("_");

  // 맨 앞이 숫자면 순서 표시이므로 떼어냅니다.
  if (parts.length > 1 && /^\d+$/.test(parts[0].trim())) parts.shift();

  if (parts.length >= 2) {
    return { category: parts[0].trim(), title: parts.slice(1).join("_").trim() };
  }
  return { category: "", title: (parts[0] || base).replace(/[-]+/g, " ").trim() };
}

export function getProjects(): Project[] {
  const dir = path.join(process.cwd(), "public", "portfolio");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return FALLBACK;
  }

  const images = files
    .filter((n) => IMAGE_EXT.includes(path.extname(n).toLowerCase()))
    .filter((n) => !n.startsWith("."))
    .sort((a, b) => a.localeCompare(b, "ko"));

  if (images.length === 0) return FALLBACK;

  return images.map((name) => {
    const { title, category } = parseName(name);
    return { src: `/portfolio/${encodeURIComponent(name)}`, title, category };
  });
}
