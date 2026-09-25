import { ArrowUpRight, BookOpen, Eye, FileCode2, Scale, Terminal } from "lucide-react"
import { CALENDLY_URL, FORMATS, PRACTICES, TOOLING } from "@/lib/content"
import SuggestionDemo from "./suggestion-demo"

const PRACTICE_ICONS = [BookOpen, FileCode2, Eye, Scale]

export default function AiEnablement() {
  return (
    <section id="ai" aria-labelledby="ai-title" className="pt-16 md:pt-20">
      <h2 id="ai-title" className="text-balance text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2rem]">
        What I help teams with
      </h2>
      <p className="mt-3 max-w-[62ch] text-pretty text-[17px] leading-relaxed text-ink-muted">
        Most teams have AI tools installed. Fewer have them set up to write code that belongs in their codebase. This is
        the work in between.
      </p>

      {/* Timeline of practices */}
      <ol className="relative mt-8 space-y-0">
        <span aria-hidden className="absolute bottom-4 left-[15px] top-4 w-0.5 bg-line-soft" />
        {PRACTICES.map((p, i) => {
          const Icon = PRACTICE_ICONS[i]
          return (
            <li key={p.title} className="relative flex gap-4 pb-8 last:pb-0">
              <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-canvas bg-inset text-ink-muted">
                <Icon className="size-4" aria-hidden />
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-1.5 max-w-[62ch] text-pretty text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </li>
          )
        })}
      </ol>

      {/* The mechanism, shown */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-[-0.01em]">What a good review catches</h3>
        <p className="mb-5 mt-2 max-w-[62ch] text-pretty text-[15px] leading-relaxed text-ink-muted">
          A typical piece of generated UI. The fix is small; seeing it every time is the skill. I help teams write that
          check into a skill, so the agent catches it before a person has to.
        </p>
        <SuggestionDemo />
      </div>

      {/* Formats */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-[-0.01em]">Ways to work together</h3>
        <ul className="mt-5 divide-y divide-line-soft overflow-hidden rounded-md border border-line">
          {FORMATS.map((f) => (
            <li key={f.name} className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="w-36 shrink-0 font-semibold text-ink">{f.name}</p>
              <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">{f.detail}</p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-link hover:underline"
              >
                Ask about this
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-[62ch] text-pretty text-[15px] leading-relaxed text-ink-muted">
          How I learned it: by doing it in production every day, and from engineers who were further along than me. You
          get what works now, not a slide deck.
        </p>
      </div>

      {/* Tooling */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-[-0.01em]">Tooling I built and use</h3>
        <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">
          Skills that run inside my own AI coding workflow. They are the kind of thing I help teams build for their repo.
        </p>
        <div className="mt-5 overflow-hidden rounded-md border border-line">
          <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-2.5 font-mono text-[13px] text-ink-muted">
            <Terminal className="size-4" aria-hidden />
            ~/.claude/skills
          </div>
          <ul className="divide-y divide-line-soft">
            {TOOLING.map((t) => (
              <li key={t.name} className="grid gap-1 px-4 py-3 sm:grid-cols-[15rem_1fr] sm:gap-6">
                <span className="font-mono text-[14px] font-medium text-ink">{t.name}</span>
                <span className="text-[15px] leading-relaxed text-ink-muted">{t.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
