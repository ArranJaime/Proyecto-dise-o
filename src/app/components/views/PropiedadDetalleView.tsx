import { useState } from "react";
import { MapPin, Bed, Bath, ChevronLeft, Search, ArrowRight } from "lucide-react";
import { useRouter } from "../Router";
import { properties } from "../data";
import { Lightbox } from "../Lightbox";
import { ScheduleModal } from "../ScheduleModal";
import { Footer } from "../Footer";

export function PropiedadDetalleView() {
  const { params, navigate } = useRouter();
  const property = properties.find((p) => p.id === params.propertyId);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  if (!property) {
    return (
      <div id="main-scroll" className="h-screen overflow-y-auto">
        <div className="pt-32 text-center px-6">
          <div className="font-serif text-3xl text-[#ede9e0]/30 mb-4">Propiedad no encontrada</div>
          <button
            onClick={() => navigate("/propiedades")}
            className="px-6 py-3 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors"
          >
            Ver Propiedades
          </button>
        </div>
      </div>
    );
  }

  const related = properties.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 3);

  return (
    <>
      <div id="main-scroll" className="h-screen overflow-y-auto">
        <div className="pt-20">
          {/* Back navigation */}
          <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
            <button
              onClick={() => navigate("/propiedades")}
              className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#8a8a7a] hover:text-[#c9a96e] transition-colors"
            >
              <ChevronLeft size={14} /> Volver al catálogo
            </button>
          </div>

          {/* Header */}
          <header className="max-w-7xl mx-auto px-6 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                {property.tag && (
                  <span
                    className="inline-block mb-4 text-[#0e0e0c] text-[10px] tracking-[0.3em] uppercase px-3 py-1 font-medium"
                    style={{
                      background: "linear-gradient(90deg, #c9a96e 20%, #f0d898 50%, #c9a96e 80%)",
                      backgroundSize: "200% auto",
                      animation: "tagEntrance 0.5s ease both, shimmerTag 3s 0.6s linear infinite",
                    }}
                  >
                    {property.tag}
                  </span>
                )}
                <h1 className="font-serif text-4xl md:text-6xl text-[#ede9e0] mb-3 leading-[1.05]">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#8a8a7a]" />
                  <span className="text-sm text-[#8a8a7a]">{property.location}</span>
                </div>
              </div>
              <div className="shrink-0">
                <div className="font-serif text-3xl text-[#c9a96e] md:text-right">{property.price}</div>
                <div className="text-[11px] text-[#8a8a7a] tracking-[0.15em] mt-1 md:text-right">
                  {property.sqm} m² &nbsp;·&nbsp; {property.beds} hab. &nbsp;·&nbsp; {property.baths} baños
                </div>
              </div>
            </div>
          </header>

          {/* Masonry Gallery */}
          <section className="max-w-7xl mx-auto px-6 pb-14">
            <div className="columns-1 sm:columns-2 lg:columns-3" style={{ columnGap: "10px" }}>
              {property.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="break-inside-avoid mb-2.5 overflow-hidden cursor-pointer group relative bg-[#191917]"
                >
                  <img
                    src={img}
                    alt={`${property.title} — ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full object-cover block transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0e0e0c]/0 group-hover:bg-[#0e0e0c]/35 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#c9a96e] p-3.5">
                      <Search size={15} className="text-[#c9a96e]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info + Actions */}
          <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-12">
            {/* Description */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl text-[#ede9e0] mb-6">Descripción</h2>
              <p className="text-[#8a8a7a] leading-[1.9] text-sm mb-8">{property.description}</p>

              {/* Key specs */}
              <div className="grid grid-cols-3 gap-4 p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                {[
                  { label: "Área", value: `${property.sqm} m²` },
                  { label: "Habitaciones", value: property.beds },
                  { label: "Baños", value: property.baths },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="font-serif text-2xl text-[#c9a96e] mb-1">{value}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h2 className="font-serif text-2xl text-[#ede9e0] mb-6">Características</h2>
              <ul className="space-y-3 mb-8">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#8a8a7a]">
                    <span className="w-1 h-1 rounded-full bg-[#c9a96e] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <button
                  onClick={() => setScheduleOpen(true)}
                  className="w-full py-4 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                >
                  Agendar Visita
                </button>
                <button
                  onClick={() => navigate("/contacto", { prefillPropertyId: property.id })}
                  className="w-full py-4 border border-white/10 text-[#ede9e0]/60 text-xs tracking-[0.25em] uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300"
                >
                  Contactar Asesor
                </button>
                <button
                  onClick={() => navigate("/contacto", { prefillPropertyId: property.id })}
                  className="w-full py-4 border border-white/5 text-[#ede9e0]/40 text-xs tracking-[0.25em] uppercase hover:border-white/10 hover:text-[#ede9e0]/60 transition-all duration-300"
                >
                  Descargar Dossier
                </button>
              </div>

              {/* Price block */}
              <div className="mt-8 p-5" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-1">Precio de venta</div>
                <div className="font-serif text-2xl text-[#ede9e0]">{property.price}</div>
                <div className="text-xs text-[#8a8a7a] mt-1">Precio negociable · Financiamiento disponible</div>
              </div>
            </div>
          </section>

          {/* Related properties */}
          {related.length > 0 && (
            <section className="max-w-7xl mx-auto px-6 pb-16">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-2 block">También te puede interesar</span>
                  <h2 className="font-serif text-2xl text-[#ede9e0]">Propiedades Similares</h2>
                </div>
                <button
                  onClick={() => navigate("/propiedades")}
                  className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8a8a7a] hover:text-[#c9a96e] transition-colors"
                >
                  Ver todas <ArrowRight size={13} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <article
                    key={p.id}
                    onClick={() => navigate("/propiedad", { propertyId: p.id })}
                    className="group cursor-pointer bg-[#191917] hover:bg-[#1c1c19] transition-all duration-300"
                    style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-[#252521]">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/80 via-[#0e0e0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-5">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[#ede9e0] text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#c9a96e] hover:text-[#0e0e0c] hover:border-[#c9a96e] transition-colors duration-300">
                          Ver Detalles
                        </span>
                      </div>
                      {p.tag && (
                        <div
                          className="absolute top-3 left-3 text-[#0e0e0c] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium"
                          style={{ background: "linear-gradient(90deg,#c9a96e 20%,#f0d898 50%,#c9a96e 80%)", backgroundSize: "200% auto", animation: "shimmerTag 3s linear infinite" }}
                        >
                          {p.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <h3 className="font-serif text-sm text-[#ede9e0] group-hover:text-[#c9a96e] transition-colors flex-1">{p.title}</h3>
                        <span className="text-[#c9a96e] text-sm shrink-0">{p.price}</span>
                      </div>
                      <p className="text-[11px] text-[#8a8a7a] truncate">{p.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
        <Footer />
      </div>

      {/* Modals */}
      {lightboxIndex !== null && (
        <Lightbox
          images={property.images}
          initialIndex={lightboxIndex}
          propertyTitle={property.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
      {scheduleOpen && (
        <ScheduleModal property={property} onClose={() => setScheduleOpen(false)} />
      )}
    </>
  );
}
