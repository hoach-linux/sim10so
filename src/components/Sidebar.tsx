import { useState } from "react";
import SidebarCard from "./SidebarCard";
import { Spacer } from "@nextui-org/react";

function Sidebar({ setPage }: { setPage: any }) {
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
    "Sim Tam Hoa Kép",
  ]);
  const [simProvider, setSimProvider] = useState([
    "Sim Viettel",
    "Sim Mobifone",
    "Sim Vinaphone",
    "Sim Gmobile",
    "Sim Vietnamobile",
  ]);

  return (
    <div style={{ minWidth: "100%" }}>
      <SidebarCard
        items={simPrice}
        setPage={setPage}
        filterTitle="Sim theo giá"
      />
      <Spacer />
      <SidebarCard
        items={simDangCap}
        setPage={setPage}
        filterTitle="Sim đẳng cấp"
      />
      <Spacer />
      <SidebarCard
        items={simProvider}
        setPage={setPage}
        filterTitle="Sim theo mạng"
      />
    </div>
  );
}

export default Sidebar;
