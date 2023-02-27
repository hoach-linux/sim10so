import * as React from "react";
import { motion } from "framer-motion";
import HomeMainContent from "../components/HomeMainContent";
import { Grid } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Grid.Container gap={2} justify="center">
        <Grid xs={0} sm={3}>
          <Sidebar />
        </Grid>
        <Grid xs={12} sm={9}>
          <HomeMainContent />
        </Grid>
      </Grid.Container>
    </motion.div>
  );
};

export default Home;
