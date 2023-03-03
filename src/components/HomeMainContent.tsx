import * as React from "react";
import Header from "./Header/Header";
import SimList from "./SimList";
import { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import SimService from "../API/SimService";
import { Loading, Spacer } from "@nextui-org/react";

const HomeMainContent = () => {
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
  useState([]);
  const [mobifone, setMobifone] = useState([]);
  const [fetchSims, simsLoading] = useFetching(async () => {
    const response: any = await SimService.getSim(20, 1);

    setSims(response.data);
  });

  const [fetchMobifone, mobifoneLoading] = useFetching(async () => {
    const response: any = await SimService.getSimByProvider(20, 1, "Mobifone");

    setMobifone(response.data);
  });

  useEffect(() => {
    fetchSims();
    fetchMobifone();
  }, []);

  return (
    <div>
      <Header />
      {simsLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={sims} title="Sim số đẹp" />
      )}
      {mobifoneLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <SimList sims={mobifone} title="Mobifone" />
      )}
    </div>
  );
};

export default HomeMainContent;
