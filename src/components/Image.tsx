import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function Image({ src, alt, fallbackSrc, className, style, ...props }: ImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
        referrerPolicy="no-referrer"
        {...props}
      />
      {error && !fallbackSrc && (
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 text-sm" style={{ minHeight: '200px' }}>
          Изображение недоступно
        </div>
      )}
    </>
  );
}
