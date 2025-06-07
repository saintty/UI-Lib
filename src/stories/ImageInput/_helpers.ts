import { emptyHeight, emptyWidth, maxImageDimension } from "./_constants";

export const getDimensions = (
  width: number,
  height: number
): [number, number] => {
  if (!width || !height) return [emptyWidth, emptyHeight];

  const ratio = width / height;

  return ratio > 1
    ? [maxImageDimension, maxImageDimension / ratio]
    : [maxImageDimension * ratio, maxImageDimension];
};
