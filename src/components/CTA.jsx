export default function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* neutral, blurry-gray backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]"
      />

      <div className="zy-container">
        {/* neutral glass panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl">
          {/* soft top-to-bottom wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="relative p-6 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Ready to build something exceptional?
            </h3>
            <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">
              Tell us about your idea, timeline, and goals. We’ll come back with a tailored plan.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 grid md:grid-cols-3 gap-3"
              aria-label="contact form"
            >
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none
                           placeholder:text-zinc-400 text-white
                           focus:border-white/30 focus:ring-0
                           focus:[box-shadow:0_0_0_2px_rgba(255,255,255,0.08)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none
                           placeholder:text-zinc-400 text-white
                           focus:border-white/30 focus:ring-0
                           focus:[box-shadow:0_0_0_2px_rgba(255,255,255,0.08)]"
              />
              <button
                className="rounded-xl px-4 py-3 font-medium text-black
                           bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(255,255,255,0.86))]
                           border border-white/20
                           hover:border-white/40
                           hover:[box-shadow:0_8px_30px_rgba(255,255,255,0.10)]
                           transition"
              >
                Send
              </button>
            </form>

            <p id="about" className="mt-6 text-sm text-zinc-400">
              Zyber Technology Limited — building for ourselves and for clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
