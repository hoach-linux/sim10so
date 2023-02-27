import {
  Button,
  Card,
  Link as NextLink,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

function SidebarCard({
  items,
  filterTitle,
}: {
  items: any;
  filterTitle: string;
}) {
  return (
    <Card css={{ mw: "100%" }} variant="bordered">
      <Card.Header>
        <Text b>{filterTitle}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <ul>
          {items.map((item: string) => (
            <div key={item}>
              <Link to={item}>
                <NextLink block color="default" css={{ minWidth: "100%" }}>
                  {item}
                </NextLink>
              </Link>
            </div>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default SidebarCard;
