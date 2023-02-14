import * as React from "react";
import { Navbar, Text, Button } from "@nextui-org/react";
import { Link as NextLink } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const collapseItems = [
    "Sim số đẹp",
    "Thuê Sim VIP",
    "Định giá sim 4.0",
    "Cầm Sim Đẹp",
  ];

  return (
    <Navbar variant="sticky">
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
      <Navbar.Content
        enableCursorHighlight
        hideIn="sm"
        variant="default"
      >
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
          <Navbar.CollapseItem key={item}>
            <NextLink
              css={{
                minWidth: "100%",
              }}
            >
              <Button
                flat
                css={{
                  minWidth: "100%",
                }}
              >
                {item}
              </Button>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
