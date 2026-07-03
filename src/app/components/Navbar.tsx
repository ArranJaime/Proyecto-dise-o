import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, RoutePath } from "./Router";
import { useUI } from "./UIContext";

const navLinks: { label: string; path: RoutePath }[] = [
  { label: "Propiedades", path: "/propiedades" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const { path, navigate } = useRouter();
  const { openTasacion } = useUI();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const isTransparent = path === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isTransparent ? "transparent" : "rgba(14,14,12,0.94)",
        backdropFilter: isTransparent ? "none" : "blur(14px)",
        borderBottom: isTransparent ? "none" : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="font-serif text-xl tracking-[0.25em] text-[#ede9e0] hover:text-[#c9a96e] transition-colors duration-300"
        >
          ARQUÉ<span className="text-[#c9a96e]">.</span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: path === link.path ? "#c9a96e" : "rgba(237,233,224,0.6)" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA — opens Tasación modal */}
        <div className="hidden md:block">
          <button
            onClick={openTasacion}
            className="px-5 py-2.5 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0e0e0c] transition-all duration-300"
          >
            Tasación Gratuita
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-[#ede9e0] p-1"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5" style={{ background: "rgba(25,25,23,0.97)" }}>
          <div className="px-6 py-5 space-y-1">
            <button
              onClick={() => navigate("/")}
              className="w-full text-left py-3.5 text-xs tracking-[0.2em] uppercase text-[#ede9e0]/60 hover:text-[#c9a96e] transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              Inicio
            </button>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="w-full text-left py-3.5 text-xs tracking-[0.2em] uppercase transition-colors"
                style={{
                  color: path === link.path ? "#c9a96e" : "rgba(237,233,224,0.6)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </button>
            ))}
            {/* Mobile Tasación CTA — opens modal */}
            <button
              onClick={() => { setMenuOpen(false); openTasacion(); }}
              className="w-full mt-4 py-3.5 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors"
            >
              Tasación Gratuita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
