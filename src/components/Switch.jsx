import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
export default function Switch() {
  const [dark, setDark] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  console.log(dark);
  const handleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDark(!dark);
  };

  return (
    <div
      onClick={handleTheme}
      className={`flex-start flex h-[45px] w-[85px] rounded-[50px] bg-white p-[5px] shadow-inner border-2 border-gray-300 dark:border-gray-600 items-center hover:cursor-pointer dark:bg-gray-500 ${
        !dark && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-gray-700"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {!dark ? (
            <RiSunFill className="h-5 w-5 text-orange-300" />
          ) : (
            <RiMoonClearFill className="h-5 w-5 text-blue-300" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
