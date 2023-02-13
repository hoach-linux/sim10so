import * as React from "react";
import { Grid, Text } from "@nextui-org/react";
import Sim from "./Sim";

const SimList = ({ sims, title }: { sims: any; title: string }) => {
  interface ISim {
    number: string;
    price: number;
  }

  return (
    <div>
      <Text h2>{title}</Text>
      <Grid.Container gap={2} justify="space-between">
        {sims.map((sim: ISim, index: number) => (
          <Grid xs={6} sm={3} key={index}>
            <Sim sim={sim} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default SimList;
