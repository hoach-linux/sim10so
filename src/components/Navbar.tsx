import * as React from "react";
import {
  Switch,
  Navbar,
  Tooltip,
  Text,
  Link as NextLink,
  Dropdown,
  Button,
  changeTheme,
  useTheme,
  Collapse,
} from "@nextui-org/react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useState } from "react";
import useStore from "../store/useStore";

const NavbarComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const collapseItems = [
    { name: "Trang chủ", link: "/" },
    { name: "Thuê Sim VIP", link: "/thuesimvip" },
    { name: "Định giá sim 4.0", link: "https://dinhgiasim.com.vn/" },
    {
      name: "Phong Thủy",
      link: "https://xemvanmenh.net/xem-boi-so-dien-thoai.html",
    },
  ];
  const [simPrice, setSimPrice] = useState([
    "Sim dưới 500k",
    "Sim 1 - 3 triệu",
    "Sim 3 - 5 triệu",
    "Sim 5 - 10 triệu",
    "Sim 10 - 20 triệu",
    "Sim 20 - 50 triệu",
    "Sim 50 - 100 triệu",
    "Sim 100 - 200 triệu",
    "Sim 200 - 500 triệu",
    "Sim trên 500 triệu",
  ]);
  const [simDangCap, setSimDangCap] = useState([
    "Sim Lục Quý",
    "Sim Ngũ Quý",
    "Sim Tứ Quý",
  ]);
  const [simProvider, setSimProvider] = useState([
    "Sim Viettel",
    "Sim Mobifone",
    "Sim Vinaphone",
    "Sim Gmobile",
    "Sim Vietnamobile",
  ]);

  const { isDark } = useTheme();
  const resetPage = useStore((state: any) => state.resetPage);
  const changeMainTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };

  function goTo(e: any) {
    if (e === "facebook") {
      window.open("https://www.facebook.com/simsodepmobifone.vms");
    } else if (e === "zalo") {
      window.open("https://zalo.me/0904887766");
    } else {
      window.open("tel:+84904887766");
    }
  }

  return (
    <Navbar variant="sticky" isBordered>
      <Navbar.Toggle
        aria-label="toggle navigation"
        css={{
          "@sm": {
            display: "none",
          },
        }}
      />
      <Navbar.Brand>
        <Link to="/">
          <Text b color="default">
            SIM10SO.COM
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
        <Link
          to="/"
          style={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Trang chủ
        </Link>
        <Navbar.Link>
          <Link to="/thuesimvip">Thuê Sim VIP</Link>
        </Navbar.Link>
        <Navbar.Link href="https://dinhgiasim.com.vn/">
          Định giá sim 4.0
        </Navbar.Link>
        <Navbar.Link href="https://xemvanmenh.net/xem-boi-so-dien-thoai.html">
          Phong Thủy
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn={"sm"}>
        <Tooltip
          content={"Tổng đài"}
          rounded
          color="primary"
          placement="bottom"
        >
          <NextLink href="tel:+84904887766">
            <Button flat auto size="lg">
              <FontAwesomeIcon icon={faPhone} />
            </Button>
          </NextLink>
        </Tooltip>
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={isDark}
          size="xl"
          iconOn={<MoonIcon filled />}
          iconOff={<SunIcon filled />}
          css={{ padding: "0" }}
          onChange={changeMainTheme}
        />
        <Dropdown>
          <Dropdown.Button flat size="lg">
            Chat
          </Dropdown.Button>
          <Dropdown.Menu onAction={(e) => goTo(e)} color="primary">
            <Dropdown.Item key="phone" description="Gọi tổng đài">
              <FontAwesomeIcon icon={faPhone} />
            </Dropdown.Item>
            <Dropdown.Item key="facebook" description="Chat qua Facebook">
              Facebook
            </Dropdown.Item>
            <Dropdown.Item key="zalo" description="Chat qua Zalo">
              Zalo
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse css={{ zIndex: "100" }}>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item.link} css={{ padding: "0" }}>
            <Link
              to={item.link}
              style={{
                minWidth: "100%",
              }}
            >
              <Text h3>{item.name}</Text>
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem css={{ padding: "0" }}>
          <Collapse.Group>
            <Collapse title="Sim theo giá">
              {simPrice.map((item, index) => (
                <NextLink
                  block
                  key={item}
                  color="default"
                  onClick={() => {
                    resetPage();
                    setSearchParams({ query: item });
                  }}
                  css={{ minWidth: "100%" }}
                >
                  {item}
                </NextLink>
              ))}
            </Collapse>
            <Collapse title="Sim đẳng cấp">
              {simDangCap.map((item, index) => (
                <NextLink
                  block
                  key={item}
                  color="default"
                  onClick={() => {
                    resetPage();
                    setSearchParams({ query: item });
                  }}
                  css={{ minWidth: "100%" }}
                >
                  {item}
                </NextLink>
              ))}
            </Collapse>
            <Collapse title="Sim theo mạng">
              {simProvider.map((item, index) => (
                <NextLink
                  block
                  key={item}
                  onClick={() => {
                    resetPage();
                    setSearchParams({ query: item });
                  }}
                  color="default"
                  css={{ minWidth: "100%" }}
                >
                  {item}
                </NextLink>
              ))}
            </Collapse>
          </Collapse.Group>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
