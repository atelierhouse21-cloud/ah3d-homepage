import { NextResponse } from "next/server";
import { EMAIL as DEFAULT_TO } from "@/lib/home";
import { INQUIRY_TYPES, isInquiryType } from "@/lib/inquiry";

// 문의 폼(/inquiry) 제출을 받아 이메일로 발송하는 서버 API입니다.
// Resend(https://resend.com) REST API를 그대로 fetch로 호출하므로 별도
// npm 패키지 설치가 필요 없습니다.
//
// 배포 전 꼭 설정해야 하는 것 (Vercel 프로젝트 → Settings → Environment Variables):
//   RESEND_API_KEY   — Resend에서 발급받은 API 키 (필수)
//   INQUIRY_TO_EMAIL — 문의를 받을 주소 (생략 시 lib/home.ts의 EMAIL 사용)
//   INQUIRY_FROM_EMAIL — 발신자 표시 (생략 시 Resend 테스트 도메인 사용)
//
// 주의: Resend에서 ah3d.kr 도메인을 인증하기 전까지는 발신 주소를
// onboarding@resend.dev 같은 Resend 기본 도메인으로만 쓸 수 있고,
// 수신 주소도 Resend 가입 계정 본인 이메일로만 테스트 발송이 제한됩니다.
// 도메인 인증(Resend 대시보드 → Domains)을 마치면 이 제한이 풀립니다.

export const runtime = "nodejs";

const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_TOTAL_BYTES = 15 * 1024 * 1024; // 15MB
const MAX_FILES = 5;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "메일 발송 기능이 아직 설정되지 않았습니다. 관리자에게 문의해주세요.",
      },
      { status: 503 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ message: "잘못된 요청입니다." }, { status: 400 });
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const typeRaw = String(formData.get("type") || "");
  const type = isInquiryType(typeRaw) ? typeRaw : "consultation";
  const typeLabel =
    INQUIRY_TYPES.find((t) => t.id === type)?.label ?? "상담 문의";

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "이름, 이메일, 상세 내용을 모두 입력해주세요." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "이메일 형식을 확인해주세요." },
      { status: 400 }
    );
  }

  const rawFiles = formData
    .getAll("files")
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (rawFiles.length > MAX_FILES) {
    return NextResponse.json(
      { message: `파일은 최대 ${MAX_FILES}개까지 첨부할 수 있습니다.` },
      { status: 400 }
    );
  }
  const totalBytes = rawFiles.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes > MAX_TOTAL_BYTES) {
    return NextResponse.json(
      { message: "첨부 파일 전체 용량이 너무 큽니다. (최대 15MB)" },
      { status: 400 }
    );
  }

  const attachments = await Promise.all(
    rawFiles.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()).toString("base64"),
    }))
  );

  const from =
    process.env.INQUIRY_FROM_EMAIL || "AH3D 문의 <onboarding@resend.dev>";
  const to = process.env.INQUIRY_TO_EMAIL || DEFAULT_TO;

  const text = [
    `문의 유형: ${typeLabel}`,
    `이름/회사명: ${name}`,
    `이메일: ${email}`,
    phone ? `전화번호: ${phone}` : null,
    "",
    "상세 내용:",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[AH3D 문의] ${typeLabel} — ${name}`,
        text,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend API error:", res.status, detail);
      return NextResponse.json(
        { message: "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend fetch failed:", err);
    return NextResponse.json(
      { message: "메일 전송 중 오류가 발생했습니다." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
