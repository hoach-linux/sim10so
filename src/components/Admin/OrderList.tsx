import * as React from "react";
import { Grid, Text } from "@nextui-org/react";
import Order from "./Order";

const OrderList = ({ orders }: { orders: any }) => {
  interface IOrder {
    number: string;
    address: string;
    numberPhone: string;
    sim: string;
  }

  return (
    <div>
      <Grid.Container
        gap={2}
        justify="flex-start"
        css={{ marginBottom: "62px" }}
      >
        {orders.map((order: IOrder, index: number) => (
          <Grid xs={6} sm={3} key={index}>
            <Order order={order} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default OrderList;
