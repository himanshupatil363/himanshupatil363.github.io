import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Reveal = ({ children, className,delay,duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", width: "fit-content" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{
          duration: duration ? duration : 0.5,
          delay: delay ? delay : 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
