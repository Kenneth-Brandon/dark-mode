import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkModeOn, setDarkModeOn] = useLocalStorage("darkModeOn", false);

  useEffect(() => {
    darkModeOn
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkModeOn]);

  return [setDarkModeOn];
};
