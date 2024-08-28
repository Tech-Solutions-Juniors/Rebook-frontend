import React from "react";

interface Props {
  show: boolean;
  component: JSX.Element;
}

export const Optional: React.FC<Props> = ({ show, component }) => {
  return <>{show && component}</>;
};
