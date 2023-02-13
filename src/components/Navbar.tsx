import * as React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";

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
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="default">
        <Navbar.Link href="#" isActive>
          Sim số đẹp
        </Navbar.Link>
        <Navbar.Link href="#">Thuê Sim VIP</Navbar.Link>
        <Navbar.Link href="#">Định giá sim 4.0</Navbar.Link>
        <Navbar.Link href="#">Cầm Sim Đẹp</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
