import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "../../hooks";

const LazyImage = ({
  src,
  className,
  children,
}: {
  src: string;
  className: string;
  children?: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{ backgroundImage: isIntersecting ? `url(${src})` : "" }}
    >
      {children}
    </div>
  );
};

export default LazyImage;
