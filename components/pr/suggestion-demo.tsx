"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2, ChevronDown, RotateCcw } from "lucide-react"
import { buttonClass } from "./button-styles"
import { cn } from "@/lib/utils"

type Line = { n: number; code: string }

const BEFORE: Line[] = [
  { n: 1, code: "export function SaveButton({ onSave }) {" },
  { n: 2, code: "  return (" },
  { n: 3, code: '    <div className="bg-[#2563eb] text-white p-2 rounded"' },
  { n: 4, code: "         onClick={onSave}>" },
  { n: 5, code: "      Save" },
  { n: 6, code: "    </div>" },
  { n: 7, code: "  )" },
  { n: 8, code: "}" },
]

const SUGGESTION = [
  "export function SaveButton({ onSave, pending }: SaveButtonProps) {",
  "  return (",
  "    <Button onClick={onSave} disabled={pending}>",
  '      {pending ? "Saving…" : "Save"}',
  "    </Button>",
  "  )",
  "}",
]

type DiffRow = { kind: "add" | "del" | "ctx"; n: number; code: string }

const COMMITTED: DiffRow[] = [
  { kind: "del", n: 1, code: BEFORE[0].code },
  { kind: "add", n: 1, code: SUGGESTION[0] },
  { kind: "ctx", n: 2, code: SUGGESTION[1] },
  ...BEFORE.slice(2, 6).map((l) => ({ kind: "del" as const, n: l.n, code: l.code })),
  ...SUGGESTION.slice(2, 5).map((code, i) => ({ kind: "add" as const, n: i + 3, code })),
  { kind: "ctx", n: 6, code: SUGGESTION[5] },
  { kind: "ctx", n: 7, code: SUGGESTION[6] },
]

const SIGN = { add: "+", del: "-", ctx: " " }

function Gutter({ n, tone }: { n?: number; tone: "plain" | "add" | "del" }) {
  return (
    <td
      className={cn(
        "tabular w-10 select-none px-2 text-right align-baseline text-[12px] text-ink-muted",
        tone === "add" && "bg-add-gutter",
        tone === "del" && "bg-del-gutter",
      )}
    >
      {n}
    </td>
  )
}

export default function SuggestionDemo() {
  const [applied, setApplied] = useState(false)

  return (
    <div className="overflow-hidden rounded-md border border-line">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-subtle px-3 py-2 text-[13px]">
        <span className="flex min-w-0 items-center gap-2">
          <ChevronDown className="size-4 shrink-0 text-ink-muted" aria-hidden />
          <span className="truncate font-mono font-medium text-ink">components/SaveButton.tsx</span>
        </span>
        <span className="shrink-0 rounded-full border border-line bg-canvas px-2 text-xs leading-5 text-ink-muted">
          Example
        </span>
      </div>

      <div className="overflow-x-auto font-mono text-[13px] leading-[1.75] sm:text-[14px]" aria-live="polite">
        <table className="w-full border-collapse">
          <caption className="sr-only">
            {applied ? "Code after the suggestion was committed" : "AI-generated code under review"}
          </caption>
          <tbody>
            {!applied &&
              BEFORE.map((l) => (
                <tr key={l.n}>
                  <Gutter n={l.n} tone="plain" />
                  <td className="whitespace-pre py-0.5 pl-3 pr-4 align-baseline text-ink">{l.code}</td>
                </tr>
              ))}
            {applied &&
              COMMITTED.map((row, i) => (
                <tr key={i} className={cn(row.kind === "add" && "bg-add-bg", row.kind === "del" && "bg-del-bg")}>
                  <Gutter n={row.n} tone={row.kind === "ctx" ? "plain" : row.kind} />
                  <td className="whitespace-pre py-0.5 pl-3 pr-4 align-baseline text-ink">
                    <span
                      aria-hidden
                      className={cn("select-none", row.kind === "add" ? "text-add" : "text-del")}
                    >
                      {SIGN[row.kind]}{" "}
                    </span>
                    {row.kind !== "ctx" && <span className="sr-only">{row.kind === "add" ? "Added: " : "Removed: "}</span>}
                    {row.code}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Review thread */}
      <div className="border-t border-line bg-subtle p-3 sm:p-4">
        <div className={cn("rounded-md border border-line bg-canvas", applied && "opacity-80")}>
          <div className="flex flex-wrap items-center gap-2 border-b border-line-soft px-4 py-2.5 text-sm text-ink-muted">
            <Image src="/photos/avatar.webp" alt="" width={40} height={40} className="size-5 rounded-full border border-line object-cover" />
            <strong className="font-semibold text-ink">vikashyap</strong>
            <span>on lines 1 to 6</span>
            {applied && (
              <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-add">
                <CheckCircle2 className="size-3.5" aria-hidden />
                Resolved
              </span>
            )}
          </div>
          <div className="space-y-3 px-4 py-3 text-[15px] leading-relaxed text-ink">
            <p className="max-w-[60ch]">
              The model made a <code className="rounded bg-inset px-1 font-mono text-[13px]">div</code> a button. It
              can&apos;t take focus or respond to Enter, the hex colour skips our tokens, and there is no pending state.
            </p>
            {!applied && (
              <div className="overflow-hidden rounded-md border border-line">
                <p className="border-b border-line bg-subtle px-3 py-1.5 text-xs font-medium text-ink-muted">
                  Suggested change
                </p>
                <pre className="whitespace-pre-wrap break-words bg-add-bg px-3 py-2 font-mono text-[13px] leading-[1.7] text-ink">
                  {SUGGESTION.join("\n")}
                </pre>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {!applied ? (
                <button type="button" onClick={() => setApplied(true)} className={buttonClass("primary", "sm")}>
                  Commit suggestion
                </button>
              ) : (
                <>
                  <span className="inline-flex h-8 items-center gap-1.5 text-[13px] font-medium text-add">
                    <CheckCircle2 aria-hidden className="size-4" />
                    Suggestion committed
                  </span>
                  <button type="button" onClick={() => setApplied(false)} className={buttonClass("default", "sm")}>
                    <RotateCcw />
                    Show original
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
