import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggle = useToggle(isDark);

export const toggleTheme = () => {
  toggle();
};
