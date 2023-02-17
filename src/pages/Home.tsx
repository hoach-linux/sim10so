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
  const searchingParameters = {
    limit: 5,
    page: 1,
    keyword: "111",
  };
  const searchingParameters2 = {
    limit: 5,
    page: 1,
    keyword: "222",
  };
  const searchingParameters3 = {
    limit: 5,
    page: 1,
    keyword: "333",
  };
  const searchingParameters4 = {
    limit: 5,
    page: 1,
    keyword: "444",
  };
  const [sims, setSims] = useState([]);
  const [simsTamHoa, setSimsTamHoa]: [simsTamHoa: any, setSimsTamHoa: any] =
    useState([]);
  const [viettel, setViettel] = useState([]);
  const [mobifone, setMobifone] = useState([]);
  const [fetchSims, simsLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(20, 1);

    setSims(response.data);
  });
  const [fetchSimsTamHoa, simsTamHoaLoading] = useFetching(async () => {
    const response: any = await SimService.getSimBySearch(searchingParameters);
    const response2: any = await SimService.getSimBySearch(
      searchingParameters2
    );
    const response3: any = await SimService.getSimBySearch(
      searchingParameters3
    );
    const response4: any = await SimService.getSimBySearch(
      searchingParameters4
    );

    setSimsTamHoa([
      ...response.data,
      ...response2.data,
      ...response3.data,
      ...response4.data,
    ]);
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
        <SimList sims={sims} title="Sim số đẹp" />
      )}
      {simsTamHoaLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={simsTamHoa} title="Sim Tam Hoa - Lục Quý Giá Gốc" />
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
