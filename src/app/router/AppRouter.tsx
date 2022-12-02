import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoaderPage } from "shared/ui/Loader/LoaderPage";
import { routeConfig } from "./config/index";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <div className="page-wrapper">
              <Suspense
                fallback={
                  <div>
                    <LoaderPage />
                  </div>
                }
              >
                {element}
              </Suspense>
            </div>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
