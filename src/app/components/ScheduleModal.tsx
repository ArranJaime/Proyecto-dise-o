import { X } from "lucide-react";

export function ScheduleModal({
  propertyId,
  onClose,
}: {
  propertyId: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-[#141413] p-6 text-white md:p-8">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Agendar Visita</h2>
        <p className="mb-6 text-gray-400">Complete sus datos y nos pondremos en contacto para confirmar su visita a esta propiedad.</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <input className="w-full rounded-md bg-[#242422] px-4 py-3 text-white outline-none focus:ring-1 focus:ring-white" placeholder="Nombre completo" required />
          <input className="w-full rounded-md bg-[#242422] px-4 py-3 text-white outline-none focus:ring-1 focus:ring-white" type="email" placeholder="Correo electrónico" required />
          <input className="w-full rounded-md bg-[#242422] px-4 py-3 text-white outline-none focus:ring-1 focus:ring-white" type="tel" placeholder="Teléfono" required />
          <button type="submit" className="w-full rounded-md bg-white py-3 font-medium text-black hover:bg-gray-200">
            Solicitar Visita
          </button>
        </form>
      </div>
    </div>
  );
}
