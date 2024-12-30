import { ChartSpline, ShoppingCart } from "lucide-react";
import React from "react";
import Pricing from "./Pricing";



const PricingListing = () => {
  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto py-12 font-Nunito ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg text-[#333333] flex items-center gap-2 font-bold">
          <ChartSpline color="#333333" /> Get Higher Search Engine Rankings For
          Your Business in Africa
        </h1>
        <p className="text-center text-sm leading-[27px]">
          Where do you look for a telephone number? In your telephone directory.
          But where do you look for the telephone number of an exporter? Most
          probably, in the exporters yellow pages. Why? Since the probability of
          locating a host of exporters is the highest in exporters yellow
          pages. Similar situation exists on Internet too. Search engines are
          used, but for business visitors, industry specific directories, search
          engines, online indices etc. are the best source of locating specific
          businesses.
        </p>
        <div className="flex flex-col items-start text-sm w-full gap-3 text-[#666666]">
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Receive business inquiries from African buyers
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Send messages to registered African businesses
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Display upto 10 product images
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Upload company profile
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Reach African buyers
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart color="#FF0000" size={15} />
            Promote your products in African markets
          </div>
        </div>
        <div className="text-center text-sm leading-[27px]">
          <p>
            Having a website, therefore, is not enough to fetch substantial
            business benefits, until your potential customers across the globe
            can reach it at a time when they are looking for products/services
            you offer. Our promotion chain encompasses a strategic selection of
            industry and region-specific search engines, directories, portal
            sites and online indices that fetch you marked response from focused
            business audience.
          </p>
          <p>
            The continuing link in the strategic promotion chain is your
            business announcement in major international and African search
            engines. Our list of international and Africa search engines extends
            to include Google, Yahoo, Yandex, Lycos, Hotbot, MSN, Sitereleases,
            Dmoz, AOL, MetaCrawler, Exite, AlltheWeb, Tafuta, GoBATLA, Yahoonoo,
            ikenya, irozho, Bongoza, WoYaa and many more...
          </p>
        </div>
        <p className="text-center text-sm">List your company on Africa Business Pages and reach your target African audiences. We have a history of getting results for our paying partners. Try us!</p>
      </div>
      <Pricing/>
    </div>
  );
};

export default PricingListing;
