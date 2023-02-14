import * as React from "react";
import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";

const CamSimDep = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Text css={{ textAlign: "center" }} h1>
        Cầm Sim Đẹp
      </Text>
    </motion.div>
  );
};

export default CamSimDep;
