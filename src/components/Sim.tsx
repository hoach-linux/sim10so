import * as React from "react";
import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Sim({ sim }: { sim: any }) {
  const providerCode = sim.provider.toLowerCase();
  const providers = {
    mobifone: "b26950bd-e9e5-4d37-a819-76137c3a8bb6",
  };
  return (
    <Card isPressable css={{ p: "$6", mw: "400px" }} variant="flat">
      <Card.Header>
        <img
          alt="Mobifone"
          src={`https://directus.hoach.skryonline.com/assets/${providers.mobifone}`}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {sim.provider}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{sim.number}</Text>
        <Text>
          {Number(sim.price.split(",").join("")).toLocaleString("vn")}₫
        </Text>
      </Card.Body>
    </Card>
  );
}
