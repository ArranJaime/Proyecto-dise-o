import { useState } from "react";
import { X, Check, MapPin, Home, Ruler, User, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { useUI } from "./UIContext";

/* ─── Types ─────────────────────────────────────────────────────────── */
interface FormData {
  // Step 1
  direccion: string;
  tipo: string;
  distrito: string;
  // Step 2
  habitaciones: number;
  banos: number;
  metros: string;
  antiguedad: string;
  condicion: string;
  // Step 3
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  privacidad: boolean;
}

const TIPOS_INMUEBLE = ["Casa", "Departamento", "Terreno", "Oficina", "Local Comercial"];

const DISTRITOS = [
  "Miraflores", "San Isidro", "La Molina", "Barranco", "Surco",
  "San Borja", "Jesús María", "Lince", "La Victoria", "Surquillo",
  "Chorrillos", "Asia", "Otro",
];

const ANTIGUEDADES = [
  "A estrenar", "Menos de 5 años", "5–15 años", "15–30 años", "Más de 30 años",
];

const CONDICIONES = ["Excelente", "Buena", "Regular", "Necesita remodelación"];
const MOTIVOS = ["Quiero vender", "Quiero alquilar", "Trámite bancario / Refinanciamiento", "Solo información"];

/* ─── Helpers ────────────────────────────────────────────────────────── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-[11px] text-red-400 mt-1.5 leading-none">{msg}</p>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">
      {children}
    </label>
  );
}

function Input({
  type = "text",
  value,
  onChange,
  placeholder,
  hasError,
  ...rest
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasError?: boolean;
  [k: string]: any;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#252521] px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a]/50 text-sm outline-none transition-colors"
      style={{
        border: `1px solid ${hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)"}`,
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e66")}
      onBlur={(e) =>
        (e.currentTarget.style.borderColor = hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")
      }
      {...rest}
    />
  );
}

function SelectField({
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  hasError?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#252521] px-4 py-3 text-sm outline-none cursor-pointer transition-colors appearance-none"
      style={{
        color: value ? "#ede9e0" : "rgba(138,138,122,0.5)",
        border: `1px solid ${hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 12,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-[#ede9e0] text-lg transition-colors disabled:opacity-25 hover:text-[#c9a96e]"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        −
      </button>
      <div
        className="w-12 h-10 flex items-center justify-center text-[#ede9e0] text-base font-medium"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {value}
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-[#ede9e0] text-lg transition-colors disabled:opacity-25 hover:text-[#c9a96e]"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        +
      </button>
    </div>
  );
}

/* ─── Step indicator ─────────────────────────────────────────────────── */
const STEPS = [
  { icon: MapPin, label: "Inmueble" },
  { icon: Ruler, label: "Características" },
  { icon: User, label: "Contacto" },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {STEPS.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={s.label} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: done ? "#c9a96e" : active ? "rgba(201,169,110,0.15)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${done || active ? "#c9a96e" : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {done ? (
                  <Check size={13} className="text-[#0e0e0c]" />
                ) : (
                  <span className="text-xs font-mono" style={{ color: active ? "#c9a96e" : "rgba(255,255,255,0.3)" }}>
                    {i + 1}
                  </span>
                )}
              </div>
              <span className="text-[9px] tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: active ? "#c9a96e" : done ? "#c9a96e80" : "rgba(255,255,255,0.25)" }}>
                {s.label}
              </span>
            </div>
            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="w-14 h-px mx-2 mb-5 transition-all duration-300" style={{ background: i < current ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.08)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Modal ─────────────────────────────────────────────────────── */
export function TasacionModal() {
  const { closeTasacion } = useUI();
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [form, setForm] = useState<FormData>({
    direccion: "",
    tipo: "",
    distrito: "",
    habitaciones: 3,
    banos: 2,
    metros: "",
    antiguedad: "",
    condicion: "",
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    privacidad: false,
  });

  const set = (field: keyof FormData, value: any) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!form.direccion.trim()) errs.direccion = "La dirección es requerida";
      if (!form.tipo) errs.tipo = "Selecciona el tipo de inmueble";
      if (!form.distrito) errs.distrito = "Selecciona el distrito";
    }
    if (step === 1) {
      if (!form.metros || Number(form.metros) <= 0) errs.metros = "Ingresa el área en m²";
    }
    if (step === 2) {
      if (!form.nombre.trim()) errs.nombre = "El nombre es requerido";
      if (!form.email.trim()) errs.email = "El correo es requerido";
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Correo inválido";
      if (!form.telefono.trim()) errs.telefono = "El teléfono es requerido";
      if (!form.privacidad) errs.privacidad = "Debes aceptar la política de privacidad";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => { if (validate()) setStep((s) => s + 1); };
  const handleBack = () => { setStep((s) => Math.max(0, s - 1)); setErrors({}); };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
      style={{ background: "rgba(14,14,12,0.9)", backdropFilter: "blur(10px)" }}
      onClick={closeTasacion}
    >
      <div
        className="w-full max-w-lg bg-[#191917] overflow-hidden flex flex-col max-h-[90vh]"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Home size={12} className="text-[#c9a96e]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]">Tasación Gratuita</span>
            </div>
            <h3 className="font-serif text-xl text-[#ede9e0]">¿Cuánto vale tu inmueble?</h3>
          </div>
          <button
            onClick={closeTasacion}
            className="p-2 text-[#8a8a7a] hover:text-[#ede9e0] transition-colors shrink-0"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {!sent ? (
          <>
            <StepIndicator current={step} />

            <form onSubmit={handleSubmit} className="overflow-y-auto flex-1">
              <div className="px-6 py-6 space-y-5">

                {/* ── Step 0: Inmueble ── */}
                {step === 0 && (
                  <>
                    <div>
                      <Label>Dirección del inmueble *</Label>
                      <Input
                        value={form.direccion}
                        onChange={(v) => set("direccion", v)}
                        placeholder="Ej. Av. Larco 123, Miraflores"
                        hasError={!!errors.direccion}
                      />
                      <FieldError msg={errors.direccion} />
                    </div>

                    <div>
                      <Label>Tipo de inmueble *</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIPOS_INMUEBLE.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => set("tipo", t)}
                            className="py-2.5 text-xs tracking-[0.1em] uppercase transition-all duration-200"
                            style={{
                              border: `1px solid ${form.tipo === t ? "#c9a96e" : errors.tipo ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)"}`,
                              background: form.tipo === t ? "rgba(201,169,110,0.12)" : "transparent",
                              color: form.tipo === t ? "#c9a96e" : "rgba(237,233,224,0.5)",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <FieldError msg={errors.tipo} />
                    </div>

                    <div>
                      <Label>Distrito *</Label>
                      <SelectField
                        value={form.distrito}
                        onChange={(v) => set("distrito", v)}
                        options={DISTRITOS}
                        placeholder="Selecciona el distrito"
                        hasError={!!errors.distrito}
                      />
                      <FieldError msg={errors.distrito} />
                    </div>
                  </>
                )}

                {/* ── Step 1: Características ── */}
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label>Habitaciones</Label>
                        <NumberStepper value={form.habitaciones} onChange={(v) => set("habitaciones", v)} min={1} max={12} />
                      </div>
                      <div>
                        <Label>Baños</Label>
                        <NumberStepper value={form.banos} onChange={(v) => set("banos", v)} min={1} max={8} />
                      </div>
                    </div>

                    <div>
                      <Label>Área total (m²) *</Label>
                      <Input
                        type="number"
                        value={form.metros}
                        onChange={(v) => set("metros", v)}
                        placeholder="Ej. 120"
                        hasError={!!errors.metros}
                        min="1"
                      />
                      <FieldError msg={errors.metros} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Antigüedad</Label>
                        <SelectField
                          value={form.antiguedad}
                          onChange={(v) => set("antiguedad", v)}
                          options={ANTIGUEDADES}
                          placeholder="Seleccionar"
                        />
                      </div>
                      <div>
                        <Label>Condición</Label>
                        <SelectField
                          value={form.condicion}
                          onChange={(v) => set("condicion", v)}
                          options={CONDICIONES}
                          placeholder="Seleccionar"
                        />
                      </div>
                    </div>

                    {/* Summary preview */}
                    <div className="rounded-none p-4" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-2">Resumen</div>
                      <p className="text-sm text-[#8a8a7a]">
                        {form.tipo} en <span className="text-[#ede9e0]">{form.distrito}</span> ·{" "}
                        {form.habitaciones} hab. · {form.banos} baños · {form.metros || "—"} m²
                      </p>
                    </div>
                  </>
                )}

                {/* ── Step 2: Contacto ── */}
                {step === 2 && (
                  <>
                    <div>
                      <Label>Nombre completo *</Label>
                      <Input
                        value={form.nombre}
                        onChange={(v) => set("nombre", v)}
                        placeholder="Tu nombre completo"
                        hasError={!!errors.nombre}
                      />
                      <FieldError msg={errors.nombre} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Correo electrónico *</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(v) => set("email", v)}
                          placeholder="tu@correo.com"
                          hasError={!!errors.email}
                        />
                        <FieldError msg={errors.email} />
                      </div>
                      <div>
                        <Label>Teléfono / Celular *</Label>
                        <Input
                          type="tel"
                          value={form.telefono}
                          onChange={(v) => set("telefono", v)}
                          placeholder="987 654 321"
                          hasError={!!errors.telefono}
                        />
                        <FieldError msg={errors.telefono} />
                      </div>
                    </div>

                    <div>
                      <Label>¿Para qué necesitas la tasación?</Label>
                      <SelectField
                        value={form.motivo}
                        onChange={(v) => set("motivo", v)}
                        options={MOTIVOS}
                        placeholder="Selecciona un motivo"
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div
                          onClick={() => set("privacidad", !form.privacidad)}
                          className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer"
                          style={{
                            border: `1px solid ${errors.privacidad ? "rgba(248,113,113,0.6)" : form.privacidad ? "#c9a96e" : "rgba(255,255,255,0.15)"}`,
                            background: form.privacidad ? "rgba(201,169,110,0.15)" : "transparent",
                          }}
                        >
                          {form.privacidad && <Check size={11} className="text-[#c9a96e]" />}
                        </div>
                        <span className="text-xs text-[#8a8a7a] leading-relaxed group-hover:text-[#ede9e0]/70 transition-colors">
                          Acepto la{" "}
                          <button type="button" className="text-[#c9a96e] underline underline-offset-2 hover:text-[#ede9e0] transition-colors">
                            Política de Privacidad
                          </button>{" "}
                          y el tratamiento de mis datos personales para recibir la tasación. *
                        </span>
                      </label>
                      <FieldError msg={errors.privacidad} />
                    </div>
                  </>
                )}
              </div>

              {/* Navigation buttons */}
              <div
                className="flex items-center gap-3 px-6 py-4 shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-5 py-3.5 border border-white/10 text-[#ede9e0]/50 text-xs tracking-[0.15em] uppercase hover:border-white/20 hover:text-[#ede9e0]/80 transition-all"
                  >
                    <ChevronLeft size={13} /> Anterior
                  </button>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                  >
                    Siguiente <ChevronRight size={13} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                  >
                    Solicitar Tasación Gratuita
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          /* ── Success state ── */
          <div className="p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.3)" }}>
                <CheckCircle2 size={36} className="text-[#c9a96e]" />
              </div>
            </div>
            <h4 className="font-serif text-2xl text-[#ede9e0] mb-3">¡Tasación en Proceso!</h4>
            <p className="text-sm text-[#8a8a7a] leading-relaxed mb-3 max-w-sm mx-auto">
              Recibimos tu solicitud para{" "}
              <span className="text-[#c9a96e]">{form.tipo || "el inmueble"}</span> en{" "}
              <span className="text-[#c9a96e]">{form.distrito}</span>.
            </p>
            <p className="text-sm text-[#8a8a7a] leading-relaxed mb-8 max-w-sm mx-auto">
              Uno de nuestros asesores especializados analizará tu propiedad y te enviará el informe de tasación a{" "}
              <span className="text-[#ede9e0]">{form.email}</span> en un plazo de 24–48 horas.
            </p>
            <div className="p-4 mb-6" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-1">Código de seguimiento</div>
              <div className="font-mono text-sm text-[#ede9e0]">TAS-{Date.now().toString().slice(-6)}</div>
            </div>
            <button
              onClick={closeTasacion}
              className="px-8 py-3 border border-white/10 text-[#ede9e0]/60 text-xs tracking-[0.2em] uppercase hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
