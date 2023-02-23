import * as React from "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Grid } from "@nextui-org/react";

function AdminHeader() {
  return (
    <div>
      <Grid.Container gap={2} justify="center" css={{ marginBottom: "62px" }}>
        <Grid xs={12} sm={6}>
          <Card1 />
        </Grid>
        <Grid xs={12} sm={6}>
          <Card2 />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default AdminHeader;
