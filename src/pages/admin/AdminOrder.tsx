import * as React from "react";
import OrderList from "../../components/Admin/OrderList";
import { Loading, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import supabase from "../../supabase";

const AdminOrder = () => {
  const channel = supabase.channel("orders");
  const [orders, setOrders]: [orders: any, setOrders: any] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]: [error: any, setError: any] = useState("");
  const ordersStatus = "active";

  channel.on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "orders",
      filter: `status=eq.${ordersStatus}`,
    },
    (payload) => console.log(payload)
  );
  channel.on(
    "postgres_changes",
    {
      event: "DELETE",
      schema: "public",
      table: "orders",
      filter: `status=eq.${ordersStatus}`,
    },
    (payload) => console.log(payload)
  );
  channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      const res = await supabase.from("orders").select("*");

      if (res.data) {
        setOrders(res.data.filter((order) => order.status == "active"));
      } else if (res.error) {
        setError(res.error);
      }
      setLoading(false);
    }
  });

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
