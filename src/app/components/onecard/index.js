"use client";
import React, { useEffect, useRef, useState } from "react";
import Help from "../dashboard/help/help";
import CashBack from "./Cashback";
import Controls from "./control";
import EnaBled from "./enabled";
import UpgradeOneCard from "./upgradeonecard";
import Work from "./work";
import Merchants from "../../iPayLatr/merchants";
import { LazyShow } from "../helper/LazyShow";

const Onecard = () => {
  return (
    <>
      <UpgradeOneCard />
      <LazyShow
        easeOut={false}
        useRef={useRef}
        useState={useState}
        useEffect={useEffect}
      >
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
      <Controls />
      </div>
      </LazyShow> 

<Merchants/>

     <br/><br/>
      <LazyShow
        easeOut={true}
        useRef={useRef}
        useState={useState}
        useEffect={useEffect}
      >
        
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] py-[125px] min-h-[550px] products">
        <h3 class="onboarding mb-5 text-start"> How it works</h3>
          <div className="w-full">
          <Work />
          </div>
        </div>
</LazyShow>  
     
    
       {/* <CashBack /> */}
        {/* <EnaBled /> */}
       {/* <Help /> */}
      
    </>
  );
};
export default Onecard;
