import * as React from "react";
import {
  Navbar,
  Tooltip,
  Text,
  Link as NextLink,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const collapseItems = [
    { name: "Trang chủ", link: "/" },
    { name: "Thuê Sim VIP", link: "/thuesimvip" },
    { name: "Định giá sim 4.0", link: "https://dinhgiasim.com.vn/" },
    {
      name: "Phong Thủy",
      link: "https://xemvanmenh.net/xem-boi-so-dien-thoai.html",
    },
  ];

  function goTo(e: any) {
    if (e === "facebook") {
      window.open("https://www.facebook.com/messages/t/100010209732994");
    } else if (e === "zalo") {
      window.open("https://zalo.me/0904887766");
    } else {
      window.open("tel:+84904887766");
    }
  }

  return (
    <Navbar variant="floating" isBordered>
      <Navbar.Toggle
        aria-label="toggle navigation"
        css={{
          "@sm": {
            display: "none",
          },
        }}
      />
      <Navbar.Brand>
        <Text b color="inherit">
          SIM10SO.COM
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="default">
        <Navbar.Link isActive>
          <Link to="/">Trang chủ</Link>
        </Navbar.Link>
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
      <Navbar.Collapse>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
