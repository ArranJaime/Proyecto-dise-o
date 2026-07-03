import { Instagram, Facebook, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useRouter } from "./Router";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arque.pe" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/arque.pe" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/arque-inmobiliaria-peru" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@arque.pe" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/arque_pe" },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0e0e0c" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => navigate("/")}
              className="font-serif text-2xl tracking-[0.25em] text-[#ede9e0] hover:text-[#c9a96e] transition-colors mb-4 block"
            >
              ARQUÉ<span className="text-[#c9a96e]">.</span>
            </button>
            <p className="text-sm text-[#8a8a7a] leading-relaxed max-w-xs mb-6">
              La agencia líder en propiedades de lujo en Lima, Perú. 18 años creando historias de vida en los mejores espacios del país.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-[#8a8a7a] hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-5">Navegación</div>
            <ul className="space-y-3">
              {[
                { label: "Inicio", path: "/" as const },
                { label: "Propiedades", path: "/propiedades" as const },
                { label: "Nosotros", path: "/nosotros" as const },
                { label: "Contacto", path: "/contacto" as const },
              ].map(({ label, path }) => (
                <li key={path}>
                  <button
                    onClick={() => navigate(path)}
                    className="text-sm text-[#8a8a7a] hover:text-[#c9a96e] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-5">Contacto</div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5101000000" className="flex items-start gap-2.5 text-sm text-[#8a8a7a] hover:text-[#c9a96e] transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5" />
                  +51 (01) 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hola@arque.pe" className="flex items-start gap-2.5 text-sm text-[#8a8a7a] hover:text-[#c9a96e] transition-colors">
                  <Mail size={13} className="shrink-0 mt-0.5" />
                  hola@arque.pe
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Av+Javier+Prado+Este+234+San+Isidro+Lima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-[#8a8a7a] hover:text-[#c9a96e] transition-colors"
                >
                  <MapPin size={13} className="shrink-0 mt-0.5" />
                  Av. Javier Prado Este 234,<br />San Isidro, Lima
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[11px] text-[#8a8a7a]/60 tracking-wide">
            © 2026 ARQUÉ Inmobiliaria S.A.C. — Lima, Perú. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[11px] text-[#8a8a7a]/60 hover:text-[#8a8a7a] transition-colors">
              Política de Privacidad
            </button>
            <button className="text-[11px] text-[#8a8a7a]/60 hover:text-[#8a8a7a] transition-colors">
              Aviso Legal
            </button>
            <button className="text-[11px] text-[#8a8a7a]/60 hover:text-[#8a8a7a] transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
