import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Papa from "papaparse";
import axios from "axios";

function PushSim() {
  const [simList, setSimList]: [simlist: any, setSimList: any] = useState([]);
  let allSimData: any = [];

  const handleClick = (e: any) => {
    e.preventDefault();
    const file = e.target.file_upload.files[0];

    Papa.parse(file, {
      worker: true,
      header: true,
      step: function (row) {
        allSimData.push(row.data);
      },
      complete: function () {
        setSimList(allSimData);
      },
    });
  };

  useEffect(() => {
    pushSim();
  }, [simList]);

  async function pushSim() {
    await axios.post(
      "https://directus.hoach.skryonline.com/flows/trigger/fa1f5e7b-df4b-4147-a24b-891738be6eb7",
      simList,
      {
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      }
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <form action="" method="POST" onSubmit={(e) => handleClick(e)}>
        <input type="file" name="file_upload" id="file_upload" />
        <Button type="submit">Submit</Button>
      </form>
    </motion.div>
  );
}

export default PushSim;
