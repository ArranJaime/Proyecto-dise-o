import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button onClick={onClose} className="absolute right-4 top-4 text-white hover:text-gray-300">
        <X className="h-8 w-8" />
      </button>
      {images.length > 0 && (
        <img
          src={images[initialIndex]}
          alt="Lightbox Image"
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      )}
    </div>
  );
}
