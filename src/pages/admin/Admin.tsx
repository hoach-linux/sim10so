import * as React from "react";
import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "../../style/main.css";

const Admin = () => {
  return (
    <NextUIProvider>
      <Outlet />
    </NextUIProvider>
  );
};

export default Admin;
