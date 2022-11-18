import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"

import { Link } from "react-router-dom";
import { AppLink, appLinkTheme } from "shared/ui/Applink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={appLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={appLinkTheme.PRIMARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
