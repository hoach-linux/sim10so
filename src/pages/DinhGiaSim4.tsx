import * as React from "react";
import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Papa from "papaparse";
import axios from "axios";

const DinhGiaSim4 = () => {
  // const [simList, setSimList]: [simlist: any, setSimList: any] = useState([]);

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   const file = e.target.file_upload.files[0];

  //   Papa.parse(file, {
  //     header: true,
  //     complete: function (result: any) {
  //       setSimList(result.data);
  //     },
  //   });
  // };

  // useEffect(() => {
  //   console.log(simList);
  //   axios.post(
  //     "https://directus.hoach.skryonline.com/flows/trigger/fa1f5e7b-df4b-4147-a24b-891738be6eb7",
  //     simList
  //   );
  // }, [simList]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Text css={{ textAlign: "center" }} h1>
        Định giá sim 4.0
      </Text>
      {/* <form action="" method="POST" onSubmit={(e) => handleClick(e)}>
        <input type="file" name="file_upload" id="file_upload" />
        <Button type="submit">Submit</Button>
      </form> */}
    </motion.div>
  );
};

export default DinhGiaSim4;
