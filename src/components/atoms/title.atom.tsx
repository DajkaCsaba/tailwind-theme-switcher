import { TEXT_SIZE } from "@/utils/common/dynamic-sizes";
import { SizeOption, TailwindStyle } from "@/utils/type-aliasses";
import React from "react";

type Props = {
  title: string;
  className?: TailwindStyle;
  size?: SizeOption;
};

const COLOR: TailwindStyle =
  "text-light-primary dark:text-dark-primary night-owl:text-night-owl-primary";
const COMMON: TailwindStyle = "font-bold text-center tracking-wider";

const TitleAtom = ({ title, size = "lg", className = "" }: Props) => {
  return (
    <p className={[COMMON, COLOR, TEXT_SIZE[size], className].join(" ")}>
      {title}
    </p>
  );
};

export default TitleAtom;
