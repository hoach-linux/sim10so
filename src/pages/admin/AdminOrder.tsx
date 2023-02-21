import * as React from "react";
import { useState, useEffect } from "react";
import OrderList from "../../components/Admin/OrderList";
import { useFetching } from "../../hooks/useFetching";
import OrderService from "../../API/OrderService";
import { Loading, Spacer, Text } from "@nextui-org/react";
import supabase from "../../supabase";
import { useRealtime } from "react-supabase";

const AdminOrder = () => {
  const [result, reexecute] = useRealtime("orders");
  const { data: orders, error, fetching } = result;

  if (fetching)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spacer />
        <Loading size="lg" />
      </div>
    );
  if (!orders || !orders.length)
    return (
      <Text h1 css={{ textAlign: "center" }}>
        Bạn không có đơn đặt hàng bây giờ
      </Text>
    );
  if (error) return <Text>{error.message}</Text>;

  return (
    <div>
      <OrderList orders={orders} />
    </div>
  );
};

export default AdminOrder;
