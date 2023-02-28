import * as React from "react";
import { motion } from "framer-motion";
import HomeMainContent from "../components/HomeMainContent";
import { Grid, Loading, Spacer } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SimList from "../components/SimList";
import { useFetching } from "../hooks/useFetching";
import SimService from "../API/SimService";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filteredSimList, setFilteredSimList] = useState([]);
  const [fetchFilteredSim, loading] = useFetching(async () => {
    const response: any = await SimService.getSimFilterPrice(
      searchParams.get("query")
    );

    setFilteredSimList(response.data);
  });

  useEffect(() => {
    if (searchParams.get("query")) {
      setShowFilteredList(true);
      fetchFilteredSim();
      console.log(searchParams.get("query"));
    } else {
      setShowFilteredList(false);
    }
  }, [searchParams]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Grid.Container gap={1} justify="center">
        <Grid xs={0} sm={3}>
          <Sidebar />
        </Grid>
        <Grid xs={12} sm={9}>
          {showFilteredList && !loading ? (
            <SimList sims={filteredSimList} title={searchParams.get("query")} />
          ) : loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "100%",
              }}
            >
              <Loading size="lg" />
            </div>
          ) : (
            <HomeMainContent />
          )}
        </Grid>
      </Grid.Container>
    </motion.div>
  );
};

export default Home;
