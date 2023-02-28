import {
  Button,
  Card,
  Link as NextLink,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function SidebarCard({
  items,
  filterTitle,
  setPage,
}: {
  items: any;
  filterTitle: string;
  setPage: any;
}) {
  const [query, setquery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

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
              <NextLink
                block
                onClick={() => {
                  setPage(1);
                  setSearchParams({ query: item });
                }}
                color="default"
                css={{ minWidth: "100%" }}
              >
                {item}
              </NextLink>
            </div>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default SidebarCard;
