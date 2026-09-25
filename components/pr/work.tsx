import { ArrowUpRight, ChevronDown } from "lucide-react"
import { PROJECTS } from "@/lib/content"

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="pt-20 md:pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
        <h2 id="work-title" className="text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
          Selected work
        </h2>
        <p className="tabular text-sm text-ink-muted">{PROJECTS.length} products shipped</p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <details key={p.path} open className="group overflow-hidden rounded-md border border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-b border-line bg-subtle px-3 py-2 text-[13px] group-[:not([open])]:border-b-0 [&::-webkit-details-marker]:hidden">
              <span className="flex min-w-0 items-center gap-2">
                <ChevronDown
                  className="size-4 shrink-0 text-ink-muted transition-transform group-[:not([open])]:-rotate-90"
                  aria-hidden
                />
                <span className="truncate font-mono font-medium text-ink">{p.path}</span>
              </span>
            </summary>
            <div className="flex h-full flex-col px-4 pb-5 pt-4">
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-pretty text-[15px] leading-relaxed text-ink-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-md bg-inset px-2 py-0.5 font-mono text-[12px] text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-link hover:underline"
                  >
                    Visit
                    <span className="sr-only"> {p.title}</span>
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
