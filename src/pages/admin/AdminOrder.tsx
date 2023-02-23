import * as React from "react";
import OrderList from "../../components/Admin/OrderList";
import { Button, Loading, Spacer, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { useFetching } from "../../hooks/useFetching";

const AdminOrder = () => {
  const channel = supabase.channel("orders");
  const [orders, setOrders]: [orders: any, setOrders: any] = useState([]);
  const ordersStatus = "active";
  const [ordersFetching, loading, error] = useFetching(async () => {
    let { data: data } = await supabase
      .from("orders")
      .select("*")
      .eq("status", "active");

    setOrders(data);
  });

  useEffect(() => {
    ordersFetching();
  }, []);

  channel
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "orders",
      },
      (data) => setOrders([data.new, ...orders])
    )
    .on(
      "postgres_changes",
      {
        event: "DELETE",
        schema: "public",
        table: "orders",
      },
      (data) =>
        setOrders(orders.filter((order: any) => order.id !== data.old.id))
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "orders",
      },
      async () => {
        let { data: data } = await supabase
          .from("orders")
          .select("*")
          .eq("status", "active");
        setOrders(data);
      }
    )
    .subscribe();

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}
      >
        <Spacer />
        <Loading size="lg" />
      </div>
    );
  if (!orders || !orders.length)
    return (
      <Text h1 css={{ textAlign: "center", padding: "10px 0" }}>
        Không có đơn đặt hàng bây giờ
      </Text>
    );
  if (error) return <Text>{error}</Text>;

  return (
    <div style={{ padding: "10px 0" }}>
      <OrderList orders={orders} />
    </div>
  );
};

export default AdminOrder;
