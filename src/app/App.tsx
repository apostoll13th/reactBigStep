import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Navbar, Sidebar } from "widgets/index";
import AppRouter from "./router/AppRouter";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
