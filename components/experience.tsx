import Image from "next/image"
import { GitCommitHorizontal } from "lucide-react"
import { ROLES } from "@/lib/content"

const RECENT = ROLES.slice(0, 4)
const EARLIER = ROLES.slice(4)

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-20 md:pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
        <h2 id="experience-title" className="text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
          Experience
        </h2>
        <p className="tabular text-sm text-ink-muted">Since 2013, newest first</p>
      </div>

      <ol className="relative mt-8">
        <span aria-hidden className="absolute bottom-0 left-[7px] top-2 w-0.5 bg-line-soft" />
        {RECENT.map((r) => (
          <li key={`${r.company}-${r.start}`} className="relative pb-10 pl-8 last:pb-0">
            <GitCommitHorizontal
              aria-hidden
              className="absolute left-[-1px] top-0.5 size-4 rotate-90 bg-canvas text-ink-muted"
            />
            <p className="tabular font-mono text-[13px] text-ink-muted">
              {r.start} – {r.end} · {r.location}
            </p>
            <div className="mt-2 rounded-md border border-line">
              <div className="flex items-start justify-between gap-4 px-4 pb-4 pt-3.5">
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold text-ink">
                    {r.title} <span className="font-normal text-ink-muted">at</span> {r.company}
                  </h3>
                  <p className="mt-1.5 max-w-[68ch] text-pretty text-[15px] leading-relaxed text-ink-muted">{r.summary}</p>
                  {r.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1 text-[15px] leading-relaxed text-ink">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5">
                          <span aria-hidden className="mt-[0.7em] size-1 shrink-0 rounded-full bg-ink-muted" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {r.logo && (
                  <Image
                    src={r.logo}
                    alt={`${r.company} logo`}
                    width={64}
                    height={64}
                    className="size-9 shrink-0 rounded-md border border-line-soft bg-canvas object-contain p-1"
                  />
                )}
              </div>
              <ul className="flex flex-wrap gap-1.5 border-t border-line-soft bg-subtle px-4 py-2.5">
                {r.tech.map((t) => (
                  <li key={t} className="rounded-md border border-line-soft bg-canvas px-2 py-0.5 font-mono text-[12px] text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="relative pl-8 pt-10">
          <GitCommitHorizontal
            aria-hidden
            className="absolute left-[-1px] top-[2.6rem] size-4 rotate-90 bg-canvas text-ink-muted"
          />
          <p className="tabular font-mono text-[13px] text-ink-muted">2013 – 2017 · India</p>
          <ul className="mt-2 divide-y divide-line-soft rounded-md border border-line">
            {EARLIER.map((r) => (
              <li key={r.company} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <span className="tabular font-mono text-[13px] leading-6 text-ink-muted">
                  {r.start} – {r.end}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink">
                    {r.title} at {r.company}
                  </span>
                  , {r.location}. {r.summary}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </section>
  )
}
