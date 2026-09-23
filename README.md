# AH3D 홈페이지 — 전체 최신 파일 (2026-09-23, 2차)

이번 zip에는 **저장소 전체(소스코드 + 이미지)**가 들어있습니다. GitHub에는 자동으로
올라가지 않았습니다 (이 작업 환경은 GitHub에 쓰기 권한이 없습니다) — 아래 방법대로
직접 저장소에 덮어써서 반영해주세요.

## 이번 zip에 포함된 수정 사항 (이전 delivery 이후 추가분)

3. **"QUALITY" (출력 품질) 섹션 삭제**
   - `components/home/QualitySection.tsx` 파일 자체를 삭제했습니다.
   - `app/page.tsx`에서 `<QualitySection />` 호출도 제거했습니다.
   - `app/globals.css`에서 관련 CSS(`#quality`, `.qrow`, `.qimg` 등)도 모두 삭제했습니다.
   - `lib/quality.ts` (사진 데이터 파일)는 삭제하지 않고 그대로 남겨뒀습니다 (PARTS
     데이터를 남겨둔 것과 같은 방식 — 지금은 어디서도 쓰이지 않지만, 나중에 품질
     섹션을 다시 넣고 싶으실 경우를 위해 보존).
   - **주의**: 기존 저장소에 있던 `components/home/QualitySection.tsx` 파일은 이 zip에
     없으므로, 저장소에 남아있다면 직접 삭제해주세요.
   - `/guide` 페이지(출력 가이드)는 QUALITY 섹션과 별개로 유지되며 영향받지 않았습니다.
     상단 메뉴의 "가이드" 링크로 계속 접근할 수 있습니다.

(1번 PARTS 섹션 삭제, 2번 02 모델링 행 정렬 버그 수정은 이전 zip에서 이미
반영되었고 이번 zip에도 포함되어 있습니다.)

## 반영 방법 (중요 — 전체 교체)

이 zip은 **현재 저장소의 전체 최신 상태**입니다. 부분적으로만 파일을 옮기면 CSS와
컴포넌트 구조가 어긋나서 사이트가 깨질 수 있으니, 아래 폴더/파일 전체를 이 zip의
내용으로 통째로 덮어써주세요.

- `app/` 전체
- `components/` 전체
- `lib/` 전체
- `public/hero/`, `public/portfolio/`, `public/quality/`
- `package.json`, `next.config.js`, `tsconfig.json`

`node_modules/`, `.next/`, `.git/`은 이 zip에 포함하지 않았습니다 (빌드 산출물이라
저장소에 올릴 필요 없는 파일들입니다).

## 아직 해결하지 않은 사항 (참고용)

- `app/about/page.tsx`, `app/services/page.tsx`와 `lib/content.ts`는 예전
  디자인 시스템(옛 "아틀리에 하우스" 브랜딩, 카드 UI)을 그대로 쓰는 페이지들입니다.
  메인 네비게이션에서는 연결되어 있지 않지만 주소로 직접 접속하면 보입니다.
  삭제할지, 새 디자인으로 다시 만들지 아직 결정하지 않은 상태라 이번에는
  건드리지 않았습니다.
- CTA 버튼("모델링 의뢰하기", "부품·시제품 상담하기" 등)은 아직 mailto: 링크로만
  연결되어 있습니다. 이 부분에 대한 페이지 형식 추천은 이번 답변에서 별도로
  드립니다.

## 시작하기 (로컬 확인용)

1. Node.js 20.9 이상 설치
2. 이 폴더에서 `npm install`
3. `npm run dev` 실행 후 `http://localhost:3000` 접속
