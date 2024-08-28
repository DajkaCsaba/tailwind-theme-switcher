"use client";

import { useEffect, useState } from "react";
import ButtonMolecule from "../molecules/button.molecule";
import { ThemeOption } from "@/utils/type-aliasses";

type Props = {
  options: Map<ThemeOption, string>;
};

const ThemeTogglerOrganism = ({ options }: Props) => {
  const [theme, setTheme] = useState<ThemeOption>("light");
  const optionsArray = Array.from(options.keys());

  useEffect(() => {
    const selectedTheme = window.localStorage.getItem("selected-theme");

    if (selectedTheme) {
      setTheme(() => JSON.parse(selectedTheme) as ThemeOption);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      const removables = optionsArray.filter(
        (option: ThemeOption) => option !== theme,
      );
      html.classList.remove(...removables);
      html.classList.add(theme);
    }
  }, [optionsArray, theme]);

  const onToggle = () => {
    const currentIndex = optionsArray.indexOf(theme);
    if (currentIndex < options.size - 1) {
      setTheme(optionsArray[currentIndex + 1]);
      window.localStorage.setItem(
        "selected-theme",
        JSON.stringify(optionsArray[currentIndex + 1]),
      );
      return;
    }
    setTheme(optionsArray[0]);
    window.localStorage.setItem(
      "selected-theme",
      JSON.stringify(optionsArray[0]),
    );
  };

  return (
    <ButtonMolecule onClick={onToggle}>{options.get(theme)}</ButtonMolecule>
  );
};

export default ThemeTogglerOrganism;
