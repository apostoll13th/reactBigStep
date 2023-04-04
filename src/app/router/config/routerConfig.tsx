import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/ErrorPage/ui/NotFoundPage";
import { MainPage } from "pages/MainPage";
import { Route, RouteProps } from "react-router-dom";

export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  ERROR = "error"
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "about",
  [AppRoute.ERROR]: "*"
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoute.ERROR]: {
    path: RoutePath.error,
    element: <NotFoundPage />
  },
};








