import { Size, TailwindStyle } from "@/utils/type-aliasses";

type TextSize = Record<Size, TailwindStyle>;

export const TEXT_SIZE: TextSize = {
  xs: "portrait:text-xs text-xsl",
  sm: "portrait:text-sm text-sml",
  base: "portrait:text-base text-basel",
  md: "portrait:text-md text-mdl",
  lg: "portrait:text-lg text-lgl",
  elg: "portrait:text-elg text-elgl",
};
