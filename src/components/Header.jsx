import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logo.svg";
import Switch from "./Switch";
const Header = ({ y, scrolledToDiv }) => {
  // const y = useTransform(scrollY, (value) => value * speed);
  return (
    <motion.div
      className={`flex px-10 md:px-28 text-black  dark:text-white border-b-0.5 py-4 transition-colors duration-500  ${
        scrolledToDiv
          ? `border-neutrals-600 bg-neutrals-900/90 backdrop-blur-[7px] backdrop-brightness-[90%] dark:backdrop-brightness-[50%] supports-[backdrop-filter]:bg-neutrals-900/50`
          : `border-transparent bg-transparent`
      }`}
    >
      <div className=" h-10 w-10">
        <img src={logo} alt="" />
      </div>

      <div className="flex justify-end w-full">
        <Switch />
      </div>
    </motion.div>
  );
};

export default Header;
