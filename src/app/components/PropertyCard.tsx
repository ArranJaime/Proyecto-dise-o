import { MapPin, Bed, Bath } from "lucide-react";
import { Property } from "./data";

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-[#191917] transition-all duration-300 hover:bg-[#1c1c19]"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}
    >
      {/* Image with hover effects */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#252521]">
        {/* Image — slow zoom on hover */}
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Dark gradient overlay — appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/85 via-[#0e0e0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* "Ver Detalles" button — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="bg-white/10 backdrop-blur-md border border-white/20 text-[#ede9e0] text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#c9a96e] hover:text-[#0e0e0c] hover:border-[#c9a96e] transition-colors duration-300"
            style={{ animation: "detailsSlideUp 0.35s ease both" }}
          >
            Ver Detalles
          </span>
        </div>

        {/* Tag with shimmer entrance animation */}
        {property.tag && (
          <div
            className="absolute top-3 left-3 text-[#0e0e0c] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #c9a96e 20%, #f0d898 50%, #c9a96e 80%)",
              backgroundSize: "200% auto",
              animation: "tagEntrance 0.5s ease both, shimmerTag 3s 0.6s linear infinite",
            }}
          >
            {property.tag}
          </div>
        )}
      </div>

      {/* Property info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-base text-[#ede9e0] leading-snug group-hover:text-[#c9a96e] transition-colors duration-300 flex-1">
            {property.title}
          </h3>
          <span className="text-[#c9a96e] text-sm font-medium shrink-0">{property.price}</span>
        </div>

        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={11} className="text-[#8a8a7a] shrink-0" />
          <span className="text-[11px] text-[#8a8a7a] tracking-wide truncate">{property.location}</span>
        </div>

        <div
          className="flex items-center gap-5 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="flex items-center gap-1.5 text-[11px] text-[#ede9e0]/50">
            <Bed size={12} /> {property.beds} hab.
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-[#ede9e0]/50">
            <Bath size={12} /> {property.baths} baños
          </span>
          <span className="text-[11px] text-[#ede9e0]/50">{property.sqm} m²</span>
        </div>
      </div>
    </article>
  );
}
