import Image from "next/image"

const PHOTOS = [
  { src: "/photos/img_4676.webp", alt: "A Muay Thai gym with a boxing ring and heavy bags", caption: "Muay Thai" },
  { src: "/photos/img_4660.webp", alt: "Democracy Monument in Bangkok, lit up at night", caption: "Travel" },
  { src: "/photos/img_469.webp", alt: "Rows of dumbbells in a large gym", caption: "Training" },
  { src: "/photos/img_7010.webp", alt: "Vikas Kashyap in a glass-roofed hall", caption: "Out and about" },
]

export default function BeyondCode() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="pt-20 md:pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
        <h2 id="beyond-title" className="text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
          Off the keyboard
        </h2>
      </div>
      <p className="mt-5 max-w-[62ch] text-pretty text-[17px] leading-relaxed text-ink-muted">
        Kickboxing and Muay Thai, swimming, hiking and travel. Gaming, good coffee and too many gadgets.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {PHOTOS.map((p) => (
          <li key={p.src}>
            <figure className="overflow-hidden rounded-md border border-line">
              <div className="relative aspect-[3/4] bg-inset">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
              </div>
              <figcaption className="border-t border-line bg-subtle px-3 py-1.5 font-mono text-[12px] text-ink-muted">
                {p.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
