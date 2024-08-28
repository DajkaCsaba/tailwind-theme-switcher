"use client";

import ColumnAtom from "@/components/atoms/column.atom";
import RowAtom from "@/components/atoms/row.atom";
import TextAtom from "@/components/atoms/text.atom";
import TitleAtom from "@/components/atoms/title.atom";
import ButtonMolecule from "@/components/molecules/button.molecule";
import ThemeTogglerOrganism from "@/components/organisms/theme-toggler.organism";
import { themeOptions } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-light-background dark:bg-dark-background night-owl:bg-night-owl-background">
      <ColumnAtom
        className={
          "justify-center items-center h-full portrait:w-[90%] w-[75%] mx-auto portrait:gap-base gap-basel"
        }
      >
        <TitleAtom size="elg" title="Tailwind Theme Switcher" />
        <TextAtom
          size="lg"
          className="portrait:text-justify text-center"
          text="A simple Tailwind CSS theme switcher template for Next.js projects, enabling quick and easy implementation of theme mode switching."
        />
        <RowAtom className="portrait:my-elg my-elgl">
          <ThemeTogglerOrganism options={themeOptions} />
        </RowAtom>
      </ColumnAtom>
    </main>
  );
}
