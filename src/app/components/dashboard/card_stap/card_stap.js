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
const CardStap = () => {
  const CardList = [
    {
      Title: "Download",
      SubTitle:
        "Download the app from Play Store or app Store On your cell phone.",
      img: "./assetes/download_icon.svg",
    },

    {
      Title: "Register",
      SubTitle:
        "Complete the registration with your data from the app and get your virtual card.",
      img: "./assetes/register-icon.svg",
    },

    {
      Title: "Activate",
      SubTitle:
        "Receive your incedo card within 15 business days,free and throughout the country.",
      img: "./assetes/activate_icon.svg",
    },

    {
      Title: "Use",
      SubTitle:
        "Activate your card From the app and load balance to start using it!",
      img: "./assetes/use_icon.svg",
    },
  ];
  return (
    <>
      <LazyShow>
        <div className="grid xl:grid-cols-4 lg:grid-cols-1 gap-8 py-6">
          {CardList.map((item, index) => {
            return (
              <div className={`ibFOtI2 cardAnimeson${index}`} key={index}>
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
export default CardStap;
