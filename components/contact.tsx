"use client"

import { AlertCircle, CalendarDays, CheckCircle2, GitMerge, Loader2, Mail } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { CALENDLY_URL, EMAIL } from "@/lib/content"
import DownloadResume from "./download-resume"
import { buttonClass } from "./pr/button-styles"

const field =
  "w-full rounded-md border border-line bg-subtle px-3 py-2 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-link focus:bg-canvas focus:outline-none focus:ring-2 focus:ring-[var(--ring-soft)]"

export default function Contact() {
  const [state, handleSubmit] = useForm("mwprpjkr")
  const hasError = state.errors && Object.keys(state.errors).length > 0

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24 pt-20 md:pt-24">
      <div className="flex gap-3 sm:gap-4">
        <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-add-solid text-white sm:flex">
          <GitMerge className="size-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1 overflow-hidden rounded-md border border-line">
          <div className="flex gap-3 border-b border-line px-4 py-5 sm:px-5">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-add" aria-hidden />
            <div>
              <h2 id="contact-title" className="text-balance text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
                Ready to merge
              </h2>
              <p className="mt-2 max-w-[60ch] text-pretty text-[16px] leading-relaxed text-ink-muted">
                Book a call about your team&apos;s AI setup, or about a senior front-end role. No conflicts with your main
                branch.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-subtle px-4 py-4 sm:px-5">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "lg")}>
              <CalendarDays />
              Book a call
            </a>
            <DownloadResume className={buttonClass("default", "lg")} />
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 px-1 text-[15px] text-link hover:underline">
              <Mail className="size-4" aria-hidden />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Comment box */}
      <div className="mt-8 flex gap-3 sm:gap-4">
        <span aria-hidden className="hidden w-10 shrink-0 sm:block" />
        <form onSubmit={handleSubmit} className="min-w-0 flex-1 overflow-hidden rounded-md border border-line">
          <div className="border-b border-line bg-subtle px-4 py-2.5">
            <h3 className="text-sm font-semibold text-ink">Or leave a message</h3>
          </div>
          <div className="space-y-3 p-4">
            {state.succeeded ? (
              <p role="status" className="flex items-start gap-2 rounded-md border border-add-gutter bg-add-bg px-3 py-3 text-[15px] text-add-strong">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden />
                Thanks, your message is in. I'll get back to you by email.
              </p>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name
                    </label>
                    <input id="name" name="name" type="text" autoComplete="name" required className={field} />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-del" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" required className={field} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-del" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="AI setup for our team, a role, something else"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} required className={`${field} resize-y`} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-del" />
                </div>
                {hasError && (
                  <p role="alert" className="flex items-start gap-2 text-sm text-del">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                    The message did not send. Check the fields above, or email me directly at {EMAIL}.
                  </p>
                )}
                <div className="flex justify-end pt-1">
                  <button type="submit" disabled={state.submitting} className={buttonClass("primary", "md")}>
                    {state.submitting && <Loader2 className="animate-spin" />}
                    {state.submitting ? "Sending" : "Send message"}
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
