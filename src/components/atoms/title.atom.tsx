import { TEXT_SIZE } from "@/utils/common/dynamic-sizes";
import { Size, TailwindStyle } from "@/utils/type-aliasses";
import React from "react";

type Props = {
  title: string;
  size?: Size;
};

const COLOR: TailwindStyle =
  "text-light-primary dark:text-dark-primary night-owl:text-night-owl-primary";
const COMMON: TailwindStyle = "font-bold text-center";

const TitleAtom = ({ title, size = "lg" }: Props) => {
  return <p className={[COMMON, COLOR, TEXT_SIZE[size]].join(" ")}>{title}</p>;
};

export default TitleAtom;
