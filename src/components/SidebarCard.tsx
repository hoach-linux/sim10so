import { Card, Link as NextLink, Text } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import useStore from "../store/useStore";

function SidebarCard({
  items,
  filterTitle,
}: {
  items: any;
  filterTitle: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const resetPage = useStore((state: any) => state.resetPage);

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
                  resetPage();
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
