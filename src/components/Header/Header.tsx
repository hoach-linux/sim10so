import * as React from "react";
import {
  Button,
  Grid,
  Loading,
  Popover,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { Card4 } from "./Card4";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import SimService from "../../API/SimService";
import { useFetching } from "../../hooks/useFetching";
import SimList from "../SimList";

const Header = () => {
  const [searchSim, setSearchSim] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searching, searchLoading] = useFetching(async () => {
    const response = await SimService.getSimBySearch({ keyword: searchInput });

    setSearchSim(response.data);
    setSearchTitle(`Tìm sim số đẹp: ${searchInput}`);
  });

  useEffect(() => {
    if (searchInput.length > 0) {
      searching();
    } else if (searchInput.length === 0) {
      setSearchSim([]);
    }
  }, [searchInput]);

  return (
    <div>
      <div style={{ minWidth: "100%" }}>
        <Input
          placeholder="Tìm sim trên simdep10so"
          size="xl"
          onChange={(e: any) => setSearchInput(e.target.value)}
          color="primary"
          aria-label="input"
          bordered
          clearable
          css={{ minWidth: "100%", padding: "0 5px 5px 5px" }}
        />
        {searchSim.length >= 1 ? (
          <SimList sims={searchSim} title={searchTitle} />
        ) : searchSim.length < 1 &&
          searchInput.length !== 0 &&
          !searchLoading ? (
          <Text h2 css={{ textAlign: "center" }}>
            Không tìm thấy sim
          </Text>
        ) : (
          searchLoading && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spacer y={3} />
              <Loading size="lg" />
            </div>
          )
        )}
      </div>
      <Grid.Container gap={1} justify="center" css={{ marginBottom: "62px" }}>
        <Grid xs={12} sm={4}>
          <Card1 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card2 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card3 />
        </Grid>
        <Grid xs={12} sm={12}>
          <Card4 />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Header;
