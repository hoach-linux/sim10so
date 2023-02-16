import * as React from "react";
import {
  Navbar,
  Tooltip,
  Text,
  Link as NextLink,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const collapseItems = [
    { name: "Sim số đẹp", link: "/" },
    { name: "Thuê Sim VIP", link: "/thuesimvip" },
    { name: "Định giá sim 4.0", link: "/dinhgiasim4" },
    { name: "Cầm Sim Đẹp", link: "/camsimdep" },
  ];

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
        <Text b color="inherit">
          SIM10SO.COM
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="default">
        <Navbar.Link isActive>
          <Link to="/">Sim số đẹp</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/thuesimvip">Thuê Sim VIP</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/dinhgiasim4">Định giá sim 4.0</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/camsimdep">Cầm Sim Đẹp</Link>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
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
