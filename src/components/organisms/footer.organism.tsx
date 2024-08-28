"use client";

import ColumnAtom from "../atoms/column.atom";
import RowAtom from "../atoms/row.atom";
import TextAtom from "../atoms/text.atom";
import TitleAtom from "../atoms/title.atom";
import { MenuIcon } from "../icons/menu.icon";
import ButtonMolecule from "../molecules/button.molecule";

const FooterOrganism = () => {
  return (
    <footer className="w-full portrait:h-[5vh] h-[5vh] flex justify-center items-center portrait:px-md px-mdl border-t-[0.025vh] border-light-secondary dark:border-dark-secondary night-owl:border-night-owl-secondary">
      <TextAtom
        className="tracking-widest"
        size="base"
        text="Tailwind Theme Switcher template"
      />
    </footer>
  );
};

export default FooterOrganism;
