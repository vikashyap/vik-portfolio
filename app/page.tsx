import RepoBar from "@/components/pr/repo-bar"
import PrIntro from "@/components/pr/pr-intro"
import PrSidebar from "@/components/pr/pr-sidebar"
import AiEnablement from "@/components/pr/ai-enablement"
import Work from "@/components/pr/work"
import Experience from "@/components/experience"
import Stack from "@/components/pr/stack"
import BeyondCode from "@/components/beyond-code"
import Contact from "@/components/contact"
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/content"

export default function Portfolio() {
  return (
    <>
      <RepoBar />
      <main id="main" className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid gap-x-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <PrIntro />
            <aside aria-label="About Vikas" className="mt-10 rounded-md border border-line p-4 lg:hidden">
              <PrSidebar />
            </aside>
            <AiEnablement />
          </div>
          <aside aria-label="About Vikas" className="hidden lg:block">
            <div className="sticky top-[8.5rem] pt-12">
              <PrSidebar />
            </div>
          </aside>
        </div>
        <Work />
        <Experience />
        <Stack />
        <BeyondCode />
        <Contact />
      </main>
      <footer className="border-t border-line bg-subtle">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-6 text-[13px] text-ink-muted md:px-6">
          <p>© {new Date().getFullYear()} Vikas Kashyap · Berlin</p>
          <ul className="flex gap-4">
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-link hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-link hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
