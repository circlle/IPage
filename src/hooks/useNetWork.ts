import type { NetWork } from "type";

const useNetWork = (): NetWork | null => {
  if (typeof window === "undefined") return null;

  return {
    isp: '中国移动',
    signalLevel: 2,
    type: "4G"
  }
}

export default useNetWork