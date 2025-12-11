"use client";

import React from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-primitives";

export default function NavbarMenu() {
  const [active, setActive] = React.useState(null);

  return (
    <div className="hidden md:flex fixed top-6 left-0 w-full justify-center z-[50]">
      <Menu setActive={setActive}>

        
        <MenuItem item="Features" active={active} setActive={setActive}>
          <div className="flex flex-col space-y-4">
            <ProductItem
              title="Smart Routing"
              description="Optimize LLM API calls intelligently."
              src="/api.png"
              href="#features"
            />
            <ProductItem
              title="Usage Analytics"
              description="Track cost, latency, and tokens."
              src="/analytics.png"
              href="#features"
            />
          </div>
        </MenuItem>

        {/* HOW IT WORKS */}
        <MenuItem item="How it Works" active={active} setActive={setActive}>
          <HoveredLink href="#how">Understand the Pipeline</HoveredLink>
        </MenuItem>

        {/* PRICING */}
        <MenuItem item="Pricing" active={active} setActive={setActive}>
          <HoveredLink href="#pricing">View Pricing</HoveredLink>
        </MenuItem>

      </Menu>
    </div>
  );
}
