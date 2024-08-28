"use client";

import ColumnAtom from "../atoms/column.atom";
import RowAtom from "../atoms/row.atom";
import TitleAtom from "../atoms/title.atom";
import { MenuIcon } from "../icons/menu.icon";
import ButtonMolecule from "../molecules/button.molecule";

const HeaderOrganism = () => {
  return (
    <header className="w-full portrait:h-[7.5vh] h-[10vh] flex justify-between items-center portrait:px-md px-mdl border-b-[0.025vh] border-night-owl-secondary">
      <ColumnAtom>
        <TitleAtom
          className="portrait:hidden !text-left"
          title={"Tailwind Theme Switcher"}
        />
        <TitleAtom
          size="base"
          className="landscape:hidden  !text-left"
          title={"TTS"}
        />
      </ColumnAtom>
      <ColumnAtom className="!items-right">
        <ButtonMolecule className="ml-auto w-fit" onClick={() => void 0}>
          <MenuIcon />
        </ButtonMolecule>
      </ColumnAtom>
    </header>
  );
};

export default HeaderOrganism;
