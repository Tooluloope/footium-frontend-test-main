import Layout from "./Layout";
import React from "react";
import { FunctionalComponentWithChildren } from "utility/types";

const LayoutContainer: React.FC<FunctionalComponentWithChildren> = ({
  children,
}) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;
