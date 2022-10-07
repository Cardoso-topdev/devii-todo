import React from "react";
import { Layout, LayoutProps } from "react-admin";

const EmptyLayout = () => {
  return <></>;
};

const CustomLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout
    {...props}
    appBar={EmptyLayout}
    menu={EmptyLayout}
    sx={{
      "& .MuiDrawer-root .MuiPaper-root": {
        width: 0,
      },
      "& .RaLayout-appFrame": {
        marginTop: 0,
      },
      "& .RaLayout-contentWithSidebar": {
        alignItems: "center",
      },
      "& .RaLayout-content": {
        alignItems: "center",
        padding: 5,
        width: "100%",
        minHeight: "calc(100vh - 100px)",
      },
    }}
  />
);

export default CustomLayout;
