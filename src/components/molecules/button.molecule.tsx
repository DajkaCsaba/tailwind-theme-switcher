import { Children, TailwindStyle } from "@/utils/type-aliasses";
import ButtonAtom from "../atoms/button.atom";

type Props = {
  children: Children;
  onClick: VoidFunction;
  className?: TailwindStyle;
  isDisabled?: boolean;
  type?: ButtonType;
};

type ButtonType = "filled" | "outlined";
type ButtonTypeStyle = Record<ButtonType, TailwindStyle>;

const BUTTON_TYPE: ButtonTypeStyle = {
  filled:
    "bg-light-primary dark:bg-dark-primary night-owl:bg-night-owl-primary " +
    "text-light-background dark:text-dark-background night-owl:text-night-owl-background " +
    "hover:bg-light-secondary dark:hover:bg-dark-secondary night-owl:hover:bg-night-owl-secondary ",
  outlined:
    "border-[0.025vw] border-[0.025vh] border-light-primary dark:border-dark-primary night-owl:border-night-owl-primary " +
    "text-light-secondary dark:text-dark-secondary night-owl:text-night-owl-secondary " +
    "hover:border-light-secondary dark:hover:border-dark-secondary night-owl:hover:border-night-owl-secondary " +
    "hover:text-light-secondary dark:hover:text-dark-secondary night-owl:hover:text-night-owl-secondary",
};

const ButtonMolecule = ({
  onClick,
  children,
  className = "",
  isDisabled = false,
  type = "filled",
}: Props) => {
  return (
    <ButtonAtom
      className={[BUTTON_TYPE[type], className].join(" ")}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </ButtonAtom>
  );
};

export default ButtonMolecule;
