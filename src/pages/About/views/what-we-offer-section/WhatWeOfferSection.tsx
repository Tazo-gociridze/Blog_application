import { FC } from "react";
import Offer from "../../components/WhatWeOffer/Offer/Offer";

const WhatWeOfferSection: FC = () => {
  return (
    <div className="mt-[40px]">
      <h2 className="text-center text-[30px] font-[500]">What We Offer</h2>
      <div className="mt-[40px] grid grid-cols-[1fr_1fr_1fr] gap-[20px]">
        <Offer/>
        <Offer/>
        <Offer/>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
