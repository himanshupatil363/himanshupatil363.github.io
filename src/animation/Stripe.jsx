import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Reveal from "./Reveal";

const Stripe = ({ children, className, duration, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      slideControl.start("visible");
    }
  }, [isInView, slideControl]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", width: "fit-content" }}
    >
      <Reveal duration={duration} delay={delay}>
        {children}
      </Reveal>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#AD9ED9",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Stripe;
