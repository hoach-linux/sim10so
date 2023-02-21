import * as React from "react";
import { Grid } from "@nextui-org/react";
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
          <Grid key={index} xs={12} sm={4} md={3}>
            <Order order={order} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default OrderList;
