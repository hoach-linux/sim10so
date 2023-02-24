import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button, Card, Loading, Text } from "@nextui-org/react";
import Papa from "papaparse";
import axios from "axios";
import { File } from "../../components/icons/File";
import { useCheckingRegister } from "../../hooks/useCheckingRegister";

function PushSim() {
  const [simList, setSimList]: [simlist: any, setSimList: any] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkRegister] = useCheckingRegister("/admin/login");

  const text = "Bạn chưa chọn tệp";
  let allSimData: any = [];

  const handleClick = (e: any) => {
    e.preventDefault();
    const file = e.target.file_upload.files[0];

    if (file !== undefined) {
      setDisabled(true);
      setLoading(true);

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
    } else {
      setError(text);
    }
  };

  useEffect(() => {
    pushSim();
  }, [simList]);
  useEffect(() => {
    checkRegister();
  }, []);

  async function pushSim() {
    try {
      await axios.post(
        "https://directus.hoach.skryonline.com/flows/trigger/fa1f5e7b-df4b-4147-a24b-891738be6eb7",
        simList,
        {
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
        }
      );
    } catch (error: any) {
      setError(error.message);
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "90vh",
        alignItems: "center",
      }}
    >
      <Card css={{ maxW: "350px" }}>
        <Card.Body>
          <form
            action=""
            method="POST"
            onSubmit={(e) => handleClick(e)}
            style={{ minWidth: "100%" }}
          >
            <Button
              flat
              icon={<File />}
              css={{ minWidth: "100%", marginBottom: "10px" }}
              size="xl"
            >
              Chọn tệp
              <input
                style={{
                  opacity: 0,
                  position: "absolute",
                  minWidth: "100%",
                }}
                accept="text/csv"
                type="file"
                name="file_upload"
                id="file_upload"
              />
            </Button>
            {error && <Text color="error">{error}</Text>}
            <Button
              disabled={disabled}
              type="submit"
              css={{ minWidth: "100%" }}
            >
              {loading ? <Loading color="currentColor" /> : <p>Đẩy sim</p>}
            </Button>
          </form>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default PushSim;
