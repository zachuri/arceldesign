import React, { useContext, useCallback } from "react";
import { CarouselContext } from "./carousel";
import styles from "../styles/carousel.module.css";
import { useRouter } from "next/router";

interface Props {
  index: number;
  navigate: string;
  children: JSX.Element;
}

const CarouselItem: React.FC<Props> = ({ children, index, navigate }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);

  const nextRouter = useRouter();

  return (
    <div
      className={`${styles.slide} relative ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {isActive ? (
        <button
          onClick={() => {
            nextRouter.push({
              pathname: navigate,
            });
          }}
        >
          {children}
        </button>
      ) : (
        children
      )}
    </div>
  );
};

export default CarouselItem;
