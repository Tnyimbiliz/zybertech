export default function Footer() {
    return (
      <footer className="py-10">
        <div className="zy-container">
          <div className="glass rounded-2xl px-5 py-5 border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} Zyber Technology. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-zinc-400 hover:text-white">Privacy</a>
                <a href="#" className="text-zinc-400 hover:text-white">Terms</a>
                <a href="mailto:hello@zyber.tech" className="text-zinc-400 hover:text-white">hello@zyber.tech</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  