import * as React from "react";
import { Navbar, Text, Link as NextLink } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const collapseItems = [{ name: "Trang chủ", link: "/admin" }];

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
          <Link to="/admin">Trang chủ</Link>
        </Navbar.Link>
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
