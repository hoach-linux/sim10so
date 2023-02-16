import * as React from "react";
import { Grid } from "@nextui-org/react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { Card4 } from "./Card4";
import { Input } from "@nextui-org/react";

const Header = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{ marginBottom: "62px" }}>
      <Input
        placeholder="Tìm sim trên sim10so"
        size="xl"
        color="primary"
        bordered
        clearable
        css={{ minWidth: "100%", padding: "10px" }}
      />
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
  );
};

export default Header;
