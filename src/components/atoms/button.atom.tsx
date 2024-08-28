import { Children, TailwindStyle } from "@/utils/type-aliasses";

type Props = {
  children: Children;
  onClick: VoidFunction;
  className?: TailwindStyle;
  isDisabled?: boolean;
};

const COMMON: TailwindStyle =
  "portrait:px-[3vw] px-[3vh] portrait:py-[1vw] py-[1vh] portrait:rounded-[0.5vw] rounded-[0.5vh] font-bold";

const ButtonAtom = ({
  onClick,
  children,
  className = "",
  isDisabled = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={[COMMON, className].join(" ")}
    >
      {children}
    </button>
  );
};

export default ButtonAtom;
