# 아틀리에 하우스 홈페이지

`ah3d.kr` 에 올라가는 회사 홈페이지입니다.
견적앱(`quote.ah3d.kr`)은 별도 저장소로 관리하며, 이 저장소와 서로 영향을 주지 않습니다.

---

## 자주 하게 될 일

### 문구 바꾸기

`lib/content.ts` 파일 하나에 사이트의 모든 글자가 들어 있습니다.
따옴표 안쪽 글자만 바꾸시면 됩니다.

### 작업물 추가하기

1. 사진을 `public/portfolio/` 폴더에 올립니다.
2. `lib/portfolio.ts` 파일을 열어 항목을 하나 추가합니다.

```
{
  id: "housing-2026",
  title: "시제품 하우징",
  method: "SLA",
  material: "레진",
  image: "/portfolio/housing-2026.jpg",
  description: "전자 기기 외장 시제품.",
  featured: true,
},
```

`featured: true` 로 두면 첫 화면에도 나옵니다. 첫 화면에는 최대 6개까지 보입니다.

### 색상 바꾸기

`app/globals.css` 파일 맨 위에 색상이 모여 있습니다.

| 이름 | 현재 값 | 쓰이는 곳 |
|---|---|---|
| `--ah-cream` | `#FBF6E4` | 첫 화면 배경, 하단 배너 |
| `--ah-yellow` | `#F0CB00` | 포인트 색, 견적 버튼 |
| `--ah-dark` | `#141414` | 작업물 섹션, 맨 아래 |

---

## 아직 임시값인 것

올리기 전에 아래 항목은 실제 정보로 바꿔주세요.

- `lib/content.ts` 의 `stats` — 누적 건수, 회신 시간, 재질 수 (사실이 아닌 수치가 올라가면 문제가 될 수 있습니다)
- `lib/content.ts` 의 `footer` — 사업자등록번호
- `lib/content.ts` 의 `about.contact` — 이메일, 운영 시간

---

## 아직 없는 기능

- 로고 (지금은 `ATELIER HOUSE` 글자로 표시됩니다)
- 관리자 페이지에서 작업물 사진을 직접 올리는 기능
- 작업물 상세 페이지

---

## 페이지 구성

| 주소 | 내용 |
|---|---|
| `/` | 첫 화면 |
| `/portfolio` | 작업물 전체 |
| `/services` | 출력 방식과 재질 |
| `/about` | 회사 소개, 연락처 |

견적 관련 버튼은 모두 `quote.ah3d.kr` 로 연결됩니다.
이 주소는 `lib/content.ts` 맨 위의 `QUOTE_URL` 에서 바꿀 수 있습니다.
