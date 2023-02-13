import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Box } from "./components/Box";
import Header from "./components/Header/Header";

const darkTheme = createTheme({
  type: "dark",
});

function App() {
  return (
    <NextUIProvider>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navbar />
        <div>
          <Header />
        </div>
      </Box>
    </NextUIProvider>
  );
}

export default App;
