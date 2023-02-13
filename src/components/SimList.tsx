import * as React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Sim from "./Sim";

const SimList = ({ sims }: { sims: any }) => {
  interface ISim {
    number: string;
    price: number;
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Text
            h4
            transform="uppercase"
            css={{ textAlign: "center", margin: 0 }}
          >
            {" "}
            Bộ Sưu Tập Sim Số Đẹp Giá Rẻ{" "}
          </Text>
        </Card.Body>
      </Card>
      <Grid.Container gap={2} justify="flex-start">
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
