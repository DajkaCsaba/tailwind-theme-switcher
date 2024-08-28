import { TEXT_SIZE } from "@/utils/common/dynamic-sizes";
import { Size, TailwindStyle } from "@/utils/type-aliasses";
import React from "react";

type Props = {
  text: string;
  size?: Size;
  className?: TailwindStyle;
};

const COLOR =
  "text-light-secondary dark:text-dark-secondary night-owl:text-night-owl-secondary";

const TextAtom = ({ text, size = "base", className = "" }: Props) => {
  return (
    <p className={[COLOR, TEXT_SIZE[size], className].join(" ")}>{text}</p>
  );
};

export default TextAtom;
