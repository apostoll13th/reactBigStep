import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";


interface LangSwitcherProps {
  className?: string;
  short: boolean
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className, short } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames(cls.lang, {}, [])}
    >
      {!short ? t("язык") : t("коротыш")}
    </Button>
  );
}
 
