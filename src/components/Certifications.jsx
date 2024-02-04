import React from "react";
import microsoft from "../assets/microsoft.png";
import meta from "../assets/meta.png";
import google from "../assets/google.png";
import databricks from "../assets/databricks.png";
const Certifications = () => {
  return (
    <div className="mx-10 md:mx-72 text-center md:text-start">
      <div className="flex items-center flex-col mt-40">
        <div className="text-[#AD9ED9] font-semibold text-lg">
          Certifications
        </div>
        <div className="text-3xl md:text-5xl font-semibold mt-2">Expanding My Skillset</div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mt-32">
        <div className="h-20 w-20 mb-5 md:mb-0 md:h-40 md:w-40">
          <img
            className="object-contain h-full w-full"
            src={microsoft}
            alt=""
          />
        </div>
        <div className="w-4/5">
          <div className="text-2xl font-semibold">
            Microsoft Azure AI Fundamentals - AI-900
          </div>
          <div className="mt-3">
            I completed the "Introduction to AI and Microsoft Azure" course,
            equipping me with essential AI concepts and demonstrating how
            Microsoft Azure can be leveraged for AI solutions. This knowledge is
            invaluable in today's tech-driven world. This blended course
            provided hands-on experience and enriched my skill set, making me a
            more well-rounded technologist.
          </div>
          <div className="flex justify-between mt-2">
            <a
              href="https://learn.microsoft.com/api/credentials/share/en-in/HimanshuPatil-2350/3BA0D7BC93C3B670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AD9ED9] cursor-pointer"
            >
              View credentials
            </a>
            <div className="text-sm text-gray-500">July 2023</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between mt-32">
        <div className="w-4/5">
          <div className="text-2xl font-semibold">
            Meta certified Advanced React
          </div>
          <div className="mt-3">
            This course dives deep into advanced React concepts and features,
            equipping you with the skills needed to proficiently work with
            React. You'll explore JSX, component composition techniques, and
            effective testing strategies. Additionally, you'll master state
            management, API data fetching, and custom hook creation, making you
            a more capable React developer. By the end of the course, you'll be
            well-prepared to excel in web development projects with React at the
            core.
          </div>
          <div className="flex justify-between mt-2">
            <a
              href="https://coursera.org/share/ce45d43b37c11194a89d4a565fff1b79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AD9ED9] cursor-pointer"
            >
              View credentials
            </a>
            <div className="text-sm text-gray-500">July 2023</div>
          </div>
        </div>
        <div className="h-20 w-20 mb-5 md:mb-0 md:h-40 md:w-40">
          <img className=" object-contain h-full w-full" src={meta} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mt-32">
        <div className="h-20 w-20 mb-5 md:mb-0 md:h-40 md:w-40">
          <img className=" object-contain h-full w-full" src={google} alt="" />
        </div>
        <div className="w-4/5">
          <div className="text-2xl font-semibold">
            Google Generative AI Fundamentals
          </div>
          <div className="mt-3">
            This is an introductory level microlearning course aimed at
            explaining what Generative AI is, how it is used, and how it differs
            from traditional machine learning methods. It also covers Google
            Tools to help you develop your own Gen AI apps.
          </div>
          <div className="flex justify-between mt-2">
            <a
              href="https://www.cloudskillsboost.google/public_profiles/6165f4d7-7ebb-4a27-b879-253d37bf8cbc/badges/4375068?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AD9ED9] cursor-pointer"
            >
              View credentials
            </a>
            <div className="text-sm text-gray-500">July 2023</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between mt-32">
        <div className="w-4/5">
          <div className="text-2xl font-semibold">
            Databricks Generative AI Fundamentals
          </div>
          <div className="mt-3">
            Generative AI, like ChatGPT and Dolly, is transforming technology,
            enabling content creation, code generation, and customer service
            enhancement. Organizations leveraging this technology will gain a
            competitive advantage. Explore generative AI in a free on-demand
            training course covering applications, success strategies, and risk
            assessment.
          </div>
          <div className="flex justify-between mt-2">
            <a
              href="https://credentials.databricks.com/693eeda3-fd22-4909-86b9-d177c2b35a93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AD9ED9] cursor-pointer"
            >
              View credentials
            </a>
            <div className="text-sm text-gray-500">July 2023</div>
          </div>
        </div>
        <div className="h-20 w-20 mb-5 md:mb-0 md:h-40 md:w-40">
          <img
            className="object-contain h-full w-full"
            src={databricks}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
