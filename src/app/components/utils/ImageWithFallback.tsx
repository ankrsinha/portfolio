import React, { useState, useEffect } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const { src, alt, style, className, ...rest } = props;

  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDidError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {isLoading && !didError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Error fallback */}
      {didError ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading"
            className="w-16 h-16 opacity-50"
          />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${className ?? ""}`}
          style={style}
          onError={() => setDidError(true)}
          onLoad={() => setIsLoading(false)}
          {...rest}
        />
      )}
    </div>
  );
}