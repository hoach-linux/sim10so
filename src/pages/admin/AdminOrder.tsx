import * as React from "react";
import { useState, useEffect } from "react";
import OrderList from "../../components/Admin/OrderList";
import { useFetching } from "../../hooks/useFetching";
import OrderService from "../../API/OrderService";
import { Loading, Spacer, Text } from "@nextui-org/react";

const AdminOrder = () => {
  let timerForRefetch = 5000;
  const [orders, setOrders] = useState([]);
  const [fetchOrders, ordersLoading] = useFetching(async () => {
    const response: any = await OrderService.getOrder(20, 1);

    setOrders(response.data);
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const reFetchOrders = () => fetchOrders();
  return (
    <div>
      {!ordersLoading && orders.length >= 1 ? (
        <OrderList orders={orders} reFetchOrders={reFetchOrders} />
      ) : ordersLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      ) : (
        <Text h1 css={{ textAlign: "center" }}>
          Bạn không có đơn đặt hàng bây giờ
        </Text>
      )}
    </div>
  );
};

export default AdminOrder;
