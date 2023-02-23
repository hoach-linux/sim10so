import { Card, Col, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Card1 = () => (
  <Link to="/admin/order" style={{ minWidth: "100%" }}>
    <Card
      isPressable
      css={{ minWidth: "320px", minHeight: "320px", bg: "#000" }}
    >
      <Card.Body
        css={{
          position: "absolute",
          zIndex: 1,
          display: "flex",
          minHeight: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col>
          <Text color="white" h2>
            Xem đơn đặt hàng
          </Text>
        </Col>
      </Card.Body>
      <Card.Image
        src="https://cdn.dribbble.com/users/283939/screenshots/2986023/gradient_gif.gif"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  </Link>
);
