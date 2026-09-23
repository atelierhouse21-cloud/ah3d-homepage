"use client";

import { useState } from "react";
import { EMAIL, PHONE } from "@/lib/home";
import { INQUIRY_TYPES, type InquiryType } from "@/lib/inquiry";

const MAX_FILES = 5;
const MAX_TOTAL_MB = 15;

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({
  initialType,
}: {
  initialType: InquiryType;
}) {
  const [type, setType] = useState<InquiryType>(initialType);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    const totalMb =
      picked.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);

    if (picked.length > MAX_FILES) {
      setErrorMsg(`파일은 최대 ${MAX_FILES}개까지 첨부할 수 있습니다.`);
      e.target.value = "";
      return;
    }
    if (totalMb > MAX_TOTAL_MB) {
      setErrorMsg(`첨부 파일 전체 용량은 ${MAX_TOTAL_MB}MB를 넘을 수 없습니다.`);
      e.target.value = "";
      return;
    }
    setErrorMsg("");
    setFiles(picked);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("type", type);
    files.forEach((f) => fd.append("files", f));

    try {
      const res = await fetch("/api/inquiry", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "전송에 실패했습니다.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "전송 중 문제가 발생했습니다."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="iform-done">
        <p className="tlabel">RECEIVED</p>
        <h2 className="h2">문의가 접수되었습니다.</h2>
        <p className="desc">
          내용 확인 후 영업일 기준 1~2일 이내에 이메일 또는 전화로
          회신드리겠습니다.
        </p>
        <a href="/" className="more">
          홈으로 돌아가기 →
        </a>
      </div>
    );
  }

  return (
    <form className="iform" onSubmit={onSubmit}>
      <div className="field">
        <label>
          문의 유형<span className="req">*</span>
        </label>
        <div className="type-grid">
          {INQUIRY_TYPES.map((t) => (
            <button
              type="button"
              key={t.id}
              className={`type-opt${type === t.id ? " on" : ""}`}
              onClick={() => setType(t.id)}
            >
              <b>{t.label}</b>
              <small>{t.desc}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">
            이름 / 회사명<span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" required maxLength={80} />
        </div>
        <div className="field">
          <label htmlFor="email">
            이메일<span className="req">*</span>
          </label>
          <input id="email" name="email" type="email" required maxLength={120} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="phone">연락처 전화번호 (선택)</label>
        <input id="phone" name="phone" type="tel" maxLength={30} />
      </div>

      <div className="field">
        <label htmlFor="message">
          상세 내용<span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          placeholder="필요한 부품·형상, 수량, 재질, 희망 일정 등을 자유롭게 적어주세요. 도면이나 사진이 없어도 괜찮습니다."
        />
      </div>

      <div className="field">
        <label htmlFor="files">도면 · 사진 첨부 (선택)</label>
        <input
          id="files"
          type="file"
          multiple
          onChange={onFileChange}
          accept=".pdf,.step,.stp,.igs,.iges,.dwg,.jpg,.jpeg,.png,.zip"
        />
        <p className="hint">
          파일 최대 {MAX_FILES}개, 전체 {MAX_TOTAL_MB}MB까지 첨부할 수
          있습니다. (도면·STEP·사진 등)
        </p>
      </div>

      {errorMsg && <p className="err">{errorMsg}</p>}

      <div className="submit-row">
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "전송 중..." : "문의 보내기"}
        </button>
        <span className="hint">
          바로 통화하시려면 {PHONE}, 이메일은{" "}
          <a href={`mailto:${EMAIL}`} className="quiet">
            {EMAIL}
          </a>
        </span>
      </div>
    </form>
  );
}
