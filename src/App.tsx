import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { getDocumentTheme } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { createTheme } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Box } from "./components/Box";
import { Outlet } from "react-router-dom";
import "./style/main.css";

const darkTheme = createTheme({
  type: "dark",
});
const lightTheme = createTheme({
  type: "light",
});

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let theme = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });

    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
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
