import { CheckCircle2 } from "lucide-react"
import { STACK } from "@/lib/content"

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="pt-20 md:pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
        <h2 id="stack-title" className="text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
          Stack
        </h2>
        <p className="text-sm text-ink-muted">What I work in day to day</p>
      </div>
      <ul className="mt-6 divide-y divide-line-soft overflow-hidden rounded-md border border-line">
        {STACK.map((g) => (
          <li key={g.name} className="flex flex-col gap-1.5 px-4 py-3.5 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="flex w-44 shrink-0 items-center gap-2 font-semibold text-ink">
              <CheckCircle2 className="size-4 text-add" aria-hidden />
              {g.name}
            </p>
            <p className="text-[15px] leading-relaxed text-ink-muted">{g.items.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
