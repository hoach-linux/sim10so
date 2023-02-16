import * as React from "react";
import { Button, Container } from "@nextui-org/react";
import Header from "../components/Header/Header";
import SimList from "../components/SimList";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFetching } from "../hooks/useFetching";
import SimService from "../API/SimService";
import { Loading, Spacer } from "@nextui-org/react";

const Home = () => {
  const [sims, setSims] = useState([]);
  const [simsTamHoa, setSimsTamHoa] = useState([]);
  const [fetchSims, simsLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(20, 1);

    setSims(response.data);
  });
  const [fetchSimsTamHoa, simsTamHoaLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(10, 2);

    setSimsTamHoa(response.data);
  });

  useEffect(() => {
    fetchSims();
    fetchSimsTamHoa();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      style={{ maxWidth: "1440px", margin: "0 auto", padding: "10px" }}
    >
      <Header />
      {simsLoading ? (
        <Loading size="lg" />
      ) : (
        <SimList sims={sims} title="Sim số đẹp giá rẻ" />
      )}
      {simsTamHoaLoading ? (
        <Loading size="lg" />
      ) : (
        <SimList sims={simsTamHoa} title="Sim Tam Hoa Giá Gốc" />
      )}
    </motion.div>
  );
};

export default Home;
