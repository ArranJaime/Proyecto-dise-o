import { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { useRouter } from "../Router";
import { properties, Property } from "../data";
import { PropertyCard } from "../PropertyCard";
import { Footer } from "../Footer";

type Tipo = "todos" | Property["tipo"];
type City = "todas" | Property["city"];
type PrecioFilter = "cualquier" | "hasta-1m" | "1m-2m" | "2m-4m" | "mas-4m";
type SortBy = "destacados" | "precio-asc" | "precio-desc";

interface Filters {
  tipo: Tipo;
  city: City;
  precio: PrecioFilter;
  beds: number;
}

const TIPOS: { value: Tipo; label: string }[] = [
  { value: "todos", label: "Todos los tipos" },
  { value: "atico", label: "Ático / Penthouse" },
  { value: "villa", label: "Villa" },
  { value: "casa", label: "Casa / Mansión" },
  { value: "loft", label: "Loft" },
  { value: "apartamento", label: "Departamento" },
];

const CITIES: { value: City; label: string }[] = [
  { value: "todas", label: "Todos los distritos" },
  { value: "miraflores", label: "Miraflores" },
  { value: "san-isidro", label: "San Isidro" },
  { value: "la-molina", label: "La Molina / Surco" },
  { value: "barranco", label: "Barranco" },
  { value: "asia", label: "Asia" },
];

const PRECIOS: { value: PrecioFilter; label: string }[] = [
  { value: "cualquier", label: "Cualquier precio" },
  { value: "hasta-1m", label: "Hasta S/ 1.000.000" },
  { value: "1m-2m", label: "S/ 1M — S/ 2M" },
  { value: "2m-4m", label: "S/ 2M — S/ 4M" },
  { value: "mas-4m", label: "Más de S/ 4M" },
];

const BEDS = [
  { value: 0, label: "Cualquiera" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
  { value: 5, label: "5+" },
];

function FilterRadio({
  options,
  value,
  onChange,
}: {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (v: any) => void;
}) {
  return (
    <div className="space-y-1">
      {options.map((opt) => (
        <button
          key={String(opt.value)}
          onClick={() => onChange(opt.value)}
          className="flex items-center gap-3 w-full py-1.5 text-sm transition-colors text-left"
          style={{ color: value === opt.value ? "#c9a96e" : "rgba(237,233,224,0.5)" }}
        >
          <span
            className="w-3 h-3 rounded-full border shrink-0 transition-all"
            style={{
              borderColor: value === opt.value ? "#c9a96e" : "rgba(255,255,255,0.2)",
              background: value === opt.value ? "#c9a96e" : "transparent",
            }}
          />
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a8a7a] mb-4">{title}</div>
      {children}
    </div>
  );
}

function FilterContent({
  filters,
  setFilters,
  onClear,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClear: () => void;
}) {
  const hasActive =
    filters.tipo !== "todos" ||
    filters.city !== "todas" ||
    filters.precio !== "cualquier" ||
    filters.beds !== 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]">Filtros</div>
        {hasActive && (
          <button onClick={onClear} className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a7a] hover:text-[#c9a96e] transition-colors">
            Limpiar todo
          </button>
        )}
      </div>
      <FilterGroup title="Tipo de Inmueble">
        <FilterRadio
          options={TIPOS}
          value={filters.tipo}
          onChange={(v: Tipo) => setFilters((f) => ({ ...f, tipo: v }))}
        />
      </FilterGroup>
      <FilterGroup title="Distrito">
        <FilterRadio
          options={CITIES}
          value={filters.city}
          onChange={(v: City) => setFilters((f) => ({ ...f, city: v }))}
        />
      </FilterGroup>
      <FilterGroup title="Precio">
        <FilterRadio
          options={PRECIOS}
          value={filters.precio}
          onChange={(v: PrecioFilter) => setFilters((f) => ({ ...f, precio: v }))}
        />
      </FilterGroup>
      <div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a8a7a] mb-4">Habitaciones mínimas</div>
        <FilterRadio
          options={BEDS}
          value={filters.beds}
          onChange={(v: number) => setFilters((f) => ({ ...f, beds: v }))}
        />
      </div>
    </div>
  );
}

export function PropiedadesView() {
  const { navigate } = useRouter();
  const [filters, setFilters] = useState<Filters>({
    tipo: "todos",
    city: "todas",
    precio: "cualquier",
    beds: 0,
  });
  const [sortBy, setSortBy] = useState<SortBy>("destacados");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const clearFilters = () =>
    setFilters({ tipo: "todos", city: "todas", precio: "cualquier", beds: 0 });

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (filters.tipo !== "todos" && p.tipo !== filters.tipo) return false;
      if (filters.city !== "todas" && p.city !== filters.city) return false;
      if (filters.precio === "hasta-1m" && p.priceValue > 1000000) return false;
      if (filters.precio === "1m-2m" && (p.priceValue < 1000000 || p.priceValue > 2000000)) return false;
      if (filters.precio === "2m-4m" && (p.priceValue < 2000000 || p.priceValue > 4000000)) return false;
      if (filters.precio === "mas-4m" && p.priceValue < 4000000) return false;
      if (filters.beds > 0 && p.beds < filters.beds) return false;
      return true;
    });

    if (sortBy === "precio-asc") result = [...result].sort((a, b) => a.priceValue - b.priceValue);
    if (sortBy === "precio-desc") result = [...result].sort((a, b) => b.priceValue - a.priceValue);
    return result;
  }, [filters, sortBy]);

  return (
    <>
      {/* Mobile full-screen filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0e0e0c] flex flex-col">
          <div
            className="flex items-center justify-between px-6 py-5 shrink-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h2 className="font-serif text-xl text-[#ede9e0]">Filtrar Propiedades</h2>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-1.5 text-[#8a8a7a] hover:text-[#ede9e0] transition-colors" aria-label="Cerrar filtros">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            <FilterContent filters={filters} setFilters={setFilters} onClear={clearFilters} />
          </div>
          <div className="shrink-0 p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-4 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors"
            >
              Ver {filtered.length} {filtered.length === 1 ? "propiedad" : "propiedades"}
            </button>
          </div>
        </div>
      )}

      <div id="main-scroll" className="h-screen overflow-y-auto">
        <div className="pt-20">
          {/* Page header */}
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">Catálogo completo</span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#ede9e0]">Propiedades</h1>
          </div>

          {/* Layout: sidebar + grid */}
          <div className="max-w-7xl mx-auto px-6 pb-16 flex gap-10">
            {/* Sticky sidebar — desktop only */}
            <aside className="hidden md:block w-56 shrink-0">
              <div className="sticky top-24 overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
                <FilterContent filters={filters} setFilters={setFilters} onClear={clearFilters} />
              </div>
            </aside>

            {/* Results */}
            <main className="flex-1 min-w-0">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <span className="text-sm text-[#8a8a7a]">
                  <span className="text-[#ede9e0] font-medium">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
                </span>
                <div className="flex items-center gap-3">
                  {/* Mobile filter trigger */}
                  <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="md:hidden flex items-center gap-2 px-4 py-2.5 border border-white/10 text-[#ede9e0]/60 text-xs tracking-[0.15em] uppercase hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all"
                  >
                    <SlidersHorizontal size={13} />
                    Filtros
                  </button>
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortBy)}
                      className="bg-[#191917] border border-white/8 pl-4 pr-9 py-2.5 text-[#ede9e0]/70 text-xs outline-none cursor-pointer appearance-none"
                    >
                      <option value="destacados">Destacados</option>
                      <option value="precio-asc">Precio: Menor a Mayor</option>
                      <option value="precio-desc">Precio: Mayor a Menor</option>
                    </select>
                    <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a7a] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Property grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((p) => (
                    <PropertyCard
                      key={p.id}
                      property={p}
                      onClick={() => navigate("/propiedad", { propertyId: p.id })}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <div className="font-serif text-3xl text-[#ede9e0]/30 mb-4">Sin resultados</div>
                  <p className="text-sm text-[#8a8a7a] mb-8">
                    No encontramos propiedades con los filtros seleccionados.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-8 py-3.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0e0e0c] transition-all duration-300"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
