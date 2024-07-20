"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./navbar-menue";
import { cn } from "@/lib/utils";
import AboutLayout from "../Layout/AboutLayout";
import SupportLayout from "../Layout/SupportLayout";
import { supporItem } from "@/components/Constants/index";
import Databank from "../Layout/Databank";
import ProductLayout from "../Layout/ProductLayout";
export default function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0  mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <AboutLayout />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <ProductLayout
            setHoveredItem={function (item: string | null): void {
              throw new Error("Function not implemented.");
            }}
            setHeading={function (heading: string | null): void {
              throw new Error("Function not implemented.");
            }}
            setIsVisible={function (visible: boolean): void {
              throw new Error("Function not implemented.");
            }}
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Support">
          <SupportLayout
            setHoveredItem={function (item: any): void {
              throw new Error("Function not implemented.");
            }}
            supporItem={supporItem}
            type={""}
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Databank">
          <Databank />
        </MenuItem>
      </Menu>
    </div>
  );
}
