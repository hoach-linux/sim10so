import * as React from "react";
import { useState, useEffect } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import { Modal, Input, Row, Checkbox, Button } from "@nextui-org/react";

export default function Sim({ sim }: { sim: any }) {
  const [provider, setProvider] = useState(sim.provider.toLowerCase().trim());
  const providers = {
    mobifone: "b26950bd-e9e5-4d37-a819-76137c3a8bb6",
    viettel: "4bb048f8-5047-44bb-9b3a-c80cb6130e8e",
  };
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    numberPhone: "",
    data: sim,
  });
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const [showRequired, setShowRequired] = useState(false);
  const requiredConditions =
    userData.name.length >= 1 &&
    userData.address.length >= 1 &&
    userData.numberPhone.length >= 1;
  const order = () => {
    if (requiredConditions) {
      console.log(userData);

      closeModal();
    } else {
      setShowRequired(true);
    }
  };
  useEffect(() => {
    if (requiredConditions) {
      setShowRequired(false);
    }
  }, [userData]);
  return (
    <Card
      isPressable
      css={{ p: "$6", mw: "400px" }}
      variant="flat"
      onPress={openModal}
    >
      <Card.Header>
        {provider === "viettel" ? (
          <img
            alt="Viettel"
            src={`https://directus.hoach.skryonline.com/assets/${providers.viettel}`}
            width="34px"
            height="34px"
          />
        ) : (
          <img
            alt="Mobifone"
            src={`https://directus.hoach.skryonline.com/assets/${providers.mobifone}`}
            width="34px"
            height="34px"
          />
        )}
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {sim.provider}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{sim.number}</Text>
        <Text>
          {Number(sim.price.split(",").join("")).toLocaleString("vn")}₫
        </Text>
      </Card.Body>
      <Modal
        closeButton
        blur
        aria-label="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Số sim:{" "}
            <Text b size={18}>
              {sim.number}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Họ tên"
            required
            minLength={1}
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Địa chỉ"
            required
            minLength={1}
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Điện thoại"
            required
            minLength={1}
            value={userData.numberPhone}
            onChange={(e) =>
              setUserData({ ...userData, numberPhone: e.target.value })
            }
          />
          {showRequired && (
            <Row css={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Bạn quên viết:</Text>
              <div style={{ display: "flex", gap: "10px" }}>
                {userData.name.length < 1 && (
                  <Text color="error" size={14}>
                    Họ tên*
                  </Text>
                )}
                {userData.address.length < 1 && (
                  <Text color="error" size={14}>
                    Địa chỉ*
                  </Text>
                )}
                {userData.numberPhone.length < 1 && (
                  <Text color="error" size={14}>
                    Điện thoại*
                  </Text>
                )}
              </div>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Đóng
          </Button>
          <Button auto onPress={order}>
            Mua
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
