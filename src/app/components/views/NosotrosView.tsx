import { Shield, Star, Globe, Lock, ArrowRight, Mail, Phone } from "lucide-react";
import { useRouter } from "../Router";
import { agents } from "../data";
import { Footer } from "../Footer";

const stats = [
  { value: "18", label: "Años de experiencia" },
  { value: "340+", label: "Propiedades vendidas" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "S/ 8.5B", label: "En transacciones" },
];

const timeline = [
  { year: "2006", event: "Fundación en Lima", desc: "ARQUÉ nace en Miraflores con la visión de elevar el estándar del mercado inmobiliario peruano." },
  { year: "2010", event: "Expansión San Isidro", desc: "Apertura de nuestra segunda oficina en el corazón financiero de Lima." },
  { year: "2015", event: "Red de Socios", desc: "Establecemos alianzas con las principales inmobiliarias de Chile, Colombia y México." },
  { year: "2020", event: "Red Internacional", desc: "Presencia activa en 20 países con clientes inversores de Asia, Europa y América." },
  { year: "2024", event: "Agencia del Año", desc: "Premiados por Forbes Perú como la mejor agencia inmobiliaria de lujo del país." },
];

const values = [
  { icon: Shield, title: "Integridad", desc: "Cada transacción refleja nuestra ética inquebrantable y compromiso con la verdad absoluta." },
  { icon: Star, title: "Excelencia", desc: "No nos conformamos. Buscamos la propiedad perfecta para cada cliente, sin excepción." },
  { icon: Globe, title: "Innovación", desc: "Tecnología de vanguardia y metodologías actualizadas para resultados superiores." },
  { icon: Lock, title: "Discreción", desc: "La confidencialidad es un derecho de nuestros clientes, no un servicio adicional." },
];

const awards = [
  { year: "2024", award: "Mejor Agencia Inmobiliaria de Lujo", org: "Forbes Perú" },
  { year: "2023", award: "Luxury Real Estate Award — Excellence", org: "LRE International" },
  { year: "2022", award: "Premio Excelencia Inmobiliaria", org: "ASEI Lima" },
  { year: "2021", award: "Five Star Real Estate Awards", org: "European Property Awards" },
];

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  const { navigate } = useRouter();
  return (
    <div className="group bg-[#191917]" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}>
      <div className="aspect-[3/4] overflow-hidden bg-[#252521]">
        <img
          src={agent.photo}
          alt={agent.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-[#ede9e0] mb-0.5">{agent.name}</h3>
        <p className="text-[11px] text-[#c9a96e] tracking-[0.15em] uppercase mb-1">{agent.role}</p>
        <p className="text-xs text-[#8a8a7a] mb-4">{agent.specialty}</p>

        {/* Languages */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {agent.languages.map((lang) => (
            <span key={lang} className="text-[9px] tracking-[0.15em] uppercase text-[#8a8a7a] border border-white/10 px-2 py-0.5">
              {lang}
            </span>
          ))}
        </div>

        {/* Sales stat */}
        <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="font-serif text-xl text-[#c9a96e]">{agent.sales}</span>
          <span className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a7a]">propiedades<br />vendidas</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mb-2">
          <a
            href={`mailto:${agent.email}`}
            className="flex-1 py-2.5 border border-white/10 text-[#ede9e0]/50 text-[10px] tracking-[0.15em] uppercase text-center hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all duration-300"
          >
            Email
          </a>
          <a
            href={`tel:${agent.phone}`}
            className="flex-1 py-2.5 border border-white/10 text-[#ede9e0]/50 text-[10px] tracking-[0.15em] uppercase text-center hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all duration-300"
          >
            Llamar
          </a>
        </div>
        <button
          onClick={() => navigate("/contacto")}
          className="w-full py-2.5 bg-[#c9a96e] text-[#0e0e0c] text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
        >
          Agendar reunión
        </button>
      </div>
    </div>
  );
}

export function NosotrosView() {
  const { navigate } = useRouter();

  return (
    <div id="main-scroll" className="h-screen overflow-y-auto">
      <div className="pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&h=900&fit=crop&auto=format"
              alt="ARQUÉ sede"
              loading="eager"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0c]/60 via-[#0e0e0c]/80 to-[#0e0e0c]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-4 block">Acerca de ARQUÉ</span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#ede9e0] mb-6 leading-[0.95]">
                Arquitectos<br />
                <em className="not-italic text-[#c9a96e]">del Espacio</em>
              </h1>
              <p className="text-[#8a8a7a] text-base md:text-lg max-w-2xl leading-relaxed">
                Desde 2006, ARQUÉ ha sido sinónimo de excelencia en el mercado inmobiliario de lujo peruano. No vendemos propiedades — creamos historias de vida en los mejores rincones del país.
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#c9a96e] py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-4xl text-[#0e0e0c] mb-1">{s.value}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#0e0e0c]/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historia + Timeline */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Nuestra Historia</span>
              <h2 className="font-serif text-4xl text-[#ede9e0] mb-6">18 años liderando<br />el mercado limeño</h2>
              <p className="text-[#8a8a7a] text-sm leading-relaxed mb-4">
                ARQUÉ nació de la convicción de que el mercado inmobiliario peruano merecía una agencia que combinara rigor profesional con una visión estética genuina. Desde nuestros primeros años en Miraflores, hemos crecido para convertirnos en el referente indiscutible del sector en el Perú.
              </p>
              <p className="text-[#8a8a7a] text-sm leading-relaxed mb-8">
                Hoy operamos con un equipo de asesores especializados que dominan cada micro-mercado de Lima, desde el clásico San Isidro hasta el bohemio Barranco, pasando por el residencial La Molina y el exclusivo balneario de Asia.
              </p>
              <button
                onClick={() => navigate("/propiedades")}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/30 pb-1 hover:text-[#ede9e0] hover:border-[#ede9e0]/30 transition-colors"
              >
                Ver nuestras propiedades <ArrowRight size={12} />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format"
                alt="Oficinas ARQUÉ"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#c9a96e] p-6">
                <div className="font-serif text-4xl text-[#0e0e0c] leading-none">Nº1</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#0e0e0c]/75 mt-1">Agencia de lujo<br />en Perú 2024</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="relative pl-6 md:pl-0 md:pt-6"
                style={{
                  borderLeft: i < timeline.length ? "1px solid rgba(201,169,110,0.2)" : "none",
                  borderTop: "none",
                }}
              >
                <div
                  className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#c9a96e]"
                  style={{ transform: "translate(-50%, 0)" }}
                />
                <div className="font-mono text-xs text-[#c9a96e] mb-1 md:pt-0">{t.year}</div>
                <div className="text-sm font-medium text-[#ede9e0] mb-1">{t.event}</div>
                <p className="text-xs text-[#8a8a7a] leading-relaxed pr-4">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-20" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Filosofía</span>
              <h2 className="font-serif text-4xl text-[#ede9e0]">Nuestros Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ border: "1px solid rgba(201,169,110,0.25)", background: "rgba(201,169,110,0.06)" }}>
                    <Icon size={18} className="text-[#c9a96e]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#ede9e0] mb-3">{title}</h3>
                  <p className="text-xs text-[#8a8a7a] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Las personas detrás de ARQUÉ</span>
            <h2 className="font-serif text-4xl text-[#ede9e0]">Nuestro Equipo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Reconocimientos</span>
              <h2 className="font-serif text-4xl text-[#ede9e0]">Premios y Distinciones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {awards.map((a) => (
                <div
                  key={a.award}
                  className="p-6 transition-all duration-300 hover:border-[#c9a96e]/30"
                  style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="font-mono text-xs text-[#c9a96e] mb-3">{a.year}</div>
                  <h4 className="font-serif text-base text-[#ede9e0] mb-2 leading-snug">{a.award}</h4>
                  <p className="text-[11px] text-[#8a8a7a] tracking-wide">{a.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#c9a96e]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0e0e0c] mb-5">¿Listo para encontrar tu propiedad ideal?</h2>
            <p className="text-[#0e0e0c]/70 text-base mb-10 max-w-xl mx-auto">
              Nuestros asesores están disponibles para orientarte sin ningún compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/propiedades")}
                className="px-8 py-4 bg-[#0e0e0c] text-[#ede9e0] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#191917] transition-colors"
              >
                Ver Propiedades
              </button>
              <button
                onClick={() => navigate("/contacto")}
                className="px-8 py-4 border-2 border-[#0e0e0c] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#0e0e0c]/10 transition-colors"
              >
                Hablar con un Asesor
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
