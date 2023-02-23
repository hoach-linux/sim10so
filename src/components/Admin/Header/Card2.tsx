import { Card, Col, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Card2 = () => (
  <Link to="/admin/push_sim" style={{ minWidth: "100%" }}>
    <Card
      isPressable
      css={{ minWidth: "320px", minHeight: "320px", bg: "#000" }}
    >
      <Card.Body
        css={{
          position: "absolute",
          zIndex: "1",
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col>
          <Text color="white" h2>
            Đẩy sim
          </Text>
        </Col>
      </Card.Body>
      <Card.Image
        src="https://cdn.dribbble.com/users/156849/screenshots/6993098/32.gif"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  </Link>
);
