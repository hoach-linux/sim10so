import * as React from "react";
import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "../../style/main.css";
import { Box } from "../../components/Box";

const Admin = () => {
  return (
    <NextUIProvider>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "10px" }}>
          <Outlet />
        </div>
      </Box>
    </NextUIProvider>
  );
};

export default Admin;
