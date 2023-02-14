import * as React from "react";
import { Navbar, Text, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const collapseItems = [
    { name: "Sim số đẹp", link: "/" },
    { name: "Thuê Sim VIP", link: "/thuesimvip" },
    { name: "Định giá sim 4.0", link: "/dinhgiasim4" },
    { name: "Cầm Sim Đẹp", link: "/camsimdep" },
  ];

  return (
    <Navbar variant="sticky" isBordered isCompact>
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
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item.link}>
            <Button
              flat
              css={{
                minWidth: "100%",
              }}
            >
              <Link to={item.link}>{item.name}</Link>
            </Button>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
