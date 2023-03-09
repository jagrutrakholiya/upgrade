"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Achievement from "./achievement/achievement";
import DashboardBanner from "./banner";
import BannerTopPart from "./bannerTopPart";
import Card from "./card/card";
import Cards from "./cards";
import Rewards from "./cardss";
import Customers from "./customers";
import Help from "./help/help";
import Manageupgrade from "./manageupgrade";
import PersonalLoans from "./personalloans";
import RewardsChecking from "./rewardschecking";
import UpgradeCard from "./upgradecard/upgradecard";

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <div className="lazy-div" ref={rootRef}>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#c8dcff]  mb-[150px] pb-[100px]">
        <div className="relative">
          <BannerTopPart />
          <div className="absolute bottom-[-250px] w-full">
            <LazyShow>
              <Card />
            </LazyShow>
          </div>
        </div>
      </div>
      <LazyShow>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <DashboardBanner />
        </div>
      </LazyShow>

      <LazyShow>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
          <RewardsChecking />
        </div>
      </LazyShow>

      <LazyShow>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <PersonalLoans />
        </div>
      </LazyShow>

      <LazyShow>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
          <UpgradeCard />
        </div>
      </LazyShow>

      <LazyShow>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] Manageupgrade_bg">
          <Manageupgrade />
        </div>
      </LazyShow>
      {/* <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
        <Help />
      </div> */}
    </>
  );
};
export default Dashboard;
