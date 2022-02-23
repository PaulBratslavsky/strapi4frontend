import React from "react";
import tw from "tailwind-styled-components";

const GridItemTWBase = tw.div`
  lg:col-span-6 lg:self-center 
`;

export default function GridItem({ children }) {
  return (
    <GridItemTWBase>
      {children}
    </GridItemTWBase>
  );
}

