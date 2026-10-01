# AH3D 홈페이지 — SERVICE 섹션 대표 이미지 3장 교체 (2026-10-01)

메인 페이지의 "목적에 맞는 방식으로 제작해드립니다" (SERVICE) 섹션에 있는
01 3D PRINTING / 02 3D MODELING / 03 ENGINEERING 대표 이미지를 보내주신
사진 3장으로 교체했습니다.

- **01 3D PRINTING** → 첫 번째로 올려주신 사진(출력된 부품 3세트 사진)
- **02 3D MODELING** → 두 번째로 올려주신 사진(필터/펀넬 CAD 렌더링) —
  기존처럼 파란 설계도면 배경 위에 겹쳐 보이는 스타일 그대로 적용했습니다.
- **03 ENGINEERING** → 세 번째로 올려주신 사진(전체 조립 장비 렌더링)

**새로 추가한 이미지 파일 3개** (`public/service/` 폴더, 웹에 쓰기 좋게
크기·용량을 적당히 줄여서 저장했습니다):

- `public/service/3d-printing-parts.jpg`
- `public/service/3d-modeling-cad.png`
- `public/service/engineering-machine.png`

**수정한 코드 파일 2개:**

- `lib/home.ts` — SERVICES 배열의 각 이미지 경로(`image.ref`)를 이
  새 파일 경로로 바꿨습니다. 기존에는 "01 PRINTING"과 "03 ENGINEERING"
  이미지가 `public/portfolio/` 사진 제목과 연결되는 방식이었는데, 이제는
  `public/service/` 안의 파일을 직접 가리키므로 포트폴리오 사진 이름이
  바뀌어도 이 대표 이미지는 영향을 받지 않습니다.
- `components/home/ServiceSection.tsx` — 이미지 경로가 "/"로 시작하면
  `public/service/`의 파일을 직접 쓰고, 아니면 기존처럼 포트폴리오
  사진 제목으로 찾도록 로직을 살짝 넓혔습니다. (기존 기능 그대로 유지,
  새 방식만 추가)

GitHub에 반영하실 때는:
1. `public/service/` 폴더를 새로 만들고 이미지 파일 3개를 업로드
2. `lib/home.ts`, `components/home/ServiceSection.tsx` 두 파일을 같은
   경로에 덮어쓰기

## 확인 방법

로컬에서 빌드 후 데스크탑·모바일 화면 모두 스크린샷으로 확인했습니다.
01/02/03 섹션에 각각 올려주신 사진이 정상적으로 나오고, 02번은 기존
CAD 스타일(파란 격자 배경 + 겹침 효과)이 잘 적용된 것을 확인했습니다.
