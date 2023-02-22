import * as React from "react";
import OrderList from "../../components/Admin/OrderList";
import { Loading, Spacer, Text } from "@nextui-org/react";
import { useRealtime } from "react-supabase";

const AdminOrder = () => {
  const [result, reexecute] = useRealtime("orders");
  let { data: orders, error, fetching } = result;
  orders = orders?.filter((order) => order.status === "active");

  if (fetching)
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
  if (error) return <Text>{error.message}</Text>;

  return (
    <div style={{ padding: "10px 0" }}>
      <OrderList orders={orders} />
    </div>
  );
};

export default AdminOrder;
