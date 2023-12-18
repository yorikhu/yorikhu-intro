import { MouseEventHandler, ReactNode } from "react";

export type Props = {
  title?: ReactNode;
  icon?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
};
