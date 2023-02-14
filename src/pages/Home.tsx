import * as React from 'react';
import { Container } from "@nextui-org/react";
import Header from "../components/Header/Header";
import SimList from "../components/SimList";
import { useState } from "react";

const Home = () => {
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
    <Container
      css={{
        padding: "10px",
      }}
    >
      <Header />
      <SimList sims={sims} title="Sim số đẹp giá rẻ" />
    </Container>
  );
};

export default Home;
