import React from "react";
import logo from "../assets/logo.svg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";
const Footer = () => {
  return (
    <div className=" flex flex-col items-center bg-[#F5F0EB] dark:bg-[#374151]">
      <img className="h-10 my-8" src={logo} alt="" />
      <hr class="h-[1px] w-full border-0 bg-gradient-to-r from-transparent via-gray-300  dark:via-gray-500 to-transparent" />
      <div className="flex w-full p-10 justify-center">
        <a
          href="https://github.com/himanshupatil363"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 mx-2"
        >
          <img src={github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-n-patil/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 mx-2"
        >
          <img src={linkedin} alt="" />
        </a>
        <a href="mailto:patilhnofficial@gmail.com" className="h-8 w-8 mx-2">
          <img src={email} alt="" />
        </a>
        <a
          href="https://discordapp.com/users/455619353862209536"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 mx-2"
        >
          <img src={discord} alt="" />
        </a>
        <a
          href="https://www.instagram.com/himanshu._patil"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 mx-2"
        >
          <img src={instagram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
