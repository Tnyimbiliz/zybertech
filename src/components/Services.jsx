const items = [
  {
    title: "Custom Websites",
    desc: "Next-gen, SEO-ready sites with blazing performance and modern stacks.",
    points: ["React & Next.js", "Headless CMS", "Project Automation"],
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform apps that feel native, scale cleanly, and ship fast.",
    points: ["React Native", "Expo", "Store deploys"],
    icon: "📱",
  },
  {
    title: "Product Design",
    desc: "From idea to MVP to scale — UX/UI, prototyping, and analytics.",
    points: ["Design systems", "Micro-interactions", "Data-driven"],
    icon: "🎨",
  },
  {
    title: "APIs & Backends",
    desc: "Robust, secure services with clean contracts and observability.",
    points: ["FastAPI / Node", "Postgres / Mongo", "CI/CD + Cloud"],
    icon: "🧩",
  },
];

function Card({ i }) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl p-6
        bg-white/5 backdrop-blur
        border border-white/10
        transition
        hover:border-white/20
      "
    >
      {/* subtle card gradient wash */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0" />

      {/* tiny corner orb */}
      <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full blur-2xl
                      bg-gradient-to-br from-[rgba(110,231,249,0.28)] to-[rgba(167,139,250,0.24)]" />

      <div className="relative">
        {/* icon pill with gradient ring */}
        <div
          className="
            inline-flex h-10 w-10 items-center justify-center rounded-xl
            bg-gradient-to-br from-[rgba(110,231,249,0.18)] to-[rgba(167,139,250,0.18)]
            ring-1 ring-white/10
          "
        >
          <span className="text-lg">{i.icon}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold">{i.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{i.desc}</p>
        <ul className="mt-3 text-sm text-zinc-400 list-disc pl-5 space-y-1">
          {i.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative py-16 md:py-20
      "
    >
      {/* section background: soft radial gradients like the hero */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(110,231,249,0.10),transparent_60%),radial-gradient(800px_400px_at_-10%_20%,rgba(167,139,250,0.10),transparent_60%)]
        "
      />

      <div className="zy-container">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">What we do</h2>
            <p className="text-zinc-300 mt-1">Engineering first. Design obsessed.</p>
          </div>

          <a
            href="#contact"
            className="
              hidden sm:inline-flex rounded-xl px-4 py-2
              border border-white/15 hover:border-white/30
              bg-white/5 backdrop-blur
            "
          >
            <span className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
              Get a quote
            </span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((i) => (
            <Card key={i.title} i={i} />
          ))}
        </div>

        {/* faint bottom-right orb to mirror hero */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute -bottom-8 right-6 h-28 w-28 rounded-full blur-3xl
            bg-gradient-to-tr from-[rgba(167,139,250,0.40)] to-[rgba(110,231,249,0.40)]
          "
        />
      </div>
    </section>
  );
}
