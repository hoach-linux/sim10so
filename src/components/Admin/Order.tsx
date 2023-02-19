import * as React from "react";
import { Card, Text, Button, Row, Collapse } from "@nextui-org/react";

export default function Order({ order }: { order: any }) {
  const sim = JSON.parse(order.sim);

  return (
    <Card variant="bordered" isHoverable>
      <Card.Header>
        <Text b>{order.name}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text>{order.address}</Text>
        <Text>{order.numberPhone}</Text>
        <Collapse title="Thông tin về sim" bordered css={{ marginTop: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>Số bán</Text>
            <Text>{sim.number}</Text>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>Giá bán</Text>
            <Text>
              {Number(sim.price.split(",").join("")).toLocaleString("vn")}₫
            </Text>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>Nhà mạng</Text>
            <Text>{sim.provider}</Text>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>Tình trạng sim</Text>
            <Text>{sim.state}</Text>
          </div>
        </Collapse>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-between">
          <Button size="sm" light color="error">
            Cancel
          </Button>
          <Button size="sm">Agree</Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
