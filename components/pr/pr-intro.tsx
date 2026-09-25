import Image from "next/image"
import { CalendarDays, ChevronDown, GitPullRequest, Mail } from "lucide-react"
import { CALENDLY_URL, EMAIL } from "@/lib/content"
import DownloadResume from "@/components/download-resume"
import { buttonClass } from "./button-styles"

const REMOVED = [
  "Roll out an AI assistant and let it write the front-end.",
  "Measure success by how much code it generates.",
]

const ADDED = [
  "Give the AI your context, your rules and a real review step.",
  "Measure success by what ships, and how well it holds up.",
]

export default function PrIntro() {
  return (
    <div className="pt-8 md:pt-12">
      <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
        Help your front-end team use AI well{" "}
        <span className="font-normal text-ink-muted">#13</span>
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 border-b border-line pb-6 text-[15px] text-ink-muted">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-add px-3 text-sm font-medium text-white">
          <GitPullRequest className="size-4" aria-hidden />
          Open
        </span>
        <span>
          <strong className="font-semibold text-ink">vikashyap</strong> wants to merge 13 years of front-end work
          into{" "}
          <code className="rounded-md bg-[#ddf4ff] px-1.5 py-0.5 font-mono text-[13px] text-link">your-team:main</code>
        </span>
      </div>

      {/* The diff: hype removed, practice added */}
      <figure className="mt-6 overflow-hidden rounded-md border border-line">
        <figcaption className="flex items-center justify-between gap-3 border-b border-line bg-subtle px-3 py-2 text-[13px]">
          <span className="flex min-w-0 items-center gap-2">
            <ChevronDown className="size-4 shrink-0 text-ink-muted" aria-hidden />
            <span className="truncate font-mono font-medium text-ink">team/ai-approach.md</span>
          </span>
          <span className="tabular flex shrink-0 items-center gap-2 font-mono">
            <span className="text-add">+2</span>
            <span className="text-del">−2</span>
          </span>
        </figcaption>
        <div className="overflow-x-auto font-mono text-[14px] leading-[1.7] sm:text-[16px] lg:text-[17px]">
          <table className="w-full border-collapse">
            <tbody>
              {REMOVED.map((line, i) => (
                <tr key={line} className="diff-line bg-del-bg" style={{ "--i": i } as React.CSSProperties}>
                  <td className="tabular w-10 select-none bg-del-gutter px-2 py-1 text-right align-baseline text-[12px] text-ink-muted sm:w-12 sm:text-[13px]">
                    {i + 1}
                  </td>
                  <td className="w-6 select-none py-1 pl-2 align-baseline text-del" aria-hidden>
                    −
                  </td>
                  <td className="py-1 pr-4 align-baseline text-ink">
                    <span className="sr-only">Removed: </span>
                    <span className="diff-strike" style={{ "--i": i } as React.CSSProperties}>
                      {line}
                    </span>
                  </td>
                </tr>
              ))}
              {ADDED.map((line, i) => (
                <tr key={line} className="diff-line bg-add-bg" style={{ "--i": i + 3 } as React.CSSProperties}>
                  <td className="tabular w-10 select-none bg-add-gutter px-2 py-1 text-right align-baseline text-[12px] text-ink-muted sm:w-12 sm:text-[13px]">
                    {i + 1}
                  </td>
                  <td className="w-6 select-none py-1 pl-2 align-baseline text-add" aria-hidden>
                    +
                  </td>
                  <td className="py-1 pr-4 align-baseline font-medium text-ink">
                    <span className="sr-only">Added: </span>
                    {line}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>

      {/* Review comment */}
      <div className="mt-6 flex gap-3 sm:gap-4">
        <Image
          src="/photos/avatar.webp"
          alt="Vikas Kashyap"
          width={80}
          height={80}
          priority
          className="mt-1 hidden size-10 shrink-0 rounded-full border border-line object-cover sm:block"
        />
        <div className="relative min-w-0 flex-1 rounded-md border border-line">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-line bg-subtle px-4 py-2.5 text-sm text-ink-muted">
            <Image
              src="/photos/avatar.webp"
              alt=""
              width={40}
              height={40}
              className="size-5 rounded-full border border-line object-cover sm:hidden"
            />
            <strong className="font-semibold text-ink">vikashyap</strong>
            <span>left a review</span>
            <span className="ml-auto rounded-full border border-line px-2 text-xs leading-5">Author</span>
          </div>
          <div className="space-y-4 px-4 py-5 text-[17px] leading-[1.65] text-ink sm:px-5">
            <p className="max-w-[62ch] text-pretty">
              I&apos;m Vikas, a Front-End Lead in Berlin. For 13 years I&apos;ve shipped React, Next.js and TypeScript
              at Natuvion, Tenderize, Snubes and Ticketmaster.
            </p>
            <p className="max-w-[62ch] text-pretty">
              Today I build the AI workflows my team uses every day, and I help other front-end teams set up the same:
              context the agent can trust, skills that encode your standards, and review that catches what the model
              misses.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "lg")}>
                <CalendarDays />
                Book a call
              </a>
              <DownloadResume className={buttonClass("default", "lg")} />
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1.5 px-1 text-[15px] text-link underline-offset-4 hover:underline"
              >
                <Mail className="size-4" aria-hidden />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
