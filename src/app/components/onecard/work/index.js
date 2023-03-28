/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
const Work = () => {
  const CardList = [
    {
      Title: "Get Card",
      SubTitle:
        "Get your 0 balance virtual card on approval",
      img: "./assetes/getcard.png",
    },

    {
      Title: "Purchase",
      SubTitle:
        "Make purchases and/or get funds sent to your account",
      img: "./assetes/purchase.png",
    },

    {
      Title: "Spread your spend",
      SubTitle:
        "You control how you pay for your purchases: Pay Now with no interest, or Pay Later",
      img: "./assetes/payLater.svg",
    },

  ];
  return (
    <>
      <LazyShow>
          <div className="grid xl:grid-cols-3 lg:grid-cols-1 gap-8 py-6">
          {CardList.map((item, index) => {
            return (
              <div className="ibFOtI2" key='index'>
                <div>
                  <img
                    src={item.img}
                    alt="Borrow up to $50,000"
                    width="90"
                    height="90"
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
      </LazyShow>
    </>
  );
};
export default Work;
