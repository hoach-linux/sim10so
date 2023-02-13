import * as React from "react";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Box } from "./components/Box";
import { Container } from "@nextui-org/react";
import Header from "./components/Header/Header";
import SimList from "./components/SimList";

const darkTheme = createTheme({
  type: "dark",
});

function App() {
  const [sims, setSims] = useState([
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
    { number: "0937.24.8688", price: 1200000 },
  ]);

  return (
    <NextUIProvider>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navbar />
        <Container
          css={{
            padding: "10px",
          }}
        >
          <Header />
          <SimList sims={sims} />
        </Container>
      </Box>
    </NextUIProvider>
  );
}

export default App;
