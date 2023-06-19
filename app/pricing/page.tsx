import PriceCard from "@/components/PriceCard";
import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 px-4 py-8 md:p-8 lg:p-16">
      <PriceCard />
      <PriceCard />
      <PriceCard />
    </div>
  );
};

export default Pricing;
