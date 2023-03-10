import * as React from "react";
import { useState, useEffect } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import { Modal, Input, Row, Loading, Button } from "@nextui-org/react";
import { faHouse, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetching } from "../hooks/useFetching";
import supabase from "../supabase";

export default function Sim({
  sim,
  openSnackbar,
}: {
  sim: any;
  openSnackbar: any;
}) {
  const [provider, setProvider] = useState(sim.provider.toLowerCase().trim());
  const providers = {
    mobifone: "b26950bd-e9e5-4d37-a819-76137c3a8bb6",
    viettel: "4bb048f8-5047-44bb-9b3a-c80cb6130e8e",
  };
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    numberPhone: "",
    sim: sim,
    status: "active",
  });
  const [showRequired, setShowRequired] = useState(false);
  const [orderingSim, orderLoading] = useFetching(async () => {
    const { data, error } = await supabase.from("orders").insert([orderData]);
  });
  const openModal = () => setVisible(!visible);
  const closeModal = () => setVisible(false);
  const requiredConditions =
    orderData.name.length >= 1 &&
    orderData.address.length >= 1 &&
    orderData.numberPhone.length >= 1;
  const order = async () => {
    if (requiredConditions) {
      setDisable(true);

      await orderingSim();

      closeModal();
      setDisable(false);
      openSnackbar(true);
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
      css={{
        p: "$6",
        minWidth: "162px",
      }}
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
        <Text>{sim.price.toLocaleString("vn")}???</Text>
      </Card.Body>
      <Modal
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            S??? sim:{" "}
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
            placeholder="H??? t??n"
            required
            minLength={1}
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
            placeholder="?????a ch???"
            required
            minLength={1}
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
            placeholder="??i???n tho???i"
            required
            minLength={1}
            type="number"
            onChange={(e) =>
              setOrderData({ ...orderData, numberPhone: e.target.value })
            }
            contentLeft={<FontAwesomeIcon icon={faPhone} />}
          />
          {showRequired && (
            <Row css={{ display: "flex", justifyContent: "space-between" }}>
              <Text>B???n qu??n vi???t:</Text>
              <div style={{ display: "flex", gap: "10px" }}>
                {orderData.name.length < 1 && (
                  <Text color="error" size={14}>
                    H??? t??n*
                  </Text>
                )}
                {orderData.address.length < 1 && (
                  <Text color="error" size={14}>
                    ?????a ch???*
                  </Text>
                )}
                {orderData.numberPhone.length < 1 && (
                  <Text color="error" size={14}>
                    ??i???n tho???i*
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
            ????ng
          </Button>
          <Button aria-label="Order" disabled={disable} auto onClick={order}>
            {orderLoading ? (
              <Loading size="sm" color="currentColor" />
            ) : (
              <p>Mua</p>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
