import Header from "./components/Header";
import profile from "../src/assets/profile.webp";
import fluid from "../src/assets/fluid.png";
import { useEffect, useRef } from "react";
import Reveal from "./animation/Reveal";
import Stripe from "./animation/Stripe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  let ref = useRef(null);
  const speed = 1 / 15;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => -value * speed);
  const yimg = useTransform(scrollY, (value) => {
    return value < 320 ? 0 : ((-value + 320) * 1) / 2;
  });
  // const handleResume = () => {
  //   const a = document.createElement("a");
  //   a.href = `${url}/api/fetch-resume`;
  //   a.download = "Himanshu Patil.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  // };
  const [scrolledToDiv, setScrolledToDiv] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const divPosition = document.getElementById("mydiv").offsetTop;
      if (scrollY >= divPosition) {
        setScrolledToDiv(true);
      } else {
        setScrolledToDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full scroll-smooth">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="h-[10%] fixed top-0 z-50 w-full">
        <Header y={y} scrolledToDiv={scrolledToDiv} />
      </div>
      <motion.div
        style={{ y: y }}
        ref={ref}
        className="bg-[#f5f0eb] dark:bg-gray-700 dark:text-white h-[100%] flex flex-col md:flex-row  w-full items-center justify-around top-0 fixed"
      >
        <div className="w-full px-10 md:px-0 mt-28 md:mt-0 md:w-1/2">
          <div className=" text-4xl md:text-7xl font-bold sticky top-0 ">
            <Reveal>Hello!</Reveal>
            <div className="flex flex-col md:felx-row">
              <Reveal> I am&nbsp;</Reveal>
              <Stripe delay="0.5" className="text-[#AD9ED9]">
                Himanshu
              </Stripe>
            </div>
          </div>
          <Reveal className="mt-4 md:mt-8 md:text-xl">
            A full stack developer with a side of AI enthusiasm.I relish in
            building robust web applications from front-end to back-end. Explore
            my work and join me on this exciting journey where technology
            evolves.
          </Reveal>
          <Reveal className="mt-5 md:mt-10  flex w-fit ">
            <a
              href="https://drive.google.com/file/d/1ReknZP1Srpr_4MDpGwK983wdHv2nl6qh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#AD9ED9] hover:bg-inherit border-2 duration-300 border-[#AD9ED9]  font-semibold md:text-lg text-white dark:text-gray-700 hover:text-[#AD9ED9] dark:hover:text-[#AD9ED9] px-3 py-1 md:px-8 md:py-3 cursor-pointer"
            >
              View Resume
            </a>
          </Reveal>
        </div>
        {/* <Reveal> */}
        <div className="h-full w-1/2 md:w-1/4 flex items-center mt-4 md:mt-0">
          <motion.div
            className="bg-no-repeat h-full flex bg-center bg-contain object-contain w-full relative items-center "
            style={{ backgroundImage: `url(${fluid})` }}
          >
            <motion.img
              style={{ y: yimg }}
              src={profile}
              alt="Inner"
              className=" relative object-contain h-inherit"
            />
          </motion.div>
        </div>
        {/* </Reveal> */}
      </motion.div>
      <div className="h-[100%]"></div>
      <div
        id="mydiv"
        className="bg-white z-10 absolute dark:bg-gray-800 dark:text-white w-full flex justify-center flex-col"
      >
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
