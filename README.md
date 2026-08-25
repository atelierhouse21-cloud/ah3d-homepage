# AH3D 홈페이지

프리미엄 엔지니어링형 AH3D 랜딩 페이지입니다. Next.js 기반이라 GitHub와 Vercel 배포에 바로 사용할 수 있습니다.

## 시작하기

1. Node.js 20.9 이상을 설치합니다.
2. 이 폴더에서 `npm install`을 실행합니다.
3. `npm run dev`를 실행한 뒤 브라우저에서 `http://localhost:3000`을 엽니다.

## Vercel 배포

1. 이 프로젝트를 새 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 선택해 해당 저장소를 가져옵니다.
3. Framework Preset은 Next.js로 자동 감지됩니다. **Deploy**를 누르면 완료입니다.

## 콘텐츠 교체

- 모든 서비스와 포트폴리오 문구는 `app/page.tsx` 상단의 `services`, `projects` 배열에서 바꿀 수 있습니다.
- 연락처 이메일은 `hello@ah3d.co.kr`를 실제 이메일로 교체하세요.
- 색상은 `app/globals.css` 상단의 `:root` 변수에서 조정합니다.
- 현재 포트폴리오 그래픽은 배포에 외부 이미지가 필요 없도록 CSS로 만든 임시 시각물입니다. 실제 사진을 사용할 때는 `public/`에 이미지를 넣고 `next/image`로 교체하면 됩니다.
