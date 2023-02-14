import * as React from "react";
import { Container } from "@nextui-org/react";
import Header from "../components/Header/Header";
import SimList from "../components/SimList";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [simsTamHoa, setSimsTamHoa] = useState([
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
    { number: "0935.123.666", price: 30000000 },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      style={{ maxWidth: "1440px", margin: "0 auto", padding: "10px" }}
    >
      <Header />
      <SimList sims={sims} title="Sim số đẹp giá rẻ" />
      <SimList sims={simsTamHoa} title="Sim Tam Hoa Giá Gốc" />
    </motion.div>
  );
};

export default Home;
