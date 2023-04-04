import cls from "./Sidebar.module.scss";

import { PropsWithChildren, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("сайдбартогл")}
      </button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
