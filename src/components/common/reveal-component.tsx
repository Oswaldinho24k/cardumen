import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "../../hooks";

const RevealComponent = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <div
      className={`${
        isIntersecting
          ? "opacity-100 transition-opacity duration-1000 ease-in"
          : "opacity-0"
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default RevealComponent;
