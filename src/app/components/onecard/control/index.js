/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { productionBrowserSourceMaps } from "../../../../../next.config";
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
        display: "block",
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <div className="lazy-div" ref={rootRef}>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
const Controls = () => {
  const CardList = [
    {
      Title: "Get everything you need",
      SubTitle:
        "Shop thousands of brands and millions of products, online and in-store.",
      img: "./assetes/shopping.gif",
    },

    {
      Title: "Pay later in multiple installments",
      SubTitle:
        "Choose to pay over 6 or 12 months or in 4 interest-free payments.",
      img: "./assetes/ontime.gif",
    },

    {
      Title: "Get rewarded for ontime payments",
      SubTitle:
        "Get assured rewards for every ontime payment",
      img: "./assetes/piggy.gif",
    },

   
  ];
  return (
    <>
    <br/>
    <div className="section--xs row center-xs ">
          <h3 data-color="content" className="paylatrhead">
           Manage your budget with iPayLatr<sup>TM</sup>
          </h3>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-1 gap-8 py-6">
          
          {CardList.map((item, index) => {
            return (
              <div className={`ibFOtI2 cardAnimeson${index}`} key={index}>
                <div>
                  <img
                    src={item.img}
                    alt="Borrow up to $50,000"
                    width="90"
                    height="90"
                    className="rounded-lg"
                  />
                  <p className="mb-2 font-bold text-[25px] text-[#3A3A3A]">{item.Title}</p>
                  <h2 className="kcBZpe flex text-[20px] font-semibold">
                    {item.SubTitle}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
  
    </>
  );
};
export default Controls;
