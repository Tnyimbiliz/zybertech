// tailwind.config.cjs  (or tailwind.config.js with CommonJS)
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'zyber-primary': '#6EE7F9',   // cyan accent
          'zyber-secondary': '#A78BFA', // purple accent
        },
        backgroundImage: {
          'zyber-radial':
            "radial-gradient(1200px 600px at 80% -10%, rgba(111,231,249,0.10), transparent 60%), radial-gradient(800px 400px at -10% 20%, rgba(167,139,250,0.10), transparent 60%)",
        },
        boxShadow: {
          glow: "0 0 40px rgba(167, 139, 250, 0.25)",
        },
      },
    },
    plugins: [],
  };
  