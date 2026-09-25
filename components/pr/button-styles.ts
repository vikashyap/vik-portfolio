import { cn } from "@/lib/utils"

type Variant = "primary" | "default"
type Size = "sm" | "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0"

const variants: Record<Variant, string> = {
  primary:
    "border-[rgba(31,35,40,0.15)] bg-add text-white shadow-[0_1px_0_rgba(31,35,40,0.1)] hover:bg-add-strong",
  default:
    "border-line bg-subtle text-ink shadow-[0_1px_0_rgba(31,35,40,0.04)] hover:bg-inset hover:border-[#c4ccd4]",
}

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-5 text-[15px]",
}

export function buttonClass(variant: Variant = "default", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}
