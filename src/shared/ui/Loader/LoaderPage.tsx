import "./LoaderPage.scss";

import type { PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderPageProps {
  className?: string;
}
export function LoaderPage(props: PropsWithChildren<LoaderPageProps>) {
  const { className } = props;
  return (
    <div className={classNames('PageLoader',{}, [className])}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}



