import { useId } from "react";

const START_ZINDEX = 1000;
let _zIndex = START_ZINDEX;
const ZINDEX_MAP = new Map();
export const useZIndex = () => {
  const id = useId();
  if (ZINDEX_MAP.has(id)) return ZINDEX_MAP.get(id);
  const zIndex = _zIndex++;
  ZINDEX_MAP.set(id, zIndex)
  return zIndex;
};
