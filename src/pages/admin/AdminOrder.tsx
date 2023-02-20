import * as React from "react";
import { useState, useEffect } from "react";
import OrderList from "../../components/Admin/OrderList";
import { useFetching } from "../../hooks/useFetching";
import OrderService from "../../API/OrderService";
import { Loading, Spacer } from "@nextui-org/react";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [fetchOrders, ordersLoading] = useFetching(async () => {
    const response: any = await OrderService.getOrder(20, 1);

    setOrders(response.data);
  });

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      {!ordersLoading ? (
        <OrderList orders={orders} />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spacer />
          <Loading size="lg" />
        </div>
      )}
    </div>
  );
};

export default AdminOrder;
