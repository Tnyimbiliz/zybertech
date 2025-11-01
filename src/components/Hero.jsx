import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="zy-container">
        <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-10 lg:p-14">
          {/* subtle gradient orb */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full
                       bg-gradient-to-br from-[rgba(110,231,249,0.2)] to-[rgba(167,139,250,0.2)] blur-3xl"
          />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="text-[#6EE7F9] text-sm tracking-widest uppercase mb-3">
                Websites • Mobile Apps • Products
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                We craft fast, elegant{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA]">
                  digital experiences
                </span>
              </h1>
              <p className="mt-4 text-zinc-300 max-w-2xl">
                Zyber Technology builds world-class web, app & software
                solutions — for our own product line and for clients who want
                performance, reliability, and style.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#products"
                  className="rounded-2xl px-5 py-3 font-medium border border-white/15 hover:border-white/30 transition text-center"
                >
                  Explore Our Products
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl px-5 py-3 font-medium text-white
                             bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA]
                             hover:shadow-[0_0_40px_rgba(167,139,250,0.25)]
                             border border-white/15 hover:border-white/30
                             transition text-center"
                >
                  Start a Project
                </a>
              </div>
            </div>

            {/* ... */}
            <div className="md:col-span-5">
              <div className="aspect-[4/3] md:aspect-square w-full rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10" />
                {/* animated mock device frames (paired widths) */}
                <div className="absolute inset-6 flex flex-col gap-3">
                  {/* Top pair */}
                  <div className="flex gap-3 h-1/2">
                    {/* Left (expands while right contracts) */}
                    <motion.div
                      className="rounded-xl border border-white/10 h-full"
                      animate={{
                        // width trades with its sibling
                        width: ["64%", "36%", "64%"],
                        scale: [1, 1.04, 0.99, 1],
                        backgroundColor: [
                          "rgba(0,0,0,0.60)",
                          "rgba(110,231,249,0.15)", // #6EE7F9
                          "rgba(167,139,250,0.15)", // #A78BFA
                          "rgba(0,0,0,0.60)",
                        ],
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0)",
                          "0px 0px 28px rgba(167,139,250,0.18)",
                          "0px 0px 28px rgba(110,231,249,0.18)",
                          "0px 0px 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Right (contracts while left expands) */}
                    <motion.div
                      className="rounded-xl border border-white/10 h-full"
                      animate={{
                        width: ["36%", "64%", "36%"], // inverse of the left
                        scale: [1, 1.03, 0.98, 1],
                        backgroundColor: [
                          "rgba(0,0,0,0.60)",
                          "rgba(167,139,250,0.17)",
                          "rgba(110,231,249,0.14)",
                          "rgba(0,0,0,0.60)",
                        ],
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0)",
                          "0px 0px 24px rgba(110,231,249,0.16)",
                          "0px 0px 24px rgba(167,139,250,0.16)",
                          "0px 0px 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Bottom pair */}
                  <div className="flex gap-3 h-1/2">
                    {/* Left (staggered start for organic feel) */}
                    <motion.div
                      className="rounded-xl border border-white/10 h-full"
                      animate={{
                        width: ["62%", "38%", "62%"],
                        scale: [1, 1.05, 0.99, 1],
                        backgroundColor: [
                          "rgba(0,0,0,0.60)",
                          "rgba(167,139,250,0.14)",
                          "rgba(110,231,249,0.17)",
                          "rgba(0,0,0,0.60)",
                        ],
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0)",
                          "0px 0px 26px rgba(110,231,249,0.18)",
                          "0px 0px 26px rgba(167,139,250,0.18)",
                          "0px 0px 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2,
                      }}
                    />

                    {/* Right (inverse widths, same timing) */}
                    <motion.div
                      className="rounded-xl border border-white/10 h-full"
                      animate={{
                        width: ["38%", "62%", "38%"], // inverse of bottom-left
                        scale: [1, 1.02, 0.98, 1],
                        backgroundColor: [
                          "rgba(0,0,0,0.60)",
                          "rgba(110,231,249,0.14)",
                          "rgba(167,139,250,0.16)",
                          "rgba(0,0,0,0.60)",
                        ],
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0)",
                          "0px 0px 22px rgba(167,139,250,0.14)",
                          "0px 0px 22px rgba(110,231,249,0.14)",
                          "0px 0px 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
