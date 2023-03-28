"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { LazyShow } from "../helper/LazyShow";
import Achievement from "./achievement/achievement";
import DashboardBanner from "./banner";
import BannerTopPart from "./bannerTopPart";
import Card from "./card/card";
import CardOne from "./card1";
import CardTwo from "./card2";
import CardThree from "./card3";
import CardFour from "./card4";
import CardFive from "./card5";
import Cards from "./cards";
import Rewards from "./cardss";
import CardStap from "./card_stap/card_stap";
import Customers from "./customers";
import Help from "./help/help";
import Manageupgrade from "./manageupgrade";
import PersonalLoans from "./personalloans";
import RewardsChecking from "./rewardschecking";
import UpgradeCard from "./upgradecard/upgradecard";
import Products from "./products";

const Dashboard = () => {
  return (
    <>
      <div className="top_banner">
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <div className="relative">
            <BannerTopPart />
          </div>
        </div>
      </div>
      {/*  <div className="w-full bg-[#153271]">
            <LazyShow
              easeOut={true}
              useRef={useRef}
              useState={useState}
              useEffect={useEffect}
            >
              <Card />
            </LazyShow>
  </div> */}

      {/* <LazyShow
        easeOut={false}
        useRef={useRef}
        useState={useState}
        useEffect={useEffect}
      >
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] py-[125px] min-h-[550px] products">
          <div className="w-full">
            <Products />
          </div>
        </div>
</LazyShow>  */}

      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <CardOne />
      </div>

      <div className="bg-[#F4F4F4]">
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <CardTwo />
        </div>
      </div>

      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <CardThree />
      </div>

      <div className="bg-[#F4F4F4]">
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <CardFour />
        </div>
      </div>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <CardFive />
      </div>
      {/* <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4] ">
        <RewardsChecking />
      </div> */}

      <div className="bg-[#153271]">
        <LazyShow
          easeOut={false}
          useRef={useRef}
          useState={useState}
          useEffect={useEffect}
        >
          <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] py-[125px] min-h-[550px]">
            <h3 class="onboarding mb-5 text-start">
              {" "}
              Seamless Onboarding as easy as 1,2,3
            </h3>
            <div className="w-full">
              <CardStap />
            </div>
          </div>
        </LazyShow>
      </div>
      {/* <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <PersonalLoans />
      </div> */}
      <div className="bg-[#fff]">
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <UpgradeCard />
        </div>
      </div>

      {/* <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4] py-20">
        <Help />
      </div> */}
      <div className="Manageupgrade_bg">
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <Manageupgrade />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
