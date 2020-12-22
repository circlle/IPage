export type ScreenInfo = {
  width: number;
  height: number;
};
const useScreen = (): ScreenInfo => {
  if (typeof window === "undefined") return { width: 0, height: 0 };

  const { height, width } = window.screen;

  return { height, width };
};

export default useScreen;
