"use client";
import { motion, useAnimation } from "framer-motion";
function useOnScreen(ref,useState,useEffect ,rootMargin = "0px") {
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
export const LazyShow = ({ easeOut, children,useRef,useEffect,useState }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef,useState,useEffect);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
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
    <div className="lazy-div flex items-center justify-center" ref={rootRef}>
      <motion.div
        initial={{ opacity: 0, x: easeOut ? -100 : 100 }}
        animate={controls}
        className='flex items-center justify-center'
      >
        {children}
      </motion.div>
    </div>
  );
};

export const LazyShowWithoutFlex = ({ easeOut, children,useRef,useEffect,useState }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef,useState,useEffect);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
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
        initial={{ opacity: 0, x: easeOut ? -100 : 100 }}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};