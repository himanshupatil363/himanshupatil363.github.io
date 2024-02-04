import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { url } from "../config";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    toast.loading("Sending..", {
      id: "toast",
    });
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isEmailValid = emailPattern.test(email);

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      if (!isEmailValid) {
        toast.error("Invalid Email", {
          duration: 2000,
          id: "toast",
        });
      } else {
        axios
          .post(`${url}/api/send-message`, {
            name: name,
            email: email,
            message: message,
          })
          .then((res) => {
            if (res.data.success) {
              toast.success("Message sent successfully", {
                duration: 2000,
                id: "toast",
              });
              setName("");
              setEmail("");
              setMessage("");
            } else {
              toast.error("Failed to send", {
                duration: 2000,
                id: "toast",
              });
            }
          })
          .catch((err) =>
            toast.error("Failed to send", {
              duration: 2000,
              id: "toast",
            })
          );
      }
    } else {
      toast.error("Please fill all the fields", {
        duration: 2000,
        id: "toast",
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row px-10 md:px-20 mt-40 mb-20">
      <div className="flex-1 flex flex-col">
        <div className="text-[#AD9ED9] font-semibold text-lg">CONTACT</div>
        <div className="text-3xl md:text-5xl font-semibold mt-2">
          Got a problem to solve?
        </div>
        <div className="text-gray-400 mt-3">
          Get your space suit ready and tell me your ideas to develop your dream
          website.
        </div>
      </div>
      <div className="flex-1 flex flex-col ">
        <div className="flex flex-col">
          <div>NAME</div>
          <input
            className="px-3 py-2 outline-none mt-1 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="flex flex-col mt-4">
          <div>EMAIL</div>
          <input
            className="px-3 py-2 outline-none mt-1 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
        </div>
        <div className="flex flex-col mt-4">
          <div>MESSAGE</div>
          <textarea
            className="px-3 py-2 outline-none mt-1 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            rows="6"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#AD9ED9] hover:bg-inherit border-2 mt-4 duration-300 border-[#AD9ED9]  font-semibold text-lg text-white dark:text-gray-700 hover:text-[#AD9ED9] dark:hover:text-[#AD9ED9]  px-7 py-3 cursor-pointer"
          >
            Hit Me Up &#x1F680;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
