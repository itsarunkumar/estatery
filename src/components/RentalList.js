"use client";

import CardS from "./Card";
import { useId } from "react";

export default function RentalList({ filteredData }) {
  return (
    <>
      {filteredData.map((item, i) => {
        return <CardS item={item} key={i} />;
      })}
    </>
  );
}
