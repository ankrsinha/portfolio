import React, { useEffect, useState } from "react";
import { ImageWithFallback } from "../utils/ImageWithFallback";

function ProjectImage({
  images,
  title,
}: {
  images?: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <ImageWithFallback
        src={images[index]}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { ProjectImage };