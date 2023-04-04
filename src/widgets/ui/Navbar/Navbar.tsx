import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import { AppLink, appLinkTheme } from "shared/ui/Applink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={appLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          {t("главная")}
        </AppLink>
        <AppLink to={"/about"} theme={appLinkTheme.PRIMARY}>
          {t("о нас")}
        </AppLink>
      </div>
    </div>
  );
};

