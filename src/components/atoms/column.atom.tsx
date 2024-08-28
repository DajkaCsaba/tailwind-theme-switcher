import { Children, TailwindStyle } from "@/utils/type-aliasses";

type Props = {
  children: Children;
  className?: TailwindStyle;
  isContentHidden?: boolean;
  flex?: number;
};

const COMMON = "flex flex-col";

const ColumnAtom = ({
  children,
  className = "",
  isContentHidden = false,
  flex = 1,
}: Props) => {
  if (isContentHidden) {
    return (
      <div style={{ flex }} className={[COMMON, className].join(" ")}></div>
    );
  }
  return (
    <div style={{ flex }} className={[COMMON, className].join(" ")}>
      {children}
    </div>
  );
};

export default ColumnAtom;
