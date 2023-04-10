import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icon/theme-dark.svg";
import LightIcon from "shared/assets/icon/theme-light.svg"
import { Button, ButtonTheme } from "../Button/Button";

interface ThemeSwitcherProps {
 className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
 
  return (
    <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
