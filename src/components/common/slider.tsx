import type { ReactNode } from "react";
import { useEffect, useCallback, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({
  children,
  slidesToShow = 1,
  dots = false,
  slideAuto = false,
}: any) => {
  const [current, setCurrent] = useState(1);

  const handleNext = useCallback(() => {
    setCurrent(current === children.length - 1 ? 0 : current + 1);
  }, [children, current]);

  const handlePrevious = useCallback(() => {
    setCurrent(current === 0 ? children.length - 1 : current - 1);
  }, [children, current]);

  useEffect(() => {
    if (!slideAuto) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [handleNext, slideAuto]);
  const itemSpan = 12 / slidesToShow;

  return (
    <div className="flex min-h-min w-full flex-col items-center justify-center gap-3 grid grid-cols-12">
      <div className={`col-span-${itemSpan}`}> {children[current]}</div>
      {dots && (
        <div className="flex items-center gap-5">
          <button onClick={handlePrevious} className="md:text-xl">
            <FaAngleLeft />
          </button>
          <div className="flex gap-1">
            {children.map((item: ReactNode, key: number) => (
              <div
                key={key}
                className={`h-1 w-1 rounded-full md:h-2 md:w-2 ${
                  current === key ? "bg-black" : "bg-slate-500"
                } `}
              />
            ))}
          </div>
          <button onClick={handleNext} className="md:text-xl">
            <FaAngleRight />{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default Slider;
