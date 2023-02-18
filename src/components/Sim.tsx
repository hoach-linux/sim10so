import * as React from "react";
import { useState, useEffect } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import { Modal, Input, Row, Checkbox, Button } from "@nextui-org/react";
import { faHouse, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFetching } from "../hooks/useFetching";
import SimService from "../API/SimService";

export default function Sim({ sim }: { sim: any }) {
  const [provider, setProvider] = useState(sim.provider.toLowerCase().trim());
  const providers = {
    mobifone: "b26950bd-e9e5-4d37-a819-76137c3a8bb6",
    viettel: "4bb048f8-5047-44bb-9b3a-c80cb6130e8e",
  };
  const [visible, setVisible] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    numberPhone: "",
    sim: sim,
  });
  const [showRequired, setShowRequired] = useState(false);
  const [orderingSim, orderLoading] = useFetching(async () => {
    await SimService.postSimOrder(orderData);
  });
  const openModal = () => setVisible(!visible);
  const closeModal = () => setVisible(false);
  const requiredConditions =
    orderData.name.length >= 1 &&
    orderData.address.length >= 1 &&
    orderData.numberPhone.length >= 1;
  const order = async () => {
    if (requiredConditions) {
      await orderingSim();
      closeModal();
    } else {
      setShowRequired(true);
    }
  };
  useEffect(() => {
    if (requiredConditions) {
      setShowRequired(false);
    }
  }, [orderData]);
  return (
    <Card
      isPressable
      css={{ p: "$6", mw: "400px" }}
      variant="flat"
      onClick={openModal}
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
        blur
        aria-labelledby="modal-title"
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
            value={orderData.name}
            onChange={(e) =>
              setOrderData({ ...orderData, name: e.target.value })
            }
            contentLeft={<FontAwesomeIcon icon={faUser} />}
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
            value={orderData.address}
            onChange={(e) =>
              setOrderData({ ...orderData, address: e.target.value })
            }
            contentLeft={<FontAwesomeIcon icon={faHouse} />}
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
            value={orderData.numberPhone}
            type="number"
            onChange={(e) =>
              setOrderData({ ...orderData, numberPhone: e.target.value })
            }
            contentLeft={<FontAwesomeIcon icon={faPhone} />}
          />
          {showRequired && (
            <Row css={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Bạn quên viết:</Text>
              <div style={{ display: "flex", gap: "10px" }}>
                {orderData.name.length < 1 && (
                  <Text color="error" size={14}>
                    Họ tên*
                  </Text>
                )}
                {orderData.address.length < 1 && (
                  <Text color="error" size={14}>
                    Địa chỉ*
                  </Text>
                )}
                {orderData.numberPhone.length < 1 && (
                  <Text color="error" size={14}>
                    Điện thoại*
                  </Text>
                )}
              </div>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            aria-label="Close"
            auto
            flat
            color="error"
            onClick={closeModal}
          >
            Đóng
          </Button>
          <Button aria-label="Order" auto onClick={order}>
            Mua
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
