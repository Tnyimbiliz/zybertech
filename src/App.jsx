import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-zinc-950 via-neutral-900 to-black bg-zyber-radial">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
