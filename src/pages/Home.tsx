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
  const [viettel, setViettel] = useState([]);
  const [mobifone, setMobifone] = useState([]);
  const [fetchSims, simsLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(20, 1);

    setSims(response.data);
  });
  const [fetchSimsTamHoa, simsTamHoaLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(10, 3);

    setSimsTamHoa(response.data);
  });
  const [fetchViettel, viettelLoading] = useFetching(async () => {
    const response: any = await SimService.getSimByProvider(10, 1, "Viettel");

    setViettel(response.data);
  });
  const [fetchMobifone, mobifoneLoading] = useFetching(async () => {
    const response: any = await SimService.getSimByProvider(20, 1, "Mobifone");

    setMobifone(response.data);
  });

  useEffect(() => {
    fetchSims();
    fetchSimsTamHoa();
    fetchViettel();
    fetchMobifone();
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={sims} title="Sim số đẹp giá rẻ" />
      )}
      {simsTamHoaLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={simsTamHoa} title="Sim Tam Hoa Giá Gốc" />
      )}
      {viettelLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={viettel} title="Viettel" />
      )}
      {mobifoneLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={mobifone} title="Mobifone" />
      )}
    </motion.div>
  );
};

export default Home;
