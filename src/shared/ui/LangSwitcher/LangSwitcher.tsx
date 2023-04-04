import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";


interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames(cls.lang, {}, [])}
    >
      {t("язык")}{" "}
    </Button>
  );
}
 
