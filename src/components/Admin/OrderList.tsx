import * as React from "react";
import { Grid, Text } from "@nextui-org/react";
import Order from "./Order";

const OrderList = ({
  orders,
  reFetchOrders,
}: {
  orders: any;
  reFetchOrders: any;
}) => {
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
            <Order order={order} reFetchOrders={reFetchOrders} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default OrderList;
