import { useState, useRef, useEffect } from "react";

const useGallery = ({
  step = 3000,
  start: startIndex = 0,
  count,
}: {
  start: number;
  step: number;
  count: number;
}) => {
  const [index, setIndex] = useState(startIndex);
  const timerRef = useRef<any>(null)

  useEffect(
    () => {
      start()

      return stop
    }
  )

  const stop = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  const start = () => {
    timerRef.current = setInterval(() => {
      const nextIndex = (index + 1) % count
      setIndex(nextIndex)
    }, step)
  }

  const setPrev = () => setIndex((index + count - 1) % count)
  const setNext = () => setIndex((index + 1) % count)
  return {
    currentIndex: index,
    setIndex,
    setPrev,
    setNext,
    stop,
    start
  }
};

export default useGallery;
