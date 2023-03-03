import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Card4 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Thuê sim vip
        </Text>
        <Text h3 color="white">
          Dùng thử - hợp quá
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2022/10/19145722/sim-card-registration-scaled.jpg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Link to="/thuesimvip">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Xem Ngay
                </Text>
              </Link>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
