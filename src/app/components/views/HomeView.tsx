import { useRef } from "react";
import { MapPin, Bed, Bath, ArrowRight, Search, Phone, Mail, Star, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "../Router";
import { properties } from "../data";

/* ─── Hero ───────────────────────────────────────────────────────────── */
function HeroSection({ onScrollNext }: { onScrollNext: () => void }) {
  const { navigate } = useRouter();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center snap-start shrink-0">
      <div className="absolute inset-0 bg-[#191917]">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&auto=format"
          alt="Propiedad de lujo en Lima"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0c]/30 via-transparent to-[#0e0e0c]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c]/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full" style={{ animation: "slideUp 0.8s ease both" }}>
        <div className="inline-flex items-center gap-3 mb-10 text-[10px] tracking-[0.45em] uppercase text-[#c9a96e]">
          <span className="w-8 h-px bg-[#c9a96e]/40" />
          Agencia Inmobiliaria de Lujo — Lima, Perú
          <span className="w-8 h-px bg-[#c9a96e]/40" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] text-[#ede9e0] mb-6 leading-[0.95] tracking-tight">
          Donde el Espacio
          <br />
          <em className="not-italic text-[#c9a96e]">Define el Estilo</em>
        </h1>

        <p className="text-[#ede9e0]/55 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Seleccionamos las propiedades más exclusivas de Lima para quienes no se conforman con menos que lo extraordinario.
        </p>

        {/* Search bar */}
        <div
          className="flex flex-col sm:flex-row max-w-2xl mx-auto mb-6"
          style={{ background: "rgba(25,25,23,0.9)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <select
            className="flex-1 px-5 py-4 bg-transparent text-[#ede9e0]/65 text-sm outline-none appearance-none cursor-pointer"
            style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
            defaultValue=""
          >
            <option value="" disabled>Tipo de inmueble</option>
            <option>Departamento</option>
            <option>Casa / Mansión</option>
            <option>Ático / Penthouse</option>
            <option>Loft</option>
            <option>Villa de Playa</option>
          </select>
          <select
            className="flex-1 px-5 py-4 bg-transparent text-[#ede9e0]/65 text-sm outline-none appearance-none cursor-pointer"
            style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
            defaultValue=""
          >
            <option value="" disabled>Distrito</option>
            <option>Miraflores</option>
            <option>San Isidro</option>
            <option>La Molina</option>
            <option>Barranco</option>
            <option>Asia</option>
          </select>
          <select
            className="flex-1 px-5 py-4 bg-transparent text-[#ede9e0]/65 text-sm outline-none appearance-none cursor-pointer"
            style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
            defaultValue=""
          >
            <option value="" disabled>Presupuesto</option>
            <option>Hasta S/ 1.000.000</option>
            <option>S/ 1M — S/ 2M</option>
            <option>S/ 2M — S/ 4M</option>
            <option>Más de S/ 4M</option>
          </select>
          <button
            onClick={() => navigate("/propiedades")}
            className="px-7 py-4 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300 flex items-center gap-2 justify-center shrink-0"
          >
            <Search size={14} />
            Buscar
          </button>
        </div>

        <button
          onClick={() => navigate("/propiedades")}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#ede9e0]/40 hover:text-[#c9a96e] transition-colors"
        >
          Ver todas las propiedades <ArrowRight size={12} />
        </button>

        {/* Stats */}
        <div className="flex justify-center gap-10 md:gap-16 mt-14">
          {[["340+", "Propiedades"], ["18", "Años"], ["S/ 8.5B", "Transacciones"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-serif text-2xl text-[#c9a96e]">{n}</div>
              <div className="text-[10px] tracking-[0.2em] text-[#ede9e0]/40 uppercase mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={onScrollNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#8a8a7a] hover:text-[#c9a96e] transition-colors group"
        aria-label="Ir a la siguiente sección"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Explorar</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8a8a7a] to-transparent group-hover:from-[#c9a96e] transition-colors" />
      </button>
    </section>
  );
}

/* ─── Featured ───────────────────────────────────────────────────────── */
function FeaturedSection({ onPropertyClick }: { onPropertyClick: (id: string) => void }) {
  const { navigate } = useRouter();

  return (
    <section className="h-screen snap-start shrink-0 flex flex-col justify-center bg-[#0e0e0c]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Selección curada</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#ede9e0]">Propiedades Destacadas</h2>
          </div>
          <button
            onClick={() => navigate("/propiedades")}
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8a8a7a] hover:text-[#c9a96e] transition-colors"
          >
            Ver todas <ArrowRight size={13} />
          </button>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {properties.slice(0, 3).map((p) => (
            <article
              key={p.id}
              onClick={() => onPropertyClick(p.id)}
              className="group cursor-pointer bg-[#191917] hover:bg-[#1c1c19] transition-all duration-300"
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#252521]">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {p.tag && (
                  <div
                    className="absolute top-3 left-3 text-[#0e0e0c] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium overflow-hidden"
                    style={{ background: "linear-gradient(90deg,#c9a96e 20%,#f0d898 50%,#c9a96e 80%)", backgroundSize: "200% auto", animation: "tagEntrance 0.5s ease both, shimmerTag 3s 0.6s linear infinite" }}
                  >
                    {p.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/80 via-[#0e0e0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-5">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[#ede9e0] text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#c9a96e] hover:text-[#0e0e0c] hover:border-[#c9a96e] transition-colors duration-300" style={{ animation: "detailsSlideUp 0.35s ease both" }}>
                    Ver Detalles
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-base text-[#ede9e0] leading-snug group-hover:text-[#c9a96e] transition-colors flex-1">{p.title}</h3>
                  <span className="text-[#c9a96e] text-sm font-medium shrink-0">{p.price}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin size={11} className="text-[#8a8a7a] shrink-0" />
                  <span className="text-[11px] text-[#8a8a7a] truncate">{p.location}</span>
                </div>
                <div className="flex items-center gap-5 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#ede9e0]/50"><Bed size={12} /> {p.beds} hab.</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#ede9e0]/50"><Bath size={12} /> {p.baths} baños</span>
                  <span className="text-[11px] text-[#ede9e0]/50">{p.sqm} m²</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4">
          {properties.slice(0, 5).map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[75vw]">
              <article onClick={() => onPropertyClick(p.id)} className="cursor-pointer bg-[#191917]" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}>
                <div className="aspect-[4/3] overflow-hidden bg-[#252521] relative">
                  <img src={p.images[0]} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  {p.tag && (
                    <div className="absolute top-2 left-2 text-[#0e0e0c] text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-medium" style={{ background: "linear-gradient(90deg,#c9a96e 20%,#f0d898 50%,#c9a96e 80%)", backgroundSize: "200% auto", animation: "shimmerTag 3s linear infinite" }}>
                      {p.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-sm text-[#ede9e0] leading-snug flex-1">{p.title}</h3>
                    <span className="text-[#c9a96e] text-xs shrink-0">{p.price}</span>
                  </div>
                  <p className="text-[11px] text-[#8a8a7a] truncate">{p.location}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/propiedades")}
            className="px-8 py-3.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0e0e0c] transition-all duration-300"
          >
            Ver todas las propiedades
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─────────────────────────────────────────────────────────── */
function WhyUsSection() {
  const { navigate } = useRouter();
  const reasons = [
    { num: "01", title: "Curación Exclusiva", desc: "Solo representamos propiedades que superan nuestros rigurosos estándares de calidad, ubicación y potencial de revalorización en Lima." },
    { num: "02", title: "Asesoramiento Integral", desc: "Desde la búsqueda hasta la escritura en Registros Públicos, nuestros asesores te acompañan en cada decisión con total transparencia." },
    { num: "03", title: "Red Internacional", desc: "Acceso a compradores e inversores en más de 20 países a través de nuestra red de partnerships estratégicos." },
    { num: "04", title: "Discreción Absoluta", desc: "Operamos con la máxima confidencialidad. Tus transacciones y datos personales permanecen siempre bajo estricta reserva." },
  ];

  return (
    <section className="h-screen snap-start shrink-0 flex items-center bg-[#0e0e0c]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-[50vh] md:h-[55vh] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&auto=format"
              alt="Interior de lujo Lima"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#c9a96e] p-7" style={{ zIndex: 10 }}>
              <div className="font-serif text-5xl text-[#0e0e0c] leading-none">18</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#0e0e0c]/75 mt-1.5 leading-tight">Años de<br />Experiencia</div>
            </div>
            <div className="absolute top-5 left-5 bg-[#0e0e0c]/80 px-4 py-3 backdrop-blur-sm">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-[#c9a96e] fill-[#c9a96e]" />)}
              </div>
              <div className="text-[10px] tracking-[0.15em] text-[#ede9e0]/60 uppercase">Forbes Perú 2024</div>
            </div>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Diferencial</span>
            <h2 className="font-serif text-4xl text-[#ede9e0] mb-8">Por qué<br />Elegirnos</h2>
            <div>
              {reasons.map((r, idx) => (
                <div key={r.num} className="flex gap-6 py-5" style={{ borderBottom: idx < reasons.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <span className="font-mono text-xs text-[#c9a96e] mt-0.5 shrink-0">{r.num}</span>
                  <div>
                    <h3 className="text-[#ede9e0] text-sm font-medium mb-1.5 tracking-wide">{r.title}</h3>
                    <p className="text-[#8a8a7a] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/nosotros")}
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/30 pb-1 hover:text-[#ede9e0] hover:border-[#ede9e0]/30 transition-colors"
            >
              Conocer más sobre ARQUÉ <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────── */
function ContactSection() {
  const { navigate } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/contacto");
  };

  return (
    <section className="h-screen snap-start shrink-0 flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&h=1200&fit=crop&auto=format"
          alt="Propiedad Lima"
          loading="lazy"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c] via-[#0e0e0c]/95 to-[#0e0e0c]/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-lg">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Contacto Directo</span>
          <h2 className="font-serif text-5xl text-[#ede9e0] mb-4 leading-[1.05]">
            Hablemos de<br />
            <em className="not-italic text-[#c9a96e]">tu Inmueble</em>
          </h2>
          <p className="text-[#8a8a7a] text-sm mb-8 leading-relaxed">
            Cuéntanos qué estás buscando. Uno de nuestros asesores se pondrá en contacto contigo antes de 24 horas, sin ningún compromiso.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 mb-6">
            <div className="flex gap-3">
              <input type="text" placeholder="Nombre completo" required className="flex-1 bg-white/4 border border-white/8 px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a] text-sm outline-none focus:border-[#c9a96e]/40 transition-colors" />
              <input type="tel" placeholder="Celular" required className="flex-1 bg-white/4 border border-white/8 px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a] text-sm outline-none focus:border-[#c9a96e]/40 transition-colors" />
            </div>
            <input type="email" placeholder="Correo electrónico" required className="w-full bg-white/4 border border-white/8 px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a] text-sm outline-none focus:border-[#c9a96e]/40 transition-colors" />
            <textarea rows={3} placeholder="¿Qué tipo de propiedad buscas?" className="w-full bg-white/4 border border-white/8 px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a] text-sm outline-none focus:border-[#c9a96e]/40 transition-colors resize-none" />
            <button type="submit" className="w-full py-4 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300">
              Enviar Consulta
            </button>
          </form>
          <div className="flex items-center gap-8">
            <a href="tel:+5101000000" className="flex items-center gap-2 text-[#8a8a7a] hover:text-[#c9a96e] transition-colors text-sm">
              <Phone size={13} /> +51 (01) 000 0000
            </a>
            <a href="mailto:hola@arque.pe" className="flex items-center gap-2 text-[#8a8a7a] hover:text-[#c9a96e] transition-colors text-sm">
              <Mail size={13} /> hola@arque.pe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HomeView ───────────────────────────────────────────────────────── */
export function HomeView() {
  const { navigate } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    containerRef.current?.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div id="main-scroll" ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroSection onScrollNext={scrollToNext} />
      <FeaturedSection onPropertyClick={(id) => navigate("/propiedad", { propertyId: id })} />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
}
