import * as React from "react";
import { useState } from "react";
import { Card, Grid, Text } from "@nextui-org/react";

export default function Sim({ sim }: { sim: any }) {
  const [provider, setProvider] = useState(sim.provider.toLowerCase().trim());
  const providers = {
    mobifone: "b26950bd-e9e5-4d37-a819-76137c3a8bb6",
    viettel: "4bb048f8-5047-44bb-9b3a-c80cb6130e8e",
  };
  return (
    <Card isPressable css={{ p: "$6", mw: "400px" }} variant="flat">
      <Card.Header>
        {provider === "viettel" ? (
          <img
            alt="Viettel"
            src={`https://directus.hoach.skryonline.com/assets/${providers.viettel}`}
            width="34px"
            height="34px"
          />
        ) : (
          <img
            alt="Mobifone"
            src={`https://directus.hoach.skryonline.com/assets/${providers.mobifone}`}
            width="34px"
            height="34px"
          />
        )}
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
