import type { Metadata } from "next";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/home";
import "./globals.css";

// 페이지 제목(브라우저 탭·검색결과)도 고객에게 노출되는 영역이므로
// AH3D를 메인 브랜드로 씁니다. (siteContent.brand는 예전 문구 파일이라 쓰지 않음)
export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "설계하고, 출력하고, 검증합니다. AH3D는 3D프린팅·3D모델링·기계설계·기능 검증용 시제품을 제작하는 엔지니어링 스튜디오입니다.",

  // ⚠️ 공사 중 설정 — 검색엔진이 이 사이트를 수집하지 못하게 막습니다.
  // 홈페이지가 완성되어 정식으로 공개하실 때, 아래 robots 항목
  // 세 줄을 통째로 지우시면 검색에 노출되기 시작합니다.
  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    description: "설계하고, 출력하고, 검증합니다. 3D프린팅 · 3D모델링 · 기계설계.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Inter(영문) · Pretendard(한글) 글꼴 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
