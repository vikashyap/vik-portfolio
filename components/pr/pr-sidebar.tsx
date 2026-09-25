import Image from "next/image"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/content"

const LABELS = [
  { name: "ai-enablement", tone: "bg-add-bg text-add-strong border-add-gutter" },
  { name: "front-end", tone: "bg-[#ddf4ff] text-[#0a4fb5] border-[#b6e3ff]" },
  { name: "react", tone: "bg-subtle text-ink border-line" },
  { name: "next.js", tone: "bg-subtle text-ink border-line" },
  { name: "typescript", tone: "bg-subtle text-ink border-line" },
]

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line-soft py-4 first:pt-0 last:border-b-0">
      <h2 className="mb-2.5 text-xs font-semibold text-ink-muted">{title}</h2>
      {children}
    </div>
  )
}

export default function PrSidebar() {
  return (
    <div className="text-sm">
      <Row title="Author">
        <div className="flex items-center gap-3">
          <Image
            src="/photos/avatar.webp"
            alt=""
            width={72}
            height={72}
            className="size-9 rounded-full border border-line object-cover"
          />
          <div className="leading-tight">
            <p className="font-semibold text-ink">Vikas Kashyap</p>
            <p className="text-ink-muted">Front-End Lead & Full-Stack Engineer</p>
          </div>
        </div>
      </Row>
      <Row title="Labels">
        <ul className="flex flex-wrap gap-1.5">
          {LABELS.map((l) => (
            <li key={l.name} className={`rounded-full border px-2.5 text-xs font-medium leading-[22px] ${l.tone}`}>
              {l.name}
            </li>
          ))}
        </ul>
      </Row>
      <Row title="Currently">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logos/natuvion.png"
            alt=""
            width={40}
            height={40}
            className="size-5 rounded border border-line-soft object-contain"
          />
          <p className="text-ink">
            Senior Software Engineer at <span className="font-semibold">Natuvion</span>
          </p>
        </div>
      </Row>
      <Row title="Location">
        <p className="flex items-center gap-2 text-ink">
          <MapPin className="size-4 text-ink-muted" aria-hidden />
          Berlin, Germany
        </p>
      </Row>
      <Row title="Links">
        <ul className="space-y-2">
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-link">
              <Linkedin className="size-4 text-ink-muted" aria-hidden />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-link">
              <Github className="size-4 text-ink-muted" aria-hidden />
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-ink hover:text-link">
              <Mail className="size-4 text-ink-muted" aria-hidden />
              Email
            </a>
          </li>
        </ul>
      </Row>
    </div>
  )
}
