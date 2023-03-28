"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
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
const LazyShow = ({ easeOut, children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.7,
          duration: 0.7,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <div className="lazy-div" ref={rootRef}>
      <motion.div initial={{ opacity: 0, x: 100 }} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

const CopyrightCard = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left">
        <div className="grid-flow-col  lg:grid-cols-2 md:grid-cols-2">
          <div className="mb-16 xl:ml-20 lg:ml-[0px] ml-0 lg:mt-32 xl:mt-12 xl:mr-12 flex flex-col justify-center lg:items-start items-center">
            <h3 className="footer_text mb-5">
              We are a new kid on the block, eager to learn. All ideas and
              suggestions are welcome.
            </h3>
            <h3 className="footer_text mb-5">
              Copyright © 2023 Incedo Digital
            </h3>
          </div>
          {/* <LazyShow easeOut={false}> */}
            <div className="relative col-span-2 lg:block hidden">
              <img
                src="./assetes/card_group.svg"
                alt="alternative"
                className="inline absolute right-[-120px] bottom-0"
              />
            </div>
          {/* </LazyShow> */}
        </div>
      </header>
    </>
  );
};
export default CopyrightCard;
