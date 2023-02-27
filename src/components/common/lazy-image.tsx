import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks";

const LazyBackgroundImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const isIntersecting = useIntersectionObserver(ref);
  return (
    <img
      className={className}
      src={isIntersecting ? src : ""}
      alt={alt}
      ref={ref}
      loading="lazy"
    />
  );
};

export default LazyBackgroundImage;
