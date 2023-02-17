import * as React from "react";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Box } from "./components/Box";
import { Outlet } from "react-router-dom";
import "./style/main.css";

const darkTheme = createTheme({
  type: "dark",
});

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </NextUIProvider>
  );
}

export default App;
