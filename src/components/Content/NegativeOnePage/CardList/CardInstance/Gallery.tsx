import React, { useEffect, useRef } from "react";
import { useGallery } from "../../../../../hooks";

type GalleryItemType = {
  id: number;
  data: string;
  background: string;
};
const rawGalleryList: GalleryItemType[] = [
  { id: 1, data: "hello1", background: "cyan" },
  { id: 2, data: "hello2", background: "blue" },
  { id: 3, data: "hello3", background: "green" },
  { id: 4, data: "hello4", background: "red" },
];
const fixGalleryList = (list: GalleryItemType[]): GalleryItemType[] => {
  return [
    { ...list[list.length - 1], id: -1 },
    ...list,
    { ...list[0], id: -2 },
  ];
};
const Gallery = () => {
  const galleryList = fixGalleryList(rawGalleryList);
  const { stop, start, currentIndex, setIndex, setPrev, setNext } = useGallery({
    step: 3000,
    start: 1,
    count: galleryList.length,
  });

  // 控制动效，以及 fake的两个节点
  const transitionRef = useRef(true);
  const translateX = "-" + currentIndex * 100 + "%";
  const stopTransition = () => {
    transitionRef.current = false;
  };
  const recoverTransition = () => {
    transitionRef.current = true;
  };
  const setIndexWithoutTransitionAfterDelay = (
    index: number,
    delay: number = 500
  ) => {
    setTimeout(() => {
      stopTransition();
      setIndex(index);
      recoverTransition();
    }, delay);
  };
  currentIndex === galleryList.length - 1 &&
    setIndexWithoutTransitionAfterDelay(1);
  currentIndex === 0 &&
    setIndexWithoutTransitionAfterDelay(galleryList.length - 2);
  
  // 开始触摸后，停止自动播放
  const galleryRef = useRef<HTMLDivElement | null>(null);
  useTouchStartAndEnd(galleryRef.current, {
    start: () => stop(),
    end: () => start(),
  });


  return (
    <div
      className="gallery-card"
      ref={galleryRef}
      style={{
        height: "100%",
        background: "#eee",
        opacity: "0.6",
        display: "flex",
      }}
    >
      {galleryList.map((gallery) => {
        return (
          <div
            className="gallery-item-wrapper"
            style={{
              height: "100%",
              width: "100%",
              flexShrink: 0,
              transition: transitionRef.current ? "all 0.5s" : "0s",
              transform: `translateX(${translateX})`,
            }}
            key={gallery.id}
          >
            <GalleryItem item={gallery} />
          </div>
        );
      })}
    </div>
  );
};

const useTouchStartAndEnd = (
  dom: HTMLElement | null,
  options: { start: () => void; end: () => void }
) => {
  useEffect(() => {
    if (!dom) return;
    dom.addEventListener("touchstart", options.start);
    dom.addEventListener("touchend", options.end);
    return () => {
      dom.removeEventListener("touchstart", options.start);
      dom.removeEventListener("touchend", options.end);
    };
  }, [dom, options.start, options.end]);
};

const GalleryItem = ({ item: gallery }: { item: GalleryItemType }) => {
  return (
    <div
      className="gallery"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: gallery.background,
      }}
      key={gallery.id}
    >
      <span>{gallery.data}</span>
    </div>
  );
};

export default Gallery;
