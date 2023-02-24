import * as React from "react";
import { Grid } from "@nextui-org/react";
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
          placeholder="Tìm sim trên sim10so"
          size="xl"
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
          color="primary"
          bordered
          clearable
          css={{ minWidth: "100%", padding: "10px" }}
        />
        {searchSim.length >= 1 && (
          <SimList sims={searchSim} title={searchTitle} />
        )}
      </div>
      <Grid.Container
        gap={2}
        justify="center"
        css={{ marginBottom: "62px", marginTop: "10px" }}
      >
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
