import * as React from "react";
import { Grid } from "@nextui-org/react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { Card4 } from "./Card4";
const Header = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{marginBottom: "62px"}}>
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
