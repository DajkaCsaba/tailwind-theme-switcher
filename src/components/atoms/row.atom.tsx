import { Children, TailwindStyle } from "@/utils/type-aliasses";

type Props = {
  children: Children;
  className?: TailwindStyle;
  flex?: number;
};

const COMMON = "flex items-center";

const RowAtom = ({ children, className = "", flex = 1 }: Props) => {
  return <div className={[COMMON, className].join(" ")}>{children}</div>;
};

export default RowAtom;
