# AH3D 홈페이지 — 전체 최신 파일 (2026-09-23, 3차 — 문의 폼 추가)

이번 zip에는 **저장소 전체(소스코드 + 이미지)**가 들어있습니다. GitHub에는 자동으로
올라가지 않았습니다 (이 작업 환경은 GitHub에 쓰기 권한이 없습니다) — 아래 방법대로
직접 저장소에 덮어써서 반영해주세요.

## 이번 zip에 포함된 수정 사항 (이전 delivery 이후 추가분)

### 4. 실제 문의 페이지 (`/inquiry`) 추가 — mailto: 링크를 대체

"모델링 의뢰하기", "부품·시제품 상담", "3D 모델링 의뢰" 등 버튼을 누르면 지금까지는
사용자 이메일 앱이 열리는 `mailto:` 링크로만 연결됐습니다. 이제는 사이트 안에 있는
실제 문의 폼 페이지(`/inquiry`)로 연결되고, 폼을 제출하면 서버에서 이메일로
자동 발송됩니다.

- **새 페이지**: `app/inquiry/page.tsx` — 이름/회사명, 이메일, 전화번호(선택),
  문의 유형(3D 모델링 의뢰 / 부품·시제품 상담 / 상담 문의), 상세 내용, 도면·사진
  첨부(선택, 최대 5개·15MB)를 입력받는 폼입니다. 기존 사이트 디자인 톤(카드·그림자
  없이 얇은 테두리)을 그대로 따랐습니다.
- **새 API**: `app/api/inquiry/route.ts` — 폼 제출을 받아 Resend
  (https://resend.com) 이메일 API로 hello@ah3d.kr에 발송합니다. 별도 npm 패키지
  설치 없이 fetch로 직접 호출하도록 만들었습니다.
- **버튼 연결 변경**: 히어로 하단 버튼, SERVICE 02/03 CTA, HOW TO WORK 02/03/04,
  CONTACT 섹션 버튼이 모두 `mailto:`에서 `/inquiry?type=...`로 바뀌었습니다.
  (3D 프린팅 자동견적 버튼은 이전과 동일하게 auto-quote.ah3d.kr로 바로 연결됩니다 —
  이 부분은 원래 계획대로 셀프서비스 흐름이라 건드리지 않았습니다.)
- Footer/CONTACT 하단의 `hello@ah3d.kr` 직접 이메일 링크는 그대로 남겨뒀습니다
  (폼이 불편한 분들을 위한 대안 경로).

## ⚠️ 배포 전 반드시 설정해야 하는 것 — 이메일 발송 API 키

문의 폼이 실제로 이메일을 보내려면 **Resend 계정과 API 키가 필요합니다.** 이 작업
환경에서는 사용자님 계정으로 직접 가입/설정을 할 수 없어서, 아래 단계는 직접
진행해주셔야 합니다.

1. https://resend.com 에서 무료 계정 가입 (월 3,000통까지 무료)
2. 대시보드에서 **API Keys → Create API Key**로 키 발급
3. Vercel 프로젝트 → **Settings → Environment Variables**에 아래 추가:
   - `RESEND_API_KEY` = 발급받은 키 (필수)
   - `INQUIRY_TO_EMAIL` = 문의를 받을 이메일 주소 (생략하면 hello@ah3d.kr로 감)
   - `INQUIRY_FROM_EMAIL` = 발신자 표시 이름/주소 (생략하면 Resend 기본값 사용)
4. **중요**: ah3d.kr 도메인을 Resend에 인증(대시보드 → Domains)하기 전까지는
   - 발신 주소를 `hello@ah3d.kr` 같은 실제 도메인 주소로 쓸 수 없고 Resend
     기본 도메인(`onboarding@resend.dev`)으로만 보낼 수 있습니다.
   - 받는 주소도 Resend 가입 계정 본인 이메일로만 테스트 발송이 제한될 수
     있습니다.
   - 실제 운영에서 hello@ah3d.kr로 정상 수신하려면 Resend에서 ah3d.kr 도메인
     인증(DNS에 TXT/CNAME 레코드 추가)을 마쳐야 합니다. 도메인을 관리하시는
     곳(가비아 등)에서 레코드를 추가하시면 됩니다 — 필요하시면 그 단계도
     도와드릴 수 있습니다.
5. API 키를 설정하기 전까지는 폼 제출 시 "메일 발송 기능이 아직 설정되지
   않았습니다" 안내가 뜨고, 사용자는 화면에 안내된 전화번호/이메일로 직접
   연락할 수 있습니다 — 사이트가 깨지지는 않습니다.

## 반영 방법 (중요 — 전체 교체)

이 zip은 **현재 저장소의 전체 최신 상태**입니다. 부분적으로만 파일을 옮기면 CSS와
컴포넌트 구조가 어긋나서 사이트가 깨질 수 있으니, 아래 폴더/파일 전체를 이 zip의
내용으로 통째로 덮어써주세요.

- `app/` 전체 (새로 생긴 `app/inquiry/`, `app/api/inquiry/` 포함)
- `components/` 전체 (새로 생긴 `components/inquiry/` 포함)
- `lib/` 전체 (새로 생긴 `lib/inquiry.ts` 포함)
- `public/hero/`, `public/portfolio/`, `public/quality/`
- `package.json`, `next.config.js`, `tsconfig.json`

`node_modules/`, `.next/`, `.git/`은 이 zip에 포함하지 않았습니다.

## 지금까지 반영된 전체 수정 내역 (누적)

1. "이런 부품을 제작합니다" (PARTS) 섹션 삭제
2. "02 3D MODELING" 서비스 행 데스크탑 정렬 버그 수정
3. "QUALITY" (출력 품질) 섹션 삭제
4. 실제 문의 페이지(`/inquiry`) 추가 — 위 내용

## 아직 해결하지 않은 사항 (참고용)

- `app/about/page.tsx`, `app/services/page.tsx`와 `lib/content.ts`는 예전
  디자인 시스템(옛 "아틀리에 하우스" 브랜딩, 카드 UI)을 그대로 쓰는 페이지들입니다.
  메인 네비게이션에서는 연결되어 있지 않지만 주소로 직접 접속하면 보입니다.
  삭제할지, 새 디자인으로 다시 만들지 아직 결정하지 않은 상태라 이번에는
  건드리지 않았습니다.

## 시작하기 (로컬 확인용)

1. Node.js 20.9 이상 설치
2. 이 폴더에서 `npm install`
3. `npm run dev` 실행 후 `http://localhost:3000` 접속
   (로컬에서는 RESEND_API_KEY가 없으면 폼 제출 시 "메일 발송 기능이 아직
   설정되지 않았습니다" 메시지가 뜨는 것이 정상입니다.)
