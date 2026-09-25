"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CalendarDays, Github, Linkedin } from "lucide-react"
import { CALENDLY_URL, GITHUB_URL, LINKEDIN_URL, PROJECTS, ROLES } from "@/lib/content"
import { buttonClass } from "./button-styles"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "ai", label: "AI enablement" },
  { id: "work", label: "Work", count: PROJECTS.length },
  { id: "experience", label: "Experience", count: ROLES.length },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
]

export default function RepoBar() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    const onScroll = () => {
      if (window.scrollY < 200) setActive(null)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-4 md:px-6">
        <a href="#main" className="flex min-w-0 items-center gap-2.5 text-[15px] text-ink no-underline">
          <Image
            src="/photos/avatar.webp"
            alt=""
            width={28}
            height={28}
            className="size-7 shrink-0 rounded-full border border-line object-cover"
          />
          <span className="truncate">
            <span className="text-ink-muted">vikashyap</span>
            <span className="px-1 text-ink-muted">/</span>
            <span className="font-semibold">vikas-kashyap</span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={buttonClass("default", "sm", "hidden w-8 px-0 sm:inline-flex")}
          >
            <Linkedin />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={buttonClass("default", "sm", "hidden w-8 px-0 sm:inline-flex")}
          >
            <Github />
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "sm")}>
            <CalendarDays />
            Book a call
          </a>
        </div>
      </div>
      <nav aria-label="Sections" className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ul className="no-scrollbar -mb-px flex gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <li key={tab.id} className="shrink-0">
              <a
                href={`#${tab.id}`}
                aria-current={active === tab.id ? "true" : undefined}
                className={cn(
                  "flex h-11 items-center gap-2 border-b-2 px-3 text-sm no-underline transition-colors",
                  active === tab.id
                    ? "border-[var(--tab-active)] font-semibold text-ink"
                    : "border-transparent text-ink-muted hover:border-line hover:text-ink",
                )}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className="tabular rounded-full bg-inset px-1.5 text-xs font-medium leading-[18px] text-ink">
                    {tab.count}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
