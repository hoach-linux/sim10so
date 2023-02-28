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
import { Pagination } from "@nextui-org/react";

const Home = () => {
  const limit = 24;
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filteredSimList, setFilteredSimList] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [fetchFilteredSim, loading] = useFetching(async () => {
    const response: any = await SimService.getSimFilterPrice(
      searchParams.get("query"),
      page
    );

    setFilteredSimList(response.data);
    setTotalPage(Math.ceil(response.meta.filter_count / limit));
  });

  useEffect(() => {
    if (searchParams.get("query")) {
      setShowFilteredList(true);
      fetchFilteredSim();
    } else {
      setShowFilteredList(false);
    }
  }, [searchParams, page]);

  function resetPage(number: number) {
    setPage(number);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Grid.Container gap={1} justify="center">
        <Grid xs={0} sm={3}>
          <Sidebar setPage={resetPage} />
        </Grid>
        <Grid xs={12} sm={9}>
          {showFilteredList && !loading ? (
            <div>
              <SimList
                sims={filteredSimList}
                title={searchParams.get("query")}
              />
              {totalPage > 1 && (
                <Pagination
                  onChange={(e) => setPage(e)}
                  total={totalPage}
                  controls={false}
                  size="lg"
                  initialPage={page}
                />
              )}
            </div>
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
