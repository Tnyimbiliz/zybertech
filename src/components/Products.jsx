import ntembaz_blur from "../assets/ntembaz_blur.png"; // or your logo

const products = [
  {
    name: "Ntembaz.com",
    tag: "Flagship • Marketplace",
    blurb:
      "Our biggest public launch to date — a fast, modern marketplace connecting customers to curated stores, built with performance, reliability, and a clean UX.",
    liveUrl: "https://ntembaz.com",
    caseUrl: "#contact",
    logoAlt: "Ntembaz logo",
  },
];

function ProductCard({ p }) {
  return (
    /* premium gradient border shell */
    <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#6EE7F9] via-[#8EC7FF] to-[#A78BFA]">
      {/* inner glass panel */}
      <div className="relative overflow-hidden rounded-[calc(1.5rem-2px)] border border-white/10 bg-white/[0.06] backdrop-blur-xl">
        {/* soft diagonal wash */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        {/* subtle stripe texture */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit]
                        bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_10%,transparent_10%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_60%,transparent_60%)]
                        bg-[length:20px_20px] opacity-30" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* layout: stacked on mobile, split on desktop */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* LEFT: copy */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-center sm:text-left">
                  <span className="bg-gradient-to-r from-[#07252a] to-[#1a0d41] bg-clip-text text-transparent">
                    {p.name}
                  </span>
                </h3>
                <span className="self-center sm:self-auto text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {p.tag}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-800/90 text-center sm:text-left max-w-3xl">
                {p.blurb}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-8 py-3 font-medium text-white
                             bg-[#A78BFA]
                             hover:shadow-[0_0_40px_rgba(167,139,250,0.25)]
                             border border-white/15 hover:border-white/30
                             transition text-center"
                >
                  Visit site
                </a>
                
              </div>
            </div>

            {/* RIGHT: big logo stage */}
            <div className="lg:col-span-5">
              <div
                className="
                  relative rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm
                  flex items-center justify-center
                  h-[220px] sm:h-[280px] md:h-[340px] lg:h-[360px]
                  px-4
                "
              >
                {/* logo */}
                <img
                  src={ntembaz_blur}
                  alt={p.logoAlt}
                  className="
                    h-[140px] sm:h-[200px] md:h-[260px] lg:h-[280px]
                    w-auto object-contain
                    max-w-[90%]
                    drop-shadow-[0_20px_40px_rgba(110,231,249,0.35)]
                  "
                  decoding="async"
                  loading="lazy"
                />

                {/* glow accents around (not over) the logo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full blur-3xl
                             bg-gradient-to-br from-[rgba(110,231,249,0.30)] to-[rgba(167,139,250,0.25)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-3xl
                             bg-gradient-to-tr from-[rgba(167,139,250,0.30)] to-[rgba(110,231,249,0.25)]"
                />
                {/* subtle inner edge to lift the stage */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* soft outer corner glow to echo hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-8 h-28 w-28 rounded-full blur-3xl
                     bg-gradient-to-tr from-[rgba(167,139,250,0.40)] to-[rgba(110,231,249,0.35)]"
        />
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-16 md:py-20">
      {/* hero-like background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(110,231,249,0.10),transparent_60%),radial-gradient(800px_400px_at_-10%_20%,rgba(167,139,250,0.10),transparent_60%)]"
      />
      <div className="zy-container">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Our products</h2>
          <p className="text-zinc-300 mt-1">Flagship projects we build and actively maintain.</p>
        </div>

        <div className="grid gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
