import { useEffect } from "react";

const usePreventTouchMove = () => {
  useEffect(() => {
    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };
    document.body.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });
    return () => document.body.removeEventListener("touchmove", onTouchMove);
  });
};

export default usePreventTouchMove;
